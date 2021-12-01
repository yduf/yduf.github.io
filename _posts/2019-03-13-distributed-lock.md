---
published: true
title: How to do distributed locking
tags: lock algorithm blog
---
>  It’s important to remember that a lock in a distributed system is not like a mutex in a multi-threaded application. It’s a more complicated beast, due to the problem that different nodes and the network can all fail independently in various ways. - [What are you using that lock for?](http://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html) / 
[\[HN\]](https://news.ycombinator.com/item?id=11059738)

The purpose of a lock is to ensure that among several nodes that might try to do the same piece of work, only one actually does it (at least only one at a time). That work might be to write some data to a shared storage system, to perform some computation, to call some external API, or suchlike. At a high level, there are two reasons why you might want a lock in a distributed application: **for efficiency** or **for correctness**. **Both are valid cases for wanting a lock, but you need to be very clear about which one of the two you are dealing with.** 

**Efficiency**: Taking a lock saves you from unnecessarily doing the same work twice (e.g. some expensive computation). If the lock fails and two nodes end up doing the same piece of work, the result is a minor increase in cost (you end up paying 5 cents more to AWS than you otherwise would have) or a minor inconvenience (e.g. a user ends up getting the same email notification twice).

**Correctness**: Taking a lock prevents concurrent processes from stepping on each others’ toes and messing up the state of your system. If the lock fails and two nodes concurrently work on the same piece of data, the result is a corrupted file, data loss, permanent inconsistency, the wrong dose of a drug administered to a patient, or some other serious problem.

## Protecting a resource with a lock

you need to include a fencing token with every write request to the storage service. In this context, a fencing token is simply a number that increases (e.g. incremented by the lock service) every time a client acquires the lock. 

![caption](https://martin.kleppmann.com/2016/02/fencing-tokens.png)
