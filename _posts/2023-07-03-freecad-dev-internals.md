---
published: true
title: Freecad Internals (dev)
tags: freecad code-review python
toc: true
---
> [Developer hub](https://wiki.freecad.org/Developer_hub) / [Power users hub](https://wiki.freecad.org/Power_users_hub) / [mastodon](https://fosstodon.org/@FreeCAD)

- [FreeCAD Developers Handbook](https://freecad.github.io/DevelopersHandbook/gettingstarted/)
	- [dependencies](https://freecad.github.io/DevelopersHandbook/gettingstarted/dependencies.html#dependencies) / [Compile on Linux](https://wiki.freecad.org/Compile_on_Linux)
- [The FreeCAD source code](https://wiki.freecad.org/The_FreeCAD_source_code)

# Organisation

FreeCAD is designed from the ground up with Python integration at its core. It provides a powerful Python API that allows users to script, automate, and extend almost every part of the application. - [ChatGPT](https://chatgpt.com/c/68531f70-1fc8-800d-952e-ad3c49bc5ac9)

You can write Python scripts outside of FreeCAD and run them using:
{% highlight bash %}
$ freecadcmd script.py
{% endhighlight %}

## Tree source

- [Workbench creation](https://wiki.freecad.org/Workbench_creation)

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

### see also
- [FeatureHole.cpp](https://github.com/FreeCAD/FreeCAD/blob/252707a803e96f3accfb5ac3e455a3aeaf7e974c/src/Mod/PartDesign/App/FeatureHole.cpp#L644) - where all metrics for hole are hardcoded...

# [Building Freecad](https://wiki.freecad.org/Compile_on_Linux)


<div style="
  border-left: 4px solid #3498db; /* blue */
  background: #eef7ff;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

[FreeCAD Developers Handbook](https://freecad.github.io/DevelopersHandbook/gettingstarted/)

</div>

## [Dependencies](https://freecad.github.io/DevelopersHandbook/gettingstarted/dependencies#dependencies)

## [Technicals Guide](https://freecad.github.io/DevelopersHandbook/technical/#technical)

A guide for developers learning their way around the FreeCAD codebase.

The FreeCAD developer’s tool set:

- C++ and Python
- Qt: a cross platform development framework
- OpenCascade: a geometry library
- Coin3d: a scenegraph manager based on OpenInventor that handles drawing in the 3d window.
- Pivy: a Python binding for Coin3d

[![deps](https://wiki.freecad.org/images/e/ed/FreeCAD_source_compilation_workflow.svg)](https://wiki.freecad.org/Compile_on_Linux)

## [Compiling (Linux)](https://wiki.freecad.org/Compile_on_Linux)

Wiki page advocate to first clone the [Freecad Repo]() to yourself (for future PR).
If you do so, you may want to disable the [github actions](https://chatgpt.com/share/6994a1a5-b4d8-800d-bcb6-efa208fc5378) in your copy.
- Repository → Settings → Actions → General: Disable actions

{% highlight bash %}
$ git clone --recurse-submodules <your repo>/FreeCAD FreeCAD-src
# or 
$ git clone <your repo>/FreeCAD.git
$ git submodule update --init --recursive # if forgotten
{% endhighlight %}

### [Nix Flake](https://github.com/mnesarco/freecad-nix-devshell?tab=readme-ov-file)
{% highlight bash %}
# get depandencies
$ cd Freecad
$ nix develop
{% endhighlight %}

Once all dependancies are available

{% highlight bash %}
# from your freecad-source folder:
$ mkdir build
$ cd build
# enable ninja and optionally ccache
$ cmake -G Ninja .. \
  -DCMAKE_C_COMPILER_LAUNCHER=ccache \
  -DCMAKE_CXX_COMPILER_LAUNCHER=ccache
$ ninja -j$(nproc --ignore=2)    # or cmake --build .
{% endhighlight %}

### Troubleshooting

- [**PySide6**](https://github.com/FreeCAD/FreeCAD/issues/18104) - Compilation is ok. but FreeCAD can't locate the modules when ran.
