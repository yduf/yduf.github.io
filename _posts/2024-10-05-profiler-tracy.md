---
title: Tracy Profiler
published: true
tags: profiler
---
> A real time, nanosecond resolution, remote telemetry, hybrid frame and sampling profiler for games and other applications. - [github](https://github.com/wolfpld/tracy/tree/master?tab=readme-ov-file#tracy-profiler)

- [An Introduction to Tracy Profiler in C++ (cppcon 2023)](https://www.youtube.com/watch?v=ghXk3Bk5F2U&t=828s)
	- `#include <Tracy.hpp>` to be included in the client

### [Installation](https://chatgpt.com/share/6728b6e3-fc9c-800d-bc55-98737823c9a1)

On linux, need to build from source.

**Notes**: by default it compile for Wayland.
Need X11 => need to enable LEGACY option in CMake build settings (-DLEGACY=ON)
This will require glfw.

Otherwise it's rather easy to build:

{% highlight bash %}
$ git clone --recursive https://github.com/wolfpld/tracy.git
$ cmake -B profiler/build -S profiler -DCMAKE_BUILD_TYPE=Release -DLEGACY=ON
$ cmake --build profiler/build --config Release --parallel
{% endhighlight %}

## [Tracing C++](https://github.com/davidwed/tracy?tab=readme-ov-file#initial-client-setup)

Include in your code (look in example folder):

{% highlight cpp %}
#include "Tracy.hpp"
#include "TracyC.h"
{% endhighlight %}

and compile with

{% highlight bash %}
$  g++ fibers.cpp ../public/TracyClient.cpp -I../public/tracy -DTRACY_ENABLE -lpthread -ldl
{% endhighlight %}

**For short program**
Add -DTRACY_NO_EXIT

The part above is refered as _client setup_ in the documentation.

Then  
1- Start `tracy-profiler` - (the server)  and click connect (start listening socket)
2- launch your executable - (the client)

If everything goes well this will give some data into the profiler.

## Instrumentation

With the steps mentioned above, you will be able to connect to the profiled program, but there probably won’t be any data collection performed. Unless you’re able to perform automatic call stack sampling (see chapter 3.15.5), you will have to instrument the application manually.

**Notes** the API sometimes rely on unique ptr (unique adress) for string definition. Make sure to read the doc refering to that part, eg this is the case for FrameMarker:

### Frame

To slice the program's execution recording into frame-sized chunks.

{% highlight cpp %}
// recommended approach to ensure unique addr for this API calls
const char * const sl_AudioProcessing = " Audio processing " ;

FrameMarkStart( sl_AudioProcessing ) ;
...
FrameMarkEnd( sl_AudioProcessing ) ;

{% endhighlight %}

### [Zone](https://github.com/davidwed/tracy?tab=readme-ov-file#marking-zones)

To record a zone's execution time add the ZoneScoped macro at the beginning of the scope you want to measure. This will automatically record function name, source file name and location. Optionally you may use the ZoneScopedC( 0xRRGGBB ) macro to set a custom color for the zone. Note that the color value will be constant in the recording.

### [Plotting Data](https://github.com/davidwed/tracy?tab=readme-ov-file#plotting-data)

Tracy is able to capture and draw value changes over time.

### [Message Log](https://github.com/davidwed/tracy?tab=readme-ov-file#message-log)

You can send messages (for example, your typical debug output) using the TracyMessage( text, size ) macro;

### [Memory Profiling](https://github.com/davidwed/tracy?tab=readme-ov-file#memory-profiling)

### [Callstack](https://chatgpt.com/share/67294318-9a1c-800d-81a0-749fa826d17b)

The easiest way is to launch instrument code [with high privilege](https://stackoverflow.com/questions/78362287/is-there-a-way-to-track-whole-frame-call-stack-in-tracy-whitout-calling-zonescop) => this will allows stack sampling and stack collection

You can force call stack capture in the non-S postfixed macros by adding the TRACY_CALLSTACK define, set
to the desired call stack capture depth.




### see also
- [Tracy Profiler](https://github.com/davidwed/tracy?tab=readme-ov-file#tracy-profiler)
- [Integrating Tracy Profiler in C++](https://luxeengine.com/integrating-tracy-profiler-in-cpp/)

### Alternatives
- [Optik (Brofiler)](https://github.com/bombomby/optick?tab=readme-ov-file#optick-c-profiler-for-games) / [HN](https://news.ycombinator.com/item?id=29092136) - how to make it work on linux is unclear
- [KUtrace](https://github.com/dicksites/KUtrace) / [HN](https://news.ycombinator.com/item?id=40972099) -  an extremely low-overhead Linux kernel tracing facility for observing all 
the execution time on all cores of a multi-core processor, nothing missing, while running 
completely unmodified user programs written in any computer language.

[![caption](https://github.com/wolfpld/tracy/raw/master/doc/profiler.png)](https://github.com/wolfpld/tracy)
