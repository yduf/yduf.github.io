---
title: Monte-Carlo Tree Search (MCTS)
published: true
tags: AI MCTS search montecarlo
---
## [Beginners guide](https://int8.io/monte-carlo-tree-search-beginners-guide/)

Monte Carlo Tree Search was introduced by [Rémi Coulom in 2006](https://hal.inria.fr/inria-00116992/document) as a building block of Crazy Stone – Go playing engine with an impressive performance.

Monte Carlo Tree Search has one main purpose: given a **game state** to choose **the most promising next move**. 

A **game tree** is a tree in which every node represents certain **state** of the game. Transition from a **node** to one of its **children** (if they exist) is a move. The number of node’s children is called **a branching factor**. Root node of the tree represents the **initial state** of the game. We also distinguish **terminal nodes** of the game tree – nodes with no children, from where game cannot be continued anymore. The terminal node’s states can be evaluated – this is where game result is concluded.

## Upper Confidence Bounds for Trees (UCT)

{% highlight cpp %}
uct = score/visit + c*sqrt(2*ln(V)/visit)
{% endhighlight %}

Evalution function using UCT is balanced between:
- **exploitation** (first term - score)
- **exploration**  (second term)

As each node is visited, the denominator of the exploration term increases, which decreases its contribution.  On  the  other  hand,  if  another  child  of  the  parent node  is  visited,  the  numerator  increases  and  hence  the exploration  values  of  unvisited  siblings  increase.  The exploration  term  ensures  that  each  child  has  a  non-zero  probability  of  selection,  which  is  essential  giventhe random nature of the playouts.

## Pseudo Code
[python code](https://github.com/int8/monte-carlo-tree-search)

code from Paper [A Survey of Monte Carlo Tree Search Methods](http://mcts.ai/pubs/mcts-survey-master.pdf).

{% highlight cpp %}
function UCTSEARCH(s0)
    create root node v0 with state s0
    while within computation budget dovl
        vl ← TREEPOLICY(v0)
        ∆  ← DEFAULTPOLICY(s(vl))
        BACKUP(vl,∆)
    return a(BESTCHILD(v0,0))

function TREEPOLICY(v)
    while v is nonterminal do
        if v not fully expanded then
           return EXPAND(v)
        else 
           v ← BESTCHILD(v,Cp)
    return v
    
function BACKUP(v,∆)
    while v is not null do
        N(v) ← N(v) + 1
        Q(v) ← Q(v) + ∆(v,p)
        v ← parent of v
{% endhighlight %}

## [Introduction to Monte Carlo Tree Search](https://jeffbradberry.com/posts/2015/09/intro-to-monte-carlo-tree-search/)

see also [HN](https://news.ycombinator.com/item?id=10209677)

## [Tic-Tac-Toe](http://www.baeldung.com/java-monte-carlo-tree-search)

## [Deep Dive](http://www.moderndescartes.com/essays/deep_dive_mcts/)
This essay digs into the “how do you reach a higher level of gameplay?” part of the process. Despite replacing all human heuristics, AlphaGoZero still uses tree search algorithms at its core. I hope to convince you that AlphaGoZero’s success is as much due to this algorithm as it is due to machine learning.

## Good Explaination
[![caption](https://img.youtube.com/vi/UXW2yZndl7U/0.jpg)](https://www.youtube.com/watch?v=UXW2yZndl7U)

[![caption](https://img.youtube.com/vi/eYyCR22y6Bo/0.jpg)](https://www.youtube.com/watch?v=eYyCR22y6Bo)



## Papers

- [A Survey of Monte Carlo Tree Search Methods](http://mcts.ai/pubs/mcts-survey-master.pdf)
- [MCTS for multiplayer games](https://project.dke.maastrichtuniversity.nl/games/files/phd/Nijssen_thesis.pdf)

- [Mastering the game of Go with deep neural networks and tree search](https://storage.googleapis.com/deepmind-media/alphago/AlphaGoNaturePaper.pdf)
