---
title: Tracy Profiler
published: true
tags: profiler
---
> A real time, nanosecond resolution, remote telemetry, hybrid frame and sampling profiler for games and other applications. - [github](https://github.com/wolfpld/tracy/tree/master?tab=readme-ov-file#tracy-profiler)

- [An Introduction to Tracy Profiler in C++ (cppcon 2023)](https://www.youtube.com/watch?v=ghXk3Bk5F2U&t=828s)
	- `#include <Tracy.hpp>` to be included in the client

### [Installation](https://chatgpt.com/share/6728b6e3-fc9c-800d-bc55-98737823c9a1)


{% highlight bash %}
$ git clone --recursive https://github.com/wolfpld/tracy.git
$ cmake -B profiler/build -S profiler -DCMAKE_BUILD_TYPE=Release
$ cmake --build profiler/build --config Release --parallel
{% endhighlight %}

### see also
- [KUtrace](https://github.com/dicksites/KUtrace) / [HN](https://news.ycombinator.com/item?id=40972099) -  an extremely low-overhead Linux kernel tracing facility for observing all 
the execution time on all cores of a multi-core processor, nothing missing, while running 
completely unmodified user programs written in any computer language.

[![caption](https://github.com/wolfpld/tracy/raw/master/doc/profiler.png)](https://github.com/wolfpld/tracy)
