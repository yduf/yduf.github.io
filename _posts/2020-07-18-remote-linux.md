---
published: true
title: Remote linux (rdp)
tags: linux remote desktop rdp
---
> using vinagre - [Best VNC Viewer Clients For Linux](https://www.poftut.com/best-vnc-viewer-clients-linux/)

- [remmmina](https://remmina.org/)
	- sudo apt install remmina remmina-plugin-rdp remmina remmina-plugin-vnc
- [vinagre](https://wiki.gnome.org/Apps/Vinagre)

Enable vino / desktop sharing on other side

## [Xfce VNC remote desktop](https://serverok.in/install-xfce-vnc-remote-desktop-on-ubuntu)

{% highlight bash %}
$ sudo apt install -y vnc4server
$ vncpasswd
{% endhighlight %}

vnc config + systemctl service