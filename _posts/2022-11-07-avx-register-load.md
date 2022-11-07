---
published: true
title: Loading AVX Registers
tags: c++ avx
---

## [Loading 8 chars](https://stackoverflow.com/questions/34279513/loading-8-chars-from-memory-into-an-m256-variable-as-packed-single-precision-f)

{% highlight cpp %}
__m256i _mm256_cvtepu8_epi16 (__m128i a)   // vpmovzxbw ymm, xmm (avx2)
{% endhighlight %}
