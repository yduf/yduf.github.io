---
published: true
title: HUAWEI MateBook 14 (2020)
tags: hardware laptop
excerpt_separator: <!--more-->
---

<!--more-->

## [amazon](https://www.amazon.fr/gp/product/B08P9186JF/ref=ox_sc_act_title_2?smid=A1X6FK5RDHNB96&psc=1) - 2021 - 800€ 

- i7-10510U, 4 cores / 8 threads
- 16Go
- NVIDIA MX350 / 3:2 display
- 1.5kg

### Disabling Touchscreen
- [xinput way](https://unix.stackexchange.com/questions/127443/how-do-i-disable-the-touch-screen-on-my-laptop/129603#129603) - `xinput disable <id=13>`
- [driver way](https://www.blackmoreops.com/2016/10/26/disable-touchscreen-linux/)

## [BIOS](https://consumer.huawei.com/en/support/laptops/matebook-14-2020/) - 1.19 Rev 5.0

## Linux support
- [Nvidia GeForce MX350 driver N/A although installed](https://forums.linuxmint.com/viewtopic.php?t=353047&p=2039798)
- [power button issue](https://bbs.archlinux.org/viewtopic.php?id=225752)
	- [ivzave/matebook-linux](https://github.com/ivzave/matebook-linux) - patching [acpi table]({% post_url 2021-07-25-acpi %})
    	- S3 sleep state: OK on Linux 5.4.0-80-generic
        - [Fn-Lock](https://github.com/nekr0z/linux-on-huawei-matebook-13-2019/blob/master/README.md#keyboard) - pressing Fn key lock/unlock the functionnality
    	- Power button: OK, but has to be pressed for at least 1 second to generate event
        - Fingerpring reader : [KO](https://github.com/nekr0z/linux-on-huawei-matebook-13-2019/blob/master/README.md#fingerprint-reader)

    - [Disabled STAPM and Increased the Power Limit](https://www.reddit.com/r/Amd/comments/a2vs55/i_successfully_disabled_stapm_and_increased_the/)
- [enable fingerprint scanner](https://www.addictivetips.com/ubuntu-linux-tips/enable-fingerprint-scanner-support-on-linux/)


## Startup options
- F2 - BIOS access
- F10 - windows restore
- [F12](https://consumer.huawei.com/en/support/content/en-us00693076/) - boot select

## [Factory partition](https://www.reddit.com/r/MatebookXPro/comments/9xnhe1/partitioning_on_a_new_device/)
- System (120Go) - Windows 10 (C:)
- Data   (341Go) - D:
- WINPE  (.5GB) - WinPE is a preinstallation environment that lets you install Windows from a wim file... probably from the 14gb key partition.
- WinRE  (1GB) - WinRE is a recovery environment for restoring Windows in the event it fails to boot. 
- [OneKey](https://www.reddit.com/r/MatebookXPro/comments/fdr566/matebook_d_is_huaweis_system_restore_partition/) (14GB) -  Huawei laptops have two system restore modes, one that is built in to Windows 10 and one made [by Huawei](https://consumer.huawei.com/en/support/content/en-us00692605/)

That said, technically you dont need any of them. You can just create a Windows 10 usb installer and download your drivers separately and store them on the usb drive in a folder, then format your ssd and reinstall Windows. That will free up your 14gb partition - since that probably houses the stock image of the hard drive that can be restored through WinPE. With your windows installer on a usb stick instead, you’ll get the standard Windows install: an efi partition, a recovery partion, and the rest of your space to your C drive. Though you’ll have to find your serial or a way to transfer the activation license with you.

## [Installing Linux](https://www.tecmint.com/install-linux-mint-alongside-windows-dual-boot-uefi-mode/)

### Shrink/Delete Partition
Using disk management tool
- remove Data (D:) partition 
- shrink OS (C:) partition to 50Go (leave 10Go free)

For the moment leave Onekey partition (14Go occupied)

### Linux install
Internet connection is recommanded for install (for thirdparty software).

Partition / (100Go), /home (300Go)
