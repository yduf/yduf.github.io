---
published: true
title: What is a Tensor ?
tags: math NN
---
> A tensor is often thought of as a generalized matrix. That is, it could be a 1-D matrix (a vector is actually such a tensor), a 3-D matrix (something like a cube of numbers), even a 0-D matrix (a single number), or a higher dimensional structure that is harder to visualize. The dimension of the tensor is called its rank. - [What’s the difference between a matrix and a tensor?](https://medium.com/@quantumsteinke/whats-the-difference-between-a-matrix-and-a-tensor-4505fbdc576c)

But this description misses the most important property of a tensor!

Any rank-2 tensor can be represented as a matrix, but not every matrix is really a rank-2 tensor. The numerical values of a tensor’s matrix representation depend on what transformation rules have been applied to the entire system.

[The bottom line of this is:](https://math.stackexchange.com/questions/412423/what-are-the-differences-between-a-matrix-and-a-tensor)
- The components of a rank-2 tensor can be written in a matrix.
- The tensor is not that matrix, because different types of tensors can correspond to the same matrix.
- The differences between those tensor types are uncovered by the basis transformations (hence the physicist's definition: "A tensor is what transforms like a tensor").


[![caption](https://i.stack.imgur.com/ltiol.png)](https://math.stackexchange.com/questions/2943123/what-is-a-tensor)
