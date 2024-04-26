---
title: C++ flags Hardening Guide
published: true
tags: c++ compiler security
---
> Compiler Options Hardening Guide for C and C++ - [OpenSSF](https://best.openssf.org/Compiler-Hardening-Guides/Compiler-Options-Hardening-Guide-for-C-and-C++.html) / [HN](https://news.ycombinator.com/item?id=38478866)

When compiling C or C++ code on compilers such as GCC and clang, turn on these flags for detecting vulnerabilities at compile time and enable run-time protection mechanisms:

{% highlight bash %}
-O2 -Wall -Wformat -Wformat=2 -Wconversion -Wimplicit-fallthrough \
-U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=3 \
-D_GLIBCXX_ASSERTIONS \
-fstrict-flex-arrays=3 \
-fstack-clash-protection -fstack-protector-strong \
-Wl,-z,nodlopen -Wl,-z,noexecstack \
-Wl,-z,relro -Wl,-z,now
{% endhighlight %}

see also
- [No more leaks with sanitize flags in gcc and clang](https://lemire.me/blog/2016/04/20/no-more-leaks-with-sanitize-flags-in-gcc-and-clang/) - run a memory sanitizer inside your program
	- [Catching sanitizer errors programmatically](https://lemire.me/blog/2022/08/20/catching-sanitizer-errors-programmatically/)
