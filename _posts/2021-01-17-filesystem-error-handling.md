---
published: true
title: Filesystem error handling
tags: filesystem error-handling
---
> Most filesystems don’t have checksums for data and leave error detection and correction up to userspace software. When I talk to server-side devs at big companies, their answer is usually something like “who cares? All of our file accesses go through a library that checksums things anyway and redundancy across machines and datacenters takes care of failures, so we only need error detection and not correction”. While that’s true for developers at certain big companies, there’s a lot of software out there that isn’t written robustly and just assumes that filesystems and disks don’t have errors. - [danluu.com](https://danluu.com/filesystem-errors/) / [HN](https://news.ycombinator.com/item?id=15534460)
