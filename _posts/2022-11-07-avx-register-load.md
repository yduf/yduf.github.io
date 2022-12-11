---
published: true
title: Loading AVX Registers
tags: c++ avx
---

## [Loading 8 chars](https://stackoverflow.com/questions/34279513/loading-8-chars-from-memory-into-an-m256-variable-as-packed-single-precision-f)

- [vpmovzxbd](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html#techs=AVX,AVX2&expand=2771,1552&cats=Convert&ig_expand=1948) 
{% highlight cpp %}
__m256i _mm256_cvtepu8_epi16 (__m128i a)   // vpmovzxbw ymm, xmm (avx2)
{% endhighlight %}

- [Load 16 bit integers in AVX2 vector?](https://stackoverflow.com/questions/39413328/load-16-bit-integers-in-avx2-vector)

- [Fastest way to set __m256 value to all ONE bits](https://stackoverflow.com/questions/37469930/fastest-way-to-set-m256-value-to-all-one-bits)
	- [Set all bits in CPU register to 1 efficiently](https://stackoverflow.com/questions/45105164/set-all-bits-in-cpu-register-to-1-efficiently/45113467#45113467)
- [What are the best instruction sequences to generate vector constants on the fly?](https://stackoverflow.com/questions/35085059/what-are-the-best-instruction-sequences-to-generate-vector-constants-on-the-fly)

- [Load address calculation when using AVX2 gather instructions](https://stackoverflow.com/questions/16193434/load-address-calculation-when-using-avx2-gather-instructions?noredirect=1&lq=1)
