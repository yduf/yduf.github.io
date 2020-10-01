---
published: true
title: AVX SIMD in matrix multiplication
tags: avx matrix vector
---
> code discussion - [AVX SIMD in matrix multiplication](https://codereview.stackexchange.com/questions/177616/avx-simd-in-matrix-multiplication)

Some results on Haswell, compiled with MSVC[1] 2017, measuring the time (in cycles) per element of the result matrix (so you can mentally compare it to how much time it should take). Time results were eyeballed and rounded to a "typical" value:

{% highlight cpp %}
       64 128  256  512  1024  2048
naive  90 305 1360 2700  9500   TLE
v1     19  45  170  340  1460  7900
v2     18  40  170  245  1030  4300
v3     22  44   85  150   380   950
v4     17  35   70  150   310   750
v5     18  35   70  140   275   550
ideal  16  32   64  128   256   512
-- 
after  23  51  110  230   570  1600
harold 18  35   70  140   330   825

{% endhighlight %}