---
published: true
title: Sharing mouse & keyboard between PC
tags: kvm display keyboard
---
> Share one mouse and keyboard between multiple computers  - [Barrier](https://github.com/debauchee/barrier#barrier) (fork of [Synergy](https://symless.com/synergy))

- [Using Barrier to Control Multiple PCs with One Keyboard and Mouse](https://www.rauchland.com/articles/using-barrier-to-control-multiple-pcs-with-one-keyboard-and-mouse/)


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

### Troubleshoot

if launching twice the application/server you will got this kind of message (which may be confusing), due to port being already used:
{% highlight bash %}
Qt: Session management error: Could not open network socket
*** WARNING *** The program 'barrier' called 'DNSServiceRegister()' which is not supported (or only supported partially) in the Apple Bonjour compatibility layer of Avahi.
*** WARNING *** Please fix your application to use the native API of Avahi!
*** WARNING *** For more information see <http://0pointer.de/blog/projects/avahi-compat.html>
{% endhighlight %}


## [Wayland ?]()
- [barrier support](https://github.com/debauchee/barrier/issues/109)

## Alternative
- [htrefil/rkvm](https://github.com/htrefil/rkvm) / [HN](https://news.ycombinator.com/item?id=24950817) - a tool for sharing keyboard and mouse across multiple Linux computers.
- [Best Synergy Alternative](https://rigorousthemes.com/blog/best-synergy-alternative/)


## [Building on Linux](https://github.com/debauchee/barrier/wiki/Building-on-Linux)

require
{% highlight bash %}
$ sudo apt update && sudo apt upgrade
$ sudo apt install git cmake make xorg-dev g++ libcurl4-openssl-dev \
                 libavahi-compat-libdnssd-dev libssl-dev libx11-dev \
                 qtbase5-dev
$ sudo apt install libxtst-dev	# missing from doc
{% endhighlight %}

Works perfectly from source version

{% highlight bash %}
$ git clone https://github.com/debauchee/barrier.git
# this builds from master,
# you can get release tarballs instead
# if you want to build from a specific tag/release
$ cd barrier
$ git submodule update --init --recursive
$ ./clean_build.sh
$ cd build
$ sudo make install # install to /usr/local/
{% endhighlight %}

## [Packaging as an AppImage](https://appimage-builder.readthedocs.io/en/latest/intro/tutorial.html)  - ** NOT COMPLETE **

{% highlight bash %}
# build as above, 
# then install into 'AppDir'
$ cd build
$ make install DESTDIR=../AppDir
# test that the application still work from AppDir/xx/bin/yy
# run recipe generation assistant in parent folder containing AppDir
$ appimage-builder --generate
# this generate a AppImageBuilder.yml recipe in parent folder
# then build the AppImage
$ appimage-builder --skip-tests
{% endhighlight %}
