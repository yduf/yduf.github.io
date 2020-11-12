---
published: true
title: F-Engrave
tags: cnc wood
---
> F-Engrave is a text or image to g-code program (for both engraving and v-carving). - [Home](https://www.scorchworks.com/Fengrave/fengrave.html)

# [Install](https://gnipsel.com/fengrave/fengrave01.html)
### POTrace
{% highlight cpp %}
$ sudo apt-get install potrace
{% endhighlight %}

### TTF2CXF_STREAM
{% highlight cpp %}
$ sudo apt-get install libfreetype6-dev
$ cd TTF2CXF_STREAM # in f-engrave directory
$ sudo make install
# test
$ ttf2cxf_stream
{% endhighlight %}
