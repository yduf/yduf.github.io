---
published: true
title: Hamiltonian path
tags: graph math algorithm
---
> A Hamiltonian path (or traceable path) is a path in an undirected or directed graph that visits each vertex exactly once... Determining whether such paths and cycles exist in graphs is the Hamiltonian path problem, which is **NP-complete**.  - [wikipedia](https://en.wikipedia.org/wiki/Hamiltonian_path)

To be compared with [Eulerian path](https://en.wikipedia.org/wiki/Eulerian_path), a trail in a finite graph that visits every edge exactly once (allowing for revisiting vertices).

## Algorithm ?

> Finding them is trivial, but very timely if done via DFS. When considering Topcoder's 2 second timeout, brutal for this problem, we have to resort to another solution, the Held-Karp Algorithm implemented with a technique called bitDP. - [Hamiltonian Paths & bitDP](http://utk.claranguyen.me/talks.php?id=bitdp)