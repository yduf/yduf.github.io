---
published: true
title: Docker Image
tags: docker filesystem
---
> They do their best to make it look a lot more complicated, but OCI images — [OCI is the standardized container format used by Docker](https://github.com/opencontainers/image-spec) — are pretty simple. An OCI image is just a stack of tarballs...
>
> Unpack the tarballs in order and you’ve got the filesystem layout the container expects to run in. - [Docker without Docker](https://fly.io/blog/docker-without-docker/) / [HN](https://news.ycombinator.com/item?id=26746280)

If you're a Unix person from the 1990s like I am, and you just recently started paying attention to how Linux storage works again, you've probably noticed that a lot has changed. Sometime over the last 20 years, the block device layer in Linux got interesting. LVM2 can pool raw block devices and create synthetic block devices on top of them. It can treat block device sizes as an abstraction, chopping a 1TB block device into 1,000 5GB synthetic devices (so long as you don't actually use 5GB on all those devices!). And it can create snapshots, preserving the blocks on a device in another synthetic device, and sharing those blocks among related devices with copy-on-write semantics.

- [Reverse Engineering a Docker Image](https://news.ycombinator.com/item?id=26500295)