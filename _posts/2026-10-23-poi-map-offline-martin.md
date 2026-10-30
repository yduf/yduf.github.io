---
title: Carte POI hors-ligne (iA)
tags: map martin iA-generated
toc: true
---
> Martin + MapLibre + FastAPI sur Raspberry Pi

<div class="encart blue" markdown="1">
Objectif : une carte **entièrement hors-ligne** (fond vectoriel, imagerie satellite,
orthophoto IGN) et un éditeur de points d'intérêt (recherche, création, modification,
catégories), accessible uniquement depuis mon réseau Tailscale. Aucun appel à un service
de tuiles externe à l'exécution.
</div>

# Stack

- **OS** : Debian 12 Bookworm (aarch64), Raspberry Pi 5 — 8 Go RAM, SSD 235 Go
- **Martin** : v1.16.1 (épinglé) — serveur de tuiles, container Podman
- **MapLibre GL JS** : v5 + thème Protomaps (`protomaps-themes-base` 4.5), en ESM sans bundler
- **FastAPI** : API POI + frontend statique + proxy `/tiles`, container Podman
- **PostgreSQL 15.18 + PostGIS 3.3.2** : réutilise le cluster existant (partagé avec Forgejo/n8n)
- **Données** : PMTiles uniquement (vectoriel Protomaps, raster Sentinel-2 et BD ORTHO IGN)
- **Réseau** : `Network=host`, Martin sur `127.0.0.1:3001`, app sur `0.0.0.0:8090`

Pourquoi ces briques ? Martin sert n'importe quel type de tuiles depuis un PMTiles
(vectoriel **ou** raster), donc une seule brique couvre le fond de carte et l'imagerie :
pas de GDAL, pas de TiTiler, pas de serveur raster séparé. MapLibre affiche et gère les
couches. FastAPI fait le CRUD et le proxy, ce qui donne **une seule origine** côté navigateur.

# Architecture

```
browser ──http://192.168.0.80:8090──┐
                                    ▼
                        FastAPI (:8090, Network=host)
                        ├── /                 app MapLibre (statique)
                        ├── /api/*            POI (CRUD, recherche)
                        ├── /fonts/* /sprites/*  glyphes PBF + sprites
                        └── /tiles/*          proxy ──► Martin 127.0.0.1:3001
                                                        ├── france-z14.pmtiles        (vectoriel)
                                                        ├── bdortho-isere-z17.pmtiles (raster)
                                                        ├── bdortho-grenoble-z18.pmtiles
                                                        └── s2cloudless-fr.pmtiles    (raster)
                        FastAPI ──► PostgreSQL 15 + PostGIS (db poimap)
```

Un seul port à publier/forwarder : Martin reste sur la boucle locale et n'est joignable
qu'à travers le proxy de l'application.

# Données

