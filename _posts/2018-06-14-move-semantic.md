---
published: true
title: Move Semantic
tags: c++
---
## [Why user-defined move-constructor disables the implicit copy-constructor?](https://stackoverflow.com/q/11255027/51386)
 If you declare move members (which legacy C++ code can't do), then we're going to assume that the default copy members are likely to do the wrong thing. Opt-in (with =default) if you want them. Or write them yourself. Otherwise they are implicitly deleted.
 
