---
published: true
title: Hardware info
tags: linux system hardware audio usb
---
> Using [inxi] to retrieve hardware info - [maketecheasier](https://www.maketecheasier.com/check-hardware-information-linux/)

## Motherboard
{% highlight bash %}
inxi -SMA
{% endhighlight %}

output
{% highlight yaml %}
System:    Host: yves-laptop Kernel: 5.4.0-42-generic x86_64 bits: 64 Desktop: Cinnamon 4.6.6 
           Distro: Linux Mint 20 Ulyana 
Machine:   Type: Laptop System: ASUSTeK product: UX305UA v: 1.0 
           serial: <superuser/root required> 
           Mobo: ASUSTeK model: UX305UA v: 1.0 serial: <superuser/root required> 
           UEFI: American Megatrends v: UX305UA.201 date: 10/12/2015 
Audio:     Device-1: Intel Sunrise Point-LP HD Audio driver: snd_hda_intel 
           Sound Server: ALSA v: k5.4.0-42-generic 
{% endhighlight %}

## [usb device]({% post_url 2021-02-13-lsusb %})

- [USB Cheat Sheet](https://fabiensanglard.net/usbcheat/index.html)

{% highlight bash %}
hwinfo --usb
{% endhighlight %}
