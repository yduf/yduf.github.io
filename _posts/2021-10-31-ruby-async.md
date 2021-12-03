---
published: true
title: Async (Ruby)
tags: ruby async thread quote
---
> Async Ruby adds new concurrency features to the language; you can think of it as "threads with none of the downsides". It's been in the making for a couple of years, and with Ruby 3.0, it's finally ready for prime time. - [Bruno Sutic](https://brunosutic.com/blog/async-ruby) / [HN](https://news.ycombinator.com/item?id=29049881)

Ruby 3.0 implements a ["fiber scheduler"](https://noteflakes.com/articles/2021-10-20-explaining-ruby-fibers) feature that enables "colorless Async".

- Async Ruby is much more performant than threads. There are less context switches, enabled by the event reactor. The performance benefits are visible in simple scenarios like making a thousand HTTP requests.

- Async is more scalable, can handle millions concurrent tasks (like HTTP connections). There can only be a couple thousand threads at the same time.

> I regret adding threads. —Matz

see also
- [thread]({% post_url 2017-11-27-CG-meanmax %})






