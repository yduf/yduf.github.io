---
published: true
title: Open adressing (or Open bucket)
tags: hash dictionary
---
> Open addressing or 'open bucket' hash tables always seem to be a second consideration in textbooks or blogs. I find them generally faster, and more memory efficient, and easier to implement. - [HN](https://news.ycombinator.com/item?id=28891033) / [wikipedia](https://en.wikipedia.org/wiki/Open_addressing)

- [Optimal Bounds for Open Addressing Without Reordering](https://arxiv.org/pdf/2501.02305)
  - [ 21 Yr Old Disproves 4 Decades Old Belief in Computing ](https://www.youtube.com/watch?v=EdVG5qNm2rY) - Instead of taking the first open slot, the algorithm intentionally skips empty spaces to create "firebreaks". These strategic gaps prevent data clusters from merging, keeping the system running with the snap and speed of a nearly empty structure—even at 99.99% capacity.

- [Optimizing Open Addressing](https://thenumb.at/Hashtables/) / [HN](https://news.ycombinator.com/item?id=35412788)

- [	Inside boost::unordered_flat_map](https://news.ycombinator.com/item?id=33654407) -  boost::unordered_flat_map is the fastest open-addressing hash map implementation in this field for C++... [it outperforms absl::flat_hash_map](https://martin.ankerl.com/2022/08/27/hashmap-bench-01/#benchmark-results-table)
- [Hash Tables: Open Addressing](https://programming.guide/hash-tables-open-addressing.html)
