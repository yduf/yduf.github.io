---
published: true
title: LCD Dashboard (Octoprint)
tags: 3dprinter lcd dashboard raspberry-pi
---
> OctoDash is a simple, but beautiful dashboard for OctoPrint. - [UnchartedBull/OctoDash](https://github.com/UnchartedBull/OctoDash)

see also [Octoprin Dashboard plugin]({% post_url 2017-09-24-Octoprint %})

![caption](https://raw.githubusercontent.com/TimonGaebelein/OctoprintDash/master/screenshots/file_loaded.png)

## Setup
From a fresh Octopie (tested on )
1. Install LCD35-Show (from alternative repos) [Ecran tactile 3,5 pouces (Pi)]({% post_url 2019-11-16-pi-lcd %})
1. use octodash install script
1. Display is not found by X11 and it need [even more packages](https://github.com/UnchartedBull/OctoDash/wiki/Troubleshooting#cannot-open-display-xinit-failing-)
{% highlight bash %}
$ sudo apt install raspberrypi-ui-mods
{% endhighlight %}

At this point when pi-reboot Octodash should show up
(The boot option must select autologin with CLI (see rasp-config boot/B2)).

1. [Touchscreen does not work](https://medium.com/@tengfone/setting-up-raspberry-pi-4-3-5-touch-screen-xpt2046-349e484a7813)
**Touchscreen may appear not working because axis are inverted.**

Once X11 is working (step above), from a ssh console do:
{% highlight bash %}
$ cd LCD-show/
$ sudo dpkg -i -B xinput-calibrator_0.7.5-1_armhf.deb
$ DISPLAY=:0.0 xinput_calibrator

Section "InputClass"
	Identifier	"calibration"
	MatchProduct	"ADS7846 Touchscreen"
	Option	"MinX"	"3550"
	Option	"MaxX"	"62530"
	Option	"MinY"	"62770"
	Option	"MaxY"	"2969"
	Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1"
EndSection

{% endhighlight %}

Then add [option matrix](https://raspberrypi.stackexchange.com/questions/60872/inverted-gpio-touchscreen-using-99-calibration-conf)

{% highlight bash %}
$ sudo mkdir /etc/X11/xorg.conf.d
$ sudo nano /etc/X11/xorg.conf.d/99-calibration.conf
$ sudo reoboot
{% endhighlight %}


## Alternatives
- [Z-Bolt/OctoScreen](https://github.com/Z-Bolt/OctoScreen)
- [tapnair/OctoPiLCD](https://github.com/tapnair/OctoPiLCD)

### [BillyBlaze/OctoPrint-TouchUI](https://github.com/BillyBlaze/OctoPrint-TouchUI)
- [Setup: Boot to Browser](https://github.com/BillyBlaze/OctoPrint-TouchUI/wiki/Setup:-Boot-to-Browser)
	- [uninstall](https://github.com/BillyBlaze/OctoPrint-TouchUI/issues/289)
{% highlight bash %}
sudo ~/TouchUI-autostart/helpers/uninstall
{% endhighlight %} 

- [Guide d’installation d’octoprint avec écran local](http://doc.3dmodularsystems.com/guide-dinstallation-doctoprint-ecran-local/)
- [Ecran tactile 3,5 pouces]({% post_url 2019-11-16-pi-lcd %})
