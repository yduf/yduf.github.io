---
published: true
title: Atomic Number (!= number of protons)
tags: atomic cpu
---
> Traditional multi-threading approaches use locks to protect shared resources. Synchronization objects like Semaphores provide mechanisms for the programmer to write code that doesn't modify a shared resource concurrently. The synchronization approaches block other threads when one of the thread is modifying a shared resource. Obviously blocked threads are not doing meaningful work waiting for the lock to be released.
**Atomic operations on the contrast are based on non-blocking algorithms in which threads waiting for shared resources don't get postponed.** Atomic operations are implemented using hardware primitives like compare and swap (CAS) which are atomic instructions used in multi-threading for synchronization. - [SO](https://stackoverflow.com/questions/26816313/java-what-is-an-atomic-number/26817146#26817146)

- [c++](https://en.cppreference.com/w/cpp/atomic/atomic)
- [java](https://stackoverflow.com/questions/26816313/java-what-is-an-atomic-number#26816340)

- [Number of protons](https://en.wikipedia.org/wiki/Atomic_number)