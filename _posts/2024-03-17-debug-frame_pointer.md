---
title: Frame Pointer (-fno-omit-frame-pointer)
published: true
tags: stacktrace debug-c++
---
> The Return of the Frame Pointers - [HN](https://news.ycombinator.com/item?id=39731824)

There's more than one way to walk a stack. ([see article](https://www.brendangregg.com/blog/2024-03-17/the-return-of-the-frame-pointers.html))

### Notes

The claim that hardware provided stack based CALL and RETURN instructions was not universally true. Many systems had no call/return stack, or supported only a single level of subroutine calls (essentially useless for a high level language but maybe useful for some hand written machine code). - [HN](https://news.ycombinator.com/item?id=45501379)

- [Modern C/C++ on the Venerable 6502](https://youtu.be/ejbTKtgSZI0?si=9BzMRistNjhMw5_c&t=1353) - Most of ASM code on 6502 was more efficient by avoiding using a stack at all.

### see also
- [StackTrace ≅]({% post_url 2022-12-08-cpp-stacktrace %})
- [Under Linux, libSegFault and addr2line are underrated](https://lemire.me/blog/2023/05/01/under-linux-libsegfault-and-addr2line-are-underrated/)
