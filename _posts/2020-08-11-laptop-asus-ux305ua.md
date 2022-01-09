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
