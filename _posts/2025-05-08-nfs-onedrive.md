---
title: "Linux Onedrive \U0001F6A7"
published: true
tags: nfs nas in-progress
---
>  OneDrive-style experience ?

## Seafile 🚧
- have a seafile server
	- pro is free for 3 users and can use a PostgresDB
- add SeaDrive - a fuse filesystem

### [Deploy Seafile with Podman](https://www.gallus-domesticus.com/blog/seafile-podman-rhel/)

On the server side, Seafile stores the files in the libraries in an internal format. Seafile has its own representation of directories and files (similar to Git)

[![arch](https://manual.seafile.com/latest/images/seafile-12.0-docker-structure.png)](https://manual.seafile.com/latest/setup/overview/)

## NFS onedrive - Failed
From raffinement with [ChatGPT](https://chatgpt.com/share/681d9567-4e7c-800d-94c4-1915dfa6082c) there is no equivalent solution:
- some don't support NFS
- some don't support offline
- some don't garantie proper sync when writing offline.

see also
- [Rclone](https://rclone.org/#what) - syncs your files to cloud storage
