---
published: true
title: (un)-force-inline helper - (Fastware 2014 - Andrei)
tags: c++ fastware
---
## [Optimization Tips - Mo' Hustle Mo' Problems - CppCon 2014](https://www.youtube.com/watch?v=Qq_WaiwzOtI)

An interesting bechmark: [always_inline performance.](https://indico.cern.ch/event/386232/sessions/159923/attachments/771039/1057534/always_inline_performance.pdf) - [SO](https://stackoverflow.com/a/48212527/51386)

{% highlight cpp %}
// GCC
#define ALWAYS_INLINE inline __attribute__((__always_inline__))
#define NEVER_INLINE         __attribute__((__noinline__))
//#define NEVER_INLINE
{% endhighlight %}
