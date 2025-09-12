---
title: The Big OOPs
published: true
tags: fastware OOP ECS architecture
---
> Anatomy of a Thirty-five-year Mistake – [Casey Muratori (BSC 2025)](https://www.youtube.com/watch?v=wo84LFzx5nI)

### Entity Component System (ECS)
- the opposite of a fat-struct
- Architecture care about encapsulation boundaries
	- where you make it difficult to access things
    - vs where you make it easy
- Encapsulation boundaries around the system vs Boundaries accross the objects
- don't make the domain model be in the code.
	- compile-time hierarchy of encapsulation that matches the domain model

### OOP
- oop was just about passing message - (Alan Kay)
- inheritance hierarchy was told early (since 1980s)
	- C++ does not force to do it that way (even if it promoted it a  lot)
- C++ on simula -> didn't scale
	- build was very long / incremental build suck
    - runtime was very slow (because of the GC)
