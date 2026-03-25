---
title: Hierarchical navigable small world (HNSW)
tags: algorithm search nearest-neighbor
---
>  a fundamental breakthrough in approximate nearest neighbor search for high-dimensional vector spaces. Introduced by Yury Malkov and Dmitry Yashunin in 2016. The algorithm achieves logarithmic search complexity through a sophisticated multi-layer graph structure that separates connections by characteristic distance scales, enabling efficient navigation from coarse to fine granularity during search operations. - [Medium](https://medium.com/thedeephub/understading-hnsw-hierarchical-navigable-small-world-ff1a72d98605) / [Wikipedia](https://en.wikipedia.org/wiki/Hierarchical_navigable_small_world)


**see also**
- [Scaling HNSWs](https://news.ycombinator.com/item?id=45887466) - most of Redis is single-threaded, but antirez decided to use threads for the HNSW.
- [How hierarchical navigable small world (HNSW) algorithms can improve search](https://redis.io/blog/how-hnsw-algorithms-can-improve-search/) - everyone is connected by just a few people. That same principle powers hierarchical navigable small world (HNSW) algorithms, which link data points so queries can reach the right match in far fewer hops.

[![schema](https://www.pinecone.io/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fvr8gru94%2Fproduction%2Fe63ca5c638bc3cd61cc1cd2ab33b101d82170426-1920x1080.png&w=3840&q=75)](https://www.pinecone.io/learn/series/faiss/hnsw/)

