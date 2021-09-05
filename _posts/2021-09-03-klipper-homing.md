---
published: true
title: Homing (Klipper)
tags: klipper 3dprinter calibration
---

## [Homing](https://www.klipper3d.org/Config_Reference.html#customized-homing) 
- [Endstops](https://marlinfw.org/docs/hardware/endstops.html)
- [Why is the Z position_endstop set to 0.5 in the default configs?](https://www.klipper3d.org/FAQ.html#why-is-the-z-position_endstop-set-to-05-in-the-default-configs) - Z position_endstop specifies how far the nozzle is from the bed when the endstop triggers. 

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

### [setting the probe offset](https://www.youtube.com/watch?v=fN_ndWvXGBQ)
- [Z offset](https://www.klipper3d.org/BLTouch.html#calibrating-the-bl-touch-offsets) 
	- `PROBE_CALIBRATE` at room temperature
    - then `TESTZ Z=-.1` to adjust until head reach bed (as [in paper test](https://www.klipper3d.org/Bed_Level.html#the-paper-test))
    - finally  `SAVE_CONFIG` to integrate the value in config files
- X, Y: align on target with PROBE

- [Repeatability check](https://www.klipper3d.org/Probe_Calibrate.html#repeatability-check)  -  it is a good idea to verify that the probe provides repeatable results. `PROBE_ACCURACY`

[Usefull GCODE](https://github.com/KevinOConnor/klipper/blob/master/docs/G-Codes.md)
- `get_position (~ M114)`
- absolute (G90) / relative (G91) coordinate
- move G1 X<x> Y<y> Z<z>

## [Bed level support](https://www.klipper3d.org/Bed_Mesh.html)

  
- [`BED_MESH_CALIBRATE`](https://www.klipper3d.org/Bed_Mesh.html#calibration) - Initiates the probing procedure for Bed Mesh Calibration.
- [save profile](https://www.klipper3d.org/Bed_Mesh.html#profiles): `BED_MESH_PROFILE SAVE=default`
- default profile is automatically loaded when Klipper starts. 


### [Manual leveling](https://www.klipper3d.org/Manual_Level.html)
  
The secret to getting good bed leveling with bed leveling screws is to utilize the printer's high precision motion system during the bed leveling process itself.

**Custom Prepare menu** - [ender3 example.cfg](https://www.reddit.com/r/BIGTREETECH/comments/dtl8id/skr_mini_e3_12_klipper_configguide_including/):
- BED_SCREWS_ADJUST - start the tool
- paper test on each selected _screw points_
- accept => screw is ok (no adjustement necessary)
- adjusted => screw was adjusted (and may have impact others)
- abort => exit tool
  
  
## [First layer]({% post_url 2018-09-15-first-layer %})

### [BABY STEPPING ](https://3dp.tumbleweedlabs.com/firmware/klipper-firmware/klipper-calibration-guide/how-to-perfect-your-first-layer-height-with-klipper)
