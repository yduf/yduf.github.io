---
published: true
title: Google Benchmark
tags: c++ lib fastware benchmarking
---
> A library to benchmark code snippets, similar to unit tests. - [ google/benchmark ](https://github.com/google/benchmark)

- [Tuning C++: Benchmarks, and CPUs](https://youtu.be/nXaxk27zwlk?t=686)
- [Microbenchmarking is hard](https://stackoverflow.com/a/50934895/51386)

Note
use `-fno-omit-frame-pointer` to conserve callstack with optimized code
show perf
and `perf report -g 'graph,0.5,caller' to invert graph reported

define
- UNLIKELY - `__builtin_expected((bool)(x), 0)`

- escape - tell compiler that referenced object is modified (create/reserve test)  
equivalent of `doNotOptimizeAway` from folly.
{% highlight cpp %}
static void escape(void *p) {
  asm volatile("" : : "g"(p) : "memory");
}
{% endhighlight %}

- clobber - tell the compiler that whole memory is modified (push_back test).
{% highlight cpp %}
static void clober() {
  asm volatile("" : :  : "memory");
}
{% endhighlight %}

## [`BENCHMARK`](https://github.com/google/benchmark)

{% highlight cpp %}
#include <benchmark/benchmark.h>

static void BM_SomeFunction(benchmark::State& state) {
  // Perform setup here
  for (auto _ : state) {
    // This code gets timed
    SomeFunction();
  }
}
// Register the function as a benchmark
BENCHMARK(BM_SomeFunction);
// Run the benchmark
BENCHMARK_MAIN();
{% endhighlight %}

[`BENCHMARK`](https://github.com/google/benchmark/blob/main/docs/user_guide.md#passing-arguments) loop can be customized.


## Install

work with Meson

