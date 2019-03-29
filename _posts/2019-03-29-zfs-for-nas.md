---
published: true
title: The 'Hidden' Cost of Using ZFS for Your Home NAS
tags: zfs nas
---
> With ZFS, you either have to buy all storage you expect to need upfront, or you will be wasting a few hard drives on redundancy you don't need. - [You can't add hard drives to a VDEV](https://louwrentius.com/the-hidden-cost-of-using-zfs-for-your-home-nas.html)

## [ZFS RAIDZ expansion](https://www.reddit.com/r/homelab/comments/83wo88/any_news_on_zfs_raidz_expansion/)
- When available would let adding a new disk to existing vdev with rebalancing. [presentation](https://docs.google.com/presentation/d/1KwLhoWly-wSpfrdyr16EyWr8KCybyB_n0_Eq_DKWcWA/edit#slide=id.g28d37d86e1_0_316)

The main takeaway of this picture is that your ZFS pool and thus your file system is based on one or more VDEVs. And those VDEVs contain the actual hard drives.

Fault-tolerance or redundancy is addressed within a VDEV. A VDEV is either a RAID-1 (mirror), RAID-5 (RAIDZ) or RAID-6 (RAIDZ2).

![caption](https://louwrentius.com/static/images/zfs-overview.png)


