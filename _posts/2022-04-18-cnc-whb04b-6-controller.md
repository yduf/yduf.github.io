---
published: true
title: WHB04B-6 CNC controller
tags: cnc remote
toc: true
---
> 6 Axis USB Mach3 Wireless Handwheel Controller - [Merci Fred!](https://www.nvcnc.net/WHB04B-handwheel.html) / [manual](https://www.manualslib.com/download/3088113/Xhc-Whb04b-6.html) / [linuxcnc](https://www.linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html)

see also
- [github](https://github.com/LinuxCNC/linuxcnc/tree/master/src/hal/user_comps/xhc-whb04b-6#xhc-whb04b-6-pendant-component---developer-information)

![caption](https://www.nvcnc.net/wp-content/uploads/2021/06/whb04b.jpg)


## LinuxCNC setup

The program xhc-whb04b-6 is bundled with linuxcnc.

Verify that the device appears with `lsusb`

Then check that it is recognized
{% highlight bash %}
$ xhc-whb04b-6 -u # put you in interactive mode

# some output that will be triggered by event on the jog dial
# and the LCD should display selection
{% endhighlight %}

### [Hal configuration](https://www.linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html#HAL%20CONFIGURATION%20EXAMPLE)

Then Add the relevant part into your [.hal files](https://chatgpt.com/share/685fa697-df0c-800d-8ddb-54d5df53481b)
You can use the [example here](https://www.linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html#HAL%20CONFIGURATION%20EXAMPLE)

<details>
    <summary>hal sample</summary>

<pre>
### Hal File xhc_whb04b_6.hal Example
#
# ######################################################################
# load pendant components
# ######################################################################

loadusr -W xhc-whb04b-6 -HsfB

# ######################################################################
# pendant signal configuration
# ######################################################################

# On/Off signals
net machine.is-on halui.machine.is-on whb.halui.machine.is-on
net pdnt.machine.on whb.halui.machine.on halui.machine.on
net pdnt.machine.off whb.halui.machine.off halui.machine.off

...
</pre>

</details>





### Misc..?
- [XHC WHB04B LinuxCNC Setup](https://chatgpt.com/share/68279a3b-9748-800d-9017-746b663315ea)

- [linuxcnc](https://linuxcnc.org/docs/2.8/html/man/man1/xhc-whb04b-6.1.html) / [video](https://www.youtube.com/watch?v=2eGAj-_dNoA)
	-  So I tought for some unknown reason that this is the same device just like the XHC-HB04 but with 6 axes. But it is not. - [	WHB04B-6 Manual Pulse Coder ](https://forum.linuxcnc.org/10-advanced-configuration/32516-whb04b-6-manual-pulse-coder)
    - [2022 02 LinuxCNC WHB Pendant](https://www.youtube.com/watch?v=2s3nYbYNvNU) - setup ?

- [xhc-whb04b-6](https://github.com/rubienr/machinekit/blob/feature-xhc-whb04b-6/src/hal/user_comps/xhc-whb04b-6/README.md) - 

