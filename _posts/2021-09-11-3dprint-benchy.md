---
published: false
title: Benchy
publishe: true
tags: 3dprint
---
> The jolly 3D printing torture-test - [thingiverse](https://www.thingiverse.com/thing:763622) / [#3dbenchy](http://www.3dbenchy.com/) / [The Benchy](https://www.easy3dhome.com/benchy/)

![caption](http://www.3dbenchy.com/wp-content/uploads/2015/04/3DBenchy_frontpage_slider_sea_v041-1910x500.jpg)

## Print Analysis
- [first layer (bottom)](https://youtu.be/t_7EMnQ6Rlc?t=220)
- [intermedaite](https://youtu.be/t_7EMnQ6Rlc?t=264)
	- overhang
    - gradient heat coming from the bed
- [narrow section](https://youtu.be/t_7EMnQ6Rlc?t=281)
	- too hot (need fan cooling) / too much speed
    
Surface quality
- Zebra stripe

Extrusion / Retraction
- stringing inside the cabin

- [warping](https://www.thingiverse.com/thing:5143079) - can bet caused by a too hot bed

[Bridging & Overhang](https://youtu.be/t_7EMnQ6Rlc?t=430)
- roof

[Fine detail](https://youtu.be/t_7EMnQ6Rlc?t=487)
- hole & text at the back

## [Ugly layers](https://www.youtube.com/watch?v=a3oQy6v3MrA)
Caused by
- inconsistent layer height
- inconsistent extrusion
- Z-wobble
- pooli on motors X/Y/extruder
- speed (if not enough extrusion) => test pattern
- wobble on extruder gear

- [extrusion performance](https://youtu.be/RWDErj-pE1c?t=794) - CHT - 50mm³/s max

## Cura / Printer Setting

0.28 / print  **50** mm/s / travel _150_ mm/s  / 215°C / Klipper max_accel: 3000 mm/sec²
 / 1h06 (1h15 est) - very good results / near perfect
 
0.28 / print  **120** mm/s / travel _250_ mm/s  / 215°C / Klipper max_accel: 3000 mm/sec²
 / 0h43 (1h00 est) - still very good, some very minor glitch
 
0.28 / print  **150** mm/s / travel _250_ mm/s  / 215°C / Klipper max_accel: 3000 mm/sec²
 / ? (1h15 est) - ?

0.28 / print **200** mm/s / travel _250_ mm/s  / 215°C / Klipper max_accel: 3000 mm/sec²
 / 0h40 (0h59 est) - underextrusion on some layer 
0.28 / print **200** mm/s / travel _250_ mm/s  / **220°C** / Klipper max_accel: 3000 mm/sec²
 / 0h40 (0h59 est) - underextrusion on same layer, but more pronounced

### [#speedboatrace](https://www.youtube.com/watch?v=6kRjdprTjFc)
