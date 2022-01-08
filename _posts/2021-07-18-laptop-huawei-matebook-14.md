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

### Hardware info

{% highlight bash %}
$ inxi -Fxxxrnz
inxi -Fxxxrnz
Machine:   Type: Laptop System: HUAWEI product: KLVC-WXX9 v: M1060 serial: <filter> 
           Mobo: HUAWEI model: KLVC-WXX9-PCB v: M1060 serial: <filter> UEFI: HUAWEI v: 1.19 date: 08/01/2020 
Battery:   ID-1: BAT0 charge: 53.6 Wh condition: 54.6/54.9 Wh (99%) volts: 8.5/7.6 model: DYNAPACK HB4593R1ECW-22T0 
           type: Li-ion serial: <filter> status: Discharging cycles: 42 
CPU:       Topology: Quad Core model: Intel Core i7-10510U bits: 64 type: MT MCP arch: Kaby Lake rev: C L2 cache: 8192 KiB 
           flags: avx avx2 lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx bogomips: 36799 
           Speed: 600 MHz min/max: 400/4900 MHz Core speeds (MHz): 1: 600 2: 1959 3: 797 4: 644 5: 600 6: 600 7: 604 8: 603 
Graphics:  Device-1: Intel UHD Graphics driver: i915 v: kernel bus ID: 00:02.0 chip ID: 8086:9b41 
           Device-2: NVIDIA GP107M [GeForce MX350] driver: nouveau v: kernel bus ID: 01:00.0 chip ID: 10de:1c94 
           Display: x11 server: X.Org 1.20.13 driver: modesetting unloaded: fbdev,vesa resolution: 2160x1440~60Hz 
           OpenGL: renderer: Mesa Intel UHD Graphics (CML GT2) v: 4.6 Mesa 21.0.3 direct render: Yes 
Audio:     Device-1: Intel driver: snd_hda_intel v: kernel bus ID: 00:1f.3 chip ID: 8086:02c8 
           Device-2: Plantronics Plantronics BT600 type: USB driver: plantronics,snd-usb-audio,usbhid bus ID: 1-1:2 
           chip ID: 047f:02fb serial: <filter> 
           Sound Server: ALSA v: k5.13.0-23-generic 
Network:   Device-1: Intel Wireless-AC 9462 driver: N/A port: 4000 bus ID: 00:14.3 chip ID: 8086:02f0 
           Device-2: Realtek USB3.0 802.11ac 1200M Adapter type: USB driver: rtl88x2bu bus ID: 1-2:18 chip ID: 0bda:b812 
           serial: <filter> 
           IF: wlx1cbfce03f4ea state: up mac: <filter> 
           IF-ID-1: br-2fff95979612 state: down mac: <filter> 
           IF-ID-2: docker0 state: down mac: <filter> 
Drives:    Local Storage: total: 476.94 GiB used: 138.26 GiB (29.0%) 
           ID-1: /dev/nvme0n1 vendor: Western Digital model: PC SN730 SDBPNTY-512G size: 476.94 GiB speed: 31.6 Gb/s lanes: 4 
           serial: <filter> rev: 11120000 scheme: GPT 
Partition: ID-1: / size: 91.17 GiB used: 27.78 GiB (30.5%) fs: ext4 dev: /dev/nvme0n1p7 
           ID-2: /home size: 308.37 GiB used: 110.44 GiB (35.8%) fs: ext4 dev: /dev/nvme0n1p8 
Sensors:   System Temperatures: cpu: 35.0 C mobo: N/A gpu: nouveau temp: 34 C 
           Fan Speeds (RPM): N/A 
{% endhighlight %}
