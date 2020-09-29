---
title: C++ and the -O3 compilation flag (Codingame)
published: true
tags: c++ codingame compiler tricks
---
## [Update C++](https://forum.codingame.com/t/languages-update/1574/117)
{% highlight bash %}
compiler: g++ 8.3.0 mode C++17
flags: -std=gnu++17 -Werror=return-type -g -pthread 
libraries: -lm -lpthread -ldl -lcrypt
{% endhighlight %}

### Ruby 2.6.2


## [C++17](https://www.codingame.com/forum/t/languages-update/1574/54)
{% highlight bash %}
compiler: gcc 8.2.0 mode C17
flags: -std=gnu++17 -Werror=return-type -g -pthread 
libraries: -lm -lpthread -ldl -lcrypt
{% endhighlight %}


## [C++14](https://www.codingame.com/forum/t/language-request-c-14/1039/32)
{% highlight bash %}
flags: -std=gnu++14 -Werror=return-type -g -pthread 
libraries: -lm -lpthread -ldl -lcrypt
{% endhighlight %}

[c++ optimization trick](https://www.codingame.com/forum/t/c-and-the-o3-compilation-flag/1670/15)

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
