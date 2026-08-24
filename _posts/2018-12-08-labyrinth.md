---
title: Lost in Maze
tags: maze pathfinding algorithm online codingame
toc: true
---
> Mazes in general (and hence algorithms to create Mazes) can be organized along seven different classifications. - [Maze Classification](https://www.astrolog.org/labyrnth/algrithm.htm) / [HN](https://news.ycombinator.com/item?id=47593861)

**see also**
- [	Zero Lines Maze: What the 8-Bit Guy's One-Liner Can Still Teach Us](https://retrogamecoders.com/zero-lines-maze/) / [HN](https://news.ycombinator.com/item?id=48279507)
  - `10 PRINT CHR$(205.5+RND(1)); :GOTO 10` - There's a [300-page MIT Press book](https://10print.org/10_PRINT_121114.pdf) analyzing exactly this line of code - see [HN](https://news.ycombinator.com/item?id=19481207) / [2](https://news.ycombinator.com/item?id=4856207)

ruby version 
```bash
$ echo 'loop do print ["\u2571","\u2572"].sample ; sleep 0.001 end'|ruby
```


# [Labyrinth Algorithms ⮺](http://bryukh.com/labyrinth-algorithms/) with code
- [A* Search (Amit)](https://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html)
	[C++](https://www.redblobgames.com/pathfinding/a-star/implementation.html#cpp-astar)
- Breadth First Search (BFS)
- Depth First Search (DFS)


# [Online path-finding ⮺](http://qiao.github.io/PathFinding.js/visual/)

# [Maze solving algorithm ⮺](https://en.wikipedia.org/wiki/Maze_solving_algorithm)

[![maze](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperbat.com%2Fimg%2F1433008-an-intricate-surreal-gothic-maze-in-3-dimensions-mc-escher-style-stairs-and-doors-gerald-brom-tim-burton-underground-comix-photoreali-ai-generated-artwork.jpg&f=1&nofb=1&ipt=f7c0c7ec4b2491258c738fe680e0a1af8e934e9683d88513646a99bac1b2e702)](https://duckduckgo.com/?t=lm&q=escher+maze&ia=images&iax=images&iai=https%3A%2F%2Fwallpaperbat.com%2Fimg%2F1433008-an-intricate-surreal-gothic-maze-in-3-dimensions-mc-escher-style-stairs-and-doors-gerald-brom-tim-burton-underground-comix-photoreali-ai-generated-artwork.jpg)