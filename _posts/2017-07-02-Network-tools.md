---
published: true
tags: linux network benchmarking
title: Network Tools
toc: true
---
## [Probing Host](https://www.linux.com/learn/who-and-what-my-network-probing-your-network-linux)

{% highlight bash %}
$ netstat -untap
$ whowatch			# interactive  user and process monitoring tool
$ ss -ltpn			# socket status
{% endhighlight %}


# DNS
- [`wtfis`](https://github.com/pirxthepilot/wtfis?tab=readme-ov-file#wtfis) / [HN](https://news.ycombinator.com/item?id=43967962) - Passive hostname, domain and IP lookup tool for non-robots
	- Only criticism is that it does use or need a bunch of accounts and API keys which probably makes the setup a bit tedious
    
# DHCP

## Troubleshooting

### [Wired link](https://chatgpt.com/share/6971d811-a1a8-800d-be49-e723a1a4e261)

Check link status
{% highlight bash %}
$ ip link
2: enx6c1ff76c1d75: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000 link/ether 6c:1f:f7:6c:1d:75 brd ff:ff:ff:ff:ff:ff
{% endhighlight %}

In this case link is found -> Ethernet hardware is working correctly

And for sure device is seen by kernel
{% highlight bash %}
$ lsusb 
Bus 002 Device 005: ID 0bda:8153 Realtek Semiconductor Corp. RTL8153 Gigabit Ethernet Adapter
{% endhighlight %}

{% highlight bash %}
$ dmesg | grep -iE 'eth|enp|link|network' 
[ 0.167927] NET: Registered PF_NETLINK/PF_ROUTE protocol family 
[ 0.168695] audit: initializing netlink subsys (disabled) 
[ 0.607142] drop_monitor: Initializing network drop monitor service 
[ 2.853869] r8152 2-4.4.2:1.0 eth0: v1.12.13 
[ 2.856851] usbcore: registered new interface driver cdc_ether 
[ 2.863149] r8152 2-4.4.2:1.0 enx6c1ff76c1d75: renamed from eth0 

$ nmcli device status 
DEVICE TYPE STATE CONNECTION
enx6c1ff76c1d75 ethernet disconnected -- 
{% endhighlight %}

Hardware & driver: OK  
USB NIC detected: RTL8153  
Driver loaded: r8152  
Interface renamed properly: eth0 → enx6c1ff76c1d75  
Link state: <UP, LOWER_UP> ⟶ Cable + link are detected  

So:
❌ Not a cable  
❌ Not a driver  
❌ Not a kernel issue  

Check Network Manager  
Check DHCP Service lease  

{% highlight bash %}
$ sudo dhclient -v enx6c1ff76c1d75 
Internet Systems Consortium DHCP Client 4.4.3-P1 Copyright 2004-2022 Internet Systems Consortium. 
All rights reserved. 
For info, please visit https://www.isc.org/software/dhcp/ 

Listening on LPF/enx6c1ff76c1d75/6c:1f:f7:6c:1d:75 
Sending on LPF/enx6c1ff76c1d75/6c:1f:f7:6c:1d:75 
Sending on Socket/fallback
xid: warning: no netdev with useable HWADDR found for seed's uniqueness enforcement xid: rand init seed (0x690ecc6b) built using gethostid 
DHCPDISCOVER on enx6c1ff76c1d75 to 255.255.255.255 port 67 interval 3 (xid=0x3f28f973)
...
{% endhighlight %}

**No DHCPOFFER is ever received**

That means:  
Ethernet link: ✅ up  
Driver: ✅ working  
Packets sent: ✅ DHCPDISCOVER is broadcast  
Packets received: ❌ none  

📌 The DHCP server (router/network) is not replying to this interface at all.  

## [perf host/host](https://linuxaria.com/article/tool-command-line-bandwidth-linux)
[also](https://www.linux.com/learn/five-funny-little-linux-network-testers-and-monitors)

### [iperf](https://askubuntu.com/questions/7976/how-do-you-test-the-network-speed-betwen-two-boxes#7977)

You need to install iperf on both ends of the link you want to test, which in these examples are Studio and Uberpc. Then start iperf in server mode on one host, and run it in client mode on the other host. Note that on the client, you must name the server. This is the simplest way to run a test:

{% highlight bash %}
carla@studio:~$ iperf -s
terry@uberpc:~$ iperf -c studio
{% endhighlight %}


## [Misc](http://www.linuxhomenetworking.com/wiki/index.php/Quick_HOWTO_:_Ch04_:_Simple_Network_Troubleshooting)
