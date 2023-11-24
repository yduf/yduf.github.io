---
published: true
title: Tapo C212 (wifi camera)
tags: hardware video reverse
---
> 2023 - 30€ - [amazon](https://www.amazon.fr/gp/product/B0CG9MBCYR/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&th=1)

### Cons
- Need to install Android/iOS App + create an account
- Setup can only be done through the App
	- one account at the tapo level for global setting
    - [a second configuration](https://www.tapo.com/en/faq/34/) from the app to create a user/password and enable the RTSP feed for the device.
    	- high quality `rtsp://user:password/IP Address/stream1`
    	- low  quality `rtsp://user:password/IP Address/stream2`
	- RSTP is not enabled when a SDCard is present
### Pro
- once setup / rstp is functional and can be accessed by ffplay (for eg).
- seems to be supported by [iSpy](https://github.com/ispysoftware/iSpy)

### see also
- [How to view Tapo camera on PC through RTSP stream](https://www.tapo.com/en/faq/34/)
- [Tapo P100 Homebridge](https://github.com/homebridge/homebridge/wiki/Install-Homebridge-on-Debian-or-Ubuntu-Linux ) -  javascript server emulating Homekit API 
- [TP-Link Tapo C200 Camera Reverse Engineering](https://github.com/nervous-inhuman/tplink-tapo-c200-re)
	- [THE Tapo C200 Research Proj.](https://drmnsamoliu.github.io/shell.html)
