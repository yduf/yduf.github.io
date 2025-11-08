---
published: true
title: DuckDB
tags: sql db sqlite parquet csv spark
---
> An embeddable SQL database like SQLite, but supports Postgres features - [DuckDB](https://duckdb.org/) / [github](https://github.com/duckdb/duckdb?tab=readme-ov-file#duckdb) / [HN](https://news.ycombinator.com/item?id=24531085)

The creator of duckdb argues that people using pandas are missing out of the 50 years of progress in database research - [HN](https://news.ycombinator.com/item?id=45127389)
	- [DuckDB Internals (CMU Advanced Databases / Spring 2023)](https://www.youtube.com/watch?v=bZOvAKGkzpQ) - duck DB use a vectorized push-base model (implemented in C++)
		- [support larger than memory execution](https://youtu.be/bZOvAKGkzpQ?si=byfIsHn6atZgqfmQ&t=4015)
	- [DuckDB – The SQLite for Analytics (Mark Raasveldt, CWI)](https://www.youtube.com/watch?v=PFUZlNQIndo)

- [HN](https://news.ycombinator.com/item?id=31220841) is a lightweight and super fast library/CLI for working with Parquet. It’s SQLite for column formats
- [	The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html) / [HN](https://news.ycombinator.com/item?id=43342712) - the UI is not open source.
- [Should You Ditch Spark for DuckDb or Polars?](https://milescole.dev/data-engineering/2024/12/12/Should-You-Ditch-Spark-DuckDB-Polars.html) / [HN](https://news.ycombinator.com/item?id=42419224)
- [How does DuckDB compares to SQLite (chatGPT)](https://chatgpt.com/share/6784f6c5-2254-800d-a086-4e4157d36161)

### see also
- [	A sharded DuckDB on 63 nodes runs 1T row aggregation challenge in 5 sec](https://news.ycombinator.com/item?id=45694122)