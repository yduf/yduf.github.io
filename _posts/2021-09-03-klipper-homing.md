---
published: true
title: Homing (Klipper)
tags: klipper 3dprinter calibration
---
> Mid pleasures and palaces though we may roam   
> Be it ever so humble, there's no place like home  
> [Home! Sweet Home!](https://en.wikipedia.org/wiki/Home!_Sweet_Home!)

## [Homing](https://www.klipper3d.org/Config_Reference.html#customized-homing) 
- [Endstops](https://marlinfw.org/docs/hardware/endstops.html)
- [Why is the Z position_endstop set to 0.5 in the default configs?](https://www.klipper3d.org/FAQ.html#why-is-the-z-position_endstop-set-to-05-in-the-default-configs) - Z position_endstop specifies how far the nozzle is from the bed when the endstop triggers. 

{% highlight cpp %}
[safe_z_home]
home_xy_position: 0, 0
z_hop: 10
{% endhighlight %}

## [Probe calibration](https://github.com/KevinOConnor/klipper/blob/master/docs/Probe_Calibrate.md)

> Please note that Z Offest calibration is performed at room temperature, with heatbed and hotend
heaters off (set to 0). Ensure that there is no filament on the nozzle before calibrating Z Offset. You
may want to heat the hotend, clear the nozzle and/or unload the filament and let it cool down
before proceeding.


### [BL-Touch](https://github.com/KevinOConnor/klipper/blob/master/docs/BLTouch.md)
It is mandatory to define pinout and z_offset. 

{% highlight cpp %}
[bltouch]
sensor_pin: ^PC14
control_pin: PA1
z_offset: 2.345
{% endhighlight %}

[Tips](https://www.klipper3d.org/Probe_Calibrate.html#calibrating-probe-x-and-y-offsets): issuing `PROBE` will trigger the use of BLTouch at current position to probe Z-level, and stop when BlTouch trigger.

[![caption](https://img.youtube.com/vi/fN_ndWvXGBQ/0.jpg)](https://www.youtube.com/watch?v=fN_ndWvXGBQ)


### [Setting the probe offset](https://www.youtube.com/watch?v=fN_ndWvXGBQ)
- X, Y: align on target with PROBE or info from probe support
- [Z offset](https://www.klipper3d.org/BLTouch.html#calibrating-the-bl-touch-offsets) 
	- [`PROBE_CALIBRATE`](https://www.klipper3d.org/Probe_Calibrate.html?h=probe_calib#calibrating-probe-z-offset) at room temperature
    - then use [`TESTZ Z=-.1`](https://www.klipper3d.org/Bed_Level.html#the-paper-test) to adjust until head reach bed (as [in paper test](https://www.klipper3d.org/Bed_Level.html#the-paper-test))
    - when complete `ACCEPT`
    - and finally  `SAVE_CONFIG` to integrate the value in config files

- [Repeatability check](https://www.klipper3d.org/Probe_Calibrate.html#repeatability-check)  -  it is a good idea to verify that the probe provides repeatable results. see `PROBE_ACCURACY`. If the difference between the minimum reported z_offset and the maximum reported z_offset is greater than 25 microns (.025mm) then the probe is not suitable for typical bed leveling procedures.

- [endstop_phase](https://www.klipper3d.org/Endstop_Phase.html#calibrating-endstop-phases) - The stepper phase adjusted endstop mechanism can use the precision of the stepper motors to improve the precision of the endstop switches. see [`ENDSTOP_PHASE_CALIBRATE`](https://www.klipper3d.org/Config_Reference.html#endstop_phase)


[Usefull GCODE](https://github.com/KevinOConnor/klipper/blob/master/docs/G-Codes.md)
- `get_position (~ M114)`
- absolute (G90) / relative (G91) coordinate
- move G1 X<x> Y<y> Z<z>

## [Bed level support](https://www.klipper3d.org/Bed_Mesh.html)

### [Auto Bed Mesh leveling](https://www.klipper3d.org/Bed_Mesh.html)

- `BED_MESH_CALIBRATE` - [Initiates the probing procedure for Bed Mesh Calibration.](https://www.klipper3d.org/Bed_Mesh.html#calibration)
- `BED_MESH_PROFILE SAVE=default` - [save profile](https://www.klipper3d.org/Bed_Mesh.html#profiles):
- default profile is automatically loaded when Klipper starts. 
- [`BED_MESH_CLEAR`](https://www.klipper3d.org/Bed_Mesh.html#clear-mesh-state) - Clear Mesh State

output can be vizualised with [OctoPrint-BedLevelVisualizer](https://github.com/jneilliii/OctoPrint-BedLevelVisualizer/) and `BED_MESH_OUTPUT` gcode.

### [Manual leveling](https://www.klipper3d.org/Manual_Level.html)
  
The secret to getting good bed leveling with bed leveling screws is to utilize the printer's high precision motion system during the bed leveling process itself.

[**Custom Prepare menu** ender3](https://www.reddit.com/r/BIGTREETECH/comments/dtl8id/skr_mini_e3_12_klipper_configguide_including/):
  
- BED_SCREWS_ADJUST - start the tool
- paper test on each selected _screw points_
- accept => screw is ok (no adjustement necessary)
- adjusted => screw was adjusted (and may have impact others)
- abort => exit tool
  
  
## [First layer]({% post_url 2018-09-15-first-layer %})

This involves running a print, observing the first layer going down, and adjusting your Z offset (["baby stepping"](https://3dp.tumbleweedlabs.com/firmware/klipper-firmware/klipper-calibration-guide/how-to-perfect-your-first-layer-height-with-klipper#baby-stepping)) up and down until you have the perfect level of squish. This is easier with an LCD but can also be done without. 

see _tune_ menu in [klipper]({% post_url 2021-09-04-klipper-menu %}) which call [`SET_GCODE_OFFSET`](https://www.klipper3d.org/G-Codes.html#extended-g-code-commands)

### [SET_GCODE_OFFSET](https://www.klipper3d.org/G-Codes.html#set_gcode_offset)
  
This is commonly used to virtually change the Z bed offset or to set nozzle XY offsets when switching extruders. For example, if "SET_GCODE_OFFSET Z=0.2" is sent, then future G-Code moves will have 0.2mm added to their Z height. If the X_ADJUST style parameters are used, then the adjustment will be added to any existing offset (eg, "SET_GCODE_OFFSET Z=-0.2" followed by "SET_GCODE_OFFSET Z_ADJUST=0.3" would result in a total Z offset of 0.1).
  
{% highlight cpp %}
SET_GCODE_OFFSET Z_ADJUST=0.1
{% endhighlight %}
  
Final setup can be save with [`Z_OFFSET_APPLY_PROBE`](https://www.klipper3d.org/G-Codes.html#z_offset_apply_probe). Requires a SAVE_CONFIG to take effect.
  
### see also
- [Klipper Tuning Guide](https://advanced3dprinting.com/wp-content/uploads/2021/11/Advanced-3D-Printing-Klipper-Kit-Tuning-Guide-v1.0.pdf)
