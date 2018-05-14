---
title: C++ and the -O3 compilation flag (Codingame)
published: true
tags: c++ codingame
---
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
{% endhighlight %}
