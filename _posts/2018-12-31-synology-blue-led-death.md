---
published: true
title: Blue Blinking LED of Death (Synology)
tags: synology nas
---

After a power failure during the night, the Synology NAS didn't reboot properly.
The blue led (power) blinking indefinitely.

## [DS215j](https://www.synology.com/en-global/support/download/DS215j#docs)

# [Recovery steps](http://upperstage.de/2017/03/09/synology-nas-blue-blinking-led-of-death/)

1. Power off the NAS and remove all hard drives
2. Boot the NAS and wait for it to complain about missing hard drives (blinking status LED)

	- The blue led should stop blinking.
	- The NAS should beep indicating a ready step.

	- It has boot with DHCP and has a different IP.

3. Connect to the NAS via a browser as you would normally do it (you might have to find out the IP using your router or use the Synology Assistant)

- It should complain about missing hard drives (duh!)

4. power off (press 4s+ power button)

5. reconnect drive in same order

6. Boot

Hoppefully after 1min it was able to boot / everything seams ok.
data and config was kept.
