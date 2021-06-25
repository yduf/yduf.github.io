---
published: true
title: Toltec
tags: remarkable package
---
> Toltec is a repository of unofficial applications for the reMarkable tablet, similar to Homebrew for Mac or Linux. - [Home](https://toltec-dev.org/) / [github](https://github.com/toltec-dev/toltec)

Toltec works on top of the [Opkg](https://code.google.com/archive/p/opkg/) package manager and the [Entware](https://github.com/Entware/Entware) distribution, which are in widespread use in embedded devices.

## [Install](https://github.com/toltec-dev/toltec#install-it)

[rm2](https://discord.com/channels/385916768696139794/386181213699702786/857677724863954954) /opt/etc/opkg.conf
{% highlight cpp %}
arch rm2 250
src/gz toltec-rm2 https://toltec-dev.org/testing/rm2
src/gz toltec-rmall https://toltec-dev.org/testing/rmall
{% endhighlight %}

and `opkg update && opkg upgrade`

##  [Package Listing](https://toltec-dev.org/stable/)
> This script is used to install entware on the device, and get it set up with the toltec repository. - [Install toltec](https://eeems.website/toltec/)

{% highlight bash %}
INFO:  Adding /opt/bin and /opt/sbin to your PATH
INFO:  Please run '. $HOME/.bashrc' to use Toltec
INFO:  Use '/home/root/entware-reenable' to re-enable Toltec after a system update

opkg install <application>  
opkg remove <application>
{% endhighlight %}

Opkg gives access to [entware package](http://pkg.entware.net/binaries/armv7/Packages.html) as well
  
- [evidlo/remarkable_entware](https://github.com/evidlo/remarkable_entware) - a lightweight package manager and software repo for embedded devices. [list of available packages](http://bin.entware.net/armv7sf-k3.2/)
