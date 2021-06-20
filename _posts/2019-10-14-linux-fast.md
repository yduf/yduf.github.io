---
published: true
title: Make Linux run blazing fast (again)
tags: linux-system kernel security
---
> If you're not into currency trading or high finance or military contracting or anything of that nature and you'd just like to get maximum performance for your Steam games then adding this is simple switch to your kernel parameters will leave you wide open to all the security risks for maximum excitement and squeeze back every bit of performance you used to get from your Intel CPU: **mitigations=off** - [linuxreview.org](https://linuxreviews.org/HOWTO_make_Linux_run_blazing_fast_(again)_on_Intel_CPUs)

- [Disable Spectre and Meltdown mitigations](https://unix.stackexchange.com/a/554922/192991)
- [Spectre mitigations murder userspace performance](https://news.ycombinator.com/item?id=27559795)

## [Checking vulnerability](https://linuxreviews.org/HOWTO_make_Linux_run_blazing_fast_(again)_on_Intel_CPUs)
{% highlight bash %}
grep -H '' /sys/devices/system/cpu/vulnerabilities/*
{% endhighlight %}

## [How to disable mitigations](https://sleeplessbeastie.eu/2020/03/27/how-to-disable-mitigations-for-cpu-vulnerabilities/)

Edit `/etc/default/grub` 
{% highlight bash %}
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash mitigations=off"
{% endhighlight %}

{% highlight bash %}
$ sudo update-grub
{% endhighlight %}
