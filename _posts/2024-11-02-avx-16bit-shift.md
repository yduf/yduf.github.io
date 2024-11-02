---
title: 16bits vector shift ? (AVX)
published: true
tags: 16bits bits shift c++ avx
---
> To shift 16-bit values by a variable amount (specified by a vector), you have to take an alternative approach because no _mm256_sllv_epi16 intrinsic exists in AVX2. - [SO](https://stackoverflow.com/questions/51789685/reproduce-mm256-sllv-epi16-and-mm256-sllv-epi8-in-avx2)

{% highlight cpp %}
__m256i _mm256_sllv_epi16(__m256i a, __m256i count) {
    const __m256i mask = _mm256_set1_epi32(0xffff0000); // alternating low/high words of a dword
    // shift low word of each dword: low_half = (a << (count & 0xffff)) [for each 32b element]
    // note that, because `a` isn't being masked here, we may get some "junk" bits, but these will get eliminated by the blend below
    __m256i low_half = _mm256_sllv_epi32(
        a,
        _mm256_andnot_si256(mask, count)
    );
    // shift high word of each dword: high_half = ((a & 0xffff0000) << (count >> 16)) [for each 32b element]
    __m256i high_half = _mm256_sllv_epi32(
        _mm256_and_si256(mask, a),     // make sure we shift in zeros
        _mm256_srli_epi32(count, 16)   // need the high-16 count at the bottom of a 32-bit element
    );
    // combine low and high words
    return _mm256_blend_epi16(low_half, high_half, 0xaa);
}

__m256i _mm256_srlv_epi16(__m256i a, __m256i count) {
    const __m256i mask = _mm256_set1_epi32(0x0000ffff);
    __m256i low_half = _mm256_srlv_epi32(
        _mm256_and_si256(mask, a),
        _mm256_and_si256(mask, count)
    );
    __m256i high_half = _mm256_srlv_epi32(
        a,
        _mm256_srli_epi32(count, 16)
    );
    return _mm256_blend_epi16(low_half, high_half, 0xaa);
}
{% endhighlight %}
