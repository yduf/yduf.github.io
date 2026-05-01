---
title: "Self Hosted Onedrive 🚧"
published: true
tags: nfs nas in-progress dream project
toc: true
---
>  OneDrive-style experience ?

# _Project_ 💭 

- implement something like copy parti
- and a fuse filesytem to obtain onedrive / syncthing caching experience.

## Notes on implementations constraint

- offload mechanism cannot be supported by a filesystem directly (kind of caching)
- if allowing multiple client to connect:
	- a merge / conflict strategy [must be handled ](https://chatgpt.com/share/689a068f-680c-800d-93a5-320b2c7d21e7)

# [Rclone + MinIO ⮺](https://chatgpt.com/share/69f3b560-8588-83eb-beef-0cf2496a12b3) 🚧  💭 

- use [Rclone](https://rclone.org/#what) as sync mechanism from client to a [S3 compatible storage](https://chatgpt.com/share/69f3b7e1-9b84-83eb-be08-1441c3b1e6b4)
- use [MinIO](https://blog.stephane-robert.info/docs/services/stockage/minio/#quest-ce-que-minio) - to self host a s3 compatible storage
  - data store by [Minio are not directly accessible](https://chatgpt.com/share/69f3b85a-68b8-83eb-9e0b-df5254746695) - but are sharded and have good data properties.
  - You can recover data without MinIO if needed (with effort)

**Notes**:
- not to be confused with [rclone serve s3](https://rclone.org/commands/rclone_serve_s3/) which make rclone emulate a S3 backend and is still exprimental


# [CopyParty ⮺](https://news.ycombinator.com/item?id=44711519)

> turn almost any device into a file server with resumable uploads/downloads using any web browser - [github](turn almost any device into a file server with resumable uploads/downloads using any web browser)

Good performance / implemented in python

# Seafile

Seafile exchange block with client, **but they are not materialize as native filesystem on server side (and are opaque to the OS)**.

- have a seafile server
	- pro is free for 3 users and can use a PostgresDB
- add SeaDrive - a fuse filesystem

## [Deploy Seafile with Podman ⮺](https://www.gallus-domesticus.com/blog/seafile-podman-rhel/)

On the server side, Seafile stores the files in the libraries in an internal format. Seafile has its own representation of directories and files (similar to Git)

[![arch](https://manual.seafile.com/latest/images/seafile-12.0-docker-structure.png)](https://manual.seafile.com/latest/setup/overview/)

Alternative
- [OneDrive clients for Linux](https://linuxbsdos.com/2025/03/22/3-onedrive-clients-for-linux/)

# NFS onedrive - Failed ⛑
From raffinement with [ChatGPT](https://chatgpt.com/share/681d9567-4e7c-800d-94c4-1915dfa6082c) there is no equivalent solution:
- some don't support NFS
- some don't support offline
- some don't garantie proper sync when writing offline.

