---
published: true
title: Benchmarking C++
tags: c++ fastware benchmarking lib
---
> Have a good baseline! - [The Art of Benchmarking (Fastware 2015 - Andrei)]({% post_url 2019-09-21-fastware-2015 %})

## Framework
- [facebook/folly]({% post_url 2021-06-20-lib-folly %})    
- [google/benchmark](https://github.com/google/benchmark)
	- [tutorial](https://www.bfilipek.com/2016/05/google-benchmark-library.html)

## Unpexpected impact on performance

Adding unrelated function slow down/or accelerate code.

- [Performance Analysis & Tuning on Modern CPU - Denis Bakhvalov.](https://www.youtube.com/watch?v=Ho3bCIJcMcc&feature=youtu.be&t=351)
	- [Blog](https://easyperf.net/notes/)
    - [slides](https://github.com/dendibakh/dendibakh.github.io/blob/master/_posts/presentations/PerfAnalysisOnModernCPU.pdf)
