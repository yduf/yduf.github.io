---
published: true
title: ASUS ZenBook UX305UA
tags: hardware laptop
excerpt_separator: <!--more-->
---
<!--more-->
## [Bios](https://www.asus.com/us/Laptops/ASUS-ZenBook-UX305UA/HelpDesk_BIOS/) version 201 - 2016 / 1200€

## Linux support
- [ASUS Zenbook UX305](https://wiki.archlinux.org/title/ASUS_Zenbook_UX305)
- [DebuggingTouchpadDetection](https://wiki.ubuntu.com/DebuggingTouchpadDetection) / [touchpad](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1535085)
- [Linux Suspend issue]({% post_url 2017-12-23-Asus-suspend %})

## [Spec](https://www.ultrabookreview.com/10058-asus-zenbook-ux305ua-review/)
- Core i7-6500U (2 cores / 4 threads) 
- 8go
- 1.3kg
- Full HD IPS Display

## Linux info
{% highlight bash %}
$ parted -l
Number  Size    File system  Name                          Flags
 1      273MB   fat32        EFI system partition          boot, esp
 2       17MB                Microsoft reserved partition  msftres
 3       50GB   ntfs         Basic data partition          msftdata      OS
 5       48GB   ext4         linux
 7      107GB   ext4         archive
 4      523MB   ntfs         Basic data partition          hidden, diag  RECOVERY
 6      307GB   ext4         home
{% endhighlight %}

See also
- [Suspend issue]({% post_url 2017-12-23-Asus-suspend%})