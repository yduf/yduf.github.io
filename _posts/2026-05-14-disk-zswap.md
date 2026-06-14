---
title: zswap
tags: disk linux-system
excerpt_separator: <!--more-->
---
> If in doubt, prefer to use zswap.  <!--more-->
> zswap sits in front of your disk swap, compresses pages in RAM, and automatically tiers cold data to disk. It integrates directly with the kernel's memory management and distributes pressure gracefully. - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html) / [HN](https://news.ycombinator.com/item?id=47500746) / [chatgpt](https://chatgpt.com/share/6a0626ef-7e60-83eb-afd7-494ab5cd1503)


{% highlight bash %}
# check if activated
cat /sys/module/zswap/parameters/enabled # Y => enabled
{% endhighlight %}