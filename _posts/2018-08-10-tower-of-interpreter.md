---
published: true
title: Tower of interpreters
tags: parser software 'food for thought'
excerpt_separator: ''
---
## [Collapsing towers of interpreters [pdf] (purdue.edu)](https://www.cs.purdue.edu/homes/rompf/papers/amin-popl18.pdf)

Given a tower of interpreters, i.e., a sequence of multiple interpreters interpreting one another as input programs, we aim to collapse this tower into a compiler that removes all interpretive overhead and runs in a single pass. In the real world, a use case might be Python code executed by an x86 runtime, on a CPU emulated in a JavaScript VM, running on an ARM CPU. Collapsing such a tower can not only exponentially improve runtime performance, but also enable the use of base-language tools for interpreted programs, e.g., for analysis and verification. In this paper, we lay the foundations in an idealized but realistic setting.

[![caption](https://img.youtube.com/vi/SrKj4hYic5A/0.jpg)](https://www.youtube.com/watch?v=SrKj4hYic5A)

