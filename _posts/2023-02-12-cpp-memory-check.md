---
published: true
title: Checking Memory
tags: c++-memory memory linux-system security
toc: true
---
> [libcrunch: run-time type- and bounds-checking for C (and maybe other languages...)](https://www.humprog.org/~stephen/research/libcrunch/)

- [Bytehound ](https://github.com/koute/bytehound?tab=readme-ov-file#bytehound---a-memory-profiler-for-linux) / [HN](https://news.ycombinator.com/item?id=40455328) - a memory profiler for Linux
- [heaptrack](https://github.com/KDE/heaptrack?tab=readme-ov-file#heaptrack---a-heap-memory-profiler-for-linux) - a heap memory profiler for Linux

# Linux

## [smem](https://chatgpt.com/share/698de46f-717c-800d-a16c-0259133bd8ca)
Finding Top swap consumers:X

{% highlight bash %}
$ smem -s swap -r -k | head
{% endhighlight %}