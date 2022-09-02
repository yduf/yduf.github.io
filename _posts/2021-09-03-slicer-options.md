---
published: true
title: Slicer Options
tags: 3dprint cura
---

### [Full bed print](https://3dprinterly.com/how-to-print-use-maximum-build-volume-in-cura/)
- check printer settings
- Remove Build Plate Adhesion (Skirt, Brim, Raft)
- Edit the Cura Definitions Within the File ? to suppress machine_disallowed_area

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

- [Elephant Foot](https://www.youtube.com/watch?v=zlgR3rHg4p8), possible solution
	- use a very small chanfer to compensate in CAD
    - use slicer compensation for first layer
    - use a RAFT

### Seam removal
- [move seam to corner](https://youtu.be/NU1kYEE3qrQ?t=114)
	- wall / Z seam alignment
- [vase mode](https://www.youtube.com/watch?v=iJXIqdJpkuI)

### Printer Precision / Holes
- [Dimensional Accuracy](https://www.simplify3d.com/support/print-quality-troubleshooting/dimensional-accuracy/)
	- First Layer Impact - verify that your measurements are not being affected by the first layer position.
    - **Under or Over-Extrusion** - If the extrusion multiplier is too low, you may start to see gaps between perimeters, holes in your top surfaces, and parts that are smaller than their intended size. If your extrusion multiplier is too high, you may notice top layers that tend to bulge upwards and parts that are larger than intended.
    - **Constant Dimensional Error** - => horizontal expansion
    - **Increasing Dimensional Error** -  then it is likely the problem may be due to thermal contraction.
- [horizontal expansion](https://www.youtube.com/watch?v=-jsBI3OeUJQ) 
	- [calibration tool](https://www.thingiverse.com/thing:4766295)
    	- [Fast test](https://www.thingiverse.com/thing:3535060)
    - [What Is Horizontal Expansion in Cura? (How to Use It?)](https://www.3dprintbeast.com/cura-horizontal-expansion/)
     - [<strike>Are you printing undersized holes ?</strike>](http://www.deltarap.org/printing-undersized-holes)
     
- [slicing tolerance](https://www.youtube.com/watch?v=X6nCKQToOUg) / [doc](https://support.ultimaker.com/hc/en-us/articles/360012614559-Experimental-settings)
	- inclusive - for part that you plan to sand
    - middle - for others for best accuracy
    - exclusive - for part that needs to fit together


## [Speed up print]({% post_url 2022-08-26-cura-speed-print %})
