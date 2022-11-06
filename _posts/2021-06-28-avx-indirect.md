---
published: true
title: Indirect access Vectorization
tags: avx array lookup
---
> AVX2 / AVX512 have vpgatherdd which does use a vector of signed 32-bit scaled indices. - [SO](https://stackoverflow.com/questions/50980548/vectorizing-indirect-access-through-avx-instructions)

- [Fast 2D array lookup of int16_t LUT using AVX2 or AVX512](https://stackoverflow.com/questions/69797134/fast-2d-array-lookup-of-int16-t-lut-using-avx2-or-avx512)
	- AVX2 has gathered loads for 32 bit and 64 bit ints (vpgatherXX) as well as floats and doubles.
    
- [AVX2 vectorized 256 bit lookup table (32 unsigned chars)](https://stackoverflow.com/questions/43791161/avx2-vectorized-256-bit-lookup-table-32-unsigned-chars)

- [How are the gather instructions in AVX2 implemented?](https://stackoverflow.com/questions/21774454/how-are-the-gather-instructions-in-avx2-implemented) - From the table it's clear that in all cases gather loads are faster than scalar loads

- [Packing and de-interleaving two __m256 registers](https://stackoverflow.com/questions/42497985/packing-and-de-interleaving-two-m256-registers)

- [Gathering half-float values using AVX](https://stackoverflow.com/questions/62416595/gathering-half-float-values-using-avx)

## [investigating the AVX2 memory gather instruction](https://johnysswlab.com/when-vectorization-hits-the-memory-wall-investigating-the-avx2-memory-gather-instruction/)

For very small array sizes the vector version is a bit faster, but not significantly. After about the size of 512K, the scalar version becomes faster, and this difference in speed is maintained most of the time.

- [_mm256_i32gather_ps](https://www.intel.com/content/www/us/en/develop/documentation/cpp-compiler-developer-guide-and-reference/top/compiler-reference/intrinsics/intrinsics-for-avx2/intrinsics-for-gather-operations/mm-i32gather-ps-mm256-i32gather-ps.html)

{% highlight cpp %}
extern __m256 _mm256_mask_i32gather_ps(float const * base, __m256i vindex, const int scale);
{% endhighlight %}


