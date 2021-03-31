---
title: Count the number of bits set (popcount)
published: true
tags: c++ bits lookup
---
> Population count is a procedure of counting number of ones in a bit string.

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

{% highlight cpp %}
int popcount(uint32_t i)
{
     // C or C++: use uint32_t
     i = i - ((i >> 1) & 0x55555555);
     i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
     return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
}
{% endhighlight %}
