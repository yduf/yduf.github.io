---
published: true
title: Homing (Klipper)
tags: klipper 3dprinter calibration
---

## [Homing](https://www.klipper3d.org/Config_Reference.html#customized-homing) 

{% highlight cpp %}
[safe_z_home]
home_xy_position: 0, 0
z_hop: 10
{% endhighlight %}

## [Probe calibration](https://github.com/KevinOConnor/klipper/blob/master/docs/Probe_Calibrate.md)

### [BL-Touch](https://github.com/KevinOConnor/klipper/blob/master/docs/BLTouch.md)
It is mandatory to define pinout and z_offset. 

{% highlight cpp %}
[bltouch]
sensor_pin: ^PC14
control_pin: PA1
z_offset: 2.345
{% endhighlight %}

[Tips](https://www.klipper3d.org/Probe_Calibrate.html#calibrating-probe-x-and-y-offsets): issuing `PROBE` will trigger the use of BLTouch at current position to probe Z-level, and stop when BlTouch trigger.

## [Bed level support](https://www.klipper3d.org/Config_Reference.html#bed-level-support)

- [ender3 example.cfg](https://www.reddit.com/r/BIGTREETECH/comments/dtl8id/skr_mini_e3_12_klipper_configguide_including/)