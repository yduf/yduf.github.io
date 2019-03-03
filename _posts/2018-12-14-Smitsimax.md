---
published: true
title: Smitsimax (MCTS++)
tags: codingame MCTS
---
## [article](https://www.codingame.com/playgrounds/36476/smitsimax)

Similarities with Monte Carlo Tree Search (MCTS)

Smitsimax shares some features with MCTS. One of them is the use of statistics to guide the search. The other is the use of a selection and backpropagation phase. There are also some clear differences:

- MCTS has a single tree and a single gamestate per node. It shares this feature with minimax. Smitsimax has a tree for every agent. A node on this tree can correspond to many possible gamestates with different likelyhoods.

- Smitsimax only uses random moves to avoid "resonance" of bad moves on the first few visits to a node. It is possible all pods start doing bad moves at the beginning of the search. Because bad moves can seem good when compared to other bad moves, the tendency to explore disappears and in the worst case, the search will converge on bad moves for all pods. Random selection at the start helps avoid this problem. Smitsimax does not use a random rollout.*

- MCTS expands one node on every iteration of the search. Smitsimax expands all the way to the maximum depth on every iteration. This is necessary because there is no random rollout apart from the first few times a node is visited.*

*NOTE: I have since changed to a more MCTS like implementation after a suggestion by RoboStac. He tried to replace my full rollout with a random rollout and it worked a bit better. I think it did for me as well, though it is not a big change. There is still a large difference with MCTS because you use a separate tree for every agent and the nodes in the tree do not have a single corresponding gamestate.
