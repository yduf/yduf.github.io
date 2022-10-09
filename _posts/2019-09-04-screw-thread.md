---
published: true
title: Screw & Threads
tags: screw 3dmodel 3dprint openscad freecad cnc
---
> This article is a guide to using screws in 3D printed SLA parts. There are many other ways [to attach multiple 3D printed parts](https://formlabs.com/blog/how-to-create-models-larger-than-your-3d-printers-build-volume/)  together, but if you need to repeatedly attach and detach components and want robust mechanical fastening, there's no real replacement for genuine metal threads. -  [Adding Screw Threads to 3D Printed Parts](https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/)

## [Freecad]({% post_url 2020-05-29-freecad %})

Freecad knows ISO screws size - see [Fasterner Workbench](https://wiki.freecadweb.org/Fasteners_Workbench)

And 0.20 can make hole with thread.
- [3D Printed FreeCAD Threads - FreeCAD 0.20 Holes ](https://www.youtube.com/watch?v=WuKoGOiuHTk) - juste use a holes + a clearance of at least 0.30mm
	- [FreeCAD 0.20 : Taraudages et filetages pour impression 3D](https://www.youtube.com/watch?v=Thgy5RQ5oGs)
    
- [Filetage semi-rond pour impression 3D](https://www.youtube.com/watch?v=F_R2UZ9KwHE)
	- spirale + scale*1.05 + cut

### [Creating thread](https://forum.freecadweb.org/viewtopic.php?t=41892)

Cutting a thread with bolt gives you a "negative" bolt thread which is mechanically incorrect.
To make a "real" threaded hole, there is a special arbitrary length "tap" rod that you then cut from your object: 

![caption](https://forum.freecadweb.org/download/file.php?id=99206)

 If it is made for 3D printing, there is a section in the settings that lets you tweak tolerances such that printed parts will match each other.



### For tapped screw hole,

when creating holes in part-design workbench
- select _ISO metric regular profile_
- select _Size_ (ex M3)
- select  _Threaded_ => this will give a hole diameter for tap drill (ex for [M3 screw, it's 2.5mm](https://www.thingiverse.com/groups/sunhokey-3d-printer-owners/forums/general/topic:5484#comment-838622))

- [Taraudage in Freecad 0.20](https://www.youtube.com/watch?v=C-o0pLB-fmY&t=0s) - avec custom clearance
- [Thread for Screw Tutorial](https://wiki.freecadweb.org/Thread%20for%20Screw%20Tutorial)
- [Designing a 3D printed filament spool holder](https://youtu.be/T4A17KOzd_8?t=433)

<span style="color:red">[**Notes**]</span>
- [3dprint screws](https://forum.freecadweb.org/viewtopic.php?f=3&t=53074) - set scale settings to 3dprinting in the Fasteners Preferences

- [model a screw in freecad](https://www.youtube.com/watch?v=BobzR7ciTRw)

[![caption](https://img.youtube.com/vi/BT0uG0NzERk/0.jpg)](https://www.youtube.com/watch?v=BT0uG0NzERk)

## [Hex Nut Capture Socket sizing for 3D Printing](https://airtripper.com/1594/hex-nut-capture-socket-sizing-for-3d-printing/)

- [Embedding Nuts in 3D Printed Parts for Hidden Fastener Strength ](https://markforged.com/resources/blog/embedding-nuts-3d-printing/)
- [3D Printing Threads and Screws – Simple Guide](https://all3dp.com/2/3d-printing-threads-and-screws-all-you-need-to-know/)


## Openscad
### [undersized holes](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#cylinder)

When using cylinder() with difference() to place holes in objects, the holes will be undersized. This is because circular paths are approximated with polygons inscribed within in a circle. The points of the polygon are on the circle, but straight lines between are inside.

- [undersized circular objects](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/undersized_circular_objects)
- [Polyholes](http://hydraraptor.blogspot.com/2011/02/polyholes.html)

## Screw Model
- [NopSCADlib/Screws](https://github.com/nophead/NopSCADlib/blob/master/readme.md#screws)
- [OpenSCAD Screw Holes](https://www.thingiverse.com/thing:1731893)
    
    ![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/OpenSCAD_Under_size_hole.jpg/240px-OpenSCAD_Under_size_hole.jpg)
