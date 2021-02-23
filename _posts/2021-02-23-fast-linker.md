---
published: true
title: Super fast linker
tags: compiler linker
---
> I wanted to use the linker to link a Chromium executable with full debug info (~2 GiB in size) just in 1 second. LLVM's [lld](https://news.ycombinator.com/item?id=13670458)[¹](https://lld.llvm.org/), the fastest open-source linker which I originally created a few years ago, takes about 12 seconds to link Chromium on my machine. So the goal is 12x performance bump over lld. Compared to GNU gold, it's more than 50x. - [mold](https://github.com/rui314/mold) / [HN](https://news.ycombinator.com/item?id=26233244)
