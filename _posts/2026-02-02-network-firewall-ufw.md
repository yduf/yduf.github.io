---
title: Uncomplicated Firewall (UFW)
published: true
tags: network security
toc: true
---
> a user-friendly front end for managing firewall rules, built on top of iptables (older systems) or nftables (newer systems) - [ChatGPT](https://chatgpt.com/share/69810196-7b98-800d-bdc6-38f3ea8b6a39) / [using UFW](https://blog.stephane-robert.info/docs/securiser/reseaux/ufw/)

## Basic Commands

{% highlight bash %}
$ sudo ufw enable            # Turn the firewall on
$ sudo ufw disable           # Turn it off
$ sudo ufw status             # Show current rules

$ sudo ufw allow in on enx6c1ff76c1d75 to any port 2049 proto tcp # specific interface
$ sudo ufw deny in to any port 2049 # deny otherwise

$ sudo ufw reload
$ sudo ufw status verbose # list rules

$ sudo ufw allow ssh          # Allow SSH (port 22)
$ sudo ufw allow 80           # Allow HTTP
$ sudo ufw deny 23            # Block Telnet
$ sudo ufw delete allow 80    # Remove a rule
{% endhighlight %}

## Rules rules

[Explaination about rules format](https://chatgpt.com/share/6982f13e-b97c-800d-a27b-8fe21efff410)

{% highlight bash %}
$ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
2049/tcp on enx6c1ff76c1d75 ALLOW IN    Anywhere                  
2049                       DENY IN     Anywhere                  
2049/tcp (v6) on enx6c1ff76c1d75 ALLOW IN    Anywhere (v6)             
2049 (v6)                  DENY IN     Anywhere (v6)             
{% endhighlight %}


## Logs

{% highlight bash %}
$ sudo ufw status verbose # check logs level
$ sudo ufw logging on

$ sudo ufw logging low    # default, least verbose
$ sudo ufw logging medium
$ sudo ufw logging high
$ sudo ufw logging full  # very verbose

$ sudo less /var/log/ufw.log
or
$ sudo tail -f /var/log/ufw.log # real time

$ sudo grep "BLOCK" /var/log/ufw.log # blocked traffic

{% endhighlight %}
