---
title: Popcount number of bits set
published: true
tags: c++ bits lookup
---
> Population count is a procedure of counting number of ones in a bit string. - [The NSA Instruction](https://vaibhavsagar.com/blog/2019/09/08/popcount/) / [HN](https://news.ycombinator.com/item?id=20914479)

- [Generating Binary Permutations in Popcount Order](https://alexbowe.com/popcount-permutations/)
- [Bit Hacks](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/lecture-slides/MIT6_172F18_lec3.pdf) 

## [std::popcount](https://en.cppreference.com/w/cpp/numeric/popcount)

{% highlight cpp %}
#include <bit>
std::popcount(i)
{% endhighlight %}

## Using the built-in functions of your compilers.
For GCC:
{% highlight cpp %}
int __builtin_popcount (unsigned int x);
int __builtin_popcountll (unsigned long long x)
{% endhighlight %}

## [SSSE3: fast popcount](http://0x80.pl/articles/sse-popcount.html)

SSSE3 has powerful instruction PSHUFB. This instruction can be used to perform a parallel 16-way lookup; LUT has 16 entries and is stored in an XMM register, indexes are 4 lower bits of each byte stored in another XMM register.

Depending on architecture i5 (Westmere) vector can be slower or much faster  Core i7 (Haswell) Core i7 (Skylake) for a sufficiently long bitstring (> 128 bytes).

## [Hamming Weight](https://stackoverflow.com/questions/109023/how-to-count-the-number-of-set-bits-in-a-32-bit-integer/109025#109025)

GCC and clang 10.0 can recognize this pattern / idiom and [compile it to a hardware popcnt](https://godbolt.org/z/qGdh1dvKK) or equivalent instruction when available, giving you the best of both worlds. 
  
{% highlight cpp %}
int popcount(uint32_t i) {
     i = i - ((i >> 1) & 0x55555555);        // add pairs of bits
     i = (i & 0x33333333) + ((i >> 2) & 0x33333333);  // quads
     i = (i + (i >> 4)) & 0x0F0F0F0F;        // groups of 8
     return (i * 0x01010101) >> 24;          // horizontal sum of bytes
}
{% endhighlight %}
