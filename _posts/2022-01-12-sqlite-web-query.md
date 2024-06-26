---
published: true
title: SQLite over http
tags: sqlite web db
---
>  SQLite (written in C) is compiled to WebAssembly + a virtual file system that fetches chunks of the database with HTTP Range requests when SQLite tries to read from the filesystem. - [Hosting SQLite databases on Github Pages](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/) / [HN](https://news.ycombinator.com/item?id=27016630) / [2](https://news.ycombinator.com/item?id=29897611)

See also:
- [ws4sqlite](https://github.com/proofrock/ws4sqlite) - a server application that, applied to one or more SQLite files, allows to perform SQL queries and statements on them via REST.
