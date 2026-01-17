---
title: Rate Limit
published: true
tags: rate-limit limits algorithm architecture
---
> prevent one user from overusing a resource and degrading the quality of service for other users. - [An Interactive Guide To Rate Limiting](https://blog.sagyamthapa.com.np/interactive-guide-to-rate-limiting) / [HN](https://news.ycombinator.com/item?id=44201583)

- [Visualizing algorithms for rate limiting](https://smudge.ai/blog/ratelimit-algorithms) / [HN](https://news.ycombinator.com/item?id=40384421)

- Rate limits don't really protect against backend capacity issue
- If the goal is to protect against bad traffic, consider additional steps besides simple rate limits.
- Be prepared for what to communicate or what action(s) to perform if and when the rate limits are hit
- you need to protect against concertina effects
