---
title: Montecarlo Graph search
published: true
tags: montecarlo MCTS graph
---
> When transpositions are possible in a game, usually the number of them will grow exponentially with the search depth, making deep search much more costly than needed. Ideally, we would like to these branches of the search to share their computation. - [Monte-Carlo Graph Search from First Principles](https://github.com/lightvector/KataGo/blob/master/docs/GraphSearch.md#intro--background) / [HN](https://news.ycombinator.com/item?id=39662698)

In game-tree search or other applications of tree search, often we can find multiple possible sequences of moves or actions transpose to the same state. For example, in chess, `1. d4 d5 2. Nf3` leads to the same position as `1. Nf3 d5 2. d4.`

[![caption](https://github.com/lightvector/KataGo/raw/master/images/docs/chesstransposition.png)](https://github.com/lightvector/KataGo/blob/master/docs/GraphSearch.md#intro--background)

However, standard implementations of Monte-Carlo Tree Search (MCTS) usually do not do this. They treat the game as a branching tree and inefficiently re-search every instance of each duplicated position within the tree.

Can we instead model the state space as a directed acyclic graph (DAG) by sharing nodes in this tree?

Yes! Whenever multiple paths lead to the same state, we can represent that state with just one node in the graph.

The tricky part is that applying MCTS naively to a DAG can easily result in an unsound algorithm. This is because MCTS is normally formulated in terms of running statistics of playouts, owing to its historical development as an extension of multi-armed-bandit-based methods to trees. For reasons we will see soon, naively applying this formulation to graphs does not work.
