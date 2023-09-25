---
published: true
title: Unstripping Stripped Binaries
tags: reverse debug binary gdb
---
> What I really want is to take the names and types I’ve figured out from my disassembler, and make them visible to gdb. - [a simple solution to this](http://lock.cmpxchg8b.com/symbols.html) / [HN](https://news.ycombinator.com/item?id=32603382)

see also
- [decomp2dbg](https://github.com/mahaloz/decomp2dbg) - a generic API for decompiler-to-debugger symbol syncing.
- [Ghidra2Dwarf](https://github.com/cesena/ghidra2dwarf) - a ghidra plugin that allows to exports informations (such as functions, decompiled code, types) from ghidra to dwarf sections inside ELF binaries.
