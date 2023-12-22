---
published: true
title: Setting Mesh Resolution
tags: freecad mesh 3dmodel
---
> If you just go to the file menu and export, FreeCAD just creates a STL file from the visualisation mesh. The mesh tessellation was earlier simply defined from the FreeCAD PartDesign WB visualisation setting. 
> There was a feature request for on STL export to collect that value from the individual PartDesign "Body" objects' individual visualisation "property" rather than the FreeCAD setting value, which is what happens now IF we are talking about exporting a PartDesign Body object.
> If we are talking about Part WB objects, then the value is still collected from the PartDesign visualisation setting as previously explained. - [forum](https://forum.freecad.org/viewtopic.php?p=327958#p327958)

Further, if your mesh values don't seem to be changing in either case, then it is most likely because you have not forced a recompute of the solid object after the value was changed.

However if you go into Edit...preferences.. when you save anything, the default value in PartDesign ... Shape view...Tessellation.."maximum deviation depending on model bounding box"... is forced into all your solids Deviation properties in your project. Even if you have not changed that value but change any other preference then save, all your solids will be given the deviation value in the settings not whatever you might have individually changed them two.