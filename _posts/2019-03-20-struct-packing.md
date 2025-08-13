---
published: true
title: The Lost Art of Structure Packing
tags: c++ c++-memory fastware bits structure
---
> [Eric S. Raymond](http://www.catb.org/esr/structure-packing/)

see also
- [	Writing memory efficient C structs](https://news.ycombinator.com/item?id=44733968) - No mention of pahole / dwarves? [lwn](https://lwn.net/Articles/335942/) It's the standard tool used by the Linux kernel developers. - [HN](https://news.ycombinator.com/item?id=44735090)
  - [Poke-a-hole and friends](https://lwn.net/Articles/335942/) - is an object-file analysis tool to find the size of the data structures, and the holes caused due to aligning the data elements to the word-size of the CPU by the compiler. 