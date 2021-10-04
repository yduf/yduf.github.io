---
published: true
title: SSH scanning
tags: ssh security internet
---
> The entire internet scans all the common ports and this should be expected to continue indefinitely. - [HN](https://news.ycombinator.com/item?id=28652683)


- Implement a firewall on your instances.
- Implement port knocking for sshd.
- Move sshd to a non standard port to avoid the nmap/bot noise.
- Only log successful logins.
- Any combination of the above.