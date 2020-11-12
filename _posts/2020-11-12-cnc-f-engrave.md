---
published: true
title: F-Engrave
tags: cnc wood
---
> F-Engrave is a text or image to g-code program (for both engraving and v-carving). - [Home](https://www.scorchworks.com/Fengrave/fengrave.html)

# [Install](https://gnipsel.com/fengrave/fengrave01.html)
** The last thing before trying to run fengrave on linux is to change the line endings from DOS to Unix.** 
{% highlight cpp %}
$ sed -i.bak 's/\r$//' fengrave
{% endhighlight %}

### [POTrace](https://gnipsel.com/fengrave/fengrave01.html#step9)
{% highlight cpp %}
$ sudo apt-get install potrace
{% endhighlight %}

### [TTF2CXF_STREAM](https://gnipsel.com/fengrave/fengrave01.html#step8)
{% highlight cpp %}
$ sudo apt-get install libfreetype6-dev
$ cd TTF2CXF_STREAM # in f-engrave directory
$ sudo make install
# test
$ ttf2cxf_stream
{% endhighlight %}

### [Fonts](https://gnipsel.com/fengrave/fengrave01.html#step10)
First you want to create a font directory in the fengrave directory to keep your fonts in.

{% highlight cpp %}
$ mkdir fonts
{% endhighlight %}