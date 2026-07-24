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
- **Port** : 3000

# Architecture

```
┌─────────────────────────────────────────────┐
│  HÔTE (raspberrypi)                         │
│                                             │
│  ┌─────────────────────────┐   ┌─────────┐ │
│  │  Container forgejo      │   │ Postgres│ │
│  │  ┌───────────────────┐  │   │ :5432   │ │
│  │  │ Forgejo            │  │   └─────────┘ │
│  │  │ :3000              │  │               │
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
    -v /var/lib/forgejo/custom-s6-override/openssh/down:/etc/s6/openssh/down:Z \
    -e USER_UID=115 \
    -e USER_GID=989 \
    -e FORGEJO__server__DISABLE_SSH=true \
    -e FORGEJO__server__START_SSH_SERVER=false \
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

## 2. Config Forgejo — `/var/lib/forgejo/gitea/conf/app.ini`

Générée par le formulaire d'installation de Forgejo. Sections clés :
- `[database]` : PostgreSQL, schema `forgejo`
- `[server]` : `DOMAIN = 192.168.0.80`, `ROOT_URL = http://192.168.0.80:3000/`
- `[security]` : `INSTALL_LOCK = true`
- `[service]` : `DISABLE_REGISTRATION = true`
- `[openid]` : désactivé
- `[cron.update_checker]` : activé

## 3. Désactivation SSH — `/var/lib/forgejo/custom-s6-override/openssh/down`

Contient `disabled` pour empêcher le superviseur s6 du container de lancer sshd (conflit avec le port 22 de l'hôte).

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

# PostgreSQL
sudo -u postgres psql -d forgejo     # Console DB
```

## Accès

- **LAN** : `http://192.168.0.80:3000`
- **Tailscale** : `http://bastion:3000`
