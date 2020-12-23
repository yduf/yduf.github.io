---
published: true
title: Data Races
tags: c++ weak atomic concurrency
---
> Sequential consistency is expensive on most multiprocessors... Fortunately, C++11 lets you relax sequential consistency in a controlled way, which combines high performance with the safety of well-defined (if complex) semantics...
>
> What does it all mean for the C++11 programmer? It means that there no longer is an excuse for data races. If you need benign data races for performance, rewrite your code using weak atomics. Weak atomics give you the same kind of performance as benign data races but they have well defined semantics. - [Benign Data Races Considered Harmful - (Bartosz Milewski's Programming Cafe)](https://bartoszmilewski.com/2020/08/11/benign-data-races-considered-harmful/)
