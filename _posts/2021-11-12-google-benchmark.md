---
published: true
title: Google Benchmark
tags: c++ lib fastware benchmark
---
> A library to benchmark code snippets, similar to unit tests. - [ google/benchmark ](https://github.com/google/benchmark)

- [Tuning C++: Benchmarks, and CPUs](https://youtu.be/nXaxk27zwlk?t=686)
- [Microbenchmarking is hard](https://stackoverflow.com/a/50934895/51386)

define
- UNLIKELY - `__builtin_expected((bool)(x), 0)`

- escape - tell compiler that referenced object is modified
{% highlight cpp %}
static void escape(void *p) {
  asm volatile("" : : "g"(p) : "memory");
}
{% endhighlight %}

- clobber - tell the compiler that whole memory is modified
{% highlight cpp %}
static void escape(void *p) {
  asm volatile("" : :  : "memory");
}
{% endhighlight %}