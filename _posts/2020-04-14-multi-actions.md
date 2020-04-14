---
published: true
title: Multi-Action Adversarial Games
tags: AI multi mcts
---
> In adversarial games, itis common that players take turns and hence the active player alternates between pliesof the tree. The well-known Minimax algorithm makes use of this. However, in HeroAcademy players take several actions before their turn ends. One possibility would beto encode multiple actions as one multi-action, e.g. as an array of actions, and assign itto one edge. Due to the number of possible permutations, this would raise the numberof child nodes for a given game state immensely. Therefore, we decided to model eachaction as its own node, trading tree breadth for depth. - [Togelius](http://julian.togelius.com/Justesen2016Online.pdf)
