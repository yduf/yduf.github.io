---
published: true
title: Dynamic Programming
tags: algorithm recursive optimize complexity Fibonacci
use_math: true
---
> it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a recursive manner.  While some decision problems cannot be taken apart this way, decisions that span several points in time do often break apart recursively. Likewise, in computer science, if a problem can be solved optimally by breaking it into sub-problems and then recursively finding the optimal solutions to the sub-problems, then it is said to have optimal substructure. - [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_programming)

> Wilson was Secretary of Defense, and he actually had a pathological fear and hatred of the word "research" ... dynamic programming was a good name. It was something not even a Congressman could object to. So I used it as an umbrella for my activities. - [How Bellman came up with this name](https://en.wikipedia.org/wiki/Dynamic_programming#History)

## [Dynamic Programming vs. Divide-and-Conquer (2018)](https://news.ycombinator.com/item?id=26930667)

![caption](https://trekhleb.dev/static/5a8f370f01f0db44fff93ee8aeba3f6c/aa440/02-dp.png)

## Learn to Solve Algorithmic Problems & Coding Challenges - [youtube (5h)](https://www.youtube.com/watch?v=oBt53YbR9Kk)
- [**Memoisation**]({% post_url 2019-06-30-memoization %}) / [summary](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=3892s)
	- [fib memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=210s) - from $O(2^n)$ to $O(n)$
    - [gridTraveler memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2319s) - problem decomposition into recursive then memoisation - from $O(2^{n+m})$ to $O(n*m)$
	- [canSum memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=4196s) - can the combination of member of an array give the given sum. - from $O(n^m)$ to $O(n*m)$
		- [howSum](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=5369s) - generate one solution - from $O(n^m * m)$ to $O(n*m^2)$ with $O(m^2)$ space
        - [bestSum](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6726s) - return minimum array
	- [canConstruct memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=7965s) - word construction by concatenation from dictionnary (howSum with strings)
		- [countConstruct](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9516s) - count the number of solution
        - [allConstruct](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=10050s) - give all solutions

- [**Tabulation**](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=12872s)
	- [fib tabulation](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=11453s) - generative iteration vs recursion: tree structure encoded in an array. - $O(n)$
    - [gridTraveler tabulation](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=12137s) - counting problem

- [**Sliding Window**]({% post_url 2021-04-11-algo-sliding-window %}) - a subset of dynamic programming problems

## See also
- [Breaking Down Dynamic Programming](http://nmamano.com/blog/dynamic/dynamic.html)