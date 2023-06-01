---
published: true
title: ZigZag Integer encoding
tags: algorithm
---
> Make all you Integer positive, while keeping them small [lemire](https://lemire.me/blog/2022/11/25/making-all-your-integers-positive-with-zigzag-encoding/) / [HN](https://news.ycombinator.com/item?id=33744993)

The essence of the trick: make the sign bit the least significant bit. Then all the leading bytes for integers of small magnitude remain zeros (not 0xFF like in two-complement integers), and compression becomes easy.

This immediately makes the formula `(val<<1) ^ (val>>31)` intuitive.
