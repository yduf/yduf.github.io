---
published: true
tags: raspberry-pi network security wifi
title: OpenWRT
---
> an open-source Linux distribution aimed at routers. - [openwrt.org](https://openwrt.org/about) 

## [Raspberry-pi support](https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi)
- [Raspberry Pi as a home router]({% post_url 2021-02-12-pi-router-firewall %}) / OpenWrt installation
	- [OpenWrt installation](https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi#installation) - for Raspberry Pi 4, you need to download the [latest development build](https://downloads.openwrt.org/snapshots/targets/bcm27xx/bcm2711/).
		- get rpi-4-ext4-factory.img.gz
        - copy image on sd card
        - expand partition
{% highlight bash %}
$ sudo e2fsck -f /dev/sdc2
$ sudo cfdisk /dev/sdc2
$ # sudo resize2fs /dev/sdc2 # unnecessary
{% endhighlight %}

- edit set ip in /etc/config/network
- ssh root@192.168.1.1

- [5 Gbps Ethernet on the Raspberry Pi Compute Module 4](https://www.jeffgeerling.com/blog/2020/5-gbps-ethernet-on-raspberry-pi-compute-module-4)
- [Installing OpenWRT on a Raspberry Pi as a New Home Firewall (2013)](https://computers.tutsplus.com/articles/installing-openwrt-on-a-raspberry-pi-as-a-new-home-firewall--mac-55984)


## [External Antenna](https://www.dorkbotpdx.org/blog/wramsdell/external_antenna_modifications_for_the_raspberry_pi_3)

[other](https://hackaday.io/project/10091-raspberry-pi-3-external-antenna)

## Atlernative setup
- [AdaFruit (2018)](https://cdn-learn.adafruit.com/downloads/pdf/setting-up-a-raspberry-pi-as-a-wifi-access-point.pdf)