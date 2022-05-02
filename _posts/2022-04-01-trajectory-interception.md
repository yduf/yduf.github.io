---
published: true
title: Interception
tags: math codingames triangle
use_math: true
---
> Given the coordinates of the positions of Alice, the rabbit and the hole, as well as the respective speeds of Alice and the rabbit, say whether Alice can catch the rabbit before it disappears. - [Interception of a Linear Trajectory With Constant Speed](http://zulko.github.io/blog/2013/11/11/interception-of-a-linear-trajectory-with-constant-speed/)

It is straightforward that, since we are looking for the fastest catch, Alice’s trajectory towards C must be a straight line.

![caption](http://zulko.github.io/images/alice/alice_schema.jpeg) 

> I had to solve the same problem at some point, and worked out [this quadratic equation that solved it](
http://ideone.com/AIr3hg)

## My interpretation

Instead of previous model, consider that we collide at a time $t$. With $\vec{v_A}$ and $\vec{v_B}$ being respective vector speed of $A$ and $B$ we got:

$A + t \vec{v_A}= B + t \vec{v_B} = C$ the point of collision (1).

Everything is known, except $t$ and $\vec{v_A}$ for which we know only the norm (= the speed), but not the direction.

The distance (the value) to the point of collision is equal to $t \| \vec{v_A} \|$ from $A$ and  $t \| \vec{v_B} \|$ from B. That is time mulplied by the relative linear speed of the object.


What we have is a general triangle ABC, for which:
- $\vec{AB}$ is known by definition,
- $\vec{BC(t)} = t \vec{v_B} $  is dependant of $t$,
- $AC(t) = t \| \vec{v_A} \| = t . s_A$ is a distance dependant of $t$.

We can use the [vector version of Law of cosinus](https://en.wikipedia.org/wiki/Law_of_cosines#Using_vectors). Starting from the vector relation:

$\vec{AC}=\vec{AB} + \vec{BC}$

Taking the [dot product](https://en.wikipedia.org/wiki/Law_of_cosines#Using_vectors) of each side with itself, we got:

${AC(t)}^2 = {AB}² + {BC(t)}² + 2 \vec{AB}.\vec{BC(t)}$ where now everything is knwow except $t$.

which by replacing known quantities, become:

${(\boldsymbol t s_A)}² = {AB}² + {(\boldsymbol t s_B)}² + 2 \boldsymbol t \vec{AB}.\vec{v_B}$

or

$ ({s_B}² - {s_A}²) \boldsymbol t² + ( 2 \vec{AB}.\vec{v_B}) \boldsymbol t + {AB}² = 0 $, a quadratic equation in $\boldsymbol t$ that we can now solve.

Then if a solution exist, it can be injected in (1) to compute $C$.


see also:
- [Stackoverflow](https://stackoverflow.com/questions/17204513/how-to-find-the-interception-coordinates-of-a-moving-target-in-3d-space)
