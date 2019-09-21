---
published: true
title: (un)-force-inline helper - (Fastware 2014 - Andrei)
tags: c++ fastware
---
## [Optimization Tips - Mo' Hustle Mo' Problems - CppCon 2014](https://www.youtube.com/watch?v=Qq_WaiwzOtI)

{% highlight cpp %}
// GCC
#define ALWAYS_INLINE inline __attribute__((__always_inline__))
#define NEVER_INLINE         __attribute__((__noinline__))
//#define NEVER_INLINE
{% endhighlight %}
