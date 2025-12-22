---
published: true
title: "ASUS ZenBook UX305UA (2016)  \U0001F4BB"
tags: pc-hardware laptop
excerpt_separator: <!--more-->
toc: true
---
<!--more-->
[![caption](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.klikglodok.com%2Ftoko%2Fimg%2Fcms%2FASUS%2FAsus%2520LaptopNotebook%2Fharga-asus-zenbook-ux305ua-fc003t-notebook-core-i5-4gb-256gb-windows-10.jpg&f=1&nofb=1&ipt=42a41695bc255c27096a4ef06c11b50ed30cb5b7012fbe502a07ef345d4401e2&ipo=images)](https://www.ultrabookreview.com/10058-asus-zenbook-ux305ua-review/)

## [Bios](https://www.asus.com/us/Laptops/ASUS-ZenBook-UX305UA/HelpDesk_BIOS/) version 201 - 2016 / 1200€

# Linux support
- [ASUS Zenbook UX305](https://wiki.archlinux.org/title/ASUS_Zenbook_UX305)
- [DebuggingTouchpadDetection](https://wiki.ubuntu.com/DebuggingTouchpadDetection) / [touchpad](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1535085)
- [Linux Suspend issue](#suspend-issue)

## [Spec](https://www.ultrabookreview.com/10058-asus-zenbook-ux305ua-review/)
- Core i7-6500U (2 cores / 4 threads) 
- Integrated Intel HD 520
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


## Suspend issue

Solving Asus issue (going out of suspend restart computer)

1. - shudtown linux properly: 
This is very important and has to be done has part of the stabilisation process.
2. - restart
3. - login
4. - press power => choose suspend
5. - wait for suspend to happens
6. - press power => should wake up

---
If it works:
7. - close lid
8. - wait suspend
9. - open lid
10. - should wake up

see also
- [DebuggingKernelSuspend ](https://wiki.ubuntu.com/DebuggingKernelSuspend)

# [Tear down](https://www.youtube.com/watch?v=vmeI6oikaIQ)

**Notes** 
- There are 2 screw hidden behind the 2 foots close to the screen lead.
- use a suck
- [disconnect battery](https://youtu.be/XoYK6obhu6E?si=-W2VDG0sGSb5cQzO&t=293) to avoid short circuit
	- metal latch slide back
    - afterwhat you slide plastic connect up
- the fanboard is interleaved with the main board and tapped to the rad.
	- you have to unscrew mainboard to access the fan
- keyboard / pad (just lift up black part) to unlock ribbon cable
- [fan](https://www.youtube.com/watch?v=BpS7dxr7q7E) greasing
- [**screen* disconnect**](https://youtu.be/XoYK6obhu6E?si=W5zJm5hdJq3ZmO0r&t=392)
	- disconnect the battery
    - open the laptop and press power button to discharge power 
    - <span style="color:red">**otherwise** removal of connector can spark and damage it.</span>
    - lift up to disconnect the screen connector

## Hardware info

{% highlight bash %}
$ inxi -Fxxxrnz

System:    Kernel: 5.11.0-34-generic x86_64 bits: 64 compiler: N/A Desktop: Cinnamon 5.0.7 wm: muffin dm: LightDM 1.30.0
           Distro: Linux Mint 20.2 Uma base: Ubuntu 20.04 focal
Machine:   Type: Laptop System: ASUSTeK product: UX305UA v: 1.0 serial: <filter>
           Mobo: ASUSTeK model: UX305UA v: 1.0 serial: <filter> UEFI: American Megatrends v: UX305UA.201 date: 10/12/2015
Battery:   ID-1: BAT0 charge: 29.3 Wh condition: 32.5/56.0 Wh (58%) volts: 11.3/11.3 model: ASUSTeK ASUS Battery type: Li-ion
           serial: <filter> status: Discharging cycles: 666
CPU:       Topology: Dual Core model: Intel Core i7-6500U bits: 64 type: MT MCP arch: Skylake rev: 3 L2 cache: 4096 KiB
           flags: avx avx2 lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx bogomips: 20799
           Speed: 3038 MHz min/max: 400/3100 MHz Core speeds (MHz): 1: 3000 2: 3000 3: 3000 4: 3000
Graphics:  Device-1: Intel Skylake GT2 [HD Graphics 520] vendor: ASUSTeK driver: i915 v: kernel bus ID: 00:02.0
           chip ID: 8086:1916
           Display: x11 server: X.Org 1.20.11 driver: modesetting unloaded: fbdev,vesa resolution: 1920x1080~60Hz
           OpenGL: renderer: Mesa Intel HD Graphics 520 (SKL GT2) v: 4.6 Mesa 21.0.3 direct render: Yes
Audio:     Device-1: Intel Sunrise Point-LP HD Audio vendor: ASUSTeK driver: snd_hda_intel v: kernel bus ID: 00:1f.3
           chip ID: 8086:9d70
           Sound Server: ALSA v: k5.11.0-34-generic
Network:   Device-1: Intel Wireless 7265 driver: iwlwifi v: kernel port: f040 bus ID: 02:00.0 chip ID: 8086:095a
           IF: wlp2s0 state: up mac: <filter>
           Device-2: ASIX AX88179 Gigabit Ethernet type: USB driver: ax88179_178a bus ID: 1-3:4 chip ID: 0b95:1790
           serial: <filter>
           IF: enx000ec6cf636e state: up speed: 1000 Mbps duplex: full mac: <filter>
           IF-ID-1: docker0 state: down mac: <filter>
Drives:    Local Storage: total: 476.94 GiB used: 218.40 GiB (45.8%)
           ID-1: /dev/sda vendor: SK Hynix model: HFS512G39MND-3510A size: 476.94 GiB speed: 6.0 Gb/s serial: <filter>
           rev: 0P00 scheme: GPT
Partition: ID-1: / size: 43.66 GiB used: 39.15 GiB (89.7%) fs: ext4 dev: /dev/sda4
           ID-2: /home size: 281.55 GiB used: 179.22 GiB (63.7%) fs: ext4 dev: /dev/sda7
Sensors:   System Temperatures: cpu: 53.0 C mobo: N/A
           Fan Speeds (RPM): cpu: 4100 
{% endhighlight %}
