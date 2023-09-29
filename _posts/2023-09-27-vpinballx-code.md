---
published: true
title: VPinballX (Standalone) Code (Draft)
tags: pincab code-review project draft
---
> VisualPinball Engine for MacOS / Android / linux - [github](https://github.com/vpinball/vpinball/tree/standalone/standalone)

### Code 
Use CMake

Dependancies
- [SDL2](https://www.libsdl.org/) + OpenGL
- [Plog]({% post_url 2023-09-27-cpp-lib-plog %}) - Pretty powerful logging library in about 1000 lines of code. Cross-platform

{% highlight bash %}
## change build instruction to
cmake -DCMAKE_BUILD_TYPE=Debug -B build_debug # so you have debug information
{% endhighlight %}

### Debug mode

Setup a custom .ini files, with proper setting ex: Fullsceen=false
You can copy & customize the one located in `~/.vpinball/VPinballX.ini`

## Project

Make it work on linux to be able to build a [pincab]({% post_url 2023-09-17-project-pincab %}) not requiring windows.

### Next
- How to choose screen for display (in multiscreen) ?
- How to enable B2S in standalone ?
