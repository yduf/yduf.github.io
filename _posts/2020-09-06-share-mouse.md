---
published: true
title: Sharing mouse & keyboard between PC
tags: kvm display keyboard
---
> Share one mouse and keyboard between multiple computers  - [Barrier](https://github.com/debauchee/barrier#barrier) (fork of [Synergy](https://symless.com/synergy))

- [Using Barrier to Control Multiple PCs with One Keyboard and Mouse](https://www.rauchland.com/articles/using-barrier-to-control-multiple-pcs-with-one-keyboard-and-mouse/)

## [Building on Linux](https://github.com/debauchee/barrier/wiki/Building-on-Linux)

require
{% highlight bash %}
sudo apt-get install libcurl4-openssl-dev libavahi-compat-libdnssd-dev
{% endhighlight %}

Works perfectly from source version

## Feature
- clipboard sharing - enable copy/paste between PC
- screensaver sync
- [Immune keys](https://github.com/debauchee/barrier/wiki/Immune-Keys) - keys that Barrier will not forward to other PCs.
- start as [systemd service](https://github.com/debauchee/barrier/wiki/Command-Line#creating-a-systemd-service-linux)

### [Barrier as startup application](https://www.howtogeek.com/103640/how-to-make-programs-start-automatically-in-linux-mint-12/)

Launch directly the ui
{% highlight bash %}
/home/yves/app/barrier/barrier
{% endhighlight %}

For client config:
- give server ip
- unselect auto-config
- display name can be overriden and shared by several computer

![caption](https://i.imgur.com/WBUTSaV.png)

### [Barrier server as user service (per X11 session)](https://superuser.com/questions/759759/writing-a-service-that-depends-on-xorg/1128905#1128905) - ** NOT WORKING **

{% highlight bash %}
systemctl enable barrier@myuser.service
systemctl start barrier@myuser.service
{% endhighlight %}

Copy config below `.config/systemd/user/barrier.service`

{% highlight bash %}
[Unit]
Description=Barrier Client daemon

[Service]
ExecStart=/home/yves/app/barrier/barriers --no-daemon --no-restart --enable-crypto --display :0 --debug NOTE --config ~/.config/barrier.conf
Restart=always

[Install]
WantedBy=multi-user.target
{% endhighlight %}

## [Wayland ?]()
- [barrier support](https://github.com/debauchee/barrier/issues/109)

## Alternative
- [htrefil/rkvm](https://github.com/htrefil/rkvm) / [HN](https://news.ycombinator.com/item?id=24950817) - a tool for sharing keyboard and mouse across multiple Linux computers.
- [Best Synergy Alternative](https://rigorousthemes.com/blog/best-synergy-alternative/)
