---
title: Netdata
published: true
tags: monitoring disk
---
> My linux system regularly write data on disk, I don't expect this activity, how to find which process does that? - [ChatGPT](https://chatgpt.com/share/697f70de-e8dc-800d-bcdd-cc7e525c9306)

{% highlight bash %}
$ sudo iotop -oPa
{% endhighlight %}

**-o** → show only processes actually doing I/O  
**-P** → show per-process (not per-thread)  
**-a** → accumulate I/O over time

> netdata is a very common source of constant disk write

By default, netdata writes metrics to disk continuously (its internal database), even if you’re not actively viewing dashboards.

