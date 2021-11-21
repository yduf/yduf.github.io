---
published: true
title: Tic-Tac-Toe
tags: tic-tac-toe
use_math: true
---
> Games played on three-in-a-row boards can be traced back to ancient Egypt - [wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe)

![caption](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tic-tac-toe-game-1.svg/958px-Tic-tac-toe-game-1.svg.png)

## [Combinatorics of all unique Tic Tac Toe boards](https://stackoverflow.com/questions/7466429/generate-a-list-of-all-unique-tic-tac-toe-boards)

There is at [19,683 ($9^3$)](https://en.wikipedia.org/wiki/Tic-tac-toe) different boards (but only 5477 are valid game positions). The number of possible move sequences is 362,880 ($9!$), this corresponds to the size of the game tree graph.

[Considering symmetries](https://en.wikipedia.org/wiki/Tic-tac-toe#Combinatorics):
- there are only 138 terminal board positions. 
- 91 distinct positions are won by first player (X)
- 44 distinct positions are won by (O)
- 3 distinct positions are drawn
- [626](https://stackoverflow.com/a/32019787/51386) are midgames

## [Strategy](https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy)

Player X can win or force a draw from any of these starting marks; however, playing the corner gives the opponent the smallest choice of squares which must be played to avoid losing. This might suggest that the corner is the best opening move for X, however another study shows that if the players are not perfect, an opening move in the center is best for X.
