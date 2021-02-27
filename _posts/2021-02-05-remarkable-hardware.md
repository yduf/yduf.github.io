---
published: true
title: reMarkable Hardware
tags: remarkable hardware arm
---
## [Hardware (rM2)](https://remarkable.com/store/remarkable-2) / [Photos](https://www.reddit.com/r/RemarkableTablet/comments/kcqzdy/broke_my_remarkable_2_it_was_knocked_off_the/)
[Spec](https://remarkable.com/#Specifications) 
- 1.2 GHz dual core [ARMv7 Processor rev 5 (v7l)](https://remarkablewiki.com/tech/spe)
- Features: half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm
- 1 GB LPDDR3 SDRAM
- 8 GB internal storage
- 10.3” monochrome 1872 x 1404 resolution (226 DPI)
- Wi-Fi 2.4GHz and 5GHz
- USB-C
- Accessory port - [Pogo connector](https://www.reddit.com/r/RemarkableTablet/comments/j9g1d5/rm2_with_an_external_keyboard_accessory_port_usage/) - dot on left side is in fact a [host usb connector](https://imgur.com/gallery/TRuN0jc).

## [Display](https://remarkablewiki.com/tech/rm2_framebuffer)
The rm2 does not use the embedded epdc (Electronic Paper Display Controller) of the imx7. Instead the e-Ink display is connected directly to the LCD controller. This means all stuff that the epdc would normally do is now done in software... The software that implements the epdc in software is called SWTCON by the reMarkable team. It's closed sources.

The current workaround to get rm1 apps working on the rm2 is using the [remarkable2-framebuffer](https://github.com/ddvk/remarkable2-framebuffer) project.


## USB Ethernet interface
### Remarkable rM2 device
{% highlight bash %}
Bus 001 Device 019: ID 04b3:4010 IBM Corp.
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
## [10.11.99.1 not reachable](https://remarkablewiki.com/tech/ssh#fedora_33)
Usb is recognized (dmesg similar to above) but no working ethernet interface associated or the link is down.

=> This is because of network change I made to define a static ip for thist host. see [network]({% post_url 2017-07-16-network %}). 

- when using networkd, an interface is created but down and not properly setup.
- when using NetworkManager no interface is created unless explicitly authorized:

{% highlight bash %}
network:
  ethernets:
    # remarkable
    enxa29094bedecc:
     dhcp4: yes
{% endhighlight %}

### Manual [Workaround to resolve this (not persistant)](https://www.howtogeek.com/657911/how-to-use-the-ip-command-on-linux/).

**Host** must have a different ip (10.11.99.2) than remarkable which  must be the **gateway** (10.11.99.1) with routing different the **default**

{% highlight bash %}
sudo ip addr add 10.11.99.2/8 dev enxa29094bedecc
sudo ip link set enxa29094bedecc up
sudo ip route delete default via 10.11.99.2 dev enxa29094bedecc
sudo ip route add 10.11.99.1/8 dev enxa29094bedecc metric 100
{% endhighlight %}

### Additional issue only public key available for this pc ?
I had messed up the network config for the remarkable (host ip vs gateway). so ssh root@10.11.99.1 brougth me back to the host - _not the remarkable_ -, and the host has password authentication disabled.

{% highlight cpp %}
ssh -v -v -v -o PreferredAuthentications=password -o PubkeyAuthentication=no root@10.11.99.1 
{% endhighlight %}


## Resources
- [reMarkable2 Teardown Guide](https://www.reddit.com/r/RemarkableTablet/comments/l0vq8f/remarkable2_teardown_guide/)
  	- [reMarkable2 Button Stuck in Pressed Position Repair Guide](https://www.reddit.com/r/RemarkableTablet/comments/l0x9y6/remarkable2_button_stuck_in_pressed_position/)
- [reMarkable microSD](http://www.davisr.me/projects/remarkable-microsd/)
- [reMarkable2 Teardown](https://fccid.io/2AMK2-RM110/Internal-Photos/Internal-photos-4523960)
