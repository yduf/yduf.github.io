---
published: true
title: Heap
tags: algorithm tree graph c++
use_math: true
---
> a binary tree inside an array, so it does not use parent/child pointers. - [heap](https://aquarchitect.github.io/swift-algorithm-club/Heap/) / [std::make_heap](https://en.cppreference.com/w/cpp/algorithm/make_heap)

### Key Properties
- find min in $O(1)$
- insert in $O(ln N)$
- delete min in $O(ln N)$
- _But_ search is $O(N)$

### [Common uses for heap](https://aquarchitect.github.io/swift-algorithm-club/Heap/)
- To build priority queues.
- To support heap sorts.
- To compute the [nth minimum]({% post_url 2020-12-23-cpp-nth_element %}) (or maximum) element(s) of a collection quickly.
- To impress your non-programmer friends.

There are two kinds of heaps: a max-heap and a min-heap which are different by the order in which they store the tree nodes.

In a max-heap, parent nodes have a greater value than each of their children. In a min-heap, every parent node has a smaller value than its child nodes. This is called the "heap property", and it is true for every single node in the tree.

_A sorted array from low-to-high is a valid min-heap._

### see also
- [Beating std::sort - Andrei]({% post_url 2019-09-20-fast-sort %})
- [Finding the first n largest elements in an array]({% post_url 2020-12-23-cpp-nth_element %})
- [Fibonacci heap](https://en.wikipedia.org/wiki/Fibonacci_heap) - has a better amortized running time than many other priority queue data structures.
- [Geometric Search Trees](https://news.ycombinator.com/item?id=41546874) - define zip tree as well

![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Max-Heap-new.svg/440px-Max-Heap-new.svg.png)
