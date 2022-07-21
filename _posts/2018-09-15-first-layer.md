---
published: true
title: First layer (calibration)
tags: 3dprint calibration
---
> Getting that first layer right is an indicator of a lot things. Such as, a correctly leveled bed, right filament temperature, correct extrusion amount, etc. In short, getting that first layer right is a good signal* that your print won’t fail. You can save yourself a lot of time catching errors in the first layer(s). Its better to reprint with different settings after only 5 minutes of printing, rather than 5 hours. Also, if your print isn’t sticking, without a desperate application of ducktape, there’s no way the print will succeed. - [Perfecting the First Layer](https://www.3dhubs.com/talk/t/perfecting-the-first-layer-tips-and-tricks/1075)

### [How does a successfull first layer look like](https://ultimaker.com/en/resources/21330-what-does-a-successful-first-layer-look-like)

[cult](https://cults3d.com/fr/blog/articles/6-facteurs-premi%C3%A8re-couche-impression3d-parfaite)
[![caption](https://files.cults3d.com/uploads/blog/image/image/1704/prusa.jpg)](https://cults3d.com/fr/blog/articles/6-facteurs-premi%C3%A8re-couche-impression3d-parfaite)

[first layer test model](https://www.yeggi.com/q/first+layer+test/)
- [circle](https://www.thingiverse.com/thing:3333025/files)

### [How to Fix PLA Warping on Heat Bed](https://3dprinterpal.com/how-to-fix-pla-warping-on-heat-bed-guide/)

### [Leveling the bed](https://www.youtube.com/watch?v=YPAXeBuq9qU&t=66s)

### Over / Under Extrusion

see [Feeding rate](http://www.tridimake.com/2012/10/review-settings-for-cura-3d-printing.html)

### [First Layer Settings](https://3dprinterwiki.info/tips/first-layer-settings/)

- too close gives elephant foot

You need the nozzle to be lower so the extruded plastic is compressed against the bed to increase the surface contact area.

In Cura, the setting is on the “Advanced” tab, in the “Quality” section, and is called “Initial Layer Thickness”. It is set in an absolute value in milimeters so will have to be calculated relative to your layer height. Round to the nearest 0.01.

For a 0.30mm layer height, use 0.27mm Initial Layer Thickness.
For a 0.25mm layer height, use 0.23mm Initial Layer Thickness.
For a 0.20mm layer height, use 0.18mm Initial Layer Thickness.
For a 0.15mm layer height, use 0.14mm Initial Layer Thickness.
for a 0.10mm layer height, use 0.09mm Initial Layer Thickness.
For a 0.05mm layer height, use 0.05 (yes, this is possible on the Di3!)

### [Slicer settings](https://reprap.org/wiki/Triffid_Hunter%27s_Calibration_Guide#Slicer_settings)

You can use a lower layer height or larger extrusion width if you wish, it will work fine. The slicing software automatically calculates the appropriate volume to extrude based on the settings you choose.

### [Build plate adhesion](https://ultimaker.com/en/resources/257-build-plate-adhesion-how-to-get-your-print-to-stick-to-the-build-plate)
