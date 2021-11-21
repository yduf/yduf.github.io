---
title: De / Interleave bits
published: true
tags: c++ bits morton-code raytracing avx unpack
---
> Interleaving the binary coordinate values yields binary z-values. Connecting the z-values in their numerical order produces the recursively [Z-shaped curve]({% post_url 2017-12-29-Space-filling-curve %}). - [Morton Codes](http://asgerhoedt.dk/?p=276)

see also:
- [Left Pack]({% post_url 2020-02-22-avx-left-pack %})
- [Fastest way to unpack 32 bits to a 32 byte vector](https://stackoverflow.com/questions/24225786/fastest-way-to-unpack-32-bits-to-a-32-byte-simd-vector?noredirect=1&lq=1)
- [Optimal uint8_t bitmap into a 8 x 32bit SIMD “bool” vector](https://stackoverflow.com/questions/28683926/optimal-uint8-t-bitmap-into-a-8-x-32bit-simd-bool-vector?noredirect=1&lq=1)
- [Unpacking a bitfield (Inverse of movmskb)](https://stackoverflow.com/questions/35589189/unpacking-a-bitfield-inverse-of-movmskb?noredirect=1&lq=1)


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

## [Parallel bit _deposit_ and _extract_](https://en.wikipedia.org/wiki/X86_Bit_manipulation_instruction_set#Parallel_bit_deposit_and_extract)

The PDEP and PEXT instructions are new generalized bit-level compress and expand instructions.

This can be used to extract any bitfield of the input, and even do a lot of bit-level shuffling that previously would have been expensive. While what these instructions do is similar to bit level [gather-scatter](https://en.wikipedia.org/wiki/Gather-scatter_(vector_addressing)) SIMD instructions, PDEP and PEXT instructions operate on general-purpose registers.

| Instruction |	Selector mask |	Source |	Destination |
| PEXT | 	0xff00fff0 | 	0x12345678 | 	0x00012567 |
| PDEP | 	0xff00fff0 |	0x00012567 |	0x12005670 |

[![caption](https://i.stack.imgur.com/75CQL.png)](https://stackoverflow.com/questions/21144237/standard-c11-code-equivalent-to-the-pext-haswell-instruction-and-likely-to-be)


They are accessible in [c++](https://cpp.hotexamples.com/examples/-/-/_pext_u64/cpp-_pext_u64-function-examples.html)
{% highlight cpp %}
_pext_u64(__X, __Y);
_pdep_u64(__X, __Y);
{% endhighlight %}


