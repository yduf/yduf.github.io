---
published: true
title: Freecad Internals (dev)
tags: freecad
---
> [Developer hub](https://wiki.freecad.org/Developer_hub) / [Power users hub](https://wiki.freecad.org/Power_users_hub)

### [Part Module](https://wiki.freecad.org/Part_Workbench)

Essentially all 2D and 3D drawing functions in every workbench (Workbench Draft.svg Draft, Workbench Sketcher.svg Sketcher, Workbench PartDesign.svg PartDesign, etc.), are based on these functions exposed by the Part Workbench. Therefore, the Part Workbench is considered the core component of the modelling capabilities of FreeCAD. 

Part objects are more complex than mesh objects created with the Mesh Workbench, as they permit more advanced operations like coherent boolean operations, modifications history, and parametric behaviour. 

[![caption](https://wiki.freecad.org/images/9/9e/Part_Workbench_relationships.svg)](https://wiki.freecad.org/Part_Workbench)