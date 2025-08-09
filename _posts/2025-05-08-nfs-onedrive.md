---
title: "Linux Onedrive \U0001F6A7"
published: true
tags: nfs nas in-progress dream project
---
>  OneDrive-style experience ?

## _Project_ 💭 

- implement something like copy parti
- and a fuse filesytem to obtain onedrive / syncthing caching experience.

## [CopyParty](https://news.ycombinator.com/item?id=44711519)

> turn almost any device into a file server with resumable uploads/downloads using any web browser - [github](turn almost any device into a file server with resumable uploads/downloads using any web browser)

Good performance / implemented in python

## Seafile

Seafile exchange block with client, **but they are not materialize as native filesystem on server side (and are opaque to the OS)**.

- have a seafile server
	- pro is free for 3 users and can use a PostgresDB
- add SeaDrive - a fuse filesystem

### [Deploy Seafile with Podman](https://www.gallus-domesticus.com/blog/seafile-podman-rhel/)

On the server side, Seafile stores the files in the libraries in an internal format. Seafile has its own representation of directories and files (similar to Git)

[![arch](https://manual.seafile.com/latest/images/seafile-12.0-docker-structure.png)](https://manual.seafile.com/latest/setup/overview/)

Alternative
- [OneDrive clients for Linux](https://linuxbsdos.com/2025/03/22/3-onedrive-clients-for-linux/)

## NFS onedrive - Failed
From raffinement with [ChatGPT](https://chatgpt.com/share/681d9567-4e7c-800d-94c4-1915dfa6082c) there is no equivalent solution:
- some don't support NFS
- some don't support offline
- some don't garantie proper sync when writing offline.

see also
- [Rclone](https://rclone.org/#what) - syncs your files to cloud storage
