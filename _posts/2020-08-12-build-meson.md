---
published: true
title: The Meson Build system
tags: build make
---
> The main design point of Meson is that every moment a developer spends writing or debugging build definitions is a second wasted. So is every second spent waiting for the build system to actually start compiling code. - [Meson](https://mesonbuild.com/index.html)

# Features
- multiplatform support for Linux, macOS, Windows, GCC, Clang, Visual Studio and others
- supported languages include C, C++, D, Fortran, Java, Rust
- build definitions in a very readable and user friendly non-Turing complete DSL
- cross compilation for many operating systems as well as bare metal
optimized for extremely fast full and incremental builds without sacrificing correctness
- built-in multiplatform dependency provider that works together with distro packages

## FAQ
- Why is Meson's configuration language not Turing-complete? - [Against The Use Of Programming Languages in Configuration Files](https://taint.org/2011/02/18/001527a.html)