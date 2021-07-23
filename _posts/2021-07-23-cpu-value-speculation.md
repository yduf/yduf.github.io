---
published: true
title: Value Speculation
tags: cpu cache
---
> The trick exploits the branch predictor to guess values, enabling more instruction parallelism and therefore removing a bottleneck on the L1 cache. - [Beating the L1 cache with value speculation](https://mazzo.li/posts/value-speculation.html) / [HN](https://news.ycombinator.com/item?id=27929600)

Modern CPUs do not process instructions serially, but rather handle many at the same time. They read many instructions at once, break them down in stages, and then try to fill all the computation units they have with as many tasks from as many instructions as possible.3 For instance, modern Intel processors are designed for a throughput of 4 instructions per clock cycle, and AMD Zen processors for up to 5 or 6. However, branches pose a challenge when wanting to execute instructions in parallel.