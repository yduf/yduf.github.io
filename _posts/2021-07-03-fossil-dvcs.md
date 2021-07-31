---
published: true
title: Fossil distributed version control system
tags: sqlite git vcs
---
> Fossil is a distributed version control system (DVCS) written beginning in 2007 by the architect of SQLite for the purpose of managing the SQLite project. - [The History And Purpose Of Fossil](https://www.fossil-scm.org/home/doc/trunk/www/history.md) / [HN](https://news.ycombinator.com/item?id=27719947) / [The Untold Story of SQLite](https://corecursive.com/066-sqlite-with-richard-hipp/)

![caption](https://fossil-scm.org/home/doc/trunk/www/fossil3.gif)

## [Fossil vs Git](https://fossil-scm.org/home/doc/trunk/www/fossil-v-git.wiki)

One way to describe Fossil is that it is "GitHub-in-a-box." 

A Fossil repository is a SQLite database storing the entire history of a project. It is not normally stored inside the working tree. A Fossil working tree — also called a check-out — is a directory that contains a snapshot of your project that you are currently working on, extracted for you from the repository database file by the fossil program.

- immutable
- built in first-class ticketing system
Happens to use SQLite as its storage engine too (SQLInception?), which brings at least a couple (off the top of my head) features:

- SQL is used to query things, which is very powerful
- the repository is a single SQLite file. Easy to store, copy, and…
- one can checkout multiple working copies into various directories. Or, in other words, I can have three discrete, independent workflows happening simultaneously, but only one copy of the repository backing them all.

It’s also got a built-in server that you can use locally or publish for remote people to access via their web browser that’s essentially GitHub-in-a-box.

## Tutorials
- [Why I Prefer Fossil over Git](https://www.youtube.com/watch?v=WKVX7xq58kA)
	- crnl-glob => * - what is it ?
