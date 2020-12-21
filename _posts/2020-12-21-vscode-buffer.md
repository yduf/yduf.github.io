---
published: true
title: VSCode Text Buffer Reimplementation
tags: vscode text benchmarking
---
> During an in-depth exploration, we found that a C++ implementation of the text buffer could lead to significant memory savings, but we didn't see the performance enhancements we were hoping for. Converting strings between a custom native representation and V8's strings is costly and in our case, compromised any performance gained from implementing text buffer operations in C++... Not going native, we had to find ways to improve our JavaScript/TypeScript code. - [Text Buffer Reimplementation](https://code.visualstudio.com/blogs/2018/03/23/text-buffer-reimplementation)

- mental model for an editor is line based. Developers read and write source code line by line, compilers provide line/column based diagnostics, stack traces contain line numbers, tokenization engines run line by line, etc. We used an array of lines... The old line array representation can take a lot of time to create and consumes a lot of memory, but it gives fast line look-up.
- converted to a balanced tree.
