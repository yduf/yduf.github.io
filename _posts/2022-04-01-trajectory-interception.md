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

$A + t \vec{v_A}= B + t \vec{v_B} = C$ the point of collision (1).

Everything is known, except $t$ and $\vec{v_A}$ for which we know only the norm (= the speed), but not the optimal direction.

The distance (the value) to the point of collision is equal to $t \| \vec{v_A} \|$ from $A$ and  $t \| \vec{v_B} \|$ from B. That is time mulplied by the relative linear speed of the object.


What we have is a general triangle ABC, for which:
- $\vec{AB}$ is known
- $\vec{AC(t)} = t \vec{v_A} $  is dependant of $t$ 
- $BC(t) = t \| \vec{v_B} \| = t * s_B$ is a distance dependant of $t$

We can use the [vector version of Law of cosinus](https://en.wikipedia.org/wiki/Law_of_cosines#Using_vectors). Starting from the vector relation:

$\vec{BC}=\vec{BA} + \vec{AC}$

Taking the [dot product](https://en.wikipedia.org/wiki/Law_of_cosines#Using_vectors) of each side with itself, we got:

${BC(t)}^2 = {BA}² + {AC(t)}² + 2 \vec{BA}.\vec{AC(t)}$ where now everything is knwow except $t$.

which by replacing known quantities, become:

${t s_B}² = {BA}² + {t s_A}² + 2 t \vec{BA}.\vec{v_A}$

or

$ ({s_A}² - {s_B}²) \bm{t}² + 2 \vec{BA}.\vec{v_A} \bm{t} + {BA}² = 0 $ a quadratic equation in $t$ that we can solve.

Then if a solution exist, it can be injected in (1).






