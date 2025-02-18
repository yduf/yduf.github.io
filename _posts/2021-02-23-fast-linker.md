---
published: true
title: Super fast linker (c++)
tags: compiler linker
---
> I wanted to use the linker to link a Chromium executable with full debug info (~2 GiB in size) just in 1 second. LLVM's [lld](https://news.ycombinator.com/item?id=13670458)[¹](https://lld.llvm.org/), the fastest open-source linker which I originally created a few years ago, takes about 12 seconds to link Chromium on my machine. So the goal is 12x performance bump over lld. Compared to GNU gold, it's more than 50x. - [mold](https://github.com/rui314/mold) / [HN](https://news.ycombinator.com/item?id=26233244)

[Alternative linker](https://chatgpt.com/share/67b4ec70-7164-800d-b0e5-15c374172817) - choice are (linking Clang 19):  
**mold** - the fastest so far ( 1s)  
**lld**  - previous champion  ( 5s)  
**gold** - previous attempt   (33s)  
**ld**   - default from gcc   (42s)  

### [seting up mold](https://chatgpt.com/share/67b4ec70-7164-800d-b0e5-15c374172817)

{% highlight bash %}
$ sudo apt install mold

$ sudo update-alternatives --install /usr/bin/ld ld $(which mold) 100
{% endhighlight %}

### [Why is mold so fast?](https://github.com/rui314/mold?tab=readme-ov-file#why-is-mold-so-fast)

One reason is that it utilizes faster algorithms and more efficient data structures compared to other linkers. Another reason is that mold is highly parallelized.

Here is a side-by-side comparison of per-core CPU usage for lld (left) and mold (right), linking the same program, a Chromium executable.

[![caption](https://github.com/rui314/mold/raw/main/docs/htop.gif) ](https://github.com/rui314/mold?tab=readme-ov-file#mold-a-modern-linker)