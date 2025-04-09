---
title: Q-Learning
published: true
tags: NN AI
use_math: true
---
> The ability to have agents automatically learn complex policies, solely through environmental rewards - [A Step-by-Step Beginner‘s Guide](https://thelinuxcode.com/demystifying-q-learning-a-step-by-step-beginners-guide/) / [HN](https://news.ycombinator.com/item?id=20685049)

Understanding (deep) Q-learning in 2min

[![caption](https://mcdn.wallpapersafari.com/medium/92/47/AWFrD0.jpg)](https://wallpapersafari.com/w/AWFrD0)


## Discretize the World

Let's assume that we are able to discretize our environment as well as the set of actions available to us.
Then we can imagine that some fonction exist that would gives the best action possible for a certain situation (when positioned on a cell in our discretized environment).

This would be our Q-Function
(the Q comes from “the Quality” (the value) of that action at that state).

If we lived in a discretized environment we also can think of this Q-function as a Q-table:  
a table for which each entries is a tuple identifying the cell we are in (in our environment) and map to a vector of available actions pondered by their score. The best action for this cell being the one having the highest value.

$ [ x, y, z] \Rightarrow ( a_1, a_2, a_3, a_4)$

In this situation there is a simple algorithm to learn that Q-function (and Q-table) by only looking at the reward of our actions (by simulating their outcome) ([^1])([^3])

[![caption](https://wikimedia.org/api/rest_v1/media/math/render/svg/a3a4d2ac903b1be02cc81e60de2e9f91d7025fec)](https://en.wikipedia.org/wiki/Q-learning#Algorithm)

[^1]: [Q Learning Intro/Table - Reinforcement Learning p.1](https://www.youtube.com/watch?v=yMk_XtIEzH8&list=PLh9akXp2EH2D6RPP5ACPfG4D60XqhrXmC&index=3)  - the presentation itsef take many shortcuts that will lead to a not working q algorithm, look at [Introducing Q-Learning (Hugging Face)](https://huggingface.co/learn/deep-rl-course/unit2/q-learning) for a better algorithm.
[^3]: [Q Learning Explained (tutorial)](https://www.youtube.com/watch?v=aCEvtRtNO-M) - Montecarlo vs TD. / [Q-Learning](https://www.geeksforgeeks.org/q-learning-in-python/)

### 

[^4]: [Comparing Exploration Strategies for Q-learning in Random Stochastic Mazes](https://www.ai.rug.nl/~mwiering/GROUP/ARTICLES/Exploration_QLearning.pdf) - ocused on the undirected strategies: softmax, e-greedy,
pursuit, and compared them to the directed exploration strat-
egy UCB-1. The results show that softmax or Boltzmann
exploration outperforms the other strategies, although it is
harder to tune its parameters. _The easiest techniques to tune
are e-greedy and UCB-1, but e-greedy performs worst of all
exploration strategies_

## This World is to Big to fit in a table

Discretizing most world this way would require a huge table.
Rather than uzing an explicit table, we will use a neural network to learn and approximate that Q-Function without storing it in a table:
- the input layer will match the tuple identifying our cell
- the hidden layer is however need to be (convolution network / whatever)
- the output layer will match the set of actions available to us and give the learned weigth.

That way we trade memory of the Q-table for compactness of the NN, with same usage, but learning will take more time.

This is what is Deep Q-Learning [^2]

[^2]: [Deep Q Learning w/ DQN - Reinforcement Learning p.5](https://www.youtube.com/watch?v=t3fbETsIBCY)

![neural network illusation]()

### Notes
the function to learn the Q-function is the Bellman equation for optimality.


### see also
- [Introducing Q-Learning](https://huggingface.co/learn/deep-rl-course/unit2/q-learning)
- [Deep Q-Learning (Space Invaders)](http://maciejjaskowski.github.io/2016/03/09/space-invaders.html) / [HN](https://news.ycombinator.com/item?id=11282797)
- [Q-Learning Tic-Tac-Toe, Briefly](https://planspace.org/20191103-q_learning_tic_tac_toe_briefly/)
- [DQN vs PPO](https://jerrickliu.com/2020-07-13-FourthPost/) 
	- DQN and Q-learning in general are performed **off-policy**, meaning that while learning, each update in the policy can use data collected at any point in its time of training,
    - PPO are **on-policy**, only using the data collected from the most up-to-date policy and making decisions based on that.
    - Both algorithms are **model-free**, meaning that while training agents, they do not have access to the model of the environment. The model of the environment is a function which predicts state transitions and rewards.

### Reference
