---
title: Thread STOP!
published: true
tags: thread signal ruby c++ java error yduf
---
> There is no way to safely interrupt an arbitrary block of code. - [jvns](https://jvns.ca/blog/2015/11/27/why-rubys-timeout-is-dangerous-and-thread-dot-raise-is-terrifying/) / [Why Ruby’s Timeout is dangerous (and Thread.raise is terrifying)](https://news.ycombinator.com/item?id=40560913)

the only way I could get it working reliably was with a subprocess - [HN](https://news.ycombinator.com/item?id=40561619) / Taskserver-yduf

see also
- [How to stop Linux threads cleanly](https://mazzo.li/posts/stopping-linux-threads.html) / [HN](https://news.ycombinator.com/item?id=38908556) - Thread cancellation, a false hope
