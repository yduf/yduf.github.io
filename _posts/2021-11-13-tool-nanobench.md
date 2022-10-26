---
published: true
title: Nanobench
tags: benchmarking c++ single-header
---
> a platform independent microbenchmarking library for C++11/14/17/20. - [nanobench comparison](https://nanobench.ankerl.com/comparison.html) / [r/cpp](https://www.reddit.com/r/cpp/comments/dgy9yc/ankerlnanobench_simple_fast_accurate_singleheader/) / [2](https://www.reddit.com/r/cpp/comments/nwjmct/suggestions_for_c_microbenchmarking_libraries/)

Single header code, easier to integrate and faster than [google benchmark]({% post_url 2021-11-12-google-benchmark %}).


- [pyperf](https://pyperf.readthedocs.io/en/latest/system.html) - Tune the system for benchmarks

{% highlight cpp %}
#define ANKERL_NANOBENCH_IMPLEMENT
#include <nanobench.h>

#include <atomic>

int main() {
    int y = 0;
    std::atomic<int> x(0);
    ankerl::nanobench::Bench().run("compare_exchange_strong", [&] {
        x.compare_exchange_strong(y, 0);
    });
}
{% endhighlight %}

  
Output
{% highlight cpp %}
Warning, results might be unstable:
* CPU frequency scaling enabled: CPU 0 between 400.0 and 4,900.0 MHz
* CPU governor is 'powersave' but should be 'performance'
* Turbo is enabled, CPU frequency will fluctuate

Recommendations
* Use 'pyperf system tune' before benchmarking. See https://github.com/psf/pyperf

|               ns/op |                op/s |    err% |     total | benchmark
|--------------------:|--------------------:|--------:|----------:|:----------
|               18.97 |       52,724,029.52 |    1.2% |      0.01 | `compare_exchange_strong`
{% endhighlight %}
  
### see also
- [Micro-benchmarks](https://vorbrodt.blog/2019/03/18/micro-benchmarks/) - compare Google Benchmark / Catch2 / Hayai / Celero / Nonius