---
published: true
title: Tapo (wifi camera)
tags: camera video-hardware RTSP network  reverse
---
- C212 - 30€ / 2023 - [amazon](https://www.amazon.fr/gp/product/B0CG9MBCYR)
- C220 - 23€ / 2025 - [amazon](https://www.amazon.fr/dp/B0CDCL6FLC)
	- stream1 is 2560x1440 - slow over wifi
	- stream2 is 640x360 
- C210 - 18€ / 2025 - [amazon](https://www.amazon.fr/dp/B095CLQ1PT)

### Pro
- once setup / rstp is functional and can be accessed by ffplay (for eg).
- seems to be supported by [iSpy](https://github.com/ispysoftware/iSpy)

### Cons
- Need to install Android/iOS App + create an account
	- setup is a bit strange (and derouting at first) when trying to setup the Wifi connection
    - the app establish a direct wifi link with the camera and so android complain severa time about losing network: it's just that the connection first switch from wifi to direct cam then to wifi: don't restablish the connection from the android popup or it will mess the setup.
    
### RSTP Setup
- Setup can only be done through the App
	- one account at the tapo level for global setting
    - [a second configuration](https://www.tapo.com/en/faq/34/) from the app to create a user/password and enable the RTSP feed for the device.
		- high quality `rtsp://user:password/IP Address/stream1`
		- low  quality `rtsp://user:password/IP Address/stream2`
	- RSTP is not enabled when a SDCard is present
- Wifi is restricted to 2.4Ghz

### ONVIF / PTZ

ONVIF stands for Open Network Video Interface Forum.  
PTZ stands for Pan-Tilt-Zoom.

- [HomeAssistant](https://raspberrytips.com/install-home-assistant-on-ubuntu/) - easy to install as docker image
	- `podman run  -d --name homeassistant --privileged --restart=unless-stopped -e TZ=Europe/Paris -v /home/yves/home_assistant:/config --network=host ghcr.io/home-assistant/home-assistant:stable`
	- [ONVIF](https://community.tp-link.com/en/home/forum/topic/241040?page=1) - use port `:2020` for [tapo camera device](https://community.home-assistant.io/t/custom-component-tapo-cameras-control/231795)
    	- [HomeAssistant - Tapo: Cameras Control](https://community.home-assistant.io/t/custom-component-tapo-cameras-control/231795)
- [ONVIFViewer](https://www.debugpoint.com/onvifviewer-internet-camera-viewer-for-linux/) / [gitlab](https://gitlab.com/caspermeijn/onvifviewer) - Linux Internet Camera Viewer - dev stopped


### see also
- [How to view Tapo camera on PC through RTSP stream](https://www.tapo.com/en/faq/34/)
- [Tapo P100 Homebridge](https://github.com/homebridge/homebridge/wiki/Install-Homebridge-on-Debian-or-Ubuntu-Linux ) -  javascript server emulating Homekit API 
	- [HomeAssistant - Tapo: Cameras Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control#homeassistant---tapo-cameras-control)
- [TP-Link Tapo C200 Camera Reverse Engineering](https://github.com/nervous-inhuman/tplink-tapo-c200-re)
	- [THE Tapo C200 Research Proj.](https://drmnsamoliu.github.io/shell.html)
    - [Vulnerabilities (CVE)](https://www.opencve.io/cve?vendor=tp-link&product=tapo_c200_firmware)
- [Amazon’s Ring to partner with Flock](https://news.ycombinator.com/item?id=45614713) - how many existing Ring owners would have bought the camera had they known they would eventually give third parties access to the camera footage.
