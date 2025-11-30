---
title: WinApps
published: true
tags: docker windows
---
> Run Windows applications (including Microsoft 365 and Adobe Creative Cloud) on GNU/Linux with KDE Plasma, GNOME or XFCE, integrated seamlessly as if they were native to the OS. - [github](https://github.com/winapps-org/winapps/tree/main?tab=readme-ov-file#underlying-mechanism) / [HN](https://news.ycombinator.com/item?id=46045207)

## Install



[Write `~/.config/winapps/winapps.conf`](https://github.com/winapps-org/winapps/tree/main?tab=readme-ov-file#step-3-create-a-winapps-configuration-file)
{% highlight bash %}
# ~/.config/winapps/winapps.conf
RDP_USER=abc
RDP_PASS=xxx
... etc
{% endhighlight %}

{% highlight bash %}
$ git clone https://github.com/Fmstrat/winapps.git
$ cd winapps

# Launch installer
$ ./installer.sh --user
{% endhighlight %}