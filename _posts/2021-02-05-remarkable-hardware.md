---
published: true
title: reMarkable Hardware
tags: remarkable hardware
---
## [Hardware (rM2)](https://remarkable.com/store/remarkable-2) / [Photo](https://www.reddit.com/r/RemarkableTablet/comments/kcqzdy/broke_my_remarkable_2_it_was_knocked_off_the/)
[Spec](https://remarkable.com/#Specifications) 
- 1.2 GHz dual core ARM
- 1 GB LPDDR3 SDRAM
- 8 GB internal storage
- 10.3” monochrome 1872 x 1404 resolution (226 DPI)
- Wi-Fi 2.4GHz and 5GHz
- USB-C
- Accessory port - [Pogo connector](https://www.reddit.com/r/RemarkableTablet/comments/j9g1d5/rm2_with_an_external_keyboard_accessory_port_usage/) - dot on left side is in fact a [host usb connector](https://imgur.com/gallery/TRuN0jc).

## USB Ethernet interface
### Remarkable rM2 device
{% highlight bash %}
Bus 001 Device 019: ID 04b3:4010 IBM Corp.
{% endhighlight %}

### ifconfig
{% highlight bash %}
$ ifconfig
enxa694aafae4b6: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.11.99.3  netmask 255.255.255.248  broadcast 10.11.99.7
        inet6 fe80::3486:238c:64ee:51af  prefixlen 64  scopeid 0x20<link>
        ether a6:94:aa:fa:e4:b6  txqueuelen 1000  (Ethernet)
        RX packets 2  bytes 404 (404.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 42  bytes 8772 (8.7 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
{% endhighlight %}

### dmesg
{% highlight bash %}
[   82.766555] usb 3-2.2: new high-speed USB device number 8 using xhci_hcd
[   82.869459] usb 3-2.2: New USB device found, idVendor=04b3, idProduct=4010, bcdDevice= 4.14
[   82.869462] usb 3-2.2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[   82.869464] usb 3-2.2: Product: RNDIS/Ethernet Gadget
[   82.869465] usb 3-2.2: Manufacturer: Linux 4.14.78 with 30b20000.usb
[   82.917995] cdc_ether 3-2.2:1.0 usb0: register 'cdc_ether' at usb-0000:09:00.3-2.2, CDC Ethernet Device, a6:94:aa:fa:e4:b6
[   82.930455] cdc_ether 3-2.2:1.0 enxa694aafae4b6: renamed from usb0
{% endhighlight %}

Driver is cdc_ether
{% highlight bash %}
$ lsmod | grep cdc
cdc_ether              20480  0
usbnet                 45056  1 cdc_ether
{% endhighlight %}

# Issue
## 10.11.99.1 not reachable
Usb is recognized (dmesg similar to above) but no working ethernet interface associated.

`ifconfig` => nothing because interface is down
vs `ifconfig -a`
{% highlight bash %}
enxa694aafae4b6: flags=4098<BROADCAST,MULTICAST>  mtu 1500
        ether a6:94:aa:fa:e4:b6  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
{% endhighlight %}

vs `ip address show`
{% highlight bash %}
5: enxa694aafae4b6: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a6:94:aa:fa:e4:b6 brd ff:ff:ff:ff:ff:ff
{% endhighlight %}

For wathever reason, the link is down and no ipv4 is setup. [Workaround to resolve this (not persistant)](https://www.tecmint.com/ifconfig-command-examples/)
{% highlight bash %}
sudo ifconfig enxa694aafae4b6 up
sudo ifconfig enxa694aafae4b6 10.11.99.1
{% endhighlight %}

Followup/TODO => have a look at 
- [1](https://unix.stackexchange.com/questions/386162/how-to-set-up-an-usb-ethernet-interface-in-linux)
- [2](https://unix.stackexchange.com/questions/388300/udev-does-not-rename-usb-ethernet-device)
- [3](https://www.kernel.org/doc/html/v5.8/usb/gadget_multi.html)

## Resources
- [reMarkable2 Teardown Guide](https://www.reddit.com/r/RemarkableTablet/comments/l0vq8f/remarkable2_teardown_guide/)
  	- [reMarkable2 Button Stuck in Pressed Position Repair Guide](https://www.reddit.com/r/RemarkableTablet/comments/l0x9y6/remarkable2_button_stuck_in_pressed_position/)
- [reMarkable microSD](http://www.davisr.me/projects/remarkable-microsd/)
- [reMarkable2 Teardown](https://fccid.io/2AMK2-RM110/Internal-Photos/Internal-photos-4523960)
