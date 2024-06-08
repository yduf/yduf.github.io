---
title: Montgomery Multiplication
published: true
tags: math prime
---
> the number one optimization for fast primality testing: [Montgomery multiplication](https://en.m.wikipedia.org/wiki/Montgomery_modular_multiplication). It forms the basis of fast practical modular exponentiation implementations. - [HN](https://news.ycombinator.com/item?id=40252687)

Montgomery modular multiplication relies on a special representation of numbers called Montgomery form. The algorithm uses the Montgomery forms of a and b to efficiently compute the Montgomery form of ab mod N.