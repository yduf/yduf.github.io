---
published: true
title: Axis (Linuxcnc GUI)
tags: cnc
---
> AXIS is a graphical front-end for LinuxCNC which features a live preview and backplot. - [Axis](http://linuxcnc.org/docs/html/gui/axis.html)

## [A Typical Session](http://linuxcnc.org/docs/html/gui/axis.html#_a_typical_session)
1. Start LinuxCNC.
1. Reset E-STOP (F1) and turn the Machine Power (F2) on.
1. Home all axes.
1. Load the g-code file.
1. Use the preview plot to verify that the program is correct.
1. Load the material.
1. Set the proper offset for each axis by jogging and using the Touch Off button as needed.
1. Run the program.

## Machine Menu
- **Homing** - Home one or all axes.
- **Unhoming* - Unhome one or all axes. 
- **Zero Coordinate System** - Set all offsets to zero in the coordinate system chosen. 
- **Tool touch off to workpiece** - When performing Touch Off, the value entered is relative to the current workpiece (G5x) coordinate system, as modified by the axis offset (G92). When the Touch Off is complete, the Relative coordinate for the chosen axis will become the value entered.
- **Tool touch off to fixture** - When performing Touch Off, the value entered is relative to the ninth (G59.3) coordinate system, with the axis offset (G92) ignored. This is useful when there is a tool touch-off fixture at a fixed location on the machine, with the ninth (G59.3) coordinate system set such that the tip of a zero-length tool is at the fixture?s origin when the Relative coordinates are 0.
