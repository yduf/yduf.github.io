---
title: SSH tunnels 🚇
tags: ssh network-security
toc: true
---
> explains use cases and examples of SSH tunnels - [A visual guide to SSH tunnels](https://robotmoon.com/ssh-tunnels/) / [HN](https://news.ycombinator.com/item?id=26053323)

- [Circumventing Deep Packet Inspection with Socat and rot13](https://gist.github.com/gmurdocca/88857b58dc4668d88b0d0fae6ebf8b64) / [HN](https://news.ycombinator.com/item?id=30487104)
	- [Socat address chains](http://www.dest-unreach.org/socat/doc/socat-addresschain.html)

# ssh

{% highlight bash %}
ssh -N -L [local_port]:127.0.0.1:[remote_port] 100.69.234.21
{% endhighlight %}

# [Port forwarding ⮺](https://chatgpt.com/share/6a647248-30ac-83eb-958f-7988a7616534) 

## autossh

see [Automatiser tunnel SSH](https://chatgpt.com/share/6a97bdae-e804-83eb-a257-28223cafde99)

```ini
# ssh-config
Host bastion
    ServerAliveInterval 30
    ServerAliveCountMax 3
    TCPKeepAlive yes
```

**Notable**
- [sshuttle](https://github.com/sshuttle/sshuttle#sshuttle-where-transparent-proxy-meets-vpn-meets-ssh) / [doc](https://sshuttle.readthedocs.io/en/stable/how-it-works.html) - route an entire subnet over SSH - did not understand what id does
- systemd user services + [Cockpit (surprisingly nice)](https://chatgpt.com/share/6a97c82c-bc8c-83ed-bc32-3fdbeef5db35) - with restrictions for user services
- or custom tools


# see also
- [How Attackers Intercept HTTPS](https://www.youtube.com/watch?v=n9BD4YxiWqM) - using eBPF trace
  - [Would this work on ssh](https://chatgpt.com/share/6a47d65c-21cc-83eb-aa9d-9a75bb1da85a) - it could but it's a (bit?) harder
- [sshuttle vs kubefwd](https://chatgpt.com/share/6a64894e-c9c8-83ed-9cd1-801061cd93f3)