---
published: true
title: Quasirandom sequence
tags: random montecarlo math
---
> Anyone who does Monte Carlo simulations would at least be interested in the notion of Quasi Monte Carlo, in which points are sampled "more evenly than random." - [The Unreasonable Effectiveness of Quasirandom Sequences](http://extremelearning.com.au/unreasonable-effectiveness-of-quasirandom-sequences/) - [(SO)](https://news.ycombinator.com/item?id=17873284)

As noted in OP, this can lead to O(1/n) convergence of averages to underlying target values, rather than the expected O(1/sqrt(n)) convergence ("n" is the number of probes of the underlying system). This is shown, strikingly, in Fig. 2 of the OP.

There is a conference, [tutorial papers]( http://mcqmc2018.inria.fr)

![caption](http://core-d045.kxcdn.com/wp-content/uploads/2018/04/Animated_Comparison2.gif)
