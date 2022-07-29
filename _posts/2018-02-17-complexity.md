---
title: Explosion Combinatoire
published: true
tags: math algorithm complexity quote
use_math: true
---
> O(1) ~ O(log(n)) << O(sqrt(n)) << O(n) ~ O(n log(n)) << O(n²) << O(n³) <<<< O(n!) - [Analyse de la complexité des algorithmes](https://fr.wikipedia.org/wiki/Analyse_de_la_complexit%C3%A9_des_algorithmes)  
> O(n^2) is the sweet spot of badly scaling algorithms: fast enough to make it into production, but slow enough to make things fall down once it gets there. - [Dawson’s First Law of Computing](https://randomascii.wordpress.com/category/quadratic/)

- [P vs NP et le zoo de complexité informatique](https://www.youtube.com/watch?v=YX40hbAHx3s)
- [When Big O Fools Ya](https://jackmott.github.io/programming/2016/08/20/when-bigo-foolsya.html)

## [log](https://en.wikipedia.org/wiki/Natural_logarithm)
- $\exp^{\ln x} = x$ / $\ln e^{x} = x$
- $\ln xy = \ln x + \ln y$
- $\ln(N^2)=2 \ln(N)$

### [O(log n)](https://hackernoon.com/what-does-the-time-complexity-o-log-n-actually-mean-45f94bb5bfbf)
- Binary search / dichotomy split thing in 2 until there is only one left.
so assuming the initial set is fully dividable by 2 at the beginning... the number of initial element for k-steps (the number of node in a binary tree) is $n \frac{1}{2^k}=1$
So $n=2^k$.

Which according to logarithm formula gives:
- $\ln(n)=\ln(2^k)$
- $\ln(n)=k \ln(2)$
- [$\log_2(n) = k$](https://en.wikipedia.org/wiki/Natural_logarithm#Notational_conventions)

So a full binary tree of height $k=\log_2(n)$ as $n^2$ node and vice-versa. Which means that if the complexity of an algorithm is dependant of k (the height of the tree), it's complexity in term of number of element is $O(\log(n))$

So $\log(n)$ complexity, means here that the number of steps involved in a dychotomy of $n^2$ elements is of the order of the tree depth, which is $k$ (computed by the log).

Fun fact: a dychotomy on $n^2$ or $n$ elements both have $O(\log(n))$ complexity (because $\ln(n^2)=2\ln(n)$. For sorting it's a different matter since sorting $n^2$ is $O( n² \log(n))$, whereas sorting $n$ is $O(n \log(n))$.

## [NP-completeness](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems)
a problem is NP-complete when: 
1. a brute-force search algorithm can solve it, and the correctness of each solution can be verified quickly
2. the problem can be used to simulate any other problem with similar solvability.

### [Solving NP-complete problems](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems)
- [Boolean satisfiability problem (SAT)](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) - le premier problème NP-complet découvert
