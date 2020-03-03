---
published: true
title: (un)-force-inline helper - (Fastware 2014 - Andrei)
tags: c++ fastware
---
## [Optimization Tips - Mo' Hustle Mo' Problems - CppCon 2014](https://www.youtube.com/watch?v=Qq_WaiwzOtI)

An interesting bechmark: [always_inline performance.](https://indico.cern.ch/event/386232/sessions/159923/attachments/771039/1057534/always_inline_performance.pdf) - [SO](https://stackoverflow.com/a/48212527/51386)

[GCC 4.6.2 inlining behavior](https://stackoverflow.com/questions/23199385/gcc-4-6-2-inlining-behavior)

[Options That Control Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
{% highlight cpp %}
// GCC
#define ALWAYS_INLINE inline __attribute__((__always_inline__))
#define NEVER_INLINE         __attribute__((__noinline__))
//#define NEVER_INLINE
{% endhighlight %}

## [Common Function Attributes (GCC)](https://gcc.gnu.org/onlinedocs/gcc/Common-Function-Attributes.html#Common-Function-Attributes)
- **__cold__** - The cold attribute on functions is used to inform the compiler that the function is unlikely to be executed.
- **__hot__** - The hot attribute on a function is used to inform the compiler that the function is a hot spot of the compiled program.
- **__leaf__** - Calls to external functions with this attribute must return to the current compilation unit only by return or by exception handling. For example, the sin function is a leaf function, but qsort is not.
- **__pure__** - Calls to functions that have no observable effects on the state of the program other than to return a value may lend themselves to optimizations such as common subexpression elimination.

