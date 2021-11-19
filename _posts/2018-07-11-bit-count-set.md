---
title: 'Popcount / Hamming weight (# bit set)'
published: true
tags: c++ bits lookup hamming algorithm
---
> Population count is a procedure of counting number of ones in a bit string. - [The NSA Instruction](https://vaibhavsagar.com/blog/2019/09/08/popcount/) / [HN](https://news.ycombinator.com/item?id=20914479)

see also
- [Population Count](https://www.chessprogramming.org/Population_Count)
- [sideways addition](https://groups.google.com/g/comp.graphics.algorithms/c/ZKSegl2sr4c/m/QYTwoPSx30MJ?hl=en)
- [Generating Binary Permutations in Popcount Order](https://alexbowe.com/popcount-permutations/)
- [Bit Hacks](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/lecture-slides/MIT6_172F18_lec3.pdf) 
- [Revisiting POPCOUNT Operations in CPUs/GPUs](http://sc16.supercomputing.org/sc-archive/src_poster/poster_files/spost106s2-file2.pdf)

## [std::popcount (C++20)](https://en.cppreference.com/w/cpp/numeric/popcount)

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

The best method for counting bits in a 32-bit integer v [is the following](https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel): 
  
{% highlight cpp %}
int popcount(uint32_t i) {
     i = i - ((i >> 1) & 0x55555555);        // add pairs of bits
     i = (i & 0x33333333) + ((i >> 2) & 0x33333333);  // quads
     i = (i + (i >> 4)) & 0x0F0F0F0F;        // groups of 8
     return (i * 0x01010101) >> 24;          // horizontal sum of bytes
}
{% endhighlight %}
  
on [Intel® Core™ i7:](https://bits.stephan-brumme.com/countBits.html) 16 cycles per number, constant time, data independent  

{% highlight cpp %}
int popCount(U64 x) {
    x =  x       - ((x >> 1)  & k1); // put count of each 2 bits into those 2 bits
    x = (x & k2) + ((x >> 2)  & k2); // put count of each 4 bits into those 4 bits
    x = (x       +  (x >> 4)) & k4 ; // put count of each 8 bits into those 8 bits
    x = (x * kf) >> 56; // returns 8 most significant bits of x + (x<<8) + (x<<16) + (x<<24) + ...
    return (int) x;
}
{% endhighlight %}

**Advantage:** no branches, no memory lookups, constant runtime - independent from population   
**Drawback:** dependency chain, not much parallel speedup 
  


## [Notes](https://bits.stephan-brumme.com/countBits.html)

{% highlight cpp %}
0x55555555 = 01010101 01010101 01010101 01010101 = -1/3
0x33333333 = 00110011 00110011 00110011 00110011 = -1/5
0x0F0F0F0F = 00001111 00001111 00001111 00001111 = -1/0x11
0x00FF00FF = 00000000 11111111 00000000 11111111 = -1/0x101
0x0000FFFF = 00000000 00000000 11111111 11111111
{% endhighlight %}
 
The whole algorithm modifies the input in order to generate the output, that means it works in-place.

**First**, the code counts the bits of two adjacent bits:

`a =  v - ((v >> 1) & 0x5555...)`  
0b and 0b → 00b  
0b and 1b → 01b  
1b and 0b → 01b  
1b and 1b → 10b  

Whenever the higher bit of each 2-bit group is set, subtracting 01b gives the desired outcome.
Looks like branching ... but as it turns out, the subtraction can be done always: just subtract the higher bit !
If it is 0, the result remains unchanged, if it is 1, then we get the right numbers, too.

Now the 2-bit count is done. As you can see, there are just three possible decimal results: 0, 1 or 2.
  
**Then**, two adjacent 2-bit groups are joined to 4-bit groups:

the 2-bit groups are masked and shifted to match and then simply added. No overflow is possible.

`b = (a & 0x3333..) + ((a >> 2) & 0x3333..)`  
00b and 00b → 0000b  
00b and 01b → 0001b  
00b and 10b → 0010b  
01b and 00b → 0001b  
01b and 01b → 0010b  
01b and 10b → 0011b  
10b and 00b → 0010b  
10b and 01b → 0011b  
10b and 10b → 0100b  

**Again** The same procedure is done for all 4-bit groups yielding the bit counts for each of the four bytes in their lower four bits.  
That means, each byte contains its bit count, however, the upper four bits may contain junk and are masked out.

`c = (b + (b >> 4)) & 0x0f0f...`

**Last**, sum all bytes.
  
Multiplying by 0x01010101 has an interesting property if we name the four bytes A, B, C, D:

A, B, C, D → A+B+C+D, B+C+D, C+D, D

Obviously the highest byte is what we are looking for. The right shift returns just it.
