---
published: true
title: How do groups work on Linux?
tags: blog linux
---
## [how do you get your groups in the first place?](https://jvns.ca/blog/2017/11/20/groups/)

So this raises kind of a confusing question, right – if processes have groups baked into them, how do you get assigned your groups in the first place? Obviously you can’t assign yourself more groups (that would defeat the purpose of access control).

It’s relatively clear how processes I execute from my shell (bash/fish) get their groups – my shell runs as me, and it has a bunch of group IDs on it. Processes I execute from my shell are forked from the shell so they get the same groups as the shell had.

So there needs to be some “first” process that has your groups set on it, and all the other processes you set inherit their groups from that. That process is called your login shell and it’s run by the login program (/bin/login) on my laptop. login runs as root and calls a C function called initgroups to set up your groups (by reading /etc/group). It’s allowed to set up your groups because it runs as root.