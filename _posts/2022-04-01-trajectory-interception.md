---
published: true
title: Interception
tags: math codingames
use_math: true
---
> Given the coordinates of the positions of Alice, the rabbit and the hole, as well as the respective speeds of Alice and the rabbit, say whether Alice can catch the rabbit before it disappears. - [Interception of a Linear Trajectory With Constant Speed](http://zulko.github.io/blog/2013/11/11/interception-of-a-linear-trajectory-with-constant-speed/)

It is straightforward that, since we are looking for the fastest catch, Alice’s trajectory towards C must be a straight line.

![caption](http://zulko.github.io/images/alice/alice_schema.jpeg) 

## [stackoverflow](https://stackoverflow.com/questions/17204513/how-to-find-the-interception-coordinates-of-a-moving-target-in-3d-space)

> I had to solve the same problem at some point, and worked out [this quadratic equation that solved it](
http://ideone.com/AIr3hg)

Instead of previous model, consider that we collide at time $t$. With $\vec{v_A}$ and $\vec{v_B}$ being respective vector speed of $A$ and $B$ we got:

$(1) A + t \vec{v_A}= B + t \vec{v_B} = C$ the point of collision.

Everything is known, except $t$ and $\vec{v_A}$ for which we know only the norm (= the speed), but not the optimal direction.

Now lets call $d=AC$ the distance from A to the collision point. 
This distance (the value) is equal to $t \| \vec{v_A} \|$ that is time mulplied by linear speed.

This with pythagore theorem, gives

$(2) (x_c - x_a)² + (y_c - y_a)² = ( t s)² $

We can then express t 




