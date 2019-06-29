---
published: true
title: Tail call optimisation (TCO)
tags: optimize recurse algorithm ruby
---
## [Ruby Tail Call Optimization?](https://stackoverflow.com/questions/824562/does-ruby-perform-tail-call-optimization/824831#824831)

The Ruby Language Specification doesn't say anything about TCO. It doesn't say you have to do it, but it also doesn't say you can't do it.

- This is unlike Scheme, where the Language Specification requires that all Implementations must perform TCO.

- But it is also unlike Python, where Guido van Rossum has made it very clear on multiple occasions (the last time just a couple of days ago) that Python Implementations should not perform TCO.
