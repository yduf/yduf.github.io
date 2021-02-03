---
published: true
title: Dynamic Programming
tags: recursive optimize complexity Fibonacci
use_math: true
---
> it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a recursive manner.  While some decision problems cannot be taken apart this way, decisions that span several points in time do often break apart recursively. Likewise, in computer science, if a problem can be solved optimally by breaking it into sub-problems and then recursively finding the optimal solutions to the sub-problems, then it is said to have optimal substructure. - [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_programming)

## Learn to Solve Algorithmic Problems & Coding Challenges - [youtube (5h)](https://www.youtube.com/watch?v=oBt53YbR9Kk)
- [**Memoisation**]({% post_url 2019-06-30-memoization %})
	- [fib memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=210s) - from $O(2^n)$ to $O(n)$
    - [gridTraveler memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2319s) - problem decomposition into recursive then memoisation - from $O(2^(n+m))$ to $O(n*m)$
	- [canSum memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=4196s) - can the combination of member of an array give the given sum. - from $O(n^m)$ to $O(n*m)$
		- [howSum](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=5369s) - generate one solution - from $O(n^m * m)$ to $O(n*m^2)$ with $O(m^2)$ space
        - [bestSum](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6726s) - return minimum array
	- [canConstruct memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=7965s) - word construction by concatenationo from dictionnary (howSum with strings)
		- [countConstruct](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9516s) - count the number of solution
        - [allConstruct](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=10050s) - give all solutions

- **Tabulation**
	- [fib tabulation](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=11453s) - generative iteration vs recursion
