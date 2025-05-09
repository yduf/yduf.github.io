---
title: Xpra
published: true
tags: remote display
---
> persistent remote display server and client for forwarding applications and desktop screens. - [Home](https://xpra.org/index.html) / [github](https://github.com/Xpra-org/xpra/?tab=readme-ov-file#about)

Xpra differs from standard X forwarding primarily in allowing disconnection and reconnection without disrupting the forwarded application. It also differs from VNC and similar remote display technologies in being rootless, so applications forwarded by Xpra appear on the local desktop as normal windows managed by the local window manager, rather than being all "trapped in a box together". - [wikipedia](https://en.wikipedia.org/wiki/Xpra)

### [Setup](https://bytexd.com/xpra/)

**Debian and Ubuntu also ships xpra packages, though their stable versions are completely out of date, broken and unsupported, they should not be used.** - [doc](https://github.com/Xpra-org/xpra/wiki/Distribution-Packages)

{% highlight bash %}
$ sudo micro /etc/apt/sources.list
# add
deb https://xpra.org/ noble main

$ wget -q https://xpra.org/gpg.asc -O- | sudo apt-key add -
$ sudo apt update
$ sudo apt install xpra
$ xpra --version
xpra v6.3-r0
{% endhighlight %}

### Using it

see [youtube](https://www.youtube.com/watch?v=2iBMsyfbC28&t=609s) for a demo

**on host**

{% highlight bash %}
$ xpra start :100		# start an empty desktop
$ DISPLAY=:100 freecad  # launch an application
{% endhighlight %}

**on client**
{% highlight bash %}
$ xpra attach ssh:yves-lab:100		# connect to it

$ xpra deattach ssh:yves-lab:100	# appication is still there
{% endhighlight %}

## Troubleshooting

Start in direct mode (no-daemon)
{% highlight bash %}
$ xpra start :100 --daemon=no
{% endhighlight %}



