---
published: true
title: How to do distributed locking
tags: lock algorithm blog
---
## What are you using that lock for?

The purpose of a lock is to ensure that among several nodes that might try to do the same piece of work, only one actually does it (at least only one at a time). That work might be to write some data to a shared storage system, to perform some computation, to call some external API, or suchlike. At a high level, there are two reasons why you might want a lock in a distributed application: **for efficiency** or **for correctness**.

**Both are valid cases for wanting a lock, but you need to be very clear about which one of the two you are dealing with.** - [Martin Kleppmann](http://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html)

[\[HN\]](https://news.ycombinator.com/item?id=11059738)
