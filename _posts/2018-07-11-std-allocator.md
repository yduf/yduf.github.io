---
published: true
title: null
tags: c++ memory video blog
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

See also 
- [custom vector allocator](https://upcoder.com/6/custom-vector-allocation/)
- [	Nesting Allocators (2023)](https://news.ycombinator.com/item?id=41540777)