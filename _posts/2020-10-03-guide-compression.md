---
published: true
title: The Hitchhiker’s Guide to Compression
tags: zip text
---
> Lossless file compression, and file compression in general has become a lost art. The modern developer community has moved on from working on compression algorithms to bigger and better problems, such as creating the next major NodeJS framework. However, compression as it stands in the computer science aspect is still as interesting as it was in 1980s, possibly even more so today with an estimated 463 Exabytes of data to be created everyday in 2025. - [go-compression](https://go-compression.github.io/)

- [History of Lossless Data Compression Algorithms](https://news.ycombinator.com/item?id=31922396)
- [Burrows–Wheeler transform](https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform) - rearranges a character string into runs of similar characters, in a manner that can be reversed to recover the original string. Since compression techniques such as move-to-front transform and run-length encoding are more effective when such runs are present, the BWT can be used as a preparatory step to improve the efficiency of a compression algorithm, and is used this way in software such as bzip2.