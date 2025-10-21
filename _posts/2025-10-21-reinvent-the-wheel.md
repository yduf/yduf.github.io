---
title: Reinvent the Wheel
published: true
tags: science ghidra reverse
---
> Don't be afraid to reinvent the wheel. You never know what crazy, wild path it might roll you down to.  
> Of course, don’t disregard the works of others – study their work and reuse where you see fit. Don’t reinvent the wheel out of distrust or ignorance of the work of others. - [HN](https://news.ycombinator.com/item?id=44083467)

### see also
- [Object file exporter extension for Ghidra](https://github.com/boricj/ghidra-delinker-extension?tab=readme-ov-file#object-file-exporter-extension-for-ghidra) / [HN](https://news.ycombinator.com/item?id=44083863) - This Ghidra extension enables exporting parts of a program as object files. These object files have valid metadata (symbols, relocation tables…) and as such can be reused directly by a toolchain for further processing.

_I originally built this as part of a video game decompilation project, having rejected the matching decompilation process used by the community at large. I still needed a way to divide and conquer the problem, which is how I got the funny idea of dividing programs. **That allows a particular style of decompilation project I call Ship of Theseus**: reimplementing chunks of a program one piece at a time and letting the linker stitch everything back together at every step, until you've replaced all the original binary code with reimplemented source code._