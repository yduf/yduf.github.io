---
published: true
title: MCTS search policy
tags: AI MCTS NN tic-tac-toe
use_math: true
---
> This neural net is an integral part of the MCTS, where it helps guide the tree search via its policy and value outputs - [From-scratch implementation of AlphaZero for Connect4](https://towardsdatascience.com/from-scratch-implementation-of-alphazero-for-connect4-f73d4554002a) / github  [plkmo/AlphaZero_Connect4](https://github.com/plkmo/AlphaZero_Connect4)

- [Lessons From Implementing AlphaZero](https://medium.com/oracledevs/lessons-from-implementing-alphazero-7e36e9054191)

$UCB = Q + C_{uct} P(s,a)\Large\frac{\sqrt{ \sum_{b} N(s,b)} }{1 + N(s,a)}$

Here, $Q$ is the mean action value (average reward), $C_uct$ is a constant determining the level of exploration (set as 1), $P(s$=state$,a$=action$)$ is the prior probability of choosing action a given by the policy output of the neural net, $N(s,a)$ is the number of times the branch corresponding to action a has been visited. The $N$ sum over $b$ in the numerator sums over all explored branches (actions) from state $s$ which is essentially the number of times the parent of $(s,a)$ has been visited.

### Simulation

After running simulations for that root node, we will then formulate the policy $p$ for the root node which is defined to be proportional to the number of visits of its direct child nodes. This policy p will then be used to select the next move to the next board state, and this board state will then be treated as the root node for next MCTS simulations and so on until the game terminates when someone wins or draw. The whole procedure in which one runs MCTS simulations for each root node as one moves through until the end of the game is termed as MCTS self-play.

Ref
- [Mastering the game of Go without human knowledge](https://www.gwern.net/docs/rl/2017-silver.pdf)
