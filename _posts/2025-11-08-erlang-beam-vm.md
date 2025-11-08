---
title: BEAM
published: true
tags: lang erlang vm error-handling
---
> Erlang virtual machine - [wikipedia](https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine))

see also
- [	Don't “let it crash”, let it heal ](https://news.ycombinator.com/item?id=44853819)
	- Failures are inevitabe, so systems must be designed to EXPECT and recover from them, NOT AVOID them completely.
	- Let it crash philosophy allows components to FAIL and RECOVER quickly using supervision trees.
	- Processes should be ISOLATED and communicate via MESSAGE PASSING, which prevents cascading failures.
	- Supervision trees monitor other processes and RESTART them when they fail, creating a self-healing architecture.
    
- [	Why I wrote the BEAM book](https://news.ycombinator.com/item?id=44179257)