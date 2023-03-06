---
published: true
title: Raise to sleep
tags: c++ hash fastware battery dictionary
---
> running code faster is the only way to consume less (__Anyway Java is faster than c++__) - [Efficiency with Algorithms, Performance with Data Structures (CppCon)](https://www.youtube.com/watch?v=fHNmRkzxHWs)

- output parameter are not faster - [it's a myth](https://youtu.be/fHNmRkzxHWs?t=1928)
	- return value optimisation work better (in general)
- just say **NO** to linked list
- don't use a [std::map](https://youtu.be/fHNmRkzxHWs?t=2696) _it's a linked list_
	- [unordered_map](https://youtu.be/fHNmRkzxHWs?t=2798) won't save us either. (also a linked list all below) => use a [open addressing]({% post_url 2021-10-17-hash-open-addressing %}) implementation instead, it's maximimising cache locality.
