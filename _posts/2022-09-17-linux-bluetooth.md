---
published: true
title: Bluetooth
tags: bluetooth
---
> 

## Troubleshooting

{% highlight bash %}
$ dmesg | grep -i blue     # check module
$ hciconfig -a            # hardware details
{% endhighlight %}

{% highlight bash %}
$ bluetoothctl
[bluetooth]# menu scan
[bluetooth]# clear
[bluetooth]# transport le
[bluetooth]# duplicate-data on
[bluetooth]# back
[bluetooth]# scan on
{% endhighlight %}

## linux Bluetooth **BlueZ**

{% highlight bash %}
sudo apt-get install bluetooth bluez libbluetooth-dev
sudo apt-get install  libbluetooth3-dbg # Library to use the BlueZ Linux Bluetooth stack with debugging symbols
{% endhighlight %}

### [Set scan parameters failed: Input/output error](https://stackoverflow.com/questions/60668497/hcitool-lescan-set-scan-parameters-failed-input-output-error?noredirect=1)
