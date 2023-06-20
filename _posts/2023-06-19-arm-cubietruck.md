---
published: true
title: CubieTruck  (2013)
tags: arm hardware raspberry-pi
---
>  Allwinner A20: CPU: ARM Cortex-A7 / Mali-400 GPU, supports HDMI 1080p, no LVDS support -  [Kali on CubieTruck](https://www.kali.org/docs/arm/cubietruck/) / [CubieBoard](http://cubieboard.org/tag/cubietruck/)

- [Cubietruck Frame](https://www.thingiverse.com/thing:3316580) / [2](https://www.thingiverse.com/thing:1237191)

### [Cubietruck (Cubieboard3)](https://en.wikipedia.org/wiki/Cubieboard) 

The third version has a new and larger PCB layout and features the following hardware:

SoC: Allwinner A20
- CPU: ARM Cortex-A7 @ 1 GHz dual-core
- GPU: Mali-400 MP2
	- display controller: Mali-400 GPU, supports HDMI 1080p, no LVDS support
- 2 GiB DDR3 @ 480 MHz
- 8 GB NAND flash built-in, 1x microSD slot, 1x SATA 2.0 port (Hard Disk of 2,5").
- 10/100/1000 RTL8211E Gigabit Ethernet
- 2x USB Host, 1x USB OTG, 1x CIR.
- S/PDIF, headphone, VGA and HDMI audio out, mic and line-in via extended pins
- Wi-Fi and Bluetooth on board with PCB antenna (Broadcom BCM4329/BCM40181)
- 54 extended pins including I²C, SPI
- Dimensions: 11 cm × 8 cm

There is no LVDS support any longer. The RTL8211E NIC allows transfer rates up to 630–638 Mbit/s (sending while 5–10% idle) and 850–860 Mbit/s (receiving while 0–2% idle) when simultaneous TCP connections are established (testing was done utilising iperf with three clients against Cubietruck running Lubuntu)

To connect a 3.5" HDD the necessary 12 V power can be delivered by a 3.5 inch HDD addon package which can be used to power the Cubietruck itself as well.[16] Also new is the option to power the Cubietruck from LiPo batteries. 

[![image of cubietruck board](http://docs.cubieboard.org/_media/products/a20-cubietruck.png?w=600&tok=d831ea)](http://docs.cubieboard.org/tutorials/cubietruck/start)
