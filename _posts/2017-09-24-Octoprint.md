---
title: Octoprint
published: true
tags: 3dprinter
---
## [server](http://192.168.0.123/)

{% highlight bash %}
ssh pi@192.168.0.123
{% endhighlight %}

## [Home](http://octoprint.org/)

- [Configuration](http://octoprint.org/download/)
- [installation Octoprint](http://www.dagomaniack.fr/2017/01/20/installation-doctoprint-pour-une-discoeasy-200/)

## [How to set up WiFi on a Raspberry Pi](https://www.maketecheasier.com/setup-wifi-on-raspberry-pi/)

and add [static ip](https://serverfault.com/questions/335994/creating-a-static-ip-with-wlan0#335997)

[How Do I Find Out My Linux Gateway](https://www.cyberciti.biz/faq/how-to-find-gateway-ip-address/)

## Plugins

[install](http://plugins.octoprint.org/help/installation/)

### [Octolapse (timelapse)](https://plugins.octoprint.org/plugins/octolapse/)

### [Bed Vizualizer](https://plugins.octoprint.org/plugins/bedlevelvisualizer/)

Klipper g_code: BED_MESH_OUTPUT

### [Exclude Region](https://discourse.octoprint.org/t/exclude-region-plugin-is-one-of-the-best-ever/2742)

### [Touch UI]()
- [Setup: Boot to Browser](https://github.com/BillyBlaze/OctoPrint-TouchUI/wiki/Setup:-Boot-to-Browser)
- [Guide d’installation d’octoprint avec écran local](Guide d’installation d’octoprint avec écran local)

## Webcam

[Pi Cam](https://www.pihomeserver.fr/en/2014/01/09/raspberry-pi-home-server-installer-facilement-la-camera-raspberry-pi/)

[usb webcam with V4L](http://www.pobot.org/Vision-par-webcam-avec-une.html?lang=fr)

[MJPG streamer config](https://github.com/foosel/OctoPrint/wiki/Webcams-known-to-work)

Camera without MPG support mais work with "-r VGA -y" parameters
see /root/bin/webcamd and [configurations](https://github.com/foosel/OctoPrint/wiki/MJPG-Streamer-configuration)
