---
published: true
title: Build systems
tags: build-system
---
> instead of seeing build systems as unrelated points in space, we now see them as locations
in a connected landscape, leading to a better understanding of what they do and how they compare,
and suggesting exploration of other (as yet unoccupied points) in the landscape. - [Build Systems à la Carte](https://www.microsoft.com/en-us/research/uploads/prod/2018/03/build-systems.pdf) / [HN](https://news.ycombinator.com/item?id=29718446)

> The problem of handling the compilation of a project has been encountered well before you were born. That’s why there’s a single method to do it today, being a consensus since several decades... Ha! Ha! Just kidding! - [An overview](https://medium.com/@julienjorge/an-overview-of-build-systems-mostly-for-c-projects-ac9931494444) / [FR](https://linuxfr.org/users/julien_jorge/journaux/un-petit-tour-des-systemes-de-build)

- [Making build systems not suck!](https://lca2015.linux.org.au/slides/140/meson-lca2015.pdf)
- [I'm Too Old for Broken Builds](https://xorvoid.com/broken_builds.html) - When I get inside a build script file, there's only one thing I really want to do: Leave It ASAP and get back to the real task at hand.
- [The next generation of Bazel builds](https://blogsystem5.substack.com/p/bazel-next-generation) -  Bazel is really fast at running gigantic builds from scratch and it is really efficient when executing incremental builds. But the problem is that “truly incremental builds” are a rarity, so you end up paying the re-analysis cost many more times than is necessary.
	- [Meta released Buck 2](https://blogsystem5.substack.com/i/159682182/meanwhile-at-meta) - a complete reimplementation of their original Bazel-inspired build system. - [Buck2](https://buck2.build/docs/about/why/)
    	- Buck2 is remote execution first - local execution is considered a special case of remote execution,
	

[![caption](https://karussell.wordpress.com/wp-content/uploads/2009/09/build-system-evolution13.png?w=869)](https://karussell.wordpress.com/2009/09/29/evolution-of-build-systems/)
