---
published: true
title: Left Pack (AVX)
tags: bits pack avx c++
---
> If you have an input array, and an output array, but you only want to write those elements which pass a certain condition, what would be the most efficient way to do this in AVX2? - [SO](https://stackoverflow.com/questions/36932240/avx2-what-is-the-most-efficient-way-to-pack-left-based-on-a-mask)

[![caption](https://i.stack.imgur.com/YAkXa.png)](https://stackoverflow.com/questions/36932240/avx2-what-is-the-most-efficient-way-to-pack-left-based-on-a-mask)

- [Compact AVX2 register so selected integers are contiguous according to mask](https://stackoverflow.com/questions/25074197/compact-avx2-register-so-selected-integers-are-contiguous-according-to-mask?noredirect=1)
- [What is the most efficient way to pack left based on a mask?](https://stackoverflow.com/questions/36932240/avx2-what-is-the-most-efficient-way-to-pack-left-based-on-a-mask)
- [Optimizing Array Compaction](https://stackoverflow.com/questions/7886628/optimizing-array-compaction)

The first thing to do is find a fast scalar function. Here is a version which does not use a branch.

{% highlight cpp %}
inline int compact(int *x, int *y, const int n) {
    int cnt = 0;
    for(int i=0; i<n; i++) {
        int cut = x[i]!=0;
        y[cnt] = cut*x[i];
        cnt += cut;
    }
    return cnt;
}
{% endhighlight %}

## SSE instruction
- [_mm_shuffle_epi8](https://stackoverflow.com/questions/18708232/fast-compact-register-using-sse)

- [Efficient sse shuffle mask generation for left-packing byte elements](https://stackoverflow.com/questions/45506309/efficient-sse-shuffle-mask-generation-for-left-packing-byte-elements)

- [Fastest way to unpack 32 bits to a 32 byte SIMD vector](https://stackoverflow.com/questions/24225786/fastest-way-to-unpack-32-bits-to-a-32-byte-simd-vector?noredirect=1&lq=1)
