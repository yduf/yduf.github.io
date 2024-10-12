---
title: Rate Limit
published: true
tags: rate-limit algorithm
---
> Visualizing algorithms for rate limiting - [article](https://smudge.ai/blog/ratelimit-algorithms) / [HN](https://news.ycombinator.com/item?id=40384421)

- Rate limits don't really protect against backend capacity issue
- If the goal is to protect against bad traffic, consider additional steps besides simple rate limits.
- Be prepared for what to communicate or what action(s) to perform if and when the rate limits are hit
- you need to protect against concertina effects