---
title: Message Queues
published: true
tags: queue
---
> There's essential decoupling and accidental decoupling; decoupling you want, and decoupling which mostly just obscures your business logic. - [The Big Little Guide to Message Queues](https://news.ycombinator.com/item?id=25596026)

see also
- [durable message queueing](https://chatgpt.com/share/68cbadfa-5810-800d-a18c-a64f19776d23)
	- A durable queue is literally a queue that doesn't drop messages e.g. during an unexpected shutdown. That's all.
    - a durable queue makes it vastly simpler to build a durable workflow engine. - [HN](https://news.ycombinator.com/item?id=45186232)
- [Camunda External Tasks](https://docs.camunda.org/manual/7.20/user-guide/process-engine/external-tasks/)
- [I Love You, Redis, But I’m Leaving You for SolidQueue](https://www.simplethread.com/redis-solidqueue/) / [HN](https://news.ycombinator.com/item?id=46614037) - migrate an application’s job queues to vanilla PostgreSQL (or SQLite or MySQL).
