---
title: Q-Learning
published: true
tags: NN AI
---
> The ability to have agents automatically learn complex policies, solely through environmental rewards - [A Step-by-Step Beginner‘s Guide](https://thelinuxcode.com/demystifying-q-learning-a-step-by-step-beginners-guide/)

Basic step for understanding (deep) Q-learning

### Discretize the World

Let's assume that we are able to discretize our environment as well as the set of actions available to us.
Then we can imagine that some fonction exist that would gives the best action possible for a certain situation ( a cell in our discretized environment).

This would be our Q-Function.

If we lived in a discretized environment we also can think of this Q-function as a Q-table:
a table for which each entries is a tuple identified the cell we are in (in our environment) and map to a vector of available actions pondered by their score. The best action for this cell being the one having the highest value.

In this situation there is a simple algorithm to learn that Q-function (and Q-table) by only looking at the reward of our actions (by simulating their outcome) [^1]

[^1]: [Q Learning Intro\/Table - Reinforcement Learning p.1](https://www.youtube.com/watch?v=yMk_XtIEzH8&list=PLh9akXp2EH2D6RPP5ACPfG4D60XqhrXmC&index=3)

### This Minecraft world is to Big to fit in a table

Discretizing most world this way would require a huge table.
Rather than uzing an explicit table, we will use a neural network to learn and approximate that Q-Function without storing it in a table.

We trade memory, for compactness, but learning will take more time.

This is what is Deep Q-Learning [^2]

[^2]: [Deep Q Learning w\/ DQN - Reinforcement Learning p.5](https://www.youtube.com/watch?v=t3fbETsIBCY)

the Bellman equation for optimality

### [Introducing Q-Learning](https://huggingface.co/learn/deep-rl-course/unit2/q-learning)

### Reference