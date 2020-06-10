---
published: true
title: Printf is Turing Complete
tags: printf software security turing-complete tic-tac-toe c++
---
> we show that a single call to printf() allows an attacker to perform Turing-complete computation, even when protected with a shadow stack. We dub this printf-oriented programming. In our evaluation, we found it was possible to mount this kind of attack against all but one binary (which rewrote their own limited version of printf). - [Control-Flow Bending: On the Effectiveness of Control-Flow Integrity](https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-carlini.pdf) - [www.usenix.org](https://www.usenix.org/conference/usenixsecurity15/technical-sessions/presentation/carlini#:~:text=Control%2DFlow%20Bending%3A%20On%20the%20Effectiveness%20of%20Control%2DFlow%20Integrity,-Authors%3A&text=Control%2DFlow%20Integrity%20(CFI),is%20believed%20to%20be%20secure) - [Nicholas Carlini](https://nicholas.carlini.com/)

- [C implementation of Tic-Tac-Toe in a single call to printf](https://github.com/carlini/printf-tac-toe) - [HN](https://news.ycombinator.com/item?id=23445546)
- [Microcorruption]({% post_url 2017-11-30-microcorruption %})
