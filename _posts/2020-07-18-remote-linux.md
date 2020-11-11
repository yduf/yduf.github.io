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

vnc config + use this [systemctl service](https://forums.fedoraforum.org/showthread.php?311448-Issue-with-setting-up-VNC-Server-as-service-on-Fedora-24-or-above&p=1781244#post1781244)

Once vncserver start verify socket:
{% highlight bash %}
$ lsof -P -i
COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
Xtigervnc 6618 yves    7u  IPv4  67906      0t0  TCP localhost:5901 (LISTEN)
Xtigervnc 6618 yves    8u  IPv6  67907      0t0  TCP localhost:5901 (LISTEN)
{% endhighlight %}

> Xtigervnc may be listening only on the loopback ("localhost") interface - that's a good thing from a security POV however it means you will need to set up an SSH tunnel in order to connect to it from another host  - [Connection Refused](https://askubuntu.com/questions/1209147/tigervncviewer-unable-to-connect-to-socket-connection-refused-10061)

