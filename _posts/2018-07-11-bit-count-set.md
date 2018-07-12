---
title: Count the number of bits set 
published: true
tags: c++ bits
---
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

see also popcount intrinsic/builtin.
