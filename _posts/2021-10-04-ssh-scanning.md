---
published: true
title: SSH scanning
tags: ssh security internet
---
> The entire internet scans all the common ports and this should be expected to continue indefinitely. - [HN](https://news.ycombinator.com/item?id=28652683)

see also:
- [Brute.Fail](https://brute.fail/) / [HN](https://news.ycombinator.com/item?id=36169954)- Watch brute force attacks fail in real time

- Implement a firewall on your instances.
- Implement [port knocking](https://en.wikipedia.org/wiki/Port_knocking) for [sshd](https://www.atlantic.net/vps-hosting/how-to-secure-ssh-service-with-port-knocking/). -  similar to a [secret handshake](https://www.howtogeek.com/442733/how-to-use-port-knocking-on-linux-and-why-you-shouldnt/)
- Move sshd to a non standard port to avoid the nmap/bot noise.
- Only log successful logins.
- Any combination of the above.
