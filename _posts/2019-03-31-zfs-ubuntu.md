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
    
## [ref](https://wiki.ubuntu.com/Kernel/Reference/ZFS) 

# Maintenance
##
{% highlight bash %}
sudo zpool status
cd /storage_pool
df -h .
{% endhighlight %}

## [Replacing a (silently) failing disk in a ZFS pool](https://imil.net/blog/2019/07/02/Replacing-a-silently-failing-disk-in-a-ZFS-pool/)

# Configuration
## [Pool - RAID5 / Z1](https://www.maketecheasier.com/use-zfs-filesystem-ubuntu-linux/)
    
{% highlight bash %}
sudo zpool create storage_pool raidz1 /dev/sda /dev/sdb /dev/sdc
sudo zpool status
cd /storage_pool
df -h .
{% endhighlight %}

## [Create ZFS dataset/Filesystem](https://www.jamescoyle.net/how-to/478-create-a-zfs-volume-on-ubuntu)

> At this point, we now have a zpool spanning three disks. One of these is used for parity, giving us the chance to recover in the event of a single disk failure. The next step is to make the volume usable and add features such as compression, encryption or de-duplication.

Multiple [Dataset](https://www.unixarena.com/2013/07/zfs-datasets-administration-and.html/) can be created on a single pool, the storage of the zpool with be available to any dataset as it requires it.

{% highlight bash %}
zfs create -o mountpoint=[MOUNT POINT] [ZPOOL NAME]/[DATASET NAME]

zfs create -o mountpoint=/mnt/binaries storage_pool/binaries
zfs list   # Test the datasets have been created with
{% endhighlight %}
