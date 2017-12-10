---
title: Perfect forwarding explained
published: true
tags: c++
---

[it means](https://www.justsoftwaresolutions.co.uk/cplusplus/rvalue_references_and_perfect_forwarding.html) that a function template can pass its arguments through to another function whilst retaining the lvalue/rvalue nature of the function arguments by using std::forward. This is called "perfect forwarding", avoids excessive copying, and avoids the template author having to write multiple overloads for lvalue and rvalue references.

# [Problem](http://thbecker.net/articles/rvalue_references/section_07.html)

Basically, given the expression E(a, b, ... , c), we want the expression f(a, b, ... , c) to be equivalent. In C++03, this is impossible. [There are many attempts, but they all fail in some regard.](https://stackoverflow.com/questions/3582001/advantages-of-using-forward)

# [Perfect Forwarding: The Solution ](http://thbecker.net/articles/rvalue_references/section_08.html)

[You cannot forward something more than once](https://stackoverflow.com/questions/7257144/when-to-use-stdforward-to-forward-arguments), though, because that makes no sense. Forwarding means that you're potentially moving the argument all the way through to the final caller, and once it's moved it's gone, so you cannot then use it again.
