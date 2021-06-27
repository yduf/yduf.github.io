---
title: De / Interleave bits
published: true
tags: c++ bits morton-code raytracing
---
> Interleaving the binary coordinate values yields binary z-values. Connecting the z-values in their numerical order produces the recursively [Z-shaped curve]({% post_url 2017-12-29-Space-filling-curve %}). - [Morton Codes](http://asgerhoedt.dk/?p=276)

## [Morton Codes](http://asgerhoedt.dk/?p=276)
Provides an ordering along a space-filling curve while preserving data locality. - Constructing Acceleration Datastructures (raytracing).

- [How to use Morton Order(z order curve) in range search?](https://stackoverflow.com/questions/30170783/how-to-use-morton-orderz-order-curve-in-range-search)
- [Morton-code](https://www.highperformancegraphics.org/wp-content/uploads/2017/Papers-Session3/HPG207_ExtendedMortonCodes.pdf)
- [How to compute a 3D Morton number (interleave the bits of 3 ints)](https://stackoverflow.com/questions/1024754/how-to-compute-a-3d-morton-number-interleave-the-bits-of-3-ints)

## Interleaving bits
- [Bit Twiddling Hacks](http://graphics.stanford.edu/~seander/bithacks.html) / [HN](https://news.ycombinator.com/item?id=25300310)
- [Software way](http://graphics.stanford.edu/~seander/bithacks.html#InterleaveBMN)
- [BMI2 instruction (x86)](https://stackoverflow.com/a/32235584/51386)

from [Decoding Morton Codes](https://fgiesen.wordpress.com/2009/12/13/decoding-morton-codes/)
{% highlight cpp %}
  x &= 0x0000ffff;                  // x = ---- ---- ---- ---- fedc ba98 7654 3210
  x = (x ^ (x <<  8)) & 0x00ff00ff; // x = ---- ---- fedc ba98 ---- ---- 7654 3210
  x = (x ^ (x <<  4)) & 0x0f0f0f0f; // x = ---- fedc ---- ba98 ---- 7654 ---- 3210
  x = (x ^ (x <<  2)) & 0x33333333; // x = --fe --dc --ba --98 --76 --54 --32 --10
  x = (x ^ (x <<  1)) & 0x55555555; // x = -f-e -d-c -b-a -9-8 -7-6 -5-4 -3-2 -1-0
{% endhighlight %}

# De-interleaving bits
- [Decoding Morton Codes](https://fgiesen.wordpress.com/2009/12/13/decoding-morton-codes/)
- [How fast can you bit-interleave 32-bit integers?](https://lemire.me/blog/2018/01/09/how-fast-can-you-bit-interleave-32-bit-integers-simd-edition/)

{% highlight cpp %}
  x &= 0x55555555;                  // x = -f-e -d-c -b-a -9-8 -7-6 -5-4 -3-2 -1-0
  x = (x ^ (x >>  1)) & 0x33333333; // x = --fe --dc --ba --98 --76 --54 --32 --10
  x = (x ^ (x >>  2)) & 0x0f0f0f0f; // x = ---- fedc ---- ba98 ---- 7654 ---- 3210
  x = (x ^ (x >>  4)) & 0x00ff00ff; // x = ---- ---- fedc ba98 ---- ---- 7654 3210
  x = (x ^ (x >>  8)) & 0x0000ffff; // x = ---- ---- ---- ---- fedc ba98 7654 3210
{% endhighlight %}

## [Parallel bit deposit and extract](https://en.wikipedia.org/wiki/X86_Bit_manipulation_instruction_set#Parallel_bit_deposit_and_extract)

The PDEP and PEXT instructions are new generalized bit-level compress and expand instructions.