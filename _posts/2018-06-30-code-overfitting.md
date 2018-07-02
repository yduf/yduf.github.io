---
title: Code overfitting
published: true
tags: software
---
Someone once coined the term *code overfitting* on HN, which like over engineering makes now a lot of sense to me. For eg: 
- having a code that is too restrictive about its input, enforcing a data model it doesn't own or even use, but have code that will crash in assert when the model derive from it's expectation.
- having a code with a too rigid object or class model, that is tight to a one moment view of the universe, but can't evolve easily, while not providing additional insight or safety.
