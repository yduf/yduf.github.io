---
title: C++ flags &  HW Limits (Codingame)
published: true
tags: c++ codingame
---
> Votre programme est compilé et exécuté dans un environnement Linux sur une architecture multi-coeurs 64bits. - [Environment/lang](https://www.codingame.com/faq)

<span style="color:red">**SIGSEGV will often been seen as Timeout by the Codingame engine (without any clue given).**</span>
see [Stacktrace]({% post_url 2022-12-08-cpp-stacktrace %}) - for a quick Signal handler that could help diagnosing this situation.


## Limits
Your program is compiled and run in a Linux environment on a _64bit_ multi-core architecture.
- 1 cpu
- Memory limits is 768MB - [forum](https://forum.codingame.com/t/killed-on-c-memory-reservations/140640/77)
- source code is 100k chararcters

## Ruby 2.6.2

## [C++](https://forum.codingame.com/t/languages-update/1574/264) as of 21/04
{% highlight bash %}
compiler: g++ 11.2.0 mode C++17
flags: -std=gnu++17 -Werror=return-type -g -pthread 
libraries: -lm -lpthread -ldl -lcrypt
{% endhighlight %}

### [c++ optimization trick](https://www.codingame.com/forum/t/c-and-the-o3-compilation-flag/1670/15)

{% highlight cpp %}
// trigger optimisation from source file
#pragma GCC optimize("O3")
#pragma GCC optimize("inline")
#pragma GCC optimize("omit-frame-pointer")
#pragma GCC optimize("unroll-loops") //Optimization flags

#pragma GCC optimize("Ofast")

#pragma GCC option("arch=native","tune=native","no-zero-upper") //Enable AVX
#pragma GCC target("avx")  //Enable AVX
#pragma GCC target "bmi2"
#include <x86intrin.h> //AVX/SSE Extensions
{% endhighlight %}
