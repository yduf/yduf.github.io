---
published: true
title: Pointer compression in Oilpan
tags: memory pointer 64bits x86
---
> It is absolutely idiotic to have 64-bit pointers when I compile a program that uses less than 4 gigabytes of RAM. When such pointer values appear inside a struct, they not only waste half the memory, they effectively throw away half of the cache. – [Donald Knuth (2008)](https://cs.stanford.edu/~knuth/news08.html)