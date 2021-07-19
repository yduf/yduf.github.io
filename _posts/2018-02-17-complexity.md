---
title: Explosion Combinatoire
published: true
tags: math algorithm complexity
use_math: true
---
> [Analyse de la complexité des algorithmes](https://fr.wikipedia.org/wiki/Analyse_de_la_complexit%C3%A9_des_algorithmes)

- [P vs NP et le zoo de complexité informatique](https://www.youtube.com/watch?v=YX40hbAHx3s)

## [log](https://en.wikipedia.org/wiki/Natural_logarithm)
- $\exp^{\ln x} = x$ / $\ln e^{x} = x$
- $ln xy = ln x + ln y$
- $ln(N^2)=2 ln(N)$

### [O(log n)](https://hackernoon.com/what-does-the-time-complexity-o-log-n-actually-mean-45f94bb5bfbf)
- Binary search / dichotomy split thing in 2 until there is only one left.
so assuming the initial set is fully dividable by 2 at the beginning... the number of initial element for k-steps (the number of node in a binary tree) is $n*\frac{1}{2^k}=1$
So $n=2^k$.

Which according to logarithm formula gives:
$ln(n)=ln(2^k)$
$ln(n)=k ln(2)$
$log_2(n) = k$

So a full binary tree of height $k=log_2(n)$ as $n^2$ node and vice-versa. Which means that if the complexity of an algorithm is dependant of k (the height of the tree) 

So $log(n)$ complexity, means here that the number of steps involved in sorting/splitting $n$ element is of the order of the tree depth, which is $k$ (computed by the log).





## [NP-completeness](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems)
a problem is NP-complete when: 
1. a brute-force search algorithm can solve it, and the correctness of each solution can be verified quickly
2. the problem can be used to simulate any other problem with similar solvability.

### [Solving NP-complete problems](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems)
- [Boolean satisfiability problem (SAT)](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) - le premier problème NP-complet découvert
