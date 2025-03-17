---
published: true
title: File's Magic Number
tags: file jpeg jxl
---
> file command's magic pattern file - [`MAGIC(5)`](https://www.linux.org/docs/man5/magic.html)

[Adding JXEL](https://chatgpt.com/share/6793ffae-b7d0-800d-8b7a-0ab669ed4d87)

In `/etc/magic` add or check that entry for JPEG XL is present:
{% highlight bash %}
0   string  \xFF\x0A   JPEG XL image
{% endhighlight %}

see also
- [	Recommendations for designing magic numbers of binary file formats ](https://news.ycombinator.com/item?id=43366671)
