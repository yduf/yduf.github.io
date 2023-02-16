---
published: true
title: Reading bits in far too many ways
tags: bits c++ blog network
---
> It turns out that MSB-first and LSB-first packing conventions both have advantages and disadvantages, and it’s much more useful to think of them as tools with different areas of application than it is to designate one as the “right way” and the other as the “wrong way”. - [The ryg blog part 1](https://fgiesen.wordpress.com/2018/02/19/reading-bits-in-far-too-many-ways-part-1/) / [2](https://fgiesen.wordpress.com/2018/02/20/reading-bits-in-far-too-many-ways-part-2/) / [3](https://fgiesen.wordpress.com/2018/09/27/reading-bits-in-far-too-many-ways-part-3/)

- [Why is x86 little endian?](https://stackoverflow.com/questions/5185551/why-is-x86-little-endian)

{% highlight cpp %}
int32_t a = 0x01234567
{% endhighlight %}

[ ![caption](https://bogotobogo.com/cplusplus/images/smallprograms/Little_Big_Endians.png)](https://bogotobogo.com/Embedded/Little_endian_big_endian_htons_htonl.php)

see also
- [htonl() vs __builtin_bswap32()](https://stackoverflow.com/questions/21527957/htonl-vs-builtin-bswap32) - reverse byte order depending or not on localhost architecture
	- [htonl == host to network long / htons => short / htoll => u64 ? ](https://stackoverflow.com/a/30386846/51386)
- [GNU C has a uint64_t __builtin_bswap64 (uint64_t x)](https://stackoverflow.com/questions/36497605/how-to-make-gcc-generate-bswap-instruction-for-big-endian-store-without-builtins/36584577#36584577)