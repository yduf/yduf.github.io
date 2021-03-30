---
title: Intel SPMD Program Compiler (Volta)
published: true
tags: shader avx intel despair.com
---
> ispc compiles a C-based SPMD programming language to run on the SIMD units of CPUs; it frequently provides a 3x or more speedup on CPUs with 4-wide vector SSE units and 5x-6x on CPUs with 8-wide AVX vector units, without any of the difficulty of writing intrinsics code. Parallelization across multiple cores is also supported by ispc, making it possible to write programs that achieve performance improvement that scales by both number of cores and vector unit size. - [Github](https://github.com/ispc/ispc) / [HN](https://news.ycombinator.com/item?id=16891980)

## Presentation
[slides](http://i2pc.cs.illinois.edu/public_archive/uiuc-ispc-2012.pdf)

## [The story of ispc (Matt Pharr)](http://pharr.org/matt/blog/2018/04/30/ispc-all.html)


