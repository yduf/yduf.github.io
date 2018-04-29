---
title: Git serve on Synology
published: true
tag: git nas
---
## using [Git Server](http://blog.osdev.org/git/2014/02/13/using-git-on-a-synology-nas.html)

_Sometimes I want to have a centralized GIT repo that is private. I could use another provider besides GitHub or purchase a plan from GitHub but since I already have a Synology NAS I can use for my small private repos I don't see the point in uploading my private data to someone else's servers. I'll probably make tons of small private repos and I will not be collaborating with other (or very few, the NAS can have external ports forwarded to it) so using my local NAS to host my private Git repos makes perfect sense._

Installing the Git Server package on the NAS gives you two benefits:

- The root user will be able to create repositories directly on the NAS device.
- Git clients will be able to use the SSH protocol instead of HTTP/HTTPS.