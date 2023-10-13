---
published: true
title: Cockpit
tags: linux-system docker
---
> a web-based graphical interface for servers - [local](http://localhost:9090) / [Home](https://cockpit-project.org/)

- [sophie-iMac](https://sophie-imac:9090/)

### [Install](https://www.smarthomebeginner.com/docker-to-podman-migration-guide/#Cockpit)

Cockpit is not intended to be run as a container, but instead directly on the host. It can manage more than just Podman containers, but those are our focus today. Install directly on the host with:

`sudo apt install cockpit cockpit-podman`
