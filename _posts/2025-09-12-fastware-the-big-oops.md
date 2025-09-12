---
title: The Big OOPs
published: true
tags: fastware OOP ECS architecture c++ quote
---
> Anatomy of a Thirty-five-year Mistake – [Casey Muratori (BSC 2025)](https://www.youtube.com/watch?v=wo84LFzx5nI) / [HN](https://news.ycombinator.com/item?id=44612313)

> The most treacherous metaphors are the ones that seem to work for a time, because they can keep more powerful insights from bubbling up. - Alan Kay (1984)

> Unified function call: The notational distinction between x.f(y) and f(x,y) comes from the flawed OO notion that there always is a single most important object for an operation. I made a mistake adopting that. It was a shallow understanding at the time (but extremely fashionable). Even then, I pointed to sqrt(2) and x+y as examples of problems caused by that view. - [bjarne](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1962r0.pdf)

### Entity Component System (ECS)
Looking Glass (1998)
- the opposite of a fat-struct
- Architecture care about encapsulation boundaries
	- where you make it difficult to access things
    - vs where you make it easy
- Encapsulation boundaries around the system vs Boundaries accross the objects
- don't make the domain model be in the code.
	- compile-time hierarchy of encapsulation that matches the domain model => Are not that good (and may be counterproductive).

### OOP
- oop was just about passing message - (Alan Kay)
- inheritance hierarchy was told early (since 1980s)
	- C++ does not force to do it that way (even if it promoted it a  lot)
- Stroustrup 1994 (Design of Evolution of C++) - C++ on simula -> didn't scale 
	- Simula build was very long / incremental build suck
    - Simula runtime was very slow (because of the GC even when no work was needed)
    - about large Teams (were hierarchy and encapsulation should strive) => didn't work even on 1 people team
    - inheritance used mainly for code-reuse
	- INSPECT from simula was explicitly not ported to C++ 
    	- forcing latter usage of virtual function (vs discriminated union)
- Team Fat Struct Founded 1960
	- Dougals T. Ross (struct(plex) + vtable)
- Ivan Sutherland's SketchPad (1963) - probably the most significant thesis ever done - Alan Kay (1987)
	- [ring structured](https://youtu.be/wo84LFzx5nI?si=LtKJzwD9d2dtB_4y&t=5614) designed to rapid constraint satisfaction
    	- chicken - a link in the linked list that point to the sentinel (hen)
	- the virtual function was the least interessting part of this (because it was possible because draw was very simple)
    	- the constraint solver was omniscient (ECS model)
- CSG on Spheres (1997) - NegaMan (Negative Metaball)