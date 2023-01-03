---
published: true
title: MOV is Turing Complete
tags: software turing-complete mov
---
> The  instruction  we  choose  is __mov__,  which  can  do  both  loads and stores. We use no unusual addressing modes, self-modifying code, or runtime code generation. Using just this instruction (anda single unconditional branch at the end of the program to make non termination possible), we demonstrate how an arbitrary Turing machine can be simulated. - [pdf](http://drwho.virtadpt.net/files/mov.pdf) / [HN](https://news.ycombinator.com/item?id=22353713)

- [Binary search can be implemented using conditional move instructions](https://news.ycombinator.com/item?id=23894670) - tightly packed nodes or nodes which are all in L1 is one place where plain cmov can win.
- [Movfuscator: Compile C into only mov instructions](https://github.com/Battelle/movfuscator) / [HN](https://news.ycombinator.com/item?id=27202801)

![caption](https://raw.githubusercontent.com/Battelle/movfuscator/master/overview/demo_nibbles.gif)

see also
- [x86 is Turing-complete with no registers](https://news.ycombinator.com/item?id=34233488)
