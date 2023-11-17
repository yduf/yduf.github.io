---
published: true
title: Pipewire (linux audio)
tags: linux-system audio audio-hardware
---
> PipeWire has a better vibe than Pulseaudio did. It intends to replace a system that never worked flawlessly, seems to focus on compatibility, and the apparent endorsement from the [JACK]({% post_url 2017-06-09-Linux-Audio %})-developers also does not hurt. - [PipeWire Overview](https://docs.pipewire.org/page_overview.html) / [lwn](https://lwn.net/SubscriberLink/847412/d7826b1353e33734/) / [HN](https://news.ycombinator.com/item?id=26329027)

### [How to Use PipeWire to replace PulseAudio in Ubuntu 22.04](https://ubuntuhandbook.org/index.php/2022/04/pipewire-replace-pulseaudio-ubuntu-2204/)

Pipewire is pre-installed out-of-the-box, and runs as background service automatically. ([Ubuntu 22.10 Makes PipeWire Default for Audio][https://www.omgubuntu.co.uk/2022/05/ubuntu-22-10-makes-pipewire-default])

You may check it out by running command below in terminal:

{% highlight bash %}
systemctl --user status pipewire pipewire-session-manager
{% endhighlight %}

Though available out-of-the-box, it’s not in use by default for audio output.

So need to [follow this ](https://ubuntuhandbook.org/index.php/2022/04/pipewire-replace-pulseaudio-ubuntu-2204/)

{% highlight bash %}
# install 
sudo apt install pipewire-audio-client-libraries libspa-0.2-bluetooth libspa-0.2-jack
sudo apt install wireplumber pipewire-media-session-

# switch config
sudo cp /usr/share/doc/pipewire/examples/alsa.conf.d/99-pipewire-default.conf /etc/alsa/conf.d/
sudo cp /usr/share/doc/pipewire/examples/ld.so.conf.d/pipewire-jack-*.conf /etc/ld.so.conf.d/
sudo ldconfig

sudo apt remove pulseaudio-module-bluetooth
{% endhighlight %}

### Previously

- [How to replace pulseaudio with pipewire on Ubuntu 21.04?](https://askubuntu.com/questions/1333404/how-to-replace-pulseaudio-with-pipewire-on-ubuntu-21-04)
	- [I used the instructions here works flawlessly.](https://pipewire-debian.github.io/pipewire-debian/)
- [Switching to PipeWire](https://feaneron.com/2020/12/07/switching-to-pipewire/)
- [using pipewire](https://www.reddit.com/r/linux_gaming/comments/kvtc9h/pipewire_quiestion/)
- [Unifying Audio with Pipewire](http://adam.younglogic.com/2021/04/unifying-audio-with-pipewire/)
