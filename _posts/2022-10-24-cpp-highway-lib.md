---
published: true
title: Highway (vector loop)
tags: c++ lib avx loop
---
> a C++ library that provides portable SIMD/vector intrinsics. - [github](https://github.com/google/highway) / [HN](https://news.ycombinator.com/item?id=28189799)

Online demos using Compiler Explorer:
- [single target using -m flags](https://gcc.godbolt.org/z/rGnjMevKG)

## Concept

### [Strip-mining loops](https://github.com/google/highway#strip-mining-loops)

To vectorize a loop, "strip-mining" transforms it into an outer loop and inner loop with number of iterations matching the preferred vector width.

### [API synopsis / quick reference](https://github.com/google/highway/blob/master/g3doc/quick_reference.md)

### [FAQ](https://github.com/google/highway/blob/master/g3doc/faq.md)

## see also
- [Entrywise addition of two double arrays using AVX](https://stackoverflow.com/a/27204877/51386) - code comparison of AVX 512 / AVX / SSE2 loop
- [How to use if condition in intrinsics](https://stackoverflow.com/questions/38006616/how-to-use-if-condition-in-intrinsics)
- [Controlling the Data Flow](https://www.codingame.com/playgrounds/283/sse-avx-vectorization/controlling-the-data-flow)