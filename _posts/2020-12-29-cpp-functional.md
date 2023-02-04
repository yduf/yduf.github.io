---
published: true
title: Functional programming in C++
tags: c++ functional haskell
---
> A large fraction of the flaws in software development are due to programmers not fully understanding all the possible states their code may execute in. In a multithreaded environment, the lack of understanding and the resulting problems are greatly amplified, almost to the point of panic if you are paying attention.  
> Programming in a functional style makes the state presented to your code explicit, which makes it much easier to reason about, and, in a completely pure system, makes thread race conditions impossible. - [John Carmack](https://gamasutra.com/view/news/169296/Indepth_Functional_programming_in_C.php) / [HN](https://news.ycombinator.com/item?id=3896404) / [(2)](https://news.ycombinator.com/item?id=8609775)

- [John Carmack on Inlined Code](http://number-none.com/blow/john_carmack_on_inlined_code.html) - _where inlining is not what the compiler do, but manually copying code upward_. To sum up:
	- If a function is only called from a single place, consider inlining it.
	- If a function is called from multiple places, see if it is possible to arrange for the work to be done in a single place, perhaps with flags, and inline that.
	- If there are multiple versions of a function, consider making a single function with more, possibly defaulted, parameters.
	- If the work is close to purely functional, with few references to global state, try to make it completely functional.
	- Try to use const on both parameters and functions when the function really must be used in multiple places.
	- Minimize control flow complexity and "area under ifs", favoring consistent execution paths and times over "optimally" avoiding unnecessary work.


- [John Carmack Keynote - Quakecon 2013](https://www.youtube.com/watch?v=Uooh0Y9fC_M#t=4876)
