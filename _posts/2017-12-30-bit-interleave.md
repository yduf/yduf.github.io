---
title: De / Interleave bits
published: true
tags: c++ bits morton-code raytracing
---
> Interleaving the binary coordinate values yields binary z-values. Connecting the z-values in their numerical order produces the recursively [Z-shaped curve]({% post_url 2017-12-29-Space-filling-curve %}). - [Morton Codes](http://asgerhoedt.dk/?p=276)

## [Morton Codes](http://asgerhoedt.dk/?p=276)
Provides an ordering along a space-filling curve while preserving data locality. - Constructing Acceleration Datastructures (raytracing).

- [Morton-code](https://www.highperformancegraphics.org/wp-content/uploads/2017/Papers-Session3/HPG207_ExtendedMortonCodes.pdf)

## Interleaving bits
- [Bit Twiddling Hacks](http://graphics.stanford.edu/~seander/bithacks.html) / [HN](https://news.ycombinator.com/item?id=25300310)
- [Software way](http://graphics.stanford.edu/~seander/bithacks.html#InterleaveBMN)
- [BMI2 instruction (x86)](https://stackoverflow.com/a/32235584/51386)

# De-interleaving bits
- [How fast can you bit-interleave 32-bit integers?](https://lemire.me/blog/2018/01/09/how-fast-can-you-bit-interleave-32-bit-integers-simd-edition/)