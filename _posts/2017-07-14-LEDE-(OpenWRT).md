---
published: true
tags: raspberry-pi network security wifi ssh
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
- [ssh root@192.168.1.1](https://openwrt.org/docs/guide-quick-start/sshadministration) and [reconfigure ssh]({% post_url 2019-04-29-ssh %}) then [configure dropbear](https://openwrt.org/docs/guide-user/security/dropbear.public-key.auth#disabling_password_authentication)
	- [Public SSH login keys for dropbear are stored in /etc/dropbear/authorized_keys](https://jasonschaefer.com/public-key-authentication-in-openwrt-using-dropbear-sshd/)
{% highlight bash %}
$ ssh-copy-id -i .ssh/id_rsa.pub root@192.168.1.1
$ ssh root@192.168.1.1
root@MyOpenWrt:~# mv /root/.ssh/authorized_keys /etc/dropbear/
{% endhighlight %}

### [Webserver GUI](http://openwrt)
{% highlight bash %}
opkg update
opkg install luci-ssl-nginx
/etc/init.d/nginx enable
{% endhighlight %}

### [Dropbear key-based authentication](https://openwrt.org/docs/guide-user/security/dropbear.public-key.auth#disabling_password_authentication)
{% highlight bash %}
$ uci set dropbear.@dropbear[0].PasswordAuth="0"
$ uci set dropbear.@dropbear[0].RootPasswordAuth="0"
$ uci commit dropbear
$ /etc/init.d/dropbear restart
{% endhighlight %}

## Network
- [5 Gbps Ethernet on the Raspberry Pi Compute Module 4](https://www.jeffgeerling.com/blog/2020/5-gbps-ethernet-on-raspberry-pi-compute-module-4)

### Wifi
- [How to setup a RTL881cu USB Wifi adapter with the Raspberry Pi 4](https://thepihut.com/blogs/raspberry-pi-tutorials/how-to-setup-a-rtl881cu-usb-wifi-adapter-with-the-raspberry-pi-4)
- [External Antenna](https://antenabaru.blogspot.com/2020/06/external-antenna-raspberry-pi-4.html) / [1](https://www.dorkbotpdx.org/blog/wramsdell/external_antenna_modifications_for_the_raspberry_pi_3) / [2](https://hackaday.io/project/10091-raspberry-pi-3-external-antenna)

## Atlernative setup
- [AdaFruit (2018)](https://cdn-learn.adafruit.com/downloads/pdf/setting-up-a-raspberry-pi-as-a-wifi-access-point.pdf)
- [Installing OpenWRT on a Raspberry Pi as a New Home Firewall (2013)](https://computers.tutsplus.com/articles/installing-openwrt-on-a-raspberry-pi-as-a-new-home-firewall--mac-55984)