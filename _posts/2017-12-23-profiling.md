---
title: Profiling
published: true
tags: profiling performance linux c++
---
- [Valgrind](http://valgrind.org/) / [CacheGrind](http://valgrind.org/docs/manual/cl-manual.html) / [KCacheGrind](https://kcachegrind.github.io/html/Home.html)
	- **x86/Linux**: up to and including SSSE3, but not higher -- no SSE4, AVX, AVX2. This target is in maintenance mode now..
    - **AMD64/Linux**: up to and including AVX2. This is the primary development target and tends to be well supported.

Notes: valgrind-3.13.0

[Usage](https://kcachegrind.github.io/html/Usage.html)

{% highlight bash %}
valgrind --tool=callgrind -v --dump-every-bb=10000000  ./a.out < data/game_1/01.dat 
{% endhighlight %}

- [Callgrind details](https://kcachegrind.github.io/html/Usage.html)
- [Tips & Tricks](https://web.stanford.edu/class/archive/cs/cs107/cs107.1174/guide_callgrind.html)
