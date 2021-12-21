---
published: true
title: Slicer Options
tags: 3dprint cura
---


### Layer height
Recommanded:  
0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.32 (for 0.4 nozzle)

- [calulator](https://blog.prusaprinters.org/calculator/#optimallayer)
- [wiki](https://3dprint.wiki/reprap/anet/a8/layer-heights)
- [redit](https://www.reddit.com/r/CR10/comments/8i88h0/cr10s_layer_height_upgrade_is_there_such_a_thing/)

### [How to tune your slicing settings featuring Ender 3](https://www.youtube.com/watch?v=3yIebnVjADM)

## Quality
see also [dprint troubleshooting]({% post_url 2018-09-25-3dprint %})

- [print one part at a time](https://www.youtube.com/watch?v=6Z02BowhQwU)
	- [turn on combing mode](https://www.youtube.com/watch?v=FdnV71HYIEw) - force ravel inside parts
    	- it may reduce print time as well
- multi part
	- special mode (one part at time)
    - orient part to side way to have unseen side oppose to each other
- [smoother surface](https://www.youtube.com/watch?v=jkAqTWmVRVA)
- [removing blob artefacts ](https://www.youtube.com/watch?v=Hvw3DrVAeTA) - due to pressure
	- use resolution setting => reduce the size of gcode file by merging point
    	- maximum resolution = 0.5 ( or 1.1333)
        - maximum traveil resolution = 0.7
        - maximum deviation 0.05 (or 0.075)


### Seam removal
- [move seam to corner](https://youtu.be/NU1kYEE3qrQ?t=114)
	- wall / Z seam alignment
- [vase mode](https://www.youtube.com/watch?v=iJXIqdJpkuI)

### Precision
- [horizontal expansion](https://www.youtube.com/watch?v=-jsBI3OeUJQ)

## [Speed up print](https://hevort.com/)
- Use [greater step](https://www.reddit.com/r/klippers/comments/gh5r72/those_of_you_using_klipper_and_printing_at_crazy/fq6py5n?utm_source=share&utm_medium=web2x&context=3) for layer height, eg: 0.28 vs 0.2 vs 0.1
- and [use a larger nozzle](https://www.youtube.com/watch?v=jyhLQUQTc9E) 0.8 > 0.6 > 0.4

- [double infill](https://www.youtube.com/watch?v=gSySGU-52Lo)

- [Cura Acceleration setting](https://www.youtube.com/watch?v=CKMTD0EAcwg)
	- temperature
    - speed (feed rate)
    - nomber of slower layers - the number of layers from the bottom layer it takes to reach the print speed.
    - equalize filament flow - print small wall at higher speed than normal.
    
    - enable accelleration control - reduce the speed set in the firmware (Klipper)
    	- accelleration is also used to estimate the print time.
    
    - enable jerk control - reduce the speed set  in the firmware (Klipper)
    
### [Acceleration Setting](https://3dprinterly.com/how-to-get-the-perfect-jerk-acceleration-setting/)

Your slicer doesn’t actually have much to do with acceleration, in so far **as emitting G-code to say where the print head should go and at what speed**. It’s the **firmware which sets limits to speed and deciding how fast to accelerate** to a given speed.
- [RepRap Centrals Acceleration Calculator](https://3dprinting.stackexchange.com/a/225/5801)

This render the estimated time pretty inaccurate when setting speed above the default.

[**Jerk**](https://3dprinterly.com/how-to-get-the-perfect-jerk-acceleration-setting/#What_is_the_Jerk_Setting) - an approximation value that specifies the minimum speed change that requires acceleration.

having a Jerk value of 10 gave the same printing time at 60mm/s speed as a Jerk value of 40. Only when he increased the printing speed past 60mm/s to around 90mm/s did the jerk value give real differences in printing times.

High values for Jerk settings basically mean the change of speed in each direction is too fast, which usually results in extra vibrations.


- [Cura Acceleration setting](https://www.youtube.com/watch?v=CKMTD0EAcwg)
    - speed (feed rate)
    - nomber of slower layers - the number of layers from the bottom layer it takes to reach the print speed.
    - equalize filament flow - print small wall at higher speed than normal.
    
    - enable accelleration control - reduce the speed set in the firmware (Klipper)
    	- accelleration is also used to estimate the print time.
    
    - enable jerk control - reduce the speed set  in the firmware (Klipper)
    
### [#speedboatrace](https://www.youtube.com/watch?v=6kRjdprTjFc)

[cnc kitchen](https://www.youtube.com/watch?v=hSWjlf5aNIU)

Teaching Tech benchy
For a constant feedrate of 200mm/sec
-  500 mm/sec² => 1:06:00	=> this is the default ender3 seting
- 2000 mm/sec² =>   33:47
- 5000 mm/sec² =>   23:53
-10000 mm/sec² =>   19:29

Cura printer definition setting have to be overidden to allow that.
=> for the Appimage, it is done by defining the file into [`~/.local/share/cura/<version>/definition/creality_base.def.json`](https://github.com/Ultimaker/Cura/issues/847) (model can be taken from [github](https://github.com/Ultimaker/Cura/tree/master/resources/definitions))

Klipper limits are in the `[printer]` section
{% highlight cpp %}
[printer]
kinematics: cartesian
max_velocity: 300
max_accel: 3000
max_z_velocity: 5
max_z_accel: 100
{% endhighlight %}


[independant jerk cannot be set in cura](https://community.ultimaker.com/topic/26775-jerk-motion-control/) => jerk control has to be [disabled](https://www.reddit.com/r/CR10/comments/pguizl/cura_question_acceleration_and_jerk_control/) to let the printer (Klipper) control jerk.
