---
published: true
title: Ubuntu + zfs
tags: zfs linux ubuntu
---
## [ZFS -- baked directly into Ubuntu -- supported by Canonical.](http://blog.dustinkirkland.com/2016/02/zfs-is-fs-for-containers-in-ubuntu-1604.html)
- What does "support" mean?
	- You'll find zfs.ko automatically built and installed on your Ubuntu systems.  No more DKMS-built modules!
    - You'll see the module loaded automatically if you use it.
    - The user space zfsutils-linux package will be included in Ubuntu Main, with security updates provided by Canonical.
    