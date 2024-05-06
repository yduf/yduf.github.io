---
title: AST Error handling
published: true
tags: compiler AST error poisoning
---
> The D language compiler uses a technique I call "poisoning" which has greatly reduced cascading error messages. The idea is whenever an error is found in an AST node, the AST node is replaced with an "error" node. Any combination of an error node with another node is replaced with an error node. Error messages for error nodes are suppressed.
> 
> It works far better than attempting to repair the AST into some plausible state.
>
> It's analogous to the propagation of NaN values in floating point code. - [HN](https://news.ycombinator.com/item?id=40278184)
