---
published: true
title: Storing a million images in the filesystem
tags: filesystem
---
> Most of the newer systems I've worked with have pushed the file storage to the file system, and relied on databases for nothing more than indexing. File systems are designed to take that sort of abuse, they're much easier to expand, and you seldom lose the whole file system if one entry gets corrupted. - [SO](https://serverfault.com/a/95451)

> You can list a directory containing 8 million files! But not with ls. - [calls the syscall getdents directly](http://www.be-n.com/spw/you-can-list-a-million-files-in-a-directory-but-not-with-ls.html)
- [The ls command is not working for a directory with a huge number of files](https://unix.stackexchange.com/questions/120077/the-ls-command-is-not-working-for-a-directory-with-a-huge-number-of-files)
