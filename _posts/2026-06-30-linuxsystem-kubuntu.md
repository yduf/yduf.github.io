---
title: Kubuntu 🧿
tags: linux-system ubuntu linux-desktop 
toc: true
---
> [Home](https://kubuntu.org/)

<link rel="shortcut icon" href="https://kubuntu.org/images/favicon.ico" type="image/x-icon" />

[![screenshot](https://kubuntu.org/images/home/launcher.png)](https://kubuntu.org/)

# [Kubuntu 26.04 LTS - Plasma 6 ⮺](https://kubuntu.org/download/)

<div class="encart blue" markdown="1">
[Running Wayland](https://chatgpt.com/share/6a48d6c0-4eb4-83ed-8f03-4384e213d041) 
</div>

_Building on the Ubuntu 26.04 LTS base released today by Canonical, Kubuntu 26.04 introduces [Plasma 6.6](https://kde.org/fr/plasma-desktop/) as the flagship desktop environment, alongside Qt 6.10.2, KDE Frameworks 6.24.0, and the latest KDE Gear 25.12.3 application suite. We’ve also upgraded to Linux kernel 7.0 for enhanced hardware support and performance. Whether you’re a developer, creator, or everyday user, this release emphasises Wayland maturity, modern security, and seamless integration with the open source world._

Planed to power [GPD Pocket 3]({% post_url 2026-06-27-mini-laptop-hardware-FR-GPD-Pocket-3 %})

## UI

### [Virtual Desktop ⮺](https://chatgpt.com/share/6a48d3e6-1650-83eb-bbf7-2ca04739019e)



## [Dolphin ⮺](https://kubuntu.org/discover/)

Dolphin is the default file Manager.

## [KDE Connect  ⮺]({% post_url 2024-09-02-zero-knowledge-proof %})

Is available from the start and can be use to share/control phone

## [Remote Desktop (RDP) ⮺ 🚧 ](https://chatgpt.com/share/6a48df68-c09c-83eb-aa24-c80c3e716e3b)

<div class="encart orange" markdown="1">
Want to access your actual running desktop on Wayland?  
→ Use KDE Remote Desktop (KRDP)  
Want maximum compatibility / older setup / separate session?  
→ Use xrdp  
</div>

### Xrdp

Instll xrdp

{% highlight bash %}
$ sudo apt install xrdp
$ sudo adduser xrdp ssl-cert
{% endhighlight %}

Make sure a x11 session is configured
Otherwise connection will established but [failed when opening session](https://chatgpt.com/share/6a48ded4-de98-83eb-8506-479f7d167367)


Install Remmmina (client)

{% highlight bash %}
$ sudo apt install remmina

# then connect through UI App
{% endhighlight %}

This should now work, except that no desktop session is started (only minimal with terminal)
To Fix it=> explicitly force Plasma to start.

{% highlight bash %}
$ sudo apt install xrdp xorgxrdp dbus-x11 plasma-workspace kde-plasma-desktop
$ sudo apt install xserver-xorg-core

# we will fallback on xfce for this setup
$ sudo apt install xrdp xfce4 xfce4-goodies xauth
{% endhighlight %}

And override default session in `~/.xsession` by
{% highlight bash %}
#!/bin/sh
export XAUTHORITY=$HOME/.Xauthority

/usr/bin/startxfce4 >> .xsession-errors
{% endhighlight %}


Now you can connect remotely
{% highlight bash %}
# On server => enable it once
$ sudo systemctl enable --now xrdp

# on Client
# usign watch because xrdp server take some time to be ready
$ watch xfreerdp /v:yves-pocket.home /u:yves /cert:ignore /size:1920x1080

# or using remmina
{% endhighlight %}


#### Troubleshooting

<div class="encart blue" markdown="1">
Chatgpt doesn't like using .xsession, but it's better than messing up with  /etc/xrdp/startwm.sh 
</div>

Logs

{% highlight bash %}
$ cat /var/log/xrdp-sesman.log
$ cat .xsession-errors 
{% endhighlight %}

script involved
{% highlight bash %}
$ cat ~/.xsession
$ cat /etc/xrdp/startwm.sh # redirect to .xsession
{% endhighlight %}

### Krdp 

<div class="encart blue" markdown="1">
It works only from an other KDE desktop (eg not from Mint)
</div>

Install KDE’s Wayland RDP server

{% highlight bash %}
$ sudo apt install krdp

# logout
# This will provide => remote desktop in System settings
# make sure to **enable RDP server** in config
{% endhighlight %}


{% highlight bash %}
$ sudo apt install krdp

# logout
# This will provide => remote desktop in System settings
# make sure to **enable RDP server** in config
{% endhighlight %}


