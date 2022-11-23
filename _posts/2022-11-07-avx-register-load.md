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

- [What are the best instruction sequences to generate vector constants on the fly?](https://stackoverflow.com/questions/35085059/what-are-the-best-instruction-sequences-to-generate-vector-constants-on-the-fly)
