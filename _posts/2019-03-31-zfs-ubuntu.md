---
published: true
title: ZFS (Ubuntu)
tags: zfs linux ubuntu
---
## [ZFS -- baked directly into Ubuntu -- supported by Canonical.](http://blog.dustinkirkland.com/2016/02/zfs-is-fs-for-containers-in-ubuntu-1604.html)
- What does "support" mean?
	- You'll find zfs.ko automatically built and installed on your Ubuntu systems.  No more DKMS-built modules!
    - You'll see the module loaded automatically if you use it.
    - The user space zfsutils-linux package will be included in Ubuntu Main, with security updates provided by Canonical.
    
# Configuration
## Pool - RAID5 / Z1
[zfs](https://www.maketecheasier.com/use-zfs-filesystem-ubuntu-linux/) - [ref](https://wiki.ubuntu.com/Kernel/Reference/ZFS) [\[1\]](https://www.jamescoyle.net/how-to/478-create-a-zfs-volume-on-ubuntu)
    
{% highlight bash %}
sudo zpool create storage_pool raidz1 /dev/sda /dev/sdb /dev/sdc
sudo zpool status
cd /storage_pool
df -h .
{% endhighlight %}
