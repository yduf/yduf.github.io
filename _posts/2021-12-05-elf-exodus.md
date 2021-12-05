---
published: true
title: Exodus
tags: elf lib
---
> a tool that makes it easy to successfully relocate Linux ELF binaries from one system to another. This is useful in situations where you don't have root access on a machine or where a package simply isn't available for a given Linux distribution. - [github](https://github.com/intoli/exodus) / [HN](https://news.ycombinator.com/item?id=29446297)


{% highlight bash %}
$ exodus htop | ssh target.com
{% endhighlight %}