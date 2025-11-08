---
title: Step Function
published: true
tags: workflow camunda postgres
---
> With durable execution, instead of running your logic in memory, the goal is to decompose a task into smaller pieces (step functions) and record every step and decision. When the process stops (whether it fails, intentionally suspends, or a machine dies) the engine can replay those events to restore the exact state and continue where it left off, as if nothing happened. - [Absurd Workflows](https://lucumr.pocoo.org/2025/11/3/absurd-workflows/) / [HN](https://news.ycombinator.com/item?id=45797228)

- [Absurd Workflows](https://lucumr.pocoo.org/2025/11/3/absurd-workflows/) - Durable Execution With Just Postgres
	-  Absurd 1, a tiny SQL-only library with a very thin SDK to enable durable workflows on top of just Postgres — no extension needed.
- [	Dbos: Durable Workflow Orchestration with Go and PostgreSQL](https://news.ycombinator.com/item?id=45412938)
