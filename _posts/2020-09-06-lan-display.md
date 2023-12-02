---
published: true
title: Extend Desktop to Monitor over LAN
tags: lan display kvm vnc
---
>  multi-head functionality for displays that might be located on different machines.

## Using VNC

- [Old Laptops as Secondary Monitors](https://rgoswami.me/posts/laptop-as-second-screens/) / [HN](https://news.ycombinator.com/item?id=24875533)

## [Distributed Multihead X Project (DMX)](http://dmx.sourceforge.net/) - Not Working

- [Multihead display using Xdmx](https://codeyarns.com/2015/07/02/multihead-display-using-xdmx/)
- [9 Screen Wall 1](https://nurdspace.nl/9_Screen_Wall_1)
- [Distributed multihead support with Linux and Xdmx](https://www.ibm.com/developerworks/library/os-mltihed/index.html)

### [Getting Started with DMX](http://dmx.sourceforge.net/dmx-start.html)

{% highlight cpp %}
sudo apt-get install xdmx
{% endhighlight %}

- [X11 fowarding](https://www.linuxquestions.org/questions/linux-networking-3/ssh-x-cannot-open-display-925852/)

{% highlight cpp %}
ssh -X 
{% endhighlight %}


=> X11 forwarding working

{% highlight cpp %}
Xdmx :1 -display :0 -display :10.0 +xinerama
{% endhighlight %}

=> Black screen on both computer

{% highlight cpp %}
ssh -X 
Xdmx :1 -display :0  +xinerama
{% endhighlight %}

=> Black screen on master computer

### Issue

GLX issue with cinammon ?
- [Xdmx GL](https://bbs.archlinux.org/viewtopic.php?id=252376)
	- [how to install xdmx on Arch](https://bbs.archlinux.org/viewtopic.php?id=251808)

- [xdmx multimonitor setup](https://askubuntu.com/questions/530130/xdmx-multimonitor-setup)

## Refs
- [Distributed Multihead X design](http://dmx.sourceforge.net/dmx.html)
	- [pdf](http://www.xfree86.org/current/dmx.pdf)
