---
published: true
title: Containing OpenWRT
tags: network docker raspberry-pi
---
> By providing the kernel to the docker container we may provide better driver support than those avalaible in OpenWRT (ex 88x2bu wifi usb device) -  [OpenWrt in Docker](https://github.com/oofnikj/docker-openwrt) / [contain your router](https://badgateway.qc.to/contain-your-router/)

## [On Raspberry Pi](https://github.com/oofnikj/docker-openwrt/blob/master/docs/rpi.md)

### [Setup Raspian]({% post_url 2019-08-16-raspbian-x86 %}) + Docker




- It [should work on raspberry](https://forum.openwrt.org/t/running-openwrt-in-a-docker-container/56049), and allows to use module compiled for the linux kernel (which are harder to include for OpenWrt).
- [pi4 issue (solved)](https://github.com/oofnikj/docker-openwrt/issues/7)

### [Teleport the Wi-Fi](https://badgateway.qc.to/contain-your-router/)
Containers are isolated from the host in several ways. They have their own PID namespace, their own user namespace, and their own network namespace. But since containers are all running atop the host kernel, we can expose various resources from the host to the container, like network interfaces, by moving them from the primary namespace to that of the container.

Docker provides a --network=host option, where your container runs in the same network namespace as the rest of the system’s processes. But if you only want a single interface to be controlled directly by the container, you need to do some command-line voodoo.

Also, depending on your Wi-Fi drivers, this might not work at all. Some drivers support setting the network namespace while others will return an error.

### [Grafana Monitoring](https://github.com/oofnikj/docker-openwrt/blob/master/monitoring/README.md)

## Ressources
- [openwrtorg/rootfs](https://hub.docker.com/r/openwrtorg/rootfs)
