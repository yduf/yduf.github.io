---
published: true
title: Orbiter config (Klipper)
tags: 3dprinter klipper
---
> Klipper setup for orbiter - [Configuration](https://www.thingiverse.com/thing:4725897)

- [Klipper on top of SKR Mini E3 V2, Orbiter](https://youtu.be/dZEL_ycAOLs?t=1580)
	- [default extruder issue => orbiter conversion](https://youtu.be/RsZ3oAfyM0I?t=1588)
	- [Orbiter 1.5 Extruder Klipper config](https://github.com/bad1dea/klipper_config)

{% highlight ini %}
[extruder]
# orbiter motor LDO-36STH20-1004AHG(XH)
rotation_distance: 4.637
microsteps: 16
full_steps_per_rotation:   200
max_extrude_only_distance: 500
max_extrude_only_velocity: 120 # <- for orbiter motor LDO-36STH20-1004AHG(XH)
max_extrude_only_accel:    800 # <- for orbiter motor LDO-36STH20-1004AHG(XH)
pressure_advance: 0.1				# to be calibrated
pressure_advance_smooth_time: 0.02  # to be calibrated
{% endhighlight %}


{% highlight ini %}
[tmc2209 extruder]
## orbiter motor LDO-36STH20-1004AHG(XH)
run_current:    0.850 # RMS <- for orbiter motor LDO-36STH20-1004AHG(XH)
hold_current:   0.1
sense_resistor: 0.11
stealthchop_threshold: 0
{% endhighlight %}

## [Retraction config](https://www.thingiverse.com/thing:1815784)

There is two parameter to configure : (length, speed)

[ ![caption](https://cdn.thingiverse.com/renders/9a/c6/9d/c4/01/cb7b8132e6f320798e8b3e0a1eab3ab7_preview_featured.JPG)](https://www.thingiverse.com/make:614605)

Klipper vs Cura setup

{% highlight ini %}
[firmware_retraction]
retract_length: 1.2
#   The length of filament (in mm) to retract when G10 is activated,
#   and to unretract when G11 is activated (but see
#   unretract_extra_length below). The default is 0 mm.
retract_speed: 60
#   The speed of retraction, in mm/s. The default is 20 mm/s.
unretract_extra_length: 0
#   The length (in mm) of *additional* filament to add when
#   unretracting.
unretract_speed: 10
#   The speed of unretraction, in mm/s. The default is 10 mm/s.

{% endhighlight %}

- [Retraction: Just say "No" to oozing](https://www.matterhackers.com/articles/retraction-just-say-no-to-oozing)
- [Top Ten Prints to Calibrate your 3D Printer](https://www.matterhackers.com/articles/top-ten-prints-to-calibrate-your-3d-printer)