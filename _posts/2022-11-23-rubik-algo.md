---
published: true
title: Rubik's algo 3x3
tags: rubik
---
> [Ruwix](https://ruwix.com/the-rubiks-cube/algorithm/) / [Quelle méthode pour votre niveau ?](https://www.youtube.com/watch?v=keuarQZmDAA)

see also
- [My system for solving Rubik's cube](http://www.ws.binghamton.edu/fridrich/system.html) / [HN](https://news.ycombinator.com/item?id=37416999)
- [Can a Rubik's Cube be brute-forced?](https://news.ycombinator.com/item?id=36645846)

## [Methode debutante](https://www.youtube.com/watch?v=E29pksDLVRQ)
- [Le belge simplifié !](https://www.youtube.com/watch?v=HSDXq6Ed4Hw)
- [face jaune](https://www.youtube.com/watch?v=BBCGVhUORNQ)
	- la croix ( 0 , I) see below
    

# [Method Fridrich](https://www.youtube.com/watch?v=keuarQZmDAA) - review

> Prioriser l'apprentisage des  PLL (21) sur les OLL (57).  
> Commens par les OLL 2 look (construction de la croix jaune)

### [badmephisto pdf](/images/badmephisto-speedcubing-method.pdf)
 / [mirror](https://defhacks.github.io/badmephisto-mirror/pll.html)
- [FAQ](http://badmephisto.com/)

## [La croix](https://www.youtube.com/watch?v=IraFkPozVM0)


## [Les F2L intuitifs](https://www.youtube.com/watch?v=FKLyQvc4QrM)
- [3 cas](https://youtu.be/FKLyQvc4QrM?t=322)

## [Les F2L](https://www.youtube.com/watch?v=QnWZeEDAtVM&t=0s)
- U' [ R U R' ](https://youtu.be/QnWZeEDAtVM?t=215)  

- [r U' R' U R U r'](https://www.youtube.com/watch?v=6lef76z55F4&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=5)


## [les OLL et PLL 2 look !](https://www.youtube.com/watch?v=FZJq-VK5Ngo)

Obtenir la croix jaune
- [F R U R' U' F'](https://youtu.be/FZJq-VK5Ngo?t=165) - trait ou point
- [F U R U' R' F'](https://youtu.be/FZJq-VK5Ngo?t=193) - virgule
	- R' U' F' U F R
 

## Completer avec [Les OLL](https://www.youtube.com/watch?v=mqvxojuUFy4&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=8) adaptés - #57

[R U R' U R U2 R'](https://youtu.be/mqvxojuUFy4?t=121) - small square  
R U2 R' U' R U' R'

[R U2 R' U' R U R' U' R U' R'](https://youtu.be/mqvxojuUFy4?t=181) - cross   
R U2 R2 U' R2 U' R2 U2 R

[R2 D R' U2 R D' R' U2 R'](https://youtu.be/FZJq-VK5Ngo?t=610) - 2 up
[l' U' R D' R' U R D](https://youtu.be/mqvxojuUFy4?t=265)


## [Les PLL](https://www.youtube.com/watch?v=w7WCC615cEs) - #21

[M2 U' M2 U2 M2 U' M2](https://youtu.be/w7WCC615cEs?t=116) - PLL H

R2 U' S' U2 S U' R2 - [fastests U perm](https://www.youtube.com/watch?v=1u8BptRSXaw&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=4)  

[R U R' F' R U R' U' R' F R2 U' R' U' ](https://youtu.be/w7WCC615cEs?t=547) - PLL J & J'  
R' U L' U2 R U' R' U2 L R U'


# Advanced (sub 10s)

### Algorithm
- [R2 U' S' U2 U' R2](https://www.youtube.com/watch?v=1u8BptRSXaw&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=3) - The New Fastest U Perm (0.5 Execution)
- [r U'R'U R U r'](https://youtu.be/6lef76z55F4) - join med + corner at corner
- [U'R U2 M' B r'](https://youtu.be/yEGp7kbHR3M) - join med + corner at corner
- [R' U R' F R F' R](https://www.youtube.com/watch?v=gABZSNHCMR0) - invert slice

## [Les COLL](https://youtu.be/keuarQZmDAA?t=1022) 
- XCROSS
- WINTER VARIATION 
- ZBLL (493)
- 1LLL (3000)

# [Kociemba's Algorithm](https://www.speedsolving.com/wiki/index.php/Kociemba's_Algorithm)

A computer algorithm for solving the 3x3x3 cube, created by Herbert Kociemba. It is similar to the Thistlethwaite's algorithm though with fewer steps thanks to the improvement of computer memory storage and processing speed. 

## Two Phase Approach

The core of the 2-phase approach is this:

- Solve the cube into a state with a certain property.
- Solve the rest of the cube.

If we select F2L as our property, we get:

- Solve the first two layers.
- Solve the last layer.

If you solve F2L with the fewest moves possible, then solve the resulting LL case optimally, you'll end up with a decently short solution. However, there might be a shorter solution: in that case, the first phase might take more moves, but get us an easy LL case (or an LL skip!).

Iterative Deepening (for Phase 1)

Let's say our first solution took 15 moves for F2L and 11 moves for LL. That means that our cube takes at most 15 + 11 = 26 moves to solve.  
So let's try looking at all the solutions that take 15 moves for F2L. If any of them give us an LL that takes fewer than 11 moves, we can find a shorter solution.
