---
published: true
title: Generating GCode from SVG
tags: gcode 3dprint
---
> Can I send my model from Inkscape directly to my 3D printer? - [2D printing on a 3D printer](https://www.youtube.com/watch?v=CuWZWAfBsm8)

- [How to Convert SVG to G-Code: Best Options](https://all3dp.com/2/svg-to-gcode-convert-files/)

## [JSCut](http://jscut.org/jscut.html#)

[To avoid having to use inkscape’s useless g code generator extension you can use JSCut.](https://cncphilosophy.com/svg-to-g-code/)

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

