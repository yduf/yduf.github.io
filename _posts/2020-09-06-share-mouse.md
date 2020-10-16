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

{% highlight bash %}
systemctl enable barrier@myuser.service
systemctl start barrier@myuser.service
{% endhighlight %}

Copy config below `/lib/systemd/system/barrier@.service`

{% highlight bash %}
[Unit]
Description=Barrier Client daemon

[Service]
ExecStart=/home/yves/app/barrier/barriers --no-daemon --no-restart --enable-crypto --display :0 --debug NOTE --config ~/.config/barrier.conf
Restart=always

[Install]
WantedBy=multi-user.target
{% endhighlight %}

