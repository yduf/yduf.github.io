---
published: true
title: 'std::allocator'
tags: c++-memory memory profiler blog-code
---
> Historically `stl::allocator` were though to overcome issue with near and far pointer on intel archictecture and share a lot of issue from this time. Andreid revisit how they should have been implemented. - [CppCon](https://www.youtube.com/watch?v=LIb3L4vKZ7U)

which gives interface:
- allocate
- owns
- deallocate
- deallocateAll

Manipulating block made of (addr, size).

Danger:
- Freelist: are adversed to cache and can eat all memory.

### See also 
- [custom vector allocator](https://upcoder.com/6/custom-vector-allocation/)
- [	Nesting Allocators (2023)](https://news.ycombinator.com/item?id=41540777)
- [Writing a simple pool allocator in C](https://news.ycombinator.com/item?id=42605848) / [HN](https://news.ycombinator.com/item?id=42641993) - I've replaced Valgrind with sanitizers for most of my workflow.
	-
