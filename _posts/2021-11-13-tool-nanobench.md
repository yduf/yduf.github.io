---
published: true
title: Nanobench
tags: benchmarking c++ single-header
---
> a platform independent microbenchmarking library for C++11/14/17/20. - [nanobench comparison](https://nanobench.ankerl.com/comparison.html) / [r/cpp](https://www.reddit.com/r/cpp/comments/dgy9yc/ankerlnanobench_simple_fast_accurate_singleheader/) / [2](https://www.reddit.com/r/cpp/comments/nwjmct/suggestions_for_c_microbenchmarking_libraries/)

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
