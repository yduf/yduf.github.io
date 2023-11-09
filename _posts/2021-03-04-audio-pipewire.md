---
published: true
title: Pipewire (linux audio)
tags: linux-system audio audio-hardware
---
> PipeWire has a better vibe than Pulseaudio did. It intends to replace a system that never worked flawlessly, seems to focus on compatibility, and the apparent endorsement from the [JACK]({% post_url 2017-06-09-Linux-Audio %})-developers also does not hurt. - [PipeWire Overview](https://docs.pipewire.org/page_overview.html) / [lwn](https://lwn.net/SubscriberLink/847412/d7826b1353e33734/) / [HN](https://news.ycombinator.com/item?id=26329027)

- [How to Use PipeWire to replace PulseAudio in Ubuntu 22.04](https://ubuntuhandbook.org/index.php/2022/04/pipewire-replace-pulseaudio-ubuntu-2204/) - Pipewire is pre-installed out-of-the-box, and runs as background service automatically. 

You may check it out by running command below in terminal:

{% highlight bash %}
systemctl --user status pipewire pipewire-session-manager
{% endhighlight %}


- [How to replace pulseaudio with pipewire on Ubuntu 21.04?](https://askubuntu.com/questions/1333404/how-to-replace-pulseaudio-with-pipewire-on-ubuntu-21-04)
	- [I used the instructions here works flawlessly.](https://pipewire-debian.github.io/pipewire-debian/)
- [Switching to PipeWire](https://feaneron.com/2020/12/07/switching-to-pipewire/)
- [using pipewire](https://www.reddit.com/r/linux_gaming/comments/kvtc9h/pipewire_quiestion/)
- [Unifying Audio with Pipewire](http://adam.younglogic.com/2021/04/unifying-audio-with-pipewire/)
