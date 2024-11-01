---
published: true
title: Bitboard
tags: bits xor algorithm codingame voronoi BFS
---
> BFS and Voronoi diagrams using bit-shift operation - [CG](https://tech.io/playgrounds/66330/bfs-and-voronoi-diagrams-using-bit-shift-operations/introduction)

### [Fast 15x15 bit grid BFS: breadth first search](https://tech.io/playgrounds/53455/fast-15x15-bit-grid-bfs-breadth-first-search)

We represent a 15x15 grid as 4 64 bit unsigned integers. The last column, 16th, and row, also 16th, should always be empty.

The optimization idea is to split the board into white and black cells by odd and even indices, like a chess board. In that way black cells only have white neighbours and white cells only have black neighbours:
- The first 64 bit int (index 0) contains cells where x is even and y is even, i.e white cells. - The second 64 bit int (index 1) contains cells where x is odd and y is even, i.e. black cells. - The third 64 bit int (index 2) contains cells where x is even and y is odd, i.e. black cells. - The fourth 64 bit int (index 3) contains cells where x is odd and y is odd, i.e. white cells.

see also
- [A neat XOR trick](https://news.ycombinator.com/item?id=33948060) - used to find the first W-character window in which every character is unique.
