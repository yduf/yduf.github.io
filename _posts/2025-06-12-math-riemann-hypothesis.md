---
title: 1+2+3+4+5+...= -1/12
published: true
tags: math
use_math: true
---
> Faire des mathématiques c'est donner le même nom a des choses différentes - H. Poincarré / [micmath](https://www.youtube.com/watch?v=xqTWRtNDO3U)

see also
- Riemann Hypothesis $1^x + 2^x + 3^x + ...= 0 ?$
- [Numberphile v. Math: the truth about 1+2+3+...=-1/12](https://www.youtube.com/watch?v=YuIIjLr6vUA)
	- assert that infinite sum is only defined in correspondance with convergence
    - then as intermediate sum $A$ and $B$ do not converge, then sum does not exists
    - which is kind of redifining what is sum and when it exists.
- [$1+2+3+4+...=-1/12$](https://chatgpt.com/share/69219749-0714-800d-8a33-c0a040dd4009) - is considered as _an analytic continuation value_, a method in complex analysis that lets you extend the domain of a function beyond where its original definition converges, while preserving its “shape” (analyticity). In this case:
	- the original series diverges at those points
    - but the extended (analytically continued) function assigns finite values there

### Demonstration
$1+2+3+4+...=-1/12$

soit $A=1-1+1-1+1-1+...$

$-A = -1+1-1+1-1+...$  
$1-A = 1-1+1-1+1-1+...$  
donc $1-A=A$

**qui donne $A=1/2$**

soit $B=1-2+3-4+5-6+7...$  
$A+B = 2-3+4-5+6-7+...$  
$-1+A+B=-1+2-3+4-5+6-7+...$  
donc $-1+A+B=-B$  
et $-1+1/2=-2B$  

**qui donne $B=1/4$**

Enfin

soit $C=1+2+3+4+5+6+7+...$  
$C-B=4+8+12+16+...$  

qui correspond a la somme de la table des 4:  
$C-B=4.(1+2+3+4+...) = 4.C$

En remplacant $B=1/4$ on trouve $-1/4 = 3C$  
**et donc finalement $C=-1/12$**

Voila, voila, voila... on est bien avancé...