| Couche | Source | Étendue | Tuiles | Taille |
|---|---|---|---|---|
| Fond vectoriel | [Protomaps](https://protomaps.com/) daily build | France métro. z0–14 | 472 333 | 4,4 Go |
| Satellite | Sentinel-2 cloudless (EOX) | France z0–13 | 150 661 | ~2,3 Go |
| Orthophoto | IGN BD ORTHO (Géoplateforme) | Isère z10–17 (polygone) | 228 746 | ~3,4 Go |
| Orthophoto | IGN BD ORTHO | Grenoble + Grésivaudan z14–18 | 84 873 | ~1,3 Go |

Extraction du fond de carte (un seul fichier, requêtes HTTP Range) :

```bash
pmtiles extract "https://build.protomaps.com/$(date -u -d yesterday +%Y%m%d).pmtiles" \
  france-z14.pmtiles --bbox=-5.2,41.2,9.7,51.2 --maxzoom=14 --download-threads=4
```

Pour l'imagerie, un petit script récupère les tuiles XYZ d'un WMTS et les empile dans un
MBTiles, converti ensuite en PMTiles :

```bash
python3 fetch_tiles.py --url "$IGN_WMTS_TEMPLATE" \
  --region /srv/map/regions/isere-38.geojson \
  --minzoom 10 --maxzoom 17 --rate 10 --resume \
  --out _bdortho-isere-z17.mbtiles
pmtiles convert _bdortho-isere-z17.mbtiles bdortho-isere-z17.pmtiles
```

Les compteurs du tableau sont cumulés sur tous les zooms de la couche.
Le filtre `--region` (polygone du département, test « scanline » par ligne de tuiles)
réduit le volume de moitié par rapport à la bbox : 228 746 tuiles au lieu de 485 424.
Débit limité à 10 req/s (fair use IGN/EOX), reprise possible avec `--resume`.
Martin surveille le répertoire et **recharge à chaud** : déposer le fichier suffit.

# Base de données

Deux tables suffisent. Le texte est indexé en français, sans accents, avec en plus une
similarité trigramme pour la recherche approximative :

```sql
CREATE TEXT SEARCH CONFIGURATION fr_unaccent (COPY = french);
ALTER TEXT SEARCH CONFIGURATION fr_unaccent
  ALTER MAPPING FOR hword, hword_part, word WITH unaccent, french_stem;

CREATE TABLE pois (
  id          bigserial PRIMARY KEY,
  name        text NOT NULL,
  category_id int REFERENCES categories(id) ON DELETE SET NULL,
  description text NOT NULL DEFAULT '',
  address     text NOT NULL DEFAULT '',
  tags        jsonb NOT NULL DEFAULT '{}'::jsonb,
  geom        geometry(Point, 4326) NOT NULL,
  search      tsvector GENERATED ALWAYS AS (
                to_tsvector('fr_unaccent',
                  coalesce(name,'') || ' ' || coalesce(address,'') || ' ' || coalesce(description,''))) STORED,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX pois_geom_gix   ON pois USING gist (geom);
CREATE INDEX pois_search_gin ON pois USING gin (search);
CREATE INDEX pois_name_trgm  ON pois USING gin (name gin_trgm_ops);
```

Bilan : `ecole` trouve « École », `boulang` trouve « Boulangerie », et un tri par
distance utilise l'opérateur KNN `<->` de PostGIS.

# Martin, PostGIS et le cluster partagé

La documentation de Martin indique, pour la branche v2 :

> *If using Martin with PostgreSQL database, you must install PostGIS with at least v3.5+ on PostgreSQL v12+.*

La condition compte autant que le chiffre : **« if using Martin with PostgreSQL database »**.
Ici Martin ne reçoit aucune chaîne de connexion — l'unité systemd ne lui passe que le
répertoire de tuiles :

```bash
ghcr.io/maplibre/martin:1.16.1 /data \
  --listen-addresses 127.0.0.1:3001 --route-prefix /tiles --webui disable
```

Donc la contrainte ne s'applique pas : la v2 tournerait très bien avec le PostGIS 3.3.2 de
Bookworm. Le vrai motif de rester en **1.16.1** est que la v2 est encore en **bêta**
(`v2.0.0-beta.4`), pas PostGIS.

La contrainte n'apparaîtrait que si Martin générait lui-même des tuiles depuis la base
(source `postgis`, `ST_AsMVT` sur la table `pois`). Ce n'est pas l'architecture retenue : les
POI passent par FastAPI → GeoJSON → MapLibre.

## Pourquoi ne pas monter PostGIS en 3.5 pour autant

« Cluster » n'est pas un cluster de machines : c'est le terme PostgreSQL pour **un serveur
(un postmaster) desservant un répertoire de données**. Sur cette machine, il y en a un seul :

```bash
$ pg_lsclusters
Ver Cluster Port Status Owner    Data directory
15  main    5432 online postgres /var/lib/postgresql/15/main
```

…et il héberge plusieurs bases : `forgejo`, `n8n`, `poimap`, `poimap_test`. Elles partagent le
processus, la configuration (`shared_buffers`, `max_connections`) et le redémarrage. Modifier
le serveur, c'est donc modifier quelque chose pour Forgejo et n8n aussi — même si aucun des
deux ne touche aux POI.

| Étape | Conséquence |
|---|---|
| Ajouter le dépôt PGDG | Bookworm ne fournit que 3.3.2 ; la 3.5 vient de `apt.postgresql.org` |
| Remplacer `postgresql-15-postgis-3` | Extension = bibliothèque C (`postgis-3.so`) liée à `libgeos`, `libproj`, `libgdal32`, `libsfcgal1` : PGDG embarque ses propres versions de ces bibliothèques, qui peuvent donc en remplacer des copies **système** |
| `ALTER EXTENSION postgis UPDATE` dans chaque base | Ici `poimap` et `poimap_test` seulement ; sans cette étape, erreurs de version entre le `.so` et le catalogue |
| Redémarrer le service | Coupure pour tout ce qui écoute sur 5432 — Forgejo et n8n compris |
| Revenir en arrière | Pas un simple downgrade : l'extension est mise à jour en place → dump/restore par base |

D'où la règle : sur une instance partagée, on ne monte pas une extension pour faire plaisir à
un serveur de tuiles qui n'en a pas besoin. Si un jour Martin doit servir les POI en tuiles
vectorielles, l'ordre de préférence est : rester en 1.16.1 (compatible 3.3) → et seulement si
la v2 devient indispensable, planifier la montée PGDG comme une opération de maintenance à
part, avec sauvegarde préalable des bases.

Côté requêtes, rien ne dépend de la 3.5 : `ST_MakeEnvelope`, `ST_X`/`ST_Y`, l'opérateur de
distance `<->` et `tsvector` existent depuis longtemps.


# API

| Méthode | Chemin | Rôle |
|---|---|---|
| GET | `/health` | ping base |
| GET | `/api/map-config` | sources de tuiles découvertes via le catalogue Martin |
| GET | `/api/categories` | types de POI + compteurs |
| POST / PUT / DELETE | `/api/categories[/{id}]` | gestion des types (jeton requis, `?reassign=` pour déplacer les POI) |
| GET | `/api/pois?bbox=&q=&category=&limit=&offset=&near=&order=` | recherche |
| POST / PUT / DELETE | `/api/pois[/{id}]` | écriture, en-tête `Authorization: Bearer *** |
| GET | `/tiles/*` | proxy transparent vers Martin |

`/api/map-config` interroge le catalogue de Martin à chaque chargement de page : ajouter un
fichier `.pmtiles` dans `/srv/map/data` suffit à faire apparaître une nouvelle couche, sans
toucher au frontend.

# Frontend

MapLibre v5, thème Protomaps, ESM sans étape de build. Deux détails qui coûtent cher :

- Les **glyphes** fournis par `basemaps-assets` sont des **ranges PBF déjà rendus**
  (1 024 fichiers), pas des TTF : ils sont servis en statique (`/fonts/{fontstack}/{range}.pbf`)
  au lieu d'être générés par Martin.
- `layers(source, theme)` de `protomaps-themes-base` ne renvoie que la **géométrie**.
  Les libellés sont une passe séparée : `layers(source, theme, { lang: 'fr' })`, sinon la
  carte s'affiche parfaitement… sans aucun texte.

Quand on active l'imagerie, les couches `fill`/`line` du fond vectoriel sont masquées et
seuls les `symbol` (libellés, icônes) restent : rendu « hybride » satellite + toponymes.

# Déploiement

Image construite en rootful (voir pièges), deux units systemd :

```ini
[Unit]
Description=Martin tile server (offline basemap + satellite PMTiles)
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/bin/podman run --rm --replace --name martin \
    --network host \
    -v /srv/map/data:/data:ro \
    ghcr.io/maplibre/martin:1.16.1 /data \
    --listen-addresses 127.0.0.1:3001 \
    --route-prefix /tiles \
    --webui disable
ExecStop=/usr/bin/podman stop --ignore -t 10 martin

[Install]
WantedBy=multi-user.target
```

`--route-prefix /tiles` est la clé : Martin génère ses URLs (TileJSON, tuiles) avec le
préfixe, donc le proxy FastAPI peut transmettre le chemin tel quel.

L'application tourne avec `--env-file /etc/poi-map.env` (URL Postgres + jeton d'écriture,
fichier en `640 root:yves`).

# Accès

- **LAN** : `http://192.168.0.80:8090`
- **Tunnel SSH** : `ssh -N -L 8090:127.0.0.1:8090 yves@<pi>` puis `http://localhost:8090`
- **Martin** : jamais exposé (`127.0.0.1:3001`)

Lecture ouverte sur le LAN, écriture protégée par un jeton unique — pas de gestion de
comptes, choix assumé pour un usage personnel.

# Installation

Deux scripts idempotents, séparés pour que la partie root soit relue avant exécution :

```bash
# 1. privilèges : PostGIS, rôle + base poimap, arborescence /srv/map, pmtiles, glyphes
sudo bash 00-prerequisites.sh --dry-run     # puis sans --dry-run
# 2. services : base de test, build de l'image, units systemd, vérifications
sudo bash 10-services.sh
# 3. données (sans root, le répertoire appartient à l'utilisateur)
bash scripts/fetch-data.sh all
```

# Pièges rencontrés

- **Version de Martin** : rester en 1.16.1 (la v2 est encore en bêta). Sa contrainte
  « PostGIS ≥ 3.5 » ne concerne que les sources PostGIS — détail dans la section
  « Martin, PostGIS et le cluster partagé ».
- **`pmtiles convert` et le raster** : sans `format=jpg` (et non `jpeg`) *et* un
  `compression=none` explicite dans les métadonnées MBTiles, Martin rejette l'archive :
  `InvalidMetadata("Format Unknown and compression Unknown")`.
- **MapLibre charge les tuiles dans un Web Worker** : les URLs **relatives** y échouent
  (`Failed to construct 'Request'`). Il faut les résoudre en absolu — mais surtout **pas
  avec `new URL()`**, qui encode `{z}`/`{range}` en `%7B…%7D` et casse le template.
  Concaténation avec `location.origin`, point.
- **Rasters invisibles** : placés au-dessus du fond mais sous les polygones vectoriels, ils
  sont recouverts. Masquer les `fill`/`line` du fond quand l'imagerie est active.
- **`style.json` en cache navigateur** : un style régénéré n'était pas pris en compte.
  `fetch('/style.json', { cache: 'no-cache' })` (revalidation ETag, coût quasi nul).
- **Podman rootless cassé sur cette machine** (`/etc/subuid` sans entrée pour l'utilisateur,
  puis `lchown /etc/gshadow: invalid argument`). Build en rootful, comme Forgejo.
- **`argparse` et les bbox négatives** : `--bbox -5.2,41.2,9.7,51.2` échoue
  (`expected one argument`), la forme `--bbox=…` fonctionne.
- **`umask 077` qui fuit** : les secrets créés en mode privé ont laissé les répertoires de
  glyphes en `700 root`, illisibles par l'utilisateur — `chmod -R a+rX` après copie.
- **`psql` via `runuser -u postgres`** hérite du `cwd` : depuis `/home/yves` (700) il échoue
  avec « could not change directory ». Lancer avec `cd /`.
- **Vérification trop pressée** : Martin met ~25 s à démarrer à froid (attach du container) ;
  un `sleep 6` donne un faux négatif. Polling jusqu'à 120 s.
- **Épingler les versions** : `ghcr.io/maplibre/martin:1.16.1`, jamais `latest`.

# Points d'attention

- **Licences** : © OpenStreetMap / © Protomaps pour le fond, © IGN BD ORTHO (Licence Ouverte),
  Sentinel-2 cloudless © EOX en **CC BY-NC-SA** (attribution obligatoire, pas d'usage
  commercial). Toutes affichées dans le pied de page de l'app.
- **Plafonds de zoom** : fond vectoriel à z14, ortho z17 sur l'Isère et z18 seulement sur
  Grenoble/Grésivaudan ; au-delà les tuiles sont sur-zoomées (flou, jamais de trou).
- **Sauvegardes** : les PMTiles sont reproductibles (scripts) — seuls les POI comptent,
  `pg_dump` quotidien via `poi-backup.timer`.
- **Empreinte** : ~10 Go de tuiles, ~450 Mo de RAM pour Martin + API, CPU au repos quasi nul.

# Commandes utiles

```bash
sudo systemctl status martin poi-api
sudo journalctl -u martin -u poi-api -f
curl -s http://127.0.0.1:3001/tiles/catalog        # sources disponibles
curl -s http://127.0.0.1:8090/api/map-config       # ce que voit le navigateur
pmtiles show /srv/map/data/france-z14.pmtiles      # zoom, bounds, nb de tuiles

# Mise à jour du fond de carte (mensuelle, sans coupure)
pmtiles extract <nouveau build> /srv/map/data/france-z14.pmtiles.new --bbox=… --maxzoom=14
mv /srv/map/data/france-z14.pmtiles.new /srv/map/data/france-z14.pmtiles
```

# Voir aussi

- [PMTiles & Protomaps]({% post_url 2023-10-25-geomap-tile %})
- [Tailscale]({% post_url 2026-07-02-vpn-tailscale %})
- [Forgejo]({% post_url 2026-07-24-forgejo-setup %}) — même conventions Podman/systemd/PostgreSQL
