---
published: true
title: Text Search
tags: text search index
---
> Building a full-text search engine in 150 lines of Python code - [blog](https://bart.degoe.de/building-a-full-text-search-engine-150-lines-of-code/) / [HN](https://news.ycombinator.com/item?id=26582109)

see also
- [Books about full text search?](https://news.ycombinator.com/item?id=33734259)
	- [Relevant Search](https://www.manning.com/books/relevant-search)

- [Inverted index](https://en.wikipedia.org/wiki/Inverted_index) is a database index storing a mapping from content, such as words or numbers, to its locations in a table, or in a document.
- [relevant search](https://livebook.manning.com/book/relevant-search/chapter-1/)
	- [How Google Code Search Worked](https://swtch.com/~rsc/regexp/regexp4.html) - Regular Expression Matching with a Trigram Index

- [SQLite FTS](https://www.sqlite.org/fts5.html)

## [The Boyer-Moore Fast String Searching Algorithm](https://www.cs.utexas.edu/users/moore/best-ideas/string-searching/) / [HN](https://news.ycombinator.com/item?id=26910982)

## ElasticSearch / lucene index
- [Stack Overflow: The Architecture - 2016 Edition](https://nickcraver.com/blog/2016/02/17/stack-overflow-the-architecture-2016-edition/) - The main reason we’re on Elasticsearch instead of something like SQL full-text search is scalability and better allocation of money. 
	- [A new search engine for Stack Exchange](https://meta.stackexchange.com/questions/160100/a-new-search-engine-for-stack-exchange) - After the performance problems we have run into with Lucene.NET we've decided to make a change, we're moving the network on to elasticsearch.
    	- [Stack Overflow Migrate Architecture from .NET Framework to .NET Core ](https://www.infoq.com/news/2020/04/Stack-Overflow-New-Architecture/)
    	- [Stack Overflow Architecture](http://highscalability.com/stack-overflow-architecture)

SQL CPUs are comparatively very expensive, Elastic is cheap and has far more features these days. Why not [Solr](https://solr.apache.org/)? We want to search across the entire network (many indexes at once), and this wasn’t supported at decision time. The reason we’re not on 2.x yet is a [major change to “types”](https://github.com/elastic/elasticsearch/issues/8870) means we need to reindex everything to upgrade. I just don’t have enough time to make the needed changes and migration plan yet.

## [What is Apache SolrCloud?](https://intellipaat.com/blog/what-is-apache-solrcloud/)
- [Apache Solr vs Elasticsearch](http://solr-vs-elasticsearch.com/)

## Lucene
- [Text search with Lucene](https://www.youtube.com/watch?v=x37B_lCi_gc) / [2](https://www.youtube.com/watch?v=fCK9U3L7c8U)
- [What is in a Lucene index? (Adrien Grand)](https://www.youtube.com/watch?v=T5RmMNDR5XI)

## [How does Google search engine work?](https://krazytech.com/technical-papers/how-does-google-search-engine-work)
- [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html)
- [Google Architecture](http://highscalability.com/google-architecture)
