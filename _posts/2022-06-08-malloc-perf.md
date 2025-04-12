---
published: true
title: Malloc perf
tags: malloc memory allocator c++-memory fastware latency
---
> What is the worst-case performance for malloc on a modern machine in practice? - [Benchmarking Malloc with Doom 3 - ForrestTheWoods](https://www.forrestthewoods.com/blog/benchmarking-malloc-with-doom3/)

### some observations
CRT is quite bad  
dlmalloc and tlsf are old and single-threaded  
jemalloc, mimalloc, and rpmalloc are "modern allocators"

Modern allocators:
- Are designed for multi-threading
- p50 malloc in under 10 nanoseconds
- p95 malloc in ~25 nanoseconds
- Worst 0.1%: 1 to 50 microseconds
- Absolute Worst: ~500 microseconds


### Latency vs Reliability
How much latency is too much? A Reddit discussion contained a rule of thumb I like:
2ms - works for pro audio  
20ms - works for gaming  
200ms - works for music  
2000ms - works for streaming   

![caption](https://www.forrestthewoods.com/blog/benchmarking-malloc-with-doom3/assets/img/header.png) 

see also
- [Memory Bandwidth Napkin Math](https://www.forrestthewoods.com/blog/memory-bandwidth-napkin-math/)
- [	Slitter: A slab allocator that trusts, but verifies](https://news.ycombinator.com/item?id=28068015)
