---
published: true
title: Resiliency in Systems Design
tags: error-handling
---
> an important part of erlang's failure domain driven mentality is not just "let it crash", but also tying together failure domains: what should you also bring down with you when you crash. For example. Your data sync task encounter an http error in a connected SAAS that threatens data inconsistency. Perfect time to crash. But if you do so, also take down the database connection so that the connection can be returned to the connection pool and the transaction you're running in can be rolled back, ideally without having to try/catch and keep track/selectively recycle of all of cumulative responsibilities that have accrued in that task. - [HN](https://news.ycombinator.com/item?id=27797182)
