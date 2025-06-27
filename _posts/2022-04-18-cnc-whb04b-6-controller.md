---
published: true
title: WHB04B-6 CNC controller
tags: cnc remote
---
> 6 Axis USB Mach3 Wireless Handwheel Controller - [Merci Fred!](https://www.nvcnc.net/WHB04B-handwheel.html) / [manual](https://www.manualslib.com/download/3088113/Xhc-Whb04b-6.html) / [linuxcnc](https://www.linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html)

see also
- [github](https://github.com/LinuxCNC/linuxcnc/tree/master/src/hal/user_comps/xhc-whb04b-6#xhc-whb04b-6-pendant-component---developer-information)
### LinuxCNC setup

The program xhc-whb04b-6 is bundled with linuxcnc.

Verify that the device appears with `lsusb`

Then check that it is recognized
{% highlight cpp %}
$ xhc-whb04b-6 -u # put you in interactive mode

# some output that will be triggered by event on the jog dial
# and the LCD should display selection
{% endhighlight %}

### Hal configuration

- [XHC WHB04B LinuxCNC Setup](https://chatgpt.com/share/68279a3b-9748-800d-9017-746b663315ea)

- [linuxcnc](https://linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html) / [video](https://www.youtube.com/watch?v=2eGAj-_dNoA)
	-  So I tought for some unknown reason that this is the same device just like the XHC-HB04 but with 6 axes. But it is not. - [	WHB04B-6 Manual Pulse Coder ](https://forum.linuxcnc.org/10-advanced-configuration/32516-whb04b-6-manual-pulse-coder)
    - [2022 02 LinuxCNC WHB Pendant](https://www.youtube.com/watch?v=2s3nYbYNvNU) - setup ?

- [xhc-whb04b-6](https://github.com/rubienr/machinekit/blob/feature-xhc-whb04b-6/src/hal/user_comps/xhc-whb04b-6/README.md) - 
![caption](https://www.nvcnc.net/wp-content/uploads/2021/06/whb04b.jpg)
