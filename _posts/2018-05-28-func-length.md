---
title: Function Length
published: true
tags: software
---
> During my career, I've heard many arguments about how long a function should be. This is a proxy for the more important question - when should we enclose code in its own function?  - [Intention vs Implementation](http://martinfowler.com/bliki/FunctionLength.html)

Some of these guidelines were based on length, such as functions should be no larger than fit on a screen [1](https://martinfowler.com/bliki/FunctionLength.html#footnote-printer). Some were based on reuse - any code used more than once should be put in its own function, but code only used once should be left inline. **The argument that makes most sense to me, however, is the separation between intention and implementation.** If you have to spend effort into looking at a fragment of code to figure out what it's doing, then you should extract it into a function and name the function after that “what”. That way when you read it again, the purpose of the function leaps right out at you, and most of the time you won't need to care about how the function fulfills its purpose - which is the body of the function.
