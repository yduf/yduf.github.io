---
published: true
title: File format for tabular data
tags: file db array
---
> there is several high quality and well-developed formats - [HN](https://news.ycombinator.com/item?id=31255775)

**csv** -- Simple for simple use cases, text-based, however many edge cases, feature lacking etc

**ndjson** -- [every line is a json object](https://news.ycombinator.com/item?id=31256664)

**xlsx** -- Works in excel, ubiquitous format with a standard, however complicated and missing scientific features

**sqlite** -- Designed for relational data, somewhat ubiquitous, types defined but not enforced

**parquet** / **hdf5** / **apache feather** / etc -- Designed for scientific use cases, robust, efficient, less ubiquitous
	- [DuckDB](https://news.ycombinator.com/item?id=31220841) is a lightweight and super fast library/CLI for working with Parquet. It’s SQLite for column formats
    - Arrow also has its own on-disk format called [Feather](https://arrow.apache.org/docs/python/feather.html)

**capn proto**, **prototype buffers**, **avro**, **thrift** -- Has specific features for data communication between systems

**xml** -- Useful if you are programming in early 2000s

**GDBM**, **Kyoto Cabinet**, etc -- Useful if you are programming in late 1990s
