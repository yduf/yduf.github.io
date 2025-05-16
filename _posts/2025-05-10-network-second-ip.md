---
title: Setup a secondary IP
published: true
tags: network linux-system
---
> make your host available on a specific alternative IP address - [chatGPT](https://chatgpt.com/share/681f2745-c928-800d-9057-db5efce02eb3)

### Ubuntu 22+ / Debian 12

Check if you are using netplan or NetworkManager
`cat /etc/netplan/1-network-manager-all.yaml ` => default to NetworkManager

{% highlight bash %}
$ nmcli connection show
# You'll see something like: NAME: Wired connection 1 ... DEVICE: enp0s3

# Add the alternative IP
$ sudo nmcli connection modify "Wired connection 1" +ipv4.addresses 192.168.0.134/24

# Ensure manual addressing is enabled (alongside DHCP):
$ sudo nmcli connection modify "Wired connection 1" ipv4.method auto

# Apply change
$ sudo nmcli connection down "Wired connection 1" && sudo nmcli connection up "Wired connection 1"

# Check your IPs:
$ ip addr show enp0s3
{% endhighlight %}

