---
title: Forgejo — Installation sur Raspberry Pi (Podman + PostgreSQL)
tags: forgejo hermes
toc: true
excerpt_separator: ""
---

# Stack

- **OS** : Debian 12 Bookworm (aarch64)
- **Forgejo** : v16.0.1 (stable)
- **Container** : Podman 4.3.1, managé par systemd (`podman generate systemd`)
- **Base de données** : PostgreSQL 15 (installation système via apt)
- **Réseau** : `Network=host` (pas de reverse proxy, pas de SSL, LAN uniquement)
- **SSH** : serveur intégré Forgejo sur port 2222 (`START_SSH_SERVER=true`)

# Architecture

```
┌─────────────────────────────────────────────┐
│  HÔTE (raspberrypi)                         │
│                                             │
│  ┌─────────────────────────┐   ┌─────────┐ │
│  │  Container forgejo      │   │ Postgres│ │
│  │  ┌───────────────────┐  │   │ :5432   │ │
│  │  │ Forgejo            │  │   └─────────┘ │
│  │  │ :3000 (HTTP)       │  │               │
│  │  │ :2222 (SSH)        │  │               │
│  │  │                    │  │               │
│  │  │ /data → /var/lib/  │  │               │
│  │  │       forgejo      │  │               │
│  │  └───────────────────┘  │               │
│  └─────────────────────────┘               │
│       Network=host (127.0.0.1:5432)         │
└─────────────────────────────────────────────┘
```

# Fichiers de configuration

## 1. Service systemd — `/etc/systemd/system/forgejo.service`

```ini
[Unit]
Description=Forgejo container (self-hosted Git service)
After=network-online.target postgresql.service
Wants=network-online.target
RequiresMountsFor=%t/containers

[Service]
Restart=on-failure
ExecStart=/usr/bin/podman run \
    --rm --replace -d --name forgejo \
    --network host \
    -v /var/lib/forgejo:/data:Z \
    -e USER_UID=115 \
    -e USER_GID=989 \
    -e FORGEJO__database__DB_TYPE=postgres \
    -e FORGEJO__database__HOST=127.0.0.1:5432 \
    -e FORGEJO__database__NAME=forgejo \
    -e FORGEJO__database__USER=forgejo \
    -e FORGEJO__database__PASSWD=<password> \
    -e FORGEJO__database__SCHEMA=forgejo \
    codeberg.org/forgejo/forgejo:16.0.1
ExecStop=/usr/bin/podman stop --ignore -t 10 --cidfile=%t/%n.ctr-id
ExecStopPost=/usr/bin/podman rm -f --ignore -t 10 --cidfile=%t/%n.ctr-id
Type=notify
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

> **Note** : plus de `-v` pour le s6 down SSH ni de `-e DISABLE_SSH` / `START_SSH_SERVER` — Forgejo utilise son serveur SSH intégré.

## 2. Config Forgejo — `/var/lib/forgejo/gitea/conf/app.ini`

Générée par le formulaire d'installation de Forgejo. Sections clés :
- `[database]` : PostgreSQL, schema `forgejo`
- `[server]` : `DOMAIN = 192.168.0.80`, `ROOT_URL = http://192.168.0.80:3000/`
- `[security]` : `INSTALL_LOCK = true`
- `[service]` : `DISABLE_REGISTRATION = true`
- `[openid]` : désactivé
- `[cron.update_checker]` : activé

## 3. SSH — serveur intégré Forgejo sur port 2222

Le sshd système du container est désactivé (conflit avec le port 22 de l'hôte en `--network host`). À la place, Forgejo utilise son **serveur SSH intégré** (option `START_SSH_SERVER = true`) sur le port 2222 :

```ini
# Dans app.ini — section [server]
DISABLE_SSH = false
START_SSH_SERVER = true
SSH_PORT = 2222        # Port dans les URLs de clone
SSH_LISTEN_PORT = 2222 # Port d'écoute dans le container
```

Pour utiliser SSH, ajoutez dans `~/.ssh/config` côté client :

```ssh-config
Host forgejo
    Hostname 192.168.0.80
    Port 2222
    User git
```

Puis clonez simplement :
```bash
git clone git@forgejo:user/repo.git
```

> **Pourquoi 2222 ?** Le container est en `--network host`, donc le port 22 de l'hôte est déjà utilisé par le sshd système. Forgejo écoute donc sur 2222. Un `~/.ssh/config` rend le port transparent.

# PostgreSQL

```sql
CREATE ROLE forgejo WITH LOGIN PASSWORD '<password>';
CREATE DATABASE forgejo OWNER forgejo;
CREATE SCHEMA forgejo AUTHORIZATION forgejo;
```

# Commandes utiles

```bash
# Gestion du service
sudo systemctl status forgejo         # Statut
sudo systemctl restart forgejo        # Redémarrage
sudo systemctl stop forgejo           # Arrêt
sudo journalctl -u forgejo -f         # Logs en direct

# Inspecter le container
sudo podman logs forgejo              # Logs Forgejo
sudo podman exec forgejo ls /data     # Explorer le container

# Vérifier SSH
sudo podman logs forgejo 2>&1 | grep "SSH server"
# → "SSH server started on :2222"

# PostgreSQL
sudo -u postgres psql -d forgejo     # Console DB
```

# Accès

- **HTTP (LAN)** : `http://192.168.0.80:3000`
- **SSH (LAN)** : `git@192.168.0.80:2222` (ou via `~/.ssh/config` : `git@forgejo`)
- **Tailscale** : `http://bastion:3000`
