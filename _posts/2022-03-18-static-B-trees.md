---
published: true
title: Faster binary search (B-tree)
tags: tree search algorithm fastware
---
> Static B-Trees,  a data structure for faster binary search - [Algorithmica.org](https://en.algorithmica.org/hpc/data-structures/s-tree/) / [HN](https://news.ycombinator.com/item?id=30376140)

### see also
- [	B-Trees Require Fewer Comparisons Than Balanced Binary Search Trees](https://news.ycombinator.com/item?id=40768418) 
	- How B-trees can win is by taking advantage of the node children being sorted in an array. This allows a binary search to be used. Binary search makes B-tree more or less equivalent to a very balanced binary tree. - [HN](https://news.ycombinator.com/item?id=40774105)
    	- linear search could even be more efficient and cache friendly (assuming small child array).
- [Robots Are After Your Job: Exploring Generative AI for C++ - Andrei Alexandrescu - CppCon 2023](https://www.youtube.com/watch?v=J48YTbdJNNc) - now at NVidia
	- binary search invented in 1946, support odd size in 1957
    - std::lower_bound does not return early - but does only one comparison compared to binary_search
    - 50% improvement on std::equal_range
    - on creativity, judgement and skill (about chatGPT)
- [Bug in Binary Search](https://www.youtube.com/watch?v=_eS-nNnkKfI) - when taking the middle (l+r)/2, what if m+r overflow your integer ? Rather use l+(r-l)/2.
- [	Beautiful branchless binary search](https://probablydance.com/2023/04/27/beautiful-branchless-binary-search/) / [HN](https://news.ycombinator.com/item?id=35737862)
- [Eytzinger Binary Search](https://algorithmica.org/en/eytzinger) / [2](https://espindo.la/posts/array-layouts.html) - In addition to being branchless, it also has better cache properties than a standard binary search tree.
- [4K Aliasing](https://richardstartin.github.io/posts/4k-aliasing) - Intel uses 12-bit memory port quick addressing in their hardware, resulting in an issue known as “4K Aliasing” - [HN](https://news.ycombinator.com/item?id=35741301)
- [cmov](https://yarchive.net/comp/linux/cmov.html) - make branches predictable, and only after, use CMOV for the remaining ones. His fundametnal assumption is that "even if you were to know that something is unpredictable, it's going to be very rare.". - [HN](https://news.ycombinator.com/item?id=35738299)

- [Michael Abrash books](https://www.jagregory.com/abrash-black-book/) - C ( and C++ ) does not match hardware anymore. - [HN](https://news.ycombinator.com/item?id=35738633)
