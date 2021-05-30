---
published: true
title: (un)-force-inline helper - (Fastware 2014 - Andrei)
tags: c++ fastware inline
---
## [Optimization Tips - Mo' Hustle Mo' Problems - CppCon 2014](https://www.youtube.com/watch?v=Qq_WaiwzOtI)

- Smarter C/C++ inlining with [`__attribute__((flatten))`](https://awesomekling.github.io/Smarter-C++-inlining-with-attribute-flatten/)

{% highlight cpp %}
// GCC
#define ALWAYS_INLINE inline __attribute__((__always_inline__))
#define NEVER_INLINE         __attribute__((__noinline__))
//#define NEVER_INLINE
{% endhighlight %}

## [Options That Control Optimization](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
- An interesting bechmark: [always_inline performance.](https://indico.cern.ch/event/386232/sessions/159923/attachments/771039/1057534/always_inline_performance.pdf) - [SO](https://stackoverflow.com/a/48212527/51386)
- [GCC 4.6.2 inlining behavior](https://stackoverflow.com/questions/23199385/gcc-4-6-2-inlining-behavior)

- -foptimize-sibling-calls - Optimize sibling and tail recursive calls. 
- -finline-small-functions - 
- -findirect-inlining
- -finline-functions - Consider all functions for inlining, even if they are not declared inline.
- -fearly-inlining - Inline functions marked by always_inline and functions whose body seems smaller than the function call overhead
- -finline-limit=n - This flag allows coarse control of this limit. n is the size of functions that can be inlined in number of pseudo instructions. 
- -fwhole-program - Assume that the current compilation unit represents the whole program being compiled.

## [Common Function Attributes (GCC)](https://gcc.gnu.org/onlinedocs/gcc/Common-Function-Attributes.html#Common-Function-Attributes)
- **__cold__** - The cold attribute on functions is used to inform the compiler that the function is unlikely to be executed.
- **__hot__** - The hot attribute on a function is used to inform the compiler that the function is a hot spot of the compiled program.
- **__leaf__** - Calls to external functions with this attribute must return to the current compilation unit only by return or by exception handling. For example, the sin function is a leaf function, but qsort is not.
- **__pure__** - Calls to functions that have no observable effects on the state of the program other than to return a value may lend themselves to optimizations such as common subexpression elimination.
