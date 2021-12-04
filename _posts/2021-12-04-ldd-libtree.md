---
published: true
title: Dynamic lib Dependency tree (ldd tree)
tags: debug compiler linker tree linux-system elf windows
---
> Turns ldd into a tree; explains why shared libraries are found or not - [HN](https://news.ycombinator.com/item?id=29413753) 

- [libtree](https://github.com/haampie/libtree)
- [lddtree.py ](https://github.com/gentoo/pax-utils/blob/master/lddtree.py) - does not work like `ldd` in that we do not execute/load code (only read files on disk).

- [Dependencies](https://github.com/lucasg/Dependencies) - An open-source modern Dependency Walker (windows)

[![caption](https://github.com/haampie/libtree/raw/master/doc/screenshot.png)](https://github.com/haampie/libtree)
