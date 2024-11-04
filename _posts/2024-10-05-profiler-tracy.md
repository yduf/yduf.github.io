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

## Tracing C++

Include in your code (look in example folder):

{% highlight cpp %}
#include "Tracy.hpp"
#include "TracyC.h"
{% endhighlight %}

and compile with

{% highlight bash %}
$  g++ fibers.cpp ../public/TracyClient.cpp -I../public/tracy -DTRACY_ENABLE -DTRACY_FIBERS -lpthread -ldl
{% endhighlight %}

**For short program**
Add -DTRACY_NO_EXIT

The part above is refered as _client setup_ in the documentation.

Then  
1- Start `tracy-profiler` - (the server)  and click connect (start listening socket)
2- launch your executable

If everything goes well this will give some data into the profiler.

### Instrumentation


### see also
- [Optik (Brofiler)](https://github.com/bombomby/optick?tab=readme-ov-file#optick-c-profiler-for-games) / [HN](https://news.ycombinator.com/item?id=29092136) - how to make it work on linux is unclear
- [KUtrace](https://github.com/dicksites/KUtrace) / [HN](https://news.ycombinator.com/item?id=40972099) -  an extremely low-overhead Linux kernel tracing facility for observing all 
the execution time on all cores of a multi-core processor, nothing missing, while running 
completely unmodified user programs written in any computer language.

[![caption](https://github.com/wolfpld/tracy/raw/master/doc/profiler.png)](https://github.com/wolfpld/tracy)
