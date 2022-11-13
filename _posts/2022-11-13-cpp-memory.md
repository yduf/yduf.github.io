---
published: true
title: C++ Memory
tags: c++ memory fastware
---
> the main reason C++ can be faster than the Java memory management is that it has value objects, which can avoid a lot of heap allocation (and pointer chasing) even without replacing it with stack allocation. Consider for instance an array of objects, in C++ it can be a single allocation, while Java requires one allocation for each object, plus another allocation for the array itself. - [HN](https://news.ycombinator.com/item?id=33575039)

> In Java, an allocation is literally a single instruction (adding a value to the heap pointer), and freeing is zero cost (since you just drop the pointer after you're done with it).

There are other hidden costs in Java GC allocation. While most of the time, an allocation will be just two instructions (it cannot just increment a heap pointer, it also has to check whether there's enough free space and jump to a slow path if there isn't, which needs a second instruction), there is also some overhead in the GC tracking of modified references (card marking), either a short pause in each thread while the GC reads its registers (to get any pointers stored there) or extra overhead of having to store references in the stack instead of just in registers, and probably some missed optimization opportunities due to having to do things in a order the GC expects.

The garbage collector itself has some annoying overheads: it can waste cache and memory bandwidth by scanning cold objects, it can cause unnecessary swapping in of swapped out pages, and most importantly, it uses more memory. In fact, that's the main trick of GC: it trades off allocation/deallocation speed and memory usage.