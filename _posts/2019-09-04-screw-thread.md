---
published: true
title: Design Options for Screw & Threads
tags: screw 3dmodel 3dprint openscad
---
> This article is a guide to using screws in 3D printed SLA parts. There are many other ways [to attach multiple 3D printed parts](https://formlabs.com/blog/how-to-create-models-larger-than-your-3d-printers-build-volume/)  together, but if you need to repeatedly attach and detach components and want robust mechanical fastening, there's no real replacement for genuine metal threads. -  [Adding Screw Threads to 3D Printed Parts](https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/)

## [Hex Nut Capture Socket sizing for 3D Printing](https://airtripper.com/1594/hex-nut-capture-socket-sizing-for-3d-printing/)

- [Embedding Nuts in 3D Printed Parts for Hidden Fastener Strength ](https://markforged.com/resources/blog/embedding-nuts-3d-printing/)

## Freecad

Freecad knows ISO screws size - see Fasterner Workbench

For tapped screww hole, when creating holes in part-design workbench
- select _ISO metric regular profile_
- select _Size_ (ex M3)
- select  _Threaded_ => this will give a hole diameter for tap drill (ex for [M3 screw, it's 2.5mm](https://www.thingiverse.com/groups/sunhokey-3d-printer-owners/forums/general/topic:5484#comment-838622))

## Openscad
### [undersized holes](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#cylinder)

When using cylinder() with difference() to place holes in objects, the holes will be undersized. This is because circular paths are approximated with polygons inscribed within in a circle. The points of the polygon are on the circle, but straight lines between are inside.

- [undersized circular objects](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/undersized_circular_objects)
- [Polyholes](http://hydraraptor.blogspot.com/2011/02/polyholes.html)

## Screw Model
- [NopSCADlib/Screws](https://github.com/nophead/NopSCADlib/blob/master/readme.md#screws)
- [OpenSCAD Screw Holes](https://www.thingiverse.com/thing:1731893)
    
    ![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/OpenSCAD_Under_size_hole.jpg/240px-OpenSCAD_Under_size_hole.jpg)
