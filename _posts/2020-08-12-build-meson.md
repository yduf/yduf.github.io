---
published: true
title: The Meson build system
tags: build make dlang c++
---
> The main design point of Meson is that every moment a developer spends writing or debugging build definitions is a second wasted. So is every second spent waiting for the build system to actually start compiling code. - [Meson](https://mesonbuild.com/index.html)

## [Meson vs X](https://en.wikipedia.org/wiki/Meson_(software)#Language)

> Why I'd choose Meson+Doctest tech stack to create a new C++ project with a reusable and easy-to-run example - [Choosing a Modern C++ stack](https://carlosvin.github.io/posts/choosing-modern-cpp-stack/en/)

{% highlight bash %}
$ meson build .  (1)
$ cd build
$ ninja build    (2)
$ ninja test     (3)
{% endhighlight %}

1. First time you configure the project
2. Each time you build it
3. Each time you run tests




## Features
- multiplatform support for Linux, macOS, Windows, GCC, Clang, Visual Studio and others
- supported languages include C, C++, D, Fortran, Java, Rust
- build definitions in a very readable and user friendly non-Turing complete DSL
- cross compilation for many operating systems as well as bare metal
optimized for extremely fast full and incremental builds without sacrificing correctness
- built-in multiplatform dependency provider that works together with distro packages

## FAQ
- Why is Meson's configuration language not Turing-complete? - [Against The Use Of Programming Languages in Configuration Files](https://taint.org/2011/02/18/001527a.html)