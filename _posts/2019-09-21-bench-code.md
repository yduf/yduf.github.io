---
published: true
title: Benchmarking C++
tags: c++ fastware benchmarking lib quote online
---
> Measuring gives you a leg up on experts who don't need to measure - [Have a good baseline!]({% post_url 2019-09-21-fastware-2015 %})

see also
- [Quick C++ Benchmark](https://quick-bench.com/q/iRokweQ6JqF2Il-T-9JSmR0bdyw) - Online tool - 
	- found in  [C++ Weekly - Ep 222 - 3.5x Faster Standard Containers With PMR!](https://www.youtube.com/watch?v=q6A7cKFXjY0)

## Framework
- [facebook/folly]({% post_url 2021-06-20-lib-folly %})    
- [google/benchmark](https://github.com/google/benchmark)
	- [tutorial](https://www.bfilipek.com/2016/05/google-benchmark-library.html)

## Unpexpected impact on performance

Adding unrelated function slow down/or accelerate code.

- [Performance Analysis & Tuning on Modern CPU - Denis Bakhvalov.](https://www.youtube.com/watch?v=Ho3bCIJcMcc&feature=youtu.be&t=351)
	- [Blog](https://easyperf.net/notes/)
    - [slides](https://github.com/dendibakh/dendibakh.github.io/blob/master/_posts/presentations/PerfAnalysisOnModernCPU.pdf)

- [Deoptimizing a C++ program](https://stackoverflow.com/questions/37361145/deoptimizing-a-program-for-the-pipeline-in-intel-sandybridge-family-cpus)
