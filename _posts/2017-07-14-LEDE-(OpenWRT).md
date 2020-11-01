---
published: true
tags: raspberry-pi pi
---
## [Pi-3](https://lede-project.org/toh/views/toh_fwdownload?dataflt%5BBrand*%7E%5D=rasp)

## [change default ip](https://forum.openwrt.org/viewtopic.php?id=41716)

in order to avoid being on an inaccessible subnet

```
uci set network.lan.ipaddr=111.222.333.444
uci commit network
/etc/init.d/network restart
```


## [Walktough](https://computers.tutsplus.com/articles/installing-openwrt-on-a-raspberry-pi-as-a-new-home-firewall--mac-55984)

[AdaFruit](https://cdn-learn.adafruit.com/downloads/pdf/setting-up-a-raspberry-pi-as-a-wifi-access-point.pdf)

## [External Antenna](https://www.dorkbotpdx.org/blog/wramsdell/external_antenna_modifications_for_the_raspberry_pi_3)

[other](https://hackaday.io/project/10091-raspberry-pi-3-external-antenna)
