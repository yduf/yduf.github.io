---
published: true
title: LCD Dashboard (Octoprint)
tags: 3dprinter lcd dashboard raspberry-pi
---
> OctoDash is a simple, but beautiful dashboard for OctoPrint. - [UnchartedBull/OctoDash](https://github.com/UnchartedBull/OctoDash)

![caption](https://raw.githubusercontent.com/TimonGaebelein/OctoprintDash/master/screenshots/file_loaded.png)

## Setup
From a fresh Octopie (tested on )
1. Install LCD35-Show (from alternative repos) [Ecran tactile 3,5 pouces (Pi)]({% post_url 2019-11-16-pi-lcd %})
1. use octodash install script
1. Display is not found by X11 and it need [even more packages](https://github.com/UnchartedBull/OctoDash/wiki/Troubleshooting#cannot-open-display-xinit-failing-)
{% highlight cpp %}
sudo apt install raspberrypi-ui-mods
{% endhighlight %}

At this point when pi-reboot Octodash should show up.
1. [Touchscreen does not work](https://medium.com/@tengfone/setting-up-raspberry-pi-4-3-5-touch-screen-xpt2046-349e484a7813)
**Touchscreen may appear because axis are inverted.**

Once X11 is working (step above), from a ssh console do:
{% highlight cpp %}
cd LCD-show/
sudo dpkg -i -B xinput-calibrator_0.7.5-1_armhf.deb
DISPLAY=:0.0 xinput_calibrator
{% endhighlight %}

Then 
{% highlight cpp %}
sudo nano /etc/X11/xorg.conf.d/99-calibration.conf
Change the “SwapAxes” “1” into “SwapAxes” “0"
{% endhighlight %}


## Alternatives
- [Z-Bolt/OctoScreen](https://github.com/Z-Bolt/OctoScreen)
- [BillyBlaze/OctoPrint-TouchUI](https://github.com/BillyBlaze/OctoPrint-TouchUI)
- [tapnair/OctoPiLCD](https://github.com/tapnair/OctoPiLCD)

