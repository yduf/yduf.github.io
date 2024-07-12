---
published: true
title: Speedboat (3dprinter)
tags: 3dprinter klipper
---
> [#speedboatrace](https://www.youtube.com/watch?v=6kRjdprTjFc)

[![caption](https://stldenise3d.com/wp-content/uploads/2023/07/red-benchy-boat-1-edited.jpg.webp)](https://stldenise3d.com/speed-benchy-settings-and-rules/)

## Speed Benchy Settings Rules
Max Line width: .5mm  
Max Layer height: .25mm  
2 Walls  
3 Top/Bottom Layers  
10% Infill (You may combine infill every other layer)  

### 15min
- [Recommend good settings on speedboating? ](https://www.reddit.com/r/OrcaSlicer/comments/1cc6cgj/recommend_good_settings_on_speedboating/)
	- [Ender 3 - 16 minute quality benchy](https://www.youtube.com/watch?v=w6aeM3n-a0c)
		- PLA at 210°C
        - 0.24mm layer height
        - 20% triangle infill
		- 300mm/s travels
        - Autospeed with 20mm³/s peak flow
        - 5k mm/s² acceleration on externals
        - 10k-20k mm/s² acceleration otherwise
        - 20mm/s square corner velocity
		- 0.03s pressure advance
        - 0.02s pressure advance smooth time
        - MZV input shaper

### Orca Slicer
- [Can't get Benchy under 1 hour in Orca ](https://www.reddit.com/r/klippers/comments/1bcxhm8/cant_get_benchy_under_1_hour_in_orca/)
- [Is 15 min benchy possible on an ordinary slicer? ](https://www.reddit.com/r/Ender3V3KE/comments/192yaqh/is_15_min_benchy_possible_on_an_ordinary_slicer/)

- [cnc kitchen](https://www.youtube.com/watch?v=hSWjlf5aNIU)
	- [The FASTEST 3DBenchy at QUALITY ?](https://www.youtube.com/watch?v=vso6lgTRSo0)

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
