---
title: Kiwix — Offline Wikipedia on a NAS (iA)
tags: wikipedia kiwix zfs systemd nas  iA-generated
toc: true
excerpt_separator: ""
---
<link rel="shortcut icon" href="https://kiwix.org/favicon.ico">

# Stack

- **OS** : Ubuntu 24.04.4 LTS (x86_64), Intel Celeron J3455, 15 GB RAM
- **Kiwix** : kiwix-tools 3.8.2 (musl static-pie, libkiwix 14.2.0) — no container, no root
- **Content** : `wikipedia_fr_all_maxi` (French, with images), 55.4 GB
- **Storage** : dedicated ZFS dataset `storage_pool/kiwix` → `/mnt/kiwix`
- **Service** : `systemd --user` + `Linger=yes` (starts at boot without login)
- **Network** : port 8099, LAN only (`ufw` scoped to `192.168.0.0/24`), no TLS, no reverse proxy
- **Updates** : weekly `systemd` timer, `aria2c` capped at 2 M, sha256 verified, zero downtime

# Architecture

```
┌──────────────────────────────────────────────────────────┐
│  HOST (tronaut)  192.168.0.125                           │
│                                                          │
│  ┌────────────────────────────┐    ┌──────────────────┐  │
│  │ kiwix-serve :8099          │    │ ZFS dataset      │  │
│  │ systemd --user             │───▶│ storage_pool/    │  │
│  │ --monitorLibrary           │    │   kiwix          │  │
│  │ --nodatealiases            │    │ /mnt/kiwix       │  │
│  └─────────────▲──────────────┘    └────────▲─────────┘  │
│                │ reloads on change          │            │
│  ┌─────────────┴──────────────┐             │            │
│  │ kiwix-refresh (weekly)     │─────────────┘            │
│  │  aria2c -x8, cap 2 M       │  atomic library.xml      │
│  │  sha256 verify → swap      │  rebuild                 │
│  └─────────────┬──────────────┘                          │
└────────────────┼─────────────────────────────────────────┘
                 ▼
        download.kiwix.org/zim/wikipedia
```

<div class="encart blue" markdown="1">
## Why not a container

For Kiwix itself a container brings nothing: it is a single static binary that
serves one big immutable file. So, plain `systemd --user`:

**Note** : kiwix-serve idles at **10 MB RSS** — a container runtime would cost
more than the service itself.
</div>


## ZFS dataset

```bash
zfs create -o mountpoint=/mnt/kiwix -o compression=off -o atime=off \
           -o recordsize=1m storage_pool/kiwix
chown yves:docker /mnt/kiwix
```

> **Why `compression=off` ?** A ZIM file is already XZ/zstd-packed internally.
> Asking ZFS to compress it burns Celeron cycles for ~0 % gain.

Layout:

```
/mnt/kiwix/
├── bin/          kiwix-serve, kiwix-manage, kiwix-search (3.8.2, static)
├── zim/          wikipedia_fr_all_maxi_2026-05.zim  (55,438,794,004 B)
│   └── staging/  download + verification area
├── logs/         refresh.log, refresh-aria2.log
└── library.xml   what kiwix-serve serves
```

# Files

## 1. Service — `~/.config/systemd/user/kiwix.service`

```ini
[Unit]
Description=Kiwix offline Wikipedia server (LAN, port 8099)
After=network-online.target
Wants=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=10

[Service]
Type=simple
ExecStart=/mnt/kiwix/bin/kiwix-serve \
    --port=8099 \
    --library /mnt/kiwix/library.xml \
    --monitorLibrary \
    --nodatealiases \
    --threads=4 \
    --ipConnectionLimit=12
Restart=always
RestartSec=5
LimitNOFILE=8192

[Install]
WantedBy=default.target
```

Two flags matter:

- `--monitorLibrary` — reload `library.xml` on change, **no restart needed**.
  Updating a 55 GB ZIM becomes a zero-downtime file swap.
- `--nodatealiases` — stable URLs (`/wikipedia_fr_all_maxi/`) that survive each
  new dated build, instead of `/wikipedia_fr_all_maxi_2026-05/`.

> **Trap** : `--library=<path>` is rejected (`--library must not have an argument`).
> The path must be a separate argument, as above.

## 2. Timer — `~/.config/systemd/user/kiwix-refresh.timer`

```ini
[Unit]
Description=Weekly Kiwix ZIM refresh check

[Timer]
OnCalendar=weekly
Persistent=true
RandomizedDelaySec=2h
AccuracySec=5m

[Install]
WantedBy=timers.target
```

`Persistent=true` catches up after a power cut; the random delay keeps the
mirror from being hammered by every box at the same minute.

