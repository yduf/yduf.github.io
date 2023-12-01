---
published: true
title: Faster binary search
tags: graph search algorithm fastware
---
> Static B-Trees,  a data structure for faster binary search - [Algorithmica.org](https://en.algorithmica.org/hpc/data-structures/s-tree/) / [HN](https://news.ycombinator.com/item?id=30376140)

### see also
- [Bug in Binary Search](https://www.youtube.com/watch?v=_eS-nNnkKfI) - when taking the middle (m+r)/2, what if m+r overflow your integer ?
- [	Beautiful branchless binary search](https://probablydance.com/2023/04/27/beautiful-branchless-binary-search/) / [HN](https://news.ycombinator.com/item?id=35737862)
- [Eytzinger Binary Search](https://algorithmica.org/en/eytzinger) / [2](https://espindo.la/posts/array-layouts.html) - In addition to being branchless, it also has better cache properties than a standard binary search tree.
- [4K Aliasing](https://richardstartin.github.io/posts/4k-aliasing) - Intel uses 12-bit memory port quick addressing in their hardware, resulting in an issue known as “4K Aliasing” - [HN](https://news.ycombinator.com/item?id=35741301)
- [cmov](https://yarchive.net/comp/linux/cmov.html) - make branches predictable, and only after, use CMOV for the remaining ones. His fundametnal assumption is that "even if you were to know that something is unpredictable, it's going to be very rare.". - [HN](https://news.ycombinator.com/item?id=35738299)

- [Michael Abrash books](https://www.jagregory.com/abrash-black-book/) - C ( and C++ ) does not match hardware anymore. - [HN](https://news.ycombinator.com/item?id=35738633)
