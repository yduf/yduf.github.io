---
published: true
title: Rubik's algo 3x3
tags: rubik
toc: true
rubik_oll: true
---
<script src="/assets/js/rubik_oll.js"></script>

> [Ruwix](https://ruwix.com/the-rubiks-cube/algorithm/) / [Quelle méthode pour votre niveau ?](https://www.youtube.com/watch?v=keuarQZmDAA)

**see also**
- [ This 6 Year Old Shocked Everyone With This New Method ](https://www.youtube.com/watch?v=MaORORH_VIs)
  - [ZB method](https://www.youtube.com/watch?v=vOAM5jMPqKE) - predict the cross + 3 pairs
    - 793 to memorize for the final stage
- [My system for solving Rubik's cube](http://www.ws.binghamton.edu/fridrich/system.html) / [HN](https://news.ycombinator.com/item?id=37416999)
- [Can a Rubik's Cube be brute-forced?](https://news.ycombinator.com/item?id=36645846)

- [Magik tricks](https://www.youtube.com/shorts/vHOB6nuCGv8) - M' U D R M 
- [ Sub 5 with 5 Methods ](https://www.youtube.com/watch?v=1qXdeTYZ4Jo) - roux / ZZ / CFOP / CFCE / CFEC




# [Methode debutante ⮺](https://www.youtube.com/watch?v=E29pksDLVRQ)
- [Le belge simplifié !](https://www.youtube.com/watch?v=HSDXq6Ed4Hw)
- [face jaune](https://www.youtube.com/watch?v=BBCGVhUORNQ)
	- la croix ( 0 , I) see below
    
# [Roux Method ⮺](https://www.youtube.com/watch?v=ImBWkk-7teA)

No cross method.

Half block
- do half green
- do half blue 

CMLL (42 algs)
- corner at the last layer

Finish by middle cube

# [Method Fridrich ⮺](https://www.youtube.com/watch?v=keuarQZmDAA)

> Prioriser l'apprentisage des  PLL (21) sur les OLL (57).  
> Commens par les OLL 2 look (construction de la croix jaune)

### [badmephisto pdf ⮺](/images/badmephisto-speedcubing-method.pdf)
 / [mirror](https://defhacks.github.io/badmephisto-mirror/pll.html)
- [FAQ](http://badmephisto.com/)

## [La croix ⮺](https://www.youtube.com/watch?v=IraFkPozVM0) ✚

- [ 10 Must Know Cross Tips! [CFOP Method] ](https://www.youtube.com/watch?v=HDlDcRhCR0Q)

## [Les F2L intuitifs ⮺](https://www.youtube.com/watch?v=FKLyQvc4QrM)
- [3 cas](https://youtu.be/FKLyQvc4QrM?t=322)
- [How to Solve F2L in the Back [tips & more]](https://www.youtube.com/watch?v=1TzHHPJ_2HY)

## [Les F2L ⮺](https://www.youtube.com/watch?v=QnWZeEDAtVM&t=0s)
- U' [ R U R' ](https://youtu.be/QnWZeEDAtVM?t=215)  

- [r U' R' U R U r'](https://www.youtube.com/watch?v=6lef76z55F4&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=5)

<!-- F2L example: joined pair at UFR -->
<div markdown="1" style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div id="f2l-25"></div>
  <code><a href="https://www.youtube.com/shorts/rpEBAi1eG7w">U'(R' F R F')(R U R')</a></code> - f2l-25
</div>
<script>drawF2L('f2l-25',{
  top:[['X','X','X'],
       ['X','X','X'],
       ['X','B','X']],
  side:[[['X','X','X'],['X','R','X']],
        [['B','B','X'],['X','R','R']],
        [['B','B','B'],['R','R','R']]]}, 12)
</script>

## [les OLL et PLL 2 look! ⮺](https://www.youtube.com/watch?v=FZJq-VK5Ngo)

Obtenir la croix jaune
- [F R U R' U' F'](https://youtu.be/FZJq-VK5Ngo?t=165) - trait ou point
- [F U R U' R' F'](https://youtu.be/FZJq-VK5Ngo?t=193) - virgule
	- R' U' F' U F R

<!-- OLL 27 initial state -->
<div markdown="1" style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div id="oll-27"></div>
  <code><a href="https://www.youtube.com/shorts/yhV4PPAPTu8">R U R' U R U2 R'</a></code> - oll-27 - small square  
  <code><a href="https://youtu.be/mqvxojuUFy4?t=121">R U2 R' U' R U' R'</a></code> - left side
</div>
<script>drawOLL('oll-27',{
      back:['Y','X','X'],
  top:[['X','X','Y','X','Y'],
       ['X','Y','Y','Y','X'],
       ['X','Y','Y','X','X']],
     front:['X','X','Y']}, 12)
</script>

<!-- OLL 22 initial state -->
<div markdown="1" style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div id="oll-22"></div>
  <code><a href="https://www.youtube.com/shorts/L38dcLUnVP8">R U2' R2' U' R2 U' R2' U2' R</a></code> - oll-22 ([4 side OLL 22 algorithm](https://www.youtube.com/watch?v=TN6HWBaPPhE))
</div>
<script>drawOLL('oll-22',{
      back:['X','X','Y'],
  top:[['Y','X','Y','X','X'],
       ['X','Y','Y','Y','X'],
       ['Y','X','Y','X','X']],
     front:['X','X','Y']}, 12)
</script>



## Completer avec [Les OLL ⮺](https://www.youtube.com/watch?v=mqvxojuUFy4&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=8) adaptés - #57



[R U2 R' U' R U R' U' R U' R'](https://youtu.be/mqvxojuUFy4?t=181) - cross   
R U2 R2 U' R2 U' R2 U2 R

[R2 D R' U2 R D' R' U2 R'](https://youtu.be/FZJq-VK5Ngo?t=610) - 2 up
[l' U' R D' R' U R D](https://youtu.be/mqvxojuUFy4?t=265)


## [Les PLL ⮺](https://www.youtube.com/watch?v=w7WCC615cEs) - #21

[M2 U' M2 U2 M2 U' M2](https://youtu.be/w7WCC615cEs?t=116) - PLL H

R2 U' S' U2 S U' R2 - [fastests U perm](https://www.youtube.com/watch?v=1u8BptRSXaw&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=4)  

[R U R' F' R U R' U' R' F R2 U' R' U' ](https://youtu.be/w7WCC615cEs?t=547) - PLL J & J'  
R' U L' U2 R U' R' U2 L R U'


# Advanced (sub 10s)

<!-- Ua initial state -->
<div style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div id="Ua"></div>
  <code><a href="https://www.youtube.com/watch?v=1u8BptRSXaw&list=PLh9akXp2EH2D1MBpl8gb0w2WM0eiailpB&index=3">R2 U' S' U2 U' R2</a></code> - Ua -  The New Fastest U Perm (0.5 Execution)
</div> 
<script>drawOLL('Ua',{
      back:['O','R','O'],
  top:[['B','X','Y','X','G'],
       ['B','X','X','Y','O'],
       ['B','X','Y','X','G']],
     front:['R','G','R']}, 12)
</script>


<!-- F2L example: joined pair at UFR -->
<div markdown="1" style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div id="f2l-join-med-1"></div>
  <code><a href="https://youtu.be/6lef76z55F4">r U'R'U R U r'</a></code> - join med + corner at corner
</div>
<script>drawF2L('f2l-join-med-1',{
  top:[['X','X','X'],
       ['O','X','X'],
       ['X','X','O']],
  side:[[['X','G','X'],['X','X','G']],
        [['G','G','X'],['X','O','X']],
        [['G','G','X'],['X','O','X']]]}, 12)
</script>

- [U'R U2 M' B r'](https://youtu.be/yEGp7kbHR3M) - join med + corner at corner
- [R' U R' F R F' R](https://www.youtube.com/watch?v=gABZSNHCMR0) - invert slice

## [Les COLL ⮺](https://youtu.be/keuarQZmDAA?t=1022) 
- XCROSS
- WINTER VARIATION 
- ZBLL (493)
- 1LLL (3000)

# [Kociemba's Algorithm ⮺](https://www.speedsolving.com/wiki/index.php/Kociemba's_Algorithm)

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

## Finger tricks
- [How to Turn FASTER ](https://www.youtube.com/watch?v=__q-5MwlOiU)
- [ Rubik's Cube: How to Develop FASTER Turning Speed! ](https://www.youtube.com/watch?v=VCz6zq2iyRM)
- [ Your Algorithm Sucks (proof) ](https://www.youtube.com/watch?v=1ZbTTzdC-bk)

# [ What Algorithms are WORTH Learning?  ⮺](https://www.youtube.com/watch?v=5-i7Fwx5DTU)

## VLS

### OLL
- winter variation

## VHLS
Not worth it.

## [Pseudoslotting (F2L)  ⮺](https://www.youtube.com/watch?v=49Izh9ZnBog)
- wrong pairing

### Edge orientation