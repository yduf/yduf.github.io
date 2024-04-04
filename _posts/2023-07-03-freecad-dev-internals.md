---
published: true
title: Freecad Internals (dev)
tags: freecad
---
> [Developer hub](https://wiki.freecad.org/Developer_hub) / [Power users hub](https://wiki.freecad.org/Power_users_hub) / [mastodon](https://fosstodon.org/@FreeCAD)

- [FreeCAD Developers Handbook](https://freecad.github.io/DevelopersHandbook/gettingstarted/)
	- [dependencies](https://freecad.github.io/DevelopersHandbook/gettingstarted/dependencies.html#dependencies) / [Compile on Linux](https://wiki.freecad.org/Compile_on_Linux)
- [The FreeCAD source code](https://wiki.freecad.org/The_FreeCAD_source_code)

### [Part Module](https://wiki.freecad.org/Part_Workbench)

Essentially all 2D and 3D drawing functions in every workbench (Workbench Draft.svg Draft, Workbench Sketcher.svg Sketcher, Workbench PartDesign.svg PartDesign, etc.), are based on these functions exposed by the Part Workbench. Therefore, the Part Workbench is considered the corGUI component of the modelling capabilities of FreeCAD. 

Part objects are more complex than mesh objects created with the Mesh Workbench, as they permit more advanced operations like coherent boolean operations, modifications history, and parametric behaviour. 

[![caption](https://wiki.freecad.org/images/9/9e/Part_Workbench_relationships.svg)](https://wiki.freecad.org/Part_Workbench)

### [Sketcher scripting](https://wiki.freecad.org/Sketcher_scripting)

### [Interface Creation](https://wiki.freecad.org/Interface_creation)

- **Interface in a .ui file** -  This is the recommended approach. 
- **Interface completely in Python code** - This method is recommended only for small interfaces that don't define more than a few widgets, for example in macros.

[![caption](https://wiki.freecad.org/images/8/83/FreeCAD_creating_interfaces.svg)](https://wiki.freecad.org/Interface_creation)

### [GUI / Coin3D (SceneGraph)](https://wiki.freecad.org/Scenegraph)

In FreeCAD, normally, we don't need to interact directly with the Open Inventor scenegraph. Every object in a FreeCAD document, being a mesh, a part shape or anything else, gets automatically converted to Open Inventor code and inserted in the main scenegraph that you see in a 3D view. That scenegraph gets updated continuously when you modify, add or remove objects. In fact every object (in App space) has a view provider (a corresponding object in Gui space) responsible for issuing Open Inventor code.
