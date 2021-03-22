---
published: true
title: Using remarkable as a Tablet
tags: remarkable mouse kvm
---
- [remarkable_mouse](https://github.com/Evidlo/remarkable_mouse)

see also
- [Share devices over network]({% post_url 2021-03-21-sharing-device-over-net %})
- [Weylus](https://github.com/H-M-H/Weylus#weylus-as-second-screen) - turns your tablet or smart phone into a graphic tablet/touch screen for your computer

## Using device as Wacom tablet
- [Wacom Tablet on Linux with dual/multi-screen setup](https://uni.hi.is/helmut/2021/02/03/wacom-tablet-on-linux/)
- [Ubuntu Linux - Map Wacom to one screen when using multiple screens](https://feldspaten.org/2017/05/06/ubuntu-linux-map-wacom-to-one-screen-when-using-multiple-screens/)

## Issue
### [** Huge CPU Spike with Krita **](https://github.com/Evidlo/remarkable_mouse/issues/47#issuecomment-803315971) 

=> A process are launch in a while true loop to read remote device
    
Change device to `/dev/input/event1` for [rM2](https://remarkablewiki.com/devel/handling_input) / There is a rM2 branch !

{% highlight python %}
python -m "remarkable_mouse.remarkable_mouse"     # for testing
pip install .                                     # install change
remouse                                           # use it
#
remouse --monitor 1 --mode fill --orientation left
{% endhighlight %}

