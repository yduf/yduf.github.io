---
published: true
title: Linux Audio
tags: linux kernel midi audio audio-hardware linux-hardware
---
> Audio applications are time-critical, so they need a preemptible (low latency) kernel with a 1000Hz timer frequency. - [Ted's Linux MIDI Guide](http://www.tedfelix.com/linux/linux-midi.html)

From [Ted's Linux MIDI Guide](http://www.tedfelix.com/linux/linux-midi.html)
To check whether you are running a low latency kernel, use uname:
{% highlight bash %}
$ uname -a
Linux yves-huv 6.2.0-36-generic #37~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Oct  9 15:34:04 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
{% endhighlight %}

The important thing to notice is _PREEMPT_DYNAMIC_. That means that I've got a preemptible kernel loaded. This means low latency.

Note: There are variations on PREEMPT that require a little more investigation:
- _PREEMPT_ means you have a kernel with full preemption and you are good. 
- _PREEMPT_DYNAMIC_ allows preemption to be turned on and off at boot time with the kernel's "preempt=" command line option. You'll need to check your GRUB configuration (grep CMDLINE /etc/default/grub) to make sure this is either set to "preempt=full" or not set at all (the default is "full"). You can check the setting (immediately) after boot with "sudo dmesg | grep preempt".

{% highlight bash %}
$ grep ^CONFIG_HZ /boot/config-`uname -r` # bash
CONFIG_HZ_250=y   # This is not good
CONFIG_HZ=250
{% endhighlight %}

We should have instead
{% highlight bash %}
$ grep ^CONFIG_HZ /boot/config-`uname -r`
CONFIG_HZ_1000=y
CONFIG_HZ=1000
{% endhighlight %}

==> Need to install a low latency kernel.
