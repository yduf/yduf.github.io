---
title: Faster Compilation (C++)
published: true
tags: c++ compiler
---
> C++ is too slow to compile. How to improve compile time ? - [r/cpp](https://www.reddit.com/r/cpp/comments/hj66pd/c_is_too_slow_to_compile_can_you_share_all_your/)

<link rel="shortcut icon" href="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" type="image/x-icon" />

- [Super fast linker]({% post_url 2021-02-23-fast-linker %}) - replace defauld linker with a faster one

- [time-trace](https://aras-p.info/blog/2019/01/16/time-trace-timeline-flame-chart-profiler-for-Clang/) -  timeline / flame chart profiler for Clang
- [Faster C++ builds](https://www.bitsnbites.eu/faster-c-builds/)
- [Using Precompiled Headers](https://gcc.gnu.org/onlinedocs/gcc/Precompiled-Headers.html)
- [2 tips to make your C++ projects compile 3 times faster](https://developers.redhat.com/blog/2019/05/15/2-tips-to-make-your-c-projects-compile-3-times-faster#)
- [ccache](https://ccache.dev/) - speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again. (mainly for `make clean ; make`)

see also
- [Distributed C++ Compiler ](https://news.ycombinator.com/item?id=43008797)
	- [nocc](https://github.com/VKCOM/nocc)
    - [SN DBS](https://www.snsystems.com/) - Used by a lot of game developers, to spread mostly compilation (but also shader compile, or custom jobs).
      - IncrediBuild - https://www.incredibuild.com/
	- [Fast build](https://www.fastbuild.org/)
	- [icecream](https://github.com/icecc/icecream) - [A more modern alternative to distcc, often easier to set up.](https://chatgpt.com/share/67f8cbfc-4924-800d-af3c-1e7143a06bcc)
	- [distcc]( https://www.distcc.org/)
	- [Goma](https://chromium.googlesource.com/infra/goma/client/)
	- [Bazel / buck](https://bazel.build/remote/rbe) / like with various RBE back ends
	- [ElectricAccelerator]( https://docs.cloudbees.com/docs/cloudbees-build-acceleration/11.0/)
