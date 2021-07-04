---
published: true
title: Greedy algorithms
tags: algorithm
---
> Many optimization problems can be defined by just two things: a criteria that determines what constitutes a valid solution, and an objective function among valid solutions. The goal is to find a valid solution optimizing the objective function. - [Why Many Greedy Algorithms Are Pickier Than They Need To Be](http://nmamano.com/blog/greedy/greedy.html)

The greedy approach is to construct a solution one component at a time. At each step, we consider a set of legal choices that allow us to make progress towards a solution. Among those, we choose the one that seems best according to an evaluation function. This function, which the algorithm designer must devise, should evaluate the utility of each choice, i.e., how “desirable” it appears in terms of reaching a good solution. Using the right evaluation function is key for the success of a greedy algorithm. The name greedy comes from the fact that once a choice is made, that choice is permanent; in algorithmic terms, there is no backtracking. Given its nature, a greedy algorithm should only consider “legal” choices in the sense that they should always lead to a final solution that is valid. However, a choice that seem best at an early stage (according to the evaluation function) may turn out to be suboptimal. This is why, in general, greedy algorithms are not guaranteed to find the optimal solution.

## See also
- [Algorithme glouton (french)](https://fr.wikipedia.org/wiki/Algorithme_glouton)