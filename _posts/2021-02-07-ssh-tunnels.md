---
published: true
title: SSH tunnels 🚇
tags: ssh network-security
---
> explains use cases and examples of SSH tunnels - [A visual guide to SSH tunnels](https://robotmoon.com/ssh-tunnels/) / [HN](https://news.ycombinator.com/item?id=26053323)

- [Circumventing Deep Packet Inspection with Socat and rot13](https://gist.github.com/gmurdocca/88857b58dc4668d88b0d0fae6ebf8b64) / [HN](https://news.ycombinator.com/item?id=30487104)
	- [Socat address chains](http://www.dest-unreach.org/socat/doc/socat-addresschain.html)

{% highlight bash %}
ssh -N -L [local_port]:127.0.0.1:[remote_port] 100.69.234.21
{% endhighlight %}

**see also**
- [How Attackers Intercept HTTPS](https://www.youtube.com/watch?v=n9BD4YxiWqM) - using eBPF trace
  - [Would this work on ssh](https://chatgpt.com/share/6a47d65c-21cc-83eb-aa9d-9a75bb1da85a) - it could but it's a (bit?) harder