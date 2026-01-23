---
published: true
title: Async (Ruby)
tags: ruby async thread network quote
toc: true
---
> Async Ruby adds new concurrency features to the language; you can think of it as "threads with none of the downsides". It's been in the making for a couple of years, and with Ruby 3.0, it's finally ready for prime time. - [Bruno Sutic](https://brunosutic.com/blog/async-ruby) / [HN](https://news.ycombinator.com/item?id=29049881)

# [why async/await seems to have taken over the world?](https://news.ycombinator.com/item?id=45782574)

- In single threaded scripting languages, it has arisen as a way to allow overlapping computation with communication without having to introduce multi threading and dealing with the fact that memory management and existing code in the language aren't thread-safe.
- when you require 1 thread per 1 connection, you have trouble getting to thousands of active connections and people want to scale way beyond that. ([C10k problem](https://en.wikipedia.org/wiki/C10k_problem))
	- The alternative is lightweight/green threads and actors.
    - Those are all some form of coroutines.
    - The thing with await is that it can be retrofitted onto existing languages and runtimes with relatively little effort. 

# Ruby
Ruby 3.0 implements a ["fiber scheduler"](https://noteflakes.com/articles/2021-10-20-explaining-ruby-fibers) feature that enables "colorless Async".

- Async Ruby is much more performant than threads. There are less context switches, enabled by the event reactor. The performance benefits are visible in simple scenarios like making a thousand HTTP requests.

- Async is more scalable, can handle millions concurrent tasks (like HTTP connections). There can only be a couple thousand threads at the same time.

> I regret adding threads. —Matz

see also
- [thread]({% post_url 2018-11-23-thread %})
- [Concurrent Ruby](https://github.com/ruby-concurrency/concurrent-ruby)
