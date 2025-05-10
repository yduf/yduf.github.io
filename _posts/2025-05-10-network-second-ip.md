---
title: Setup a secondary IP
published: true
tags: network linux-system
---
> make your host available on a specific alternative IP address - [chatGPT](https://chatgpt.com/share/681f2745-c928-800d-9057-db5efce02eb3)

### Netplan Ubuntu 18.04+

{% highlight init %}
# /etc/netplan/01-netcfg.yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: true
      addresses:
        - 192.168.1.100/24
{% endhighlight %}

apply `sudo netplan apply`

