---
published: true
title: Content-based slicing using a rolling hash
tags: hash
---
> One of the interesting use cases of the rolling hash function is that it can create dynamic, content-based chunks of a stream or file. - [wikipedia](https://en.wikipedia.org/wiki/Rolling_hash#Content-based_slicing_using_a_rolling_hash) / [HN](https://news.ycombinator.com/item?id=24405250) / [Borg](https://borgbackup.readthedocs.io/en/stable/internals.html)

The simplest approach to calculate the dynamic chunks is to calculate the rolling hash and if it matches a pattern (like the lower N bits are all zeroes) then it’s a chunk boundary. This approach will ensure that any change in the file will only affect its current and possibly the next chunk, but nothing else.

- [How would you fingerprint a piece of data?](https://yurichev.com/news/20210205_rolling_hash/)
