---
published: true
tags: reproducible build-system
---
## [overview](https://lwn.net/Articles/719823/) of the [reproducible builds project](https://reproducible-builds.org/)

**_NixOS's package manager** handles its internal things in a functional way, but it has to *pretend* that the outside world is functional. It **does this by restricting parts of the build environment.** **Those upstream packages are themselves still unreproducible.** **Sometimes, this pretending fails**, such as when they set system-time=0 at the start of a build, the build takes a varying amount of time, and a documentation generator runs at the end.

**By contrast, at the Reproducible Builds project we're making those packages reproducible without restricting parts of the build environment.** In fact, we're specifically varying as much of the build environment as possible! This is a stronger security property - not only are you *more confident* that the system time *truly* doesn't affect a build (when it reproduces), but also users don't have to run a particular OS or other thing, they get the reproducibility all the time._
