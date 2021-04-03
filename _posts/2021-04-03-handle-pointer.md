---
published: true
title: Handles are the better pointers
tags: c++ memory pointer
---
> how I’m doing dynamic memory management in C and C++ these days which basically replaces raw- and smart-pointers with ‘index-handles’. - [The Brain Dump](https://floooh.github.io/2018/06/17/handles-vs-pointers.html) / [HN](https://news.ycombinator.com/item?id=26676625)

- [link to entity-component system (ECS) ?](https://news.ycombinator.com/item?id=26676716)
- [prev HN](https://news.ycombinator.com/item?id=26678714)

> Every sufficiently performance-sensitive system eventually grows some version of a slab allocator [1](https://people.eecs.berkeley.edu/~kubitron/courses/cs194-24-S14/hand-outs/bonwick_slab.pdf). 
> There’s really no substitute for packing fixed-sized objects together in N big array chunks. If you can operate in a particular context (or entirely) with N=1, you can substitute handles for pointers. For any reasonable # of objects, those handles can be smaller than a pointer and provide even better compaction and thus cache effectiveness. - [HN](https://news.ycombinator.com/item?id=24142717)