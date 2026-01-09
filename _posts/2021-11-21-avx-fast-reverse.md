---
published: true
title: Fast array reversal
tags: avx vector bits array
---
> Swapping all the bytes in the registers is a popular operation in networking called an endian swap and x86 happens to have just the instruction to do this! - [Fast array reversal with SIMD!](https://dev.to/wunk/fast-array-reversal-with-simd-j3p)

see also
- [Swapping two blocks of memory that reside inside a larger block, in constant memory](https://devblogs.microsoft.com/oldnewthing/20260101-00/?p=111955) / [HN](https://news.ycombinator.com/item?id=46462997) - [std::rotate](https://en.cppreference.com/w/cpp/algorithm/rotate.html)

[![caption](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fouplgoy7wo012ntfa071.gif)](https://dev.to/wunk/fast-array-reversal-with-simd-j3p)
