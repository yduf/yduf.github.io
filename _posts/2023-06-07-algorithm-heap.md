---
published: true
title: Heap
tags: algorithm tree graph c++
---
> a binary tree inside an array, so it does not use parent/child pointers. - [heap](https://aquarchitect.github.io/swift-algorithm-club/Heap/) / [std::make_heap](https://en.cppreference.com/w/cpp/algorithm/make_heap)

Common uses for heap:
- To build priority queues.
- To support heap sorts.
- To compute the minimum (or maximum) element of a collection quickly.
- To impress your non-programmer friends.

There are two kinds of heaps: a max-heap and a min-heap which are different by the order in which they store the tree nodes.

In a max-heap, parent nodes have a greater value than each of their children. In a min-heap, every parent node has a smaller value than its child nodes. This is called the "heap property", and it is true for every single node in the tree.

A sorted array from low-to-high is a valid min-heap.

see also
- [Beating std::sort - Andrei]({% post_url 2019-09-20-fast-sort %})
- [Finding the first n largest elements in an array]({% post_url 2020-12-23-cpp-nth_element %})
- [Fibonacci heap](https://en.wikipedia.org/wiki/Fibonacci_heap) - has a better amortized running time than many other priority queue data structures.

![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Max-Heap-new.svg/440px-Max-Heap-new.svg.png)
