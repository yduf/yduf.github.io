---
published: true
title: F-Engrave
tags: cnc wood CAM
---
> F-Engrave is a text or image to g-code program (for both engraving and v-carving). - [Home](https://www.scorchworks.com/Fengrave/fengrave.html)

# Demo
- [Prism Shaped Name Plate](http://www.scorchworks.com/Blog/prism-shaped-name-plate-for-kaitlyn/)

![caption](http://www.scorchworks.com/Fengrave/kaitlyn.jpg)

# [Tutorial](https://www.youtube.com/watch?v=1-QOwYEH1Dw) / [Doc](http://www.scorchworks.com/Fengrave/fengrave_doc.html)
- [V-Carving Tutorial](http://www.scorchworks.com/Fengrave/F-engrave_tutorial.htm)
- [How to Generate G-Code Using F-Engrave](https://www.youtube.com/watch?v=hbFEXYe7HGM)

# [Install](https://gnipsel.com/fengrave/fengrave01.html)

**The last thing before trying to run fengrave on linux is to change the line endings from DOS to Unix.** => is it usefull ?

{% highlight bash %}
$ sed -i.bak 's/\r$//' f-engrave.py
{% endhighlight %}

### [POTrace](https://gnipsel.com/fengrave/fengrave01.html#step9)
{% highlight cpp %}
$ sudo apt-get install potrace
{% endhighlight %}

### [TTF2CXF_STREAM](https://gnipsel.com/fengrave/fengrave01.html#step8)
{% highlight bash %}
$ sudo apt-get install libfreetype6-dev
$ cd TTF2CXF_STREAM # in f-engrave directory
$ sudo make install
# test
$ ttf2cxf_stream
{% endhighlight %}

### [Fonts](https://gnipsel.com/fengrave/fengrave01.html#step10)
First you want to create a font directory in the fengrave directory to keep your fonts in.

{% highlight bash %}
$ mkdir fonts
{% endhighlight %}
