---
published: true
title: Cockpit
tags: linux-system docker
---
> a web-based graphical interface for servers - [local](http://localhost:9090) / [Home](https://cockpit-project.org/)

- [tronaut](https://tronaut:9090/)
- [sophie-iMac](https://sophie-imac:9090/)

### Operation
- [Question: Updating managed servers through centralised Cockpit
#12216](https://github.com/cockpit-project/cockpit/issues/12216) - you have to login directly on remote system

### [Install](https://www.smarthomebeginner.com/docker-to-podman-migration-guide/#Cockpit)

Cockpit is not intended to be run as a container, but instead directly on the host. It can manage more than just Podman containers, but those are our focus today. Install directly on the host with:

`sudo apt install cockpit`

see also
- [How to Install Cockpit Web Console on Ubuntu 20.04 Server](https://www.linuxtechi.com/how-to-install-cockpit-on-ubuntu-20-04/)

