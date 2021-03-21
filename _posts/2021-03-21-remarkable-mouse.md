---
published: true
title: Using remarkable as a Tablet
tags: remarkable mouse
---
- [remarkable_mouse](https://github.com/Evidlo/remarkable_mouse)

## Issue
- [** Huge CPU Spike with Krita **](https://github.com/Evidlo/remarkable_mouse/issues/47#issuecomment-803315971) - caused by unbuffered read
    
Change device to `/dev/input/event1` for [rM2](https://remarkablewiki.com/devel/handling_input) / There is a rM2 branch !

{% highlight python %}
python -m "remarkable_mouse.remarkable_mouse"     # for testing
pip install .                                     # install change
remouse                                           # use it
#
remouse --monitor 1 --mode fill --orientation left
{% endhighlight %}
