---
published: true
title: Modern perfect hashing for strings
tags: hash algorithm avx fastware benchmarking
---
> Parsing HTTP verbs appeared to be the fastest when we use a compile-time trie: a series of nested switch statements. I could not believe that a perfect hash function is not better, and that led to a novel hashing approach that is based on the instruction PEXT (Parallel Bits Extract). - [0x80.pl](http://0x80.pl/notesen/2023-04-30-lookup-in-strings.html) / [HN](https://news.ycombinator.com/item?id=35764176)

see also
- [Faster than Rust and C++: the PERFECT hash table](https://www.youtube.com/watch?v=DMQ_HcNSOAI) - unordered_map 34M/s / gperf 122M/s / _mm_cmpestrc - 178M/s / movemask 186M/s / ptest 189M/s
	- benchmarking with perf
    - cmovne - branch optimisation - 306M/s / 312M/s