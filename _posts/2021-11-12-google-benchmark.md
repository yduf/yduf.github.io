---
published: true
title: Google Benchmark
tags: c++ lib fastware benchmarking
---
> A library to benchmark code snippets, similar to unit tests. - [ google/benchmark ](https://github.com/google/benchmark)

More complete than folly benchmark. Simpler to setup.

- [Tuning C++: Benchmarks, and CPUs](https://youtu.be/nXaxk27zwlk?t=686)
- [Microbenchmarking is hard](https://stackoverflow.com/a/50934895/51386)

see also
- [nanobench comparison](https://nanobench.ankerl.com/comparison.html)

Note
use `-fno-omit-frame-pointer` to conserve callstack with optimized code
show perf
and `perf report -g 'graph,0.5,caller' to invert graph reported

define
- UNLIKELY - `__builtin_expected((bool)(x), 0)`

## [Disabling CPU Frequency Scaling](https://github.com/google/benchmark/blob/main/docs/user_guide.md#preventing-optimization)

{% highlight bash %}
sudo cpupower frequency-set --governor performance
./mybench
sudo cpupower frequency-set --governor powersave
{% endhighlight %}

## [Preventing Optimization](https://github.com/google/benchmark/blob/main/docs/user_guide.md#preventing-optimization)
- DoNotOptimize(<expr>)
- ClobberMemory()
  
Some implementation  
- escape - tell compiler that referenced object is modified (create/reserve test)  
equivalent of `doNotOptimizeAway` from folly.
{% highlight cpp %}
static void escape(void *p) {
  asm volatile("" : : "g"(p) : "memory");
}
{% endhighlight %}

- clobber - tell the compiler that whole memory is modified (push_back test).
{% highlight cpp %}
static void clobber() {
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

Single Range
{% highlight cpp %}
BENCHMARK(BM_memcpy)->Arg(8)->Arg(64)->Arg(512)->Arg(1<<10)->Arg(8<<10);
BENCHMARK(BM_memcpy)->Range(8, 8<<10);
BENCHMARK(BM_memcpy)->RangeMultiplier(2)->Range(8, 8<<10);
BENCHMARK(BM_DenseRange)->DenseRange(0, 1024, 128);
{% endhighlight %}

Dual Range

## Install

work with Meson
{% highlight bash %}
## google benchmark
opt_var = cmake.subproject_options()
opt_var.add_cmake_defines({'BENCHMARK_ENABLE_GTEST_TESTS': 'OFF'})
libgooglebench = cmake.subproject('libgoogle_benchmark', options: opt_var)

executable('bench_pickmove',
           [ 'bench/bench_pickmove.cc'],
           cpp_args : ['-g', '-save-temps'],
           install : true,
           dependencies: [ libgooglebench.dependency('benchmark')]
          )
{% endhighlight %}

**subprojects/libgoogle_benchmark.wrap**
{% highlight bash %}
[wrap-git]
url = https://github.com/google/benchmark.git
revision = v1.6.0
{% endhighlight %}
