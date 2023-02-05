---
published: true
title: Linux Boot Partitions
tags: system boot
---
> With the arrival of UEFI a new partition relevant for boot appeared, the EFI System Partition (ESP). - [How to Set Them Up](https://0pointer.net/blog/linux-boot-partitions.html) / [HN](https://news.ycombinator.com/item?id=33455052)

Unlike the traditional boot partition, the ESP is easily recognizable in the partition table via its GPT partition type UUID. The ESP is also a shared resource: all OSes installed on the same disk will share it and put their boot resources into them (as opposed to the traditional boot partition, of which there is one per installed Linux OS, and only that one will put resources there).

see also
- [ZFSBootMenu](https://github.com/zbm-dev/zfsbootmenu/) - a Linux bootloader that attempts to provide an experience similar to FreeBSD's bootloader.
