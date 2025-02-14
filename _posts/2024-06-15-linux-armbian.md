---
title: '# Armbian'
published: true
tags: arm linux-system raspberry-pi
---
> Optimized Debian and Ubuntu Linux images for ARM-based SBCs  
> Armbian is the opposite of [Raspbian]({% post_url 2019-08-16-raspbian-x86 %}): Raspbian has dozens of contributors to focus on a single SBC platform. Armbian has a dozen contributors to focus on 100+ SBCs spread over 30 platforms. - [archive](http://xogium.performanceservers.nl/archive/bananapim2zero/archive/) 

`cat /proc/cpuinfo` - [How do I see which ARM CPU version I have?](https://raspberrypi.stackexchange.com/questions/9912/how-do-i-see-which-arm-cpu-version-i-have)

### Seting up Wifi

using [`nmtui`](https://www.tecmint.com/nmtui-configure-network-connection/)
- _activate connection_ to connect to wifi
- using _edit connection_ => you can configure static ip

For troubleshooting
see [nmcli to display the status of a connection](https://unix.stackexchange.com/questions/441969/use-nmcli-to-display-the-status-of-a-connection)
- [How to manage DNS in NetworkManager via console (nmcli)?](https://serverfault.com/questions/810636/how-to-manage-dns-in-networkmanager-via-console-nmcli)

{% highlight bash %}
$ nmcli con show
$ nmcli con mod "$connectionName" ipv4.dns "8.8.8.8 8.8.4.4"
$ service NetworkManager restart
{% endhighlight %}

- [NetworkManager](https://wiki.debian.org/NetworkManager)
	- [How to troubleshoot DNS with systemd-resolved?](https://unix.stackexchange.com/a/637845/192991)

### Boot speed
- [	Raspberry Pi 3 fastboot in less than 2 seconds](https://news.ycombinator.com/item?id=41867608)