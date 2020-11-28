---
published: true
title: Multi-Action Adversarial Games
tags: AI multi MCTS
---
> In adversarial games, it is common that players take turns and hence the active player alternates between plies of the tree. The well-known Minimax algorithm makes use of this. However, in Hero Academy **players take several actions before their turn ends**. One possibility would be to encode multiple actions as one multi-action, e.g. as an array of actions, and assign itto one edge. Due to the number of possible permutations, this would raise the number of child nodes for a given game state immensely. Therefore, we decided to model each action as its own node, trading tree breadth for depth. - [Togelius](http://julian.togelius.com/Justesen2016Online.pdf)
