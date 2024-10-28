---
published: true
title: Beam search
tags: search tree graph
---
> a classic greedy algorithm merging the breadth-first search approach with a heuristic evaluation function to prune nodes on each level of the
tree... 
> Beam Search is considered a good choice for
games that have limited interaction with the oppo-
nent(s), so the planning part is more important than
the exact opponent prediction - [wikipedia](https://en.wikipedia.org/wiki/Beam_search)

At the cost of losing the optimality, the algorithm allows us to easily trade
branching factor for increased search depth – thus gain an advantage on future planning.

### References
- [Developing a Successful Bomberman Agent](https://arxiv.org/pdf/2203.09608)
- [Beam stack search](https://en.wikipedia.org/wiki/Beam_stack_search)

[![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Beam_search.gif/330px-Beam_search.gif) ](https://en.wikipedia.org/wiki/Beam_search) 
