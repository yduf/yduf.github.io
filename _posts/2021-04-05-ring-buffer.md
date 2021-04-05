---
published: true
title: Ring buffers
tags: c++ buffer
---
> I'd always been writing ring buffers "wrong", and there was a better way. - [Juho Snellman's Weblog](https://www.snellman.net/blog/archive/2016-12-13-ring-buffers/) / [HN](https://news.ycombinator.com/item?id=13175832)

Best is to use Array + two unmasked indices - [ Andrew Morton ](http://lkml.iu.edu/hypermail/linux/kernel/0409.1/2709.html)

- [cbuffer](https://github.com/willemt/cbuffer) - mmap magic trick to make the caller's life easier.