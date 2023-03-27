---
published: true
title: Key-Value Store / Hashmap / dictionary implementation & performance
tags: db hash filesystem dictionary c++ fastware benchmarking
---
> Key-value stores are one of the simplest forms of database. - [Implementing a Key-Value Store](https://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/)

### Benchmark
- [Finding the Fastest, Memory Efficient Hashmap](https://martin.ankerl.com/2019/04/01/hashmap-benchmarks-01-overview/)  - 2020 - results
	- [hashmap benchmarks](https://github.com/martinus/map_benchmark) / [r/cpp](https://www.reddit.com/r/cpp/comments/auwbmg/hashmap_benchmarks_what_should_i_add/) - benchmark code

- [Benchmark of major hash maps implementation](https://tessil.github.io/2016/08/29/benchmark-hopscotch-map.html) - 2017

## [Conclusion](https://martin.ankerl.com/2019/04/01/hashmap-benchmarks-05-conclusion/)

### Hashes

This summary is simple: in all benchmarks where hashing was involved, robin_hood::hash is overall the fastest. Only for long strings absl::Hash is faster. Having said that, absl::Hash has a lot more features and is backed by the power of Google, so it might be worth considering anyways.

I can only warn from the libstdc++-v3 default implementation for integral types. Only use it if you are absolutely sure about what data you are about to insert.


### Hashmaps

If you are dealing with small maps and integral data types as keys, emilib1::HashMap might be fastest. But be aware that I cannot vouch for it’s stability. It is very new, and while integrating it the author still had to fix a few kinks to get it working in my benchmark. If that does not bother you, it’s search performance is very fast.

If you want a more stable map with very good performance, I’d go for absl::flat_hash_map as the default map. It is very stable, has lots of features, and definitely well tested.

If your map is modified with inserts and removals a lot, tsl::robin_map is fastest. It has high memory usage though. robin_hood::unordered_flat_map is only slightly slower but has much less memory requirements.

If your key is relatively slow to hash and to compare like a std::string, robin_hood::unordered_node_map is the way to go. It’s memory usage is quite low and it is fastest. Integration is very easy, since it is a relatively small single header file.

Sometimes it is very important to iterate and process all entries in a map very fast, e.g. in games. In that case, tsl::sparse_map is the clear winner. Iteration is exceptionally fast, it uses little memory, and find & insert & erase performance is ok as well.

### see also
- [Super high performance C/C++ hash map (table, dictionary)](https://stackoverflow.com/questions/3300525/super-high-performance-c-c-hash-map-table-dictionary)
	- [ sparsehash](https://github.com/sparsehash/sparsehash) - several hash-map implementations, similar in
API to SGI's hash_map class, but with different performance
characteristics.
