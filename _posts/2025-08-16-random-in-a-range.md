---
title: Efficiently Generating a Number in a Range
published: true
tags: random blog-code
---
> This is a common source of overhead in random number generation that frequently outweighs PRNG engine performance. - [article](https://www.pcg-random.org/posts/bounded-rands.html) / [HN](https://news.ycombinator.com/item?id=44767508) / [archived](https://archive.ph/oeZQw)

Typically, built-in approaches use one of the other techniques we will describe below, but most users will simply use the facilities provided without thinking too deeply about what is happening behind the scenes, assuming that they are well enough engineered and sufficiently efficient:
- Classic Modulo (Biased)
- FP Multiply (Biased)
- Integer Multiplication (Biased)
- Division with Rejection (Unbiased)
- Debiased Modulo (Twice) — OpenBSD's Method
- Debiased Modulo (Once) — Java's Method
- Debiased Integer Multiplication — Lemire's Method
- Bitmask with Rejection (Unbiased) — Apple's Method
