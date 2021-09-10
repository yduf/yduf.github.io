---
published: true
title: Slicer Options
tags: 3dprint
---


### Layer height
Recommanded:  
0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.32 (for 0.4 nozzle)

- [calulator](https://blog.prusaprinters.org/calculator/#optimallayer)
- [wiki](https://3dprint.wiki/reprap/anet/a8/layer-heights)
- [redit](https://www.reddit.com/r/CR10/comments/8i88h0/cr10s_layer_height_upgrade_is_there_such_a_thing/)

### [How to tune your slicing settings featuring Ender 3](https://www.youtube.com/watch?v=3yIebnVjADM)

## [Quality](https://www.youtube.com/watch?v=6Z02BowhQwU)
- print one part at a time
	- [turn on combing mode](https://www.youtube.com/watch?v=FdnV71HYIEw) - force ravel inside parts
    	- it may reduce print time as well
- multi part
	- special mode (one part at time)
    - orient part to side way to have unseen side oppose to each other

### Seam removal
- [vase mode](https://www.youtube.com/watch?v=iJXIqdJpkuI)

## [Speed up print](https://hevort.com/)
- Use [greater step](https://www.reddit.com/r/klippers/comments/gh5r72/those_of_you_using_klipper_and_printing_at_crazy/fq6py5n?utm_source=share&utm_medium=web2x&context=3) for layer height, eg: 0.28 vs 0.2 vs 0.1
- and [use a larger nozzle](https://www.youtube.com/watch?v=jyhLQUQTc9E) 0.8 > 0.6 > 0.4

- [double infill](https://www.youtube.com/watch?v=gSySGU-52Lo)

- [Cura Acceleration setting](https://www.youtube.com/watch?v=CKMTD0EAcwg)
	- temperature
    - speed (feed rate)
    - accelleration
    - jerk
    
    
### [#speedboatrace](https://www.youtube.com/watch?v=6kRjdprTjFc)

[cnc kitchen](https://www.youtube.com/watch?v=hSWjlf5aNIU)

Teaching Tech benchy
For a constant feedrate of 200mm/sec
-  500 mm/sec² => 1:06:00	=> this is the default ender3 seting
- 2000 mm/sec² =>   33:47
- 5000 mm/sec² =>   23:53
-10000 mm/sec² =>   19:29

