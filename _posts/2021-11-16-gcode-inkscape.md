---
published: true
title: Generating GCode from SVG
tags: svg gcode 3dprint inkscape openscad
---
> Can I send my model from Inkscape directly to my 3D printer? - [2D printing on a 3D printer](https://www.youtube.com/watch?v=CuWZWAfBsm8)

- [How to Convert SVG to G-Code: Best Options](https://all3dp.com/2/svg-to-gcode-convert-files/)

## [JSCut](http://jscut.org/jscut.html#)

[To avoid having to use inkscape’s useless g code generator extension you can use JSCut.](https://cncphilosophy.com/svg-to-g-code/)

## [Using Openscad](https://3dprinting.stackexchange.com/questions/15130/openscad-linear-extrude-from-multiple-path-svg-import/15147)

It's possible to [import svg](https://en.m.wikibooks.org/wiki/OpenSCAD_User_Manual/SVG_Import) in openscad and then export as stl once transformed with [linear extrude](https://3dprinting.stackexchange.com/questions/15939/vary-line-with-z-axis-for-imported-svg-file)

There is also a [plugin to export directly to openscad](https://www.instructables.com/Convert-any-2D-image-to-a-3D-object-using-OpenSCAD/) / [thingiverse](https://www.thingiverse.com/thing:24808)

[![caption](https://i.stack.imgur.com/pGUnC.png) ](https://3dprinting.stackexchange.com/questions/15130/openscad-linear-extrude-from-multiple-path-svg-import/15147)

## From Inkscape
- [GCode tools](https://www.norwegiancreations.com/2015/08/an-intro-to-g-code-and-how-to-generate-it-using-inkscape/)
- [KM-Laser gcode plugin](https://github.com/KnoxMakers/KM-Laser)
    - used only for hatching
- [Jtech plugin for generating gcode](https://jtechphotonics.com/?page_id=1980)
    - ./extension/laser.py
    - as a section for header/footer custom gcode
	- setup bound after first apply ?

{% highlight cpp %}
G1 Z0.5 F1200;
G1 Z5.5 F1200;
{% endhighlight %}

### header
{% highlight cpp %}
G28
G90
G0 Z20
M117 Deploy Pen NOW! 10
G4 P1000
M117 Deploy Pen NOW! 9
G4 P1000
M117 Deploy Pen NOW! 8
G4 P1000
M117 Deploy Pen NOW! 7
G4 P1000
M117 Deploy Pen NOW! 6
G4 P1000
M117 Deploy Pen NOW! 5
G4 P1000
M117 Deploy Pen NOW! 4
G4 P1000
M117 Deploy Pen NOW! 3
G4 P1000
M117 Deploy Pen NOW! 2
G4 P1000
M117 Deploy Pen NOW! 1
G4 P1000
M117 Drawing..
{% endhighlight %}

### footer
{% highlight cpp %}
G0 Z20
G28 X0 Y0
M18
{% endhighlight %}


- [Inkscape to G-Code – All You Need to Know to Get Started](https://all3dp.com/2/inkscape-g-code-all-you-need-to-know-to-get-started/)
- Go from SVG to STL
	- inkscape save to svg
    - import inside cura

## [3D Printer CNC](https://www.youtube.com/watch?v=xoji-oqLSCY)
