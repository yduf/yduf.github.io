---
published: true
title: Resiliency in Systems Design
tags: error-handling exception
---
> an important part of erlang's failure domain driven mentality is not just "let it crash", but also tying together failure domains: what should you also bring down with you when you crash. - [HN](https://news.ycombinator.com/item?id=27797182)

For example. Your data sync task encounter an http error in a connected SAAS that threatens data inconsistency. Perfect time to crash. But if you do so, also take down the database connection so that the connection can be returned to the connection pool and the transaction you're running in can be rolled back, ideally without having to try/catch and keep track/selectively recycle of all of cumulative responsibilities that have accrued in that task.

**see also**
- [The Isolation Trap](https://causality.blog/essays/the-isolation-trap/) / [HN](https://news.ycombinator.com/item?id=47347920) - Erlang processes have separate heaps, so they can’t share memory. Messages are copied from one process to another, not shared by reference. If a process dies, its state dies with it, and supervision trees handle recovery. There’s no mechanism for one process to corrupt another process’s memory, because there’s no shared memory to corrupt.
  - The article argues that shared memory and message passing are the same thing because they share the same classes of potential failure modes.