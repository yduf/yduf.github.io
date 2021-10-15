---
published: true
title: ZFS (Ubuntu)
tags: zfs linux system
---
> ZFS unlike most other storage systems, it unifies both of these roles and acts as both the volume manager and the file system. Therefore, it has complete knowledge of both the physical disks and volumes - [wikipedia](https://en.wikipedia.org/wiki/ZFS)

## [ZFS -- baked directly into Ubuntu -- supported by Canonical.](http://blog.dustinkirkland.com/2016/02/zfs-is-fs-for-containers-in-ubuntu-1604.html)
- What does "support" mean?
	- You'll find zfs.ko automatically built and installed on your Ubuntu systems.  No more DKMS-built modules!
    - You'll see the module loaded automatically if you use it.
    - The user space zfsutils-linux package will be included in Ubuntu Main, with security updates provided by Canonical.

# Basics

ZFS _pool_ and thus your _file system_ is based on one or more **VDEVs**. And those VDEVs contain the actual hard drives.

Fault-tolerance or redundancy is addressed within a _VDEV_. A VDEV is either a RAID-1 (mirror), RAID-5 (RAIDZ) or RAID-6 (RAIDZ2). It can even use tripple parity (RAID-Z3).

So it's important to understand that **a ZFS pool itself is not fault-tolerant**. If you lose a single VDEV within a pool, you lose the whole pool. **You lose the pool, all data is lost**.

[ ![caption](https://louwrentius.com/static/images/zfs-overview.png) ](https://louwrentius.com/the-hidden-cost-of-using-zfs-for-your-home-nas.html)

Now it's very important to understand that you cannot add hard drives to a VDEV. (not yet see [RAIDz expansion will be a thing very soon](https://arstechnica.com/gadgets/2021/06/raidz-expansion-code-lands-in-openzfs-master/)).

- **Plan your ZFS Build with the VDEV limitation in mind**

Many home NAS builders use [RAID-6]({% post_url 2019-03-26-raid6 %}) (RAID-Z2) for their builds, because of the extra redundancy. This makes sense because a double drive failure is not something unheard of, especially during rebuilds where all drives are being taxed quite heavily for many hours.

## Ref
- [ubuntu](https://wiki.ubuntu.com/Kernel/Reference/ZFS)
- [ZFS Concepts and Tutorial](https://linuxhint.com/zfs-concepts-and-tutorial/)
	- Never ever use hardware RAID-controller with ZFS.
    - Error Correcting RAM (ECC) is recommended, but not mandatory
    - Data deduplication feature consumes a lot memory, use compression instead.
    - Data redundancy is not an alternative for backup. Have multiple backups, store those backups using ZFS!
- [Configuring ZFS Cache for High Speed IO](https://linuxhint.com/configuring-zfs-cache/)
	- [The ZFS ZIL and SLOG Demystified](https://www.ixsystems.com/blog/zfs-zil-and-slog-demystified/)
    - [sync mode](https://milek.blogspot.com/2010/05/zfs-synchronous-vs-asynchronous-io.html)
    	- sync=disabled speed up a lot file transfer (see ZIL safety)
- [zfs compression](https://www.servethehome.com/the-case-for-using-zfs-compression/)
- [zfs properties](https://docs.oracle.com/cd/E19253-01/819-5461/gazuk/index.html)
	- `zfs get all tank/home`

# Maintenance
## [Check Data Integrity (scrub)](https://prefetch.net/blog/index.php/2011/10/15/using-the-zfs-scrub-feature-to-verify-the-integrity-of-your-storage/)
{% highlight bash %}
zpool scrub <rpool>			# start
zpool scrub -s <rpool> 		# stop

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
  
## [ZFS Event Daemon (ZED)](https://zfsonlinux.org/manpages/0.8.4/man8/zed.8.html)
  
> What ZED does that is so great is that it provides a very simple way to take action when ZFS events happen. - [In praise of ZFS On Linux's ZED](https://utcc.utoronto.ca/~cks/space/blog/linux/ZFSZEDPraise)

 
## [ZFS RAIDZ expansion](https://www.reddit.com/r/homelab/comments/83wo88/any_news_on_zfs_raidz_expansion/)
### [Expanding a RAIDZ Pool](https://serverfault.com/questions/537047/expanding-a-freenas-raidz-pool)
  
> With ZFS, you either have to buy all storage you expect to need upfront, or you will be wasting a few hard drives on redundancy you don't need. - [You can't add hard drives to a VDEV](https://louwrentius.com/the-hidden-cost-of-using-zfs-for-your-home-nas.html)
  
- [github WP](https://github.com/openzfs/zfs/pull/8853)
When available **ZFS RAIDZ expansion** would let adding a new disk to existing vdev with rebalancing. [video](https://www.youtube.com/watch?v=ZF8V7Tc9G28)