## 3. Refresh script — `~/bin/kiwix-refresh`

Refreshes **only ZIMs already present** — it never silently adds 130 GB of
English. Per file:

1. `flock` — one run at a time
2. scrape the mirror listing, extract the newest `_YYYY-MM` build
3. compare with the local build → `up to date`, `update available`, or `mirror older`
4. `aria2c -c -x8 -s8 -k1M --max-overall-download-limit=2M` into `zim/staging`
5. `sha256sum -c` against the mirror's `.sha256` sidecar
6. rebuild `library.xml` atomically (temp file + `mv`), excluding the old build
7. health check `/` **and** `/<zim-alias>/`
8. on success: prune old builds (`KEEP_GENERATIONS=1`)
   on failure: restore `library.xml.bak`, move the new ZIM back to staging

```bash
~/bin/kiwix-refresh --check-only     # what would happen, changes nothing
~/bin/kiwix-refresh --limit 8M       # one-off, faster cap
```

> **Trap** : `kiwix-manage LIBRARY remove` takes the ZIM **id**
> (`wikipedia_fr_all`), not the filename (`wikipedia_fr_all_maxi_2026-05`).
> The script sidesteps this by rebuilding the library from the ZIMs on disk.

# Bandwidth

Single-stream HTTPS from `download.kiwix.org` measured **~340 KB/s** here — 55 GB
would have taken 1.8 days. With `aria2c -x8 -s8` the same file came down at
**~11 MiB/s** (80 min). Always use multi-connection for ZIM files:

```bash
aria2c -c -x8 -s8 -k1M -d /mnt/kiwix/zim \
  https://download.kiwix.org/zim/wikipedia/wikipedia_fr_all_maxi_2026-05.zim
curl -sLO https://download.kiwix.org/zim/wikipedia/wikipedia_fr_all_maxi_2026-05.zim.sha256
sha256sum -c wikipedia_fr_all_maxi_2026-05.zim.sha256
```

The seed download runs uncapped; only the unattended weekly refresh is capped
at 2 M so the LAN stays usable.

# Firewall

```bash
ufw allow from 192.168.0.0/24 to any port 8099 proto tcp comment 'kiwix offline wikipedia'
```

LAN only — no reverse proxy, no TLS, no basic auth. It is a read-only copy of
Wikipedia on a private network.

# Useful commands

```bash
# Service
systemctl --user status kiwix            # status
systemctl --user restart kiwix           # restart
journalctl --user -u kiwix -f            # live logs

# Library
/mnt/kiwix/bin/kiwix-manage /mnt/kiwix/library.xml show
/mnt/kiwix/bin/kiwix-manage /mnt/kiwix/library.xml add /mnt/kiwix/zim/<file>.zim

# Refresh
~/bin/kiwix-refresh --check-only         # dry run
systemctl --user list-timers kiwix-refresh.timer
journalctl --user -u kiwix-refresh.service
tail -f /mnt/kiwix/logs/refresh.log

# Boot persistence
loginctl show-user yves | grep Linger    # Linger=yes
```

# Access

- **HTTP (LAN)** : `http://192.168.0.125:8099/`
- **Stable ZIM URL** : `http://192.168.0.125:8099/wikipedia_fr_all_maxi/`
- **Search** : built-in full-text, `/search?content=wikipedia_fr_all_maxi&pattern=…`

# Adding English later

```bash
aria2c -c -x8 -s8 -k1M -d /mnt/kiwix/zim \
  https://download.kiwix.org/zim/wikipedia/wikipedia_en_all_maxi_2026-08.zim
cd /mnt/kiwix/zim && curl -sLO \
  https://download.kiwix.org/zim/wikipedia/wikipedia_en_all_maxi_2026-08.zim.sha256
sha256sum -c wikipedia_en_all_maxi_2026-08.zim.sha256
/mnt/kiwix/bin/kiwix-manage /mnt/kiwix/library.xml add \
  /mnt/kiwix/zim/wikipedia_en_all_maxi_2026-08.zim
```

`--monitorLibrary` picks it up immediately, and the weekly timer maintains both
from then on. Budget ~127 GB and ~2 h at 11 MiB/s.

# Numbers

| | |
|---|---|
| French `maxi` ZIM | 55,438,794,004 B (51 GiB) |
| Seed download | 80 min @ 11 MiB/s (8 connections) |
| Disk used | 52 G of 2.4 T available |
| kiwix-serve RSS | ~10 MB |
| Refresh cap | 2 M (~7.5 h worst case) |
| Mirror cadence | `fr_all_maxi` : 2026-02, 2026-05 → roughly quarterly |
