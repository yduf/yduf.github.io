---
title: Message Queues
published: true
tags: queue
---
> There's essential decoupling and accidental decoupling; decoupling you want, and decoupling which mostly just obscures your business logic. - [The Big Little Guide to Message Queues](https://news.ycombinator.com/item?id=25596026)

_The decoupling narrative is oversold for queues._

**Resilience in the face of failure**, where multiple systems are communicating, or there's a lot of long-running work which you want to continue as seamlessly as possible, **is the biggest essential decoupling**. You externalize transitions in the state machine (edges in the state graph) of the logic as serialized messages, so you can blow away services and bring them back and the global state machine can continue.

**Scaling** from a single consumer to multiple consumers, from multiple CPUs to multiple machines, **is mostly essential decoupling**. Making decisions about how to parallelize subgraphs of your state machine, removing scaling bottlenecks, is an orthogonal problem to the correctness of the state machine on its own, and representing it as a state machine with messages in queues for edges helps with that orthogonality. You can scale things up without external persistent queues but you'll end up with queues somewhere, even if it's just worker queues for threads.

**Accidental decoupling is where you have a complex state machine encapsulating a business procedure with multiple steps**, and it's coordinated as messages between and actions in multiple services. The business logic might say something like: take order from user; send email notification; complete billing steps; remove stock from inventory system; schedule delivery; dispatch stock; etc.

All this logic needs to complete, in sequence, but without higher order workflow systems which encode the state machine, a series of messages and producers and consumers is like so much assembly code hiding the logic. It's easy to end up with the equivalent of COMEFROM code in a message system.




see also
- [durable message queueing](https://chatgpt.com/share/68cbadfa-5810-800d-a18c-a64f19776d23)
	- A durable queue is literally a queue that doesn't drop messages e.g. during an unexpected shutdown. That's all.
    - a durable queue makes it vastly simpler to build a durable workflow engine. - [HN](https://news.ycombinator.com/item?id=45186232)
- [Camunda External Tasks](https://docs.camunda.org/manual/7.20/user-guide/process-engine/external-tasks/)
- [I Love You, Redis, But I’m Leaving You for SolidQueue](https://www.simplethread.com/redis-solidqueue/) / [HN](https://news.ycombinator.com/item?id=46614037) - migrate an application’s job queues to vanilla PostgreSQL (or SQLite or MySQL).
