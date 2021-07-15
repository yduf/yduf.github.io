---
published: true
title: Digital Audio Workstation (DAW)
tags: DAW audio system
---
> Non is fast enough to run on low-end processors--while other DAWs require huge investments in hardware...  take full advantage of the power and flexibility of [JACK]({% post_url 2017-06-09-Linux-Audio %}). - [NON](https://non.tuxfamily.org/wiki/About)

- [Free and open-source software I use for music production](https://www.youtube.com/watch?v=qistxioVgMw)
	- [Ardour](https://ardour.org/)
    
## [Low latency Kernel](http://www.tedfelix.com/linux/linux-midi.html#installing-a-low-latency-kernel)

{% highlight bash %}
$ apt-cache search --names-only linux-lowlatency
$ sudo apt-get install linux-lowlatency-hwe-20.04 # from output above
{% endhighlight %}

## [audio group](http://www.tedfelix.com/linux/linux-midi.html#audio-group)

Create an audio group (so that user can benefits from the low latency kernel). Create audio group.

{% highlight bash %}
$ sudo apt-get install jackd2
{% endhighlight %}

Then don't forget to add yourself to that group.
next install [Pipewiare & Jack]({% post_url 2021-03-04-audio-pipewire %})

## [MIDI](http://www.tedfelix.com/linux/linux-midi.html#audio-group)

list MIDI controller
{% highlight bash %}
$ aconnect -i
{% endhighlight %}