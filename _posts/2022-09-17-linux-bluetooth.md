---
published: true
title: Bluetooth
tags: bluetooth
---
> 

## Troubleshooting

{% highlight bash %}
$ dmesg | grep -i blue

$  hciconfig -a
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

### [Set scan parameters failed: Input/output error](https://stackoverflow.com/questions/60668497/hcitool-lescan-set-scan-parameters-failed-input-output-error?noredirect=1)

