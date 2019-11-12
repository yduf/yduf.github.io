---
published: true
title: Benchmarking C++
tags: c++ fastware benchmarking lib
---
## [have a good baseline]({% post_url 2019-09-21-fastware-2015 %})

## Framework

- [facebook/folly](https://github.com/facebook/folly)
	- [benchmark](https://github.com/facebook/folly/blob/master/folly/docs/Benchmark.md)
	- doNotOptimizeAway() -  prevents compiler optimizations that may interfere with benchmarking 
{% highlight cpp %}
# not trivial to get dependancies rigth...
g++  example.cc -lfollybenchmark -lfolly -lglog -lgflags -pthread -lm -lpthread -ldl -ldouble-conversion -lboost_regex -lssl -lcrypto -liberty
{% endhighlight %}
    
    
- [google/benchmark](https://github.com/google/benchmark)
	- [tutorial](https://www.bfilipek.com/2016/05/google-benchmark-library.html)
