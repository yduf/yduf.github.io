---
title: Material Flow / Extrusion ratio (Calibration)
published: true
tags: 3dprint calibration cura
---
> [There is 2 parts](https://mattshub.com/blogs/blog/extruder-calibration):  
> - tuning your extruder steps/mm value - this mechanical part can use recommanded value  
> - tuning your extrusion multiplier - this is specific to each filament  

### [Tuning your extruder steps/mm value ](https://www.youtube.com/watch?v=W901s6zTwiw)

When the g_code require a certain amount of filament, this allow to get the right length of filament.

[Instruction](https://youtu.be/W901s6zTwiw?feature=shared&t=140) to calibrate this:

- setup factory parameter for extruder (eg orbiter)
- take a light color filament that can be marked
	- insert filament in extruder directly (not within bowden)
    - make sure flows go through
    - make a mark at 70mm above the extruder entry
    - extrude 50mm
    - measure what's left above the extruder entry (it should be 20mm)
    - if there is a difference of more than 1mm - use formula to adjust parameters 
    
Next calculate flow per filament (Tuning your extrusion multiplier section).

### [How do you determine your printer’s max volumetric speed?](https://klipper.discourse.group/t/how-do-you-calibrate-determine-your-printers-max-volumetric-speed/5553)

- [Speed & Max Flow Tuning (gcode)](https://teachingtechyt.github.io/calibration.html#speed) - from teaching Tech
- [Determining Maximum Volumetric Flow Rate ](https://ellis3dp.com/Print-Tuning-Guide/articles/determining_max_volumetric_flow_rate.html)
	- [Cura :page_facing_up: has not yet added this feature](https://github.com/Ultimaker/Cura/issues/5248) - Set Max Flow in your slicer. 
    - [Move exceeds maximum extrusion (klipper)](https://klipper.discourse.group/t/h-move-exceeds-maximum-extrusion/1189) - safety feature of Klipper
    
Ender 3 / Ender 6 default extruder max is aboug 12mm³/sec


[![caption](https://teachingtechyt.github.io/img/speeddiagram.jpg) ](https://teachingtechyt.github.io/calibration.html#speed)

### [Tuning your extrusion multiplier](https://youtu.be/W901s6zTwiw?feature=shared&t=382)

Using [Orca Slicer](https://github.com/SoftFever/OrcaSlicer/wiki/Calibration) 
This is also available in Cura plugin _Calibration shape_ - `multi flow test`

- choose a filament profile close to the filament you are using
- print the extrusion test
- look for the relative flow setting that looks the best (on the outer surface)
- apply formula to current flow.

A very [simple and fast print test](https://www.thingiverse.com/thing:1622868) for configuring a 3d printer extrusion ratio. 

see also [the calculator](https://docs.google.com/spreadsheets/d/11wnlCU2EVHg3Nl7GxisAegoGicogK_QTkMjRavwx0ME/edit#gid=0)

On Cura the extrusion ratio can be found in Material.flow.
- using _Materials plugins_ the Material flow, can be stored be material config (as well as other parameters).

![caption](https://cdn.thingiverse.com/renders/11/c2/95/b9/69/061304fbd5a1101cb5cfe3cc23979c49_preview_featured.jpg)

## [Negative Space Test](https://www.matterhackers.com/articles/top-ten-prints-to-calibrate-your-3d-printer)
- [Negative space tolerance bad: Holes are too tiny](https://www.reddit.com/r/FixMyPrint/comments/4acmp5/negative_space_tolerance_bad_holes_are_too_tiny/)
