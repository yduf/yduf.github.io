---
published: true
title: Algorithms for Modern Hardware
tags: book algorithm fastware
---
> More practical ways to speed up a program than by going from O(nlog n) to O(nlog log n). - [Algorithmica](https://en.algorithmica.org/hpc/) / [HN](https://news.ycombinator.com/item?id=30583808)

Among the cool things that we will speed up:
- 2x faster GCD (compared to std::gcd)
- 8-15x faster binary search (compared to std::lower_bound)
- 5-10x faster segment trees (compared to Fenwick trees)
- 5x faster hash tables (compared to std::unordered_map)
- 2x faster popcount (compared to repeatedly calling popcnt)
- 2x faster parsing series of integers (compared to scanf)
- ?x faster sorting (compared to std::sort)
- 2x faster sum (compared to std::accumulate)
- 2-3x faster prefix sum (compared to naive implementation)
- 10x faster argmin (compared to naive implementation)
- 10x faster array searching (compared to std::find)
- 100x faster matrix multiplication (compared to “for-for-for”)
- optimal word-size integer factorization (~0.4ms per 60-bit integer)
- optimal Karatsuba Algorithm
- optimal FFT

