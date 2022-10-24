---
published: true
title: Highway
tags: c++ lib avx
---
> a C++ library that provides portable SIMD/vector intrinsics. - [github](https://github.com/google/highway) / [HN](https://news.ycombinator.com/item?id=28189799)

Online demos using Compiler Explorer:
- [single target using -m flags](https://gcc.godbolt.org/z/rGnjMevKG)

## Concept

### [Strip-mining loops](https://github.com/google/highway#strip-mining-loops)

To vectorize a loop, "strip-mining" transforms it into an outer loop and inner loop with number of iterations matching the preferred vector width.

### [API synopsis / quick reference](https://github.com/google/highway/blob/master/g3doc/quick_reference.md)

### [FAQ](https://github.com/google/highway/blob/master/g3doc/faq.md)