---
published: true
title: EXT4 filesystem
tags: linux filesystem ext4
---
> Take a walk through EXT4's history, features, and optimal use, and learn how it differs from previous iterations of the EXT filesystem. - [An introduction to Linux's EXT4 filesystem](https://opensource.com/article/17/5/introduction-ext4-filesystem)

- [EXT4 - How does it work?](https://www.youtube.com/watch?v=4KaF2OXWfzg&list=WL&index=3)
	- ext3/ext4 is now the same ext4 driver in the kernel
	- extended attribute part of the inode (96 par defaut)


see also
- [The order of files in your ext4 filesystem does not matter ](https://news.ycombinator.com/item?id=43601026) - the actual argument value the JVM receives is "/jars/*", and in turn decides to be helpful, and expand the wildcard anyway using the _readdir_ syscall.
	- overlayfs delegates readdir to the underlying filesystem
	- the underlying filesystem happened to be an ext4
    - ext4 readdir optimizes by caching the entries of a directory in a “hashed b-tree” with a specific “directory hash seed”
    - the directory hash seed changed with the node image patch update, causing the jar order in the classpath to change, causing an uncaught throwable leading to “stuck” application initialization
