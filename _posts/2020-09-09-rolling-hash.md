---
published: true
title: Content Defined chunking (CDC)
tags: hash
---
> One of the interesting use cases of the rolling hash function is that it can create dynamic, content-based chunks of a stream or file. - [wikipedia](https://en.wikipedia.org/wiki/Rolling_hash#Content-based_slicing_using_a_rolling_hash) / [HN](https://news.ycombinator.com/item?id=24405250) / [Borg](https://borgbackup.readthedocs.io/en/stable/internals.html)

The simplest approach to calculate the dynamic chunks is to calculate the rolling hash and if it matches a pattern (like the lower N bits are all zeroes) then it’s a chunk boundary. This approach will ensure that any change in the file will only affect its current and possibly the next chunk, but nothing else.

see also
- [How would you fingerprint a piece of data?](https://yurichev.com/news/20210205_rolling_hash/)
- [Foundation - Introducing Content Defined Chunking (CDC)](https://restic.net/blog/2015-09-12/restic-foundation1-cdc/)
- [FastCDC: A Fast and Efficient Content-Defined Chunking Approach for Data Deduplication ](https://www.usenix.org/conference/atc16/technical-sessions/presentation/xia)