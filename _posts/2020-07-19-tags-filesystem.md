---
published: true
title: File system that uses tags rather than folders
tags: tags filesystem
---
> TMSU was born out of frustration with the hierarchical nature of filesystems - [Home](https://tmsu.org/)

- [Stackoverflow](https://stackoverflow.com/questions/3263036/file-system-that-uses-tags-rather-than-folders)

## [tsmu](https://github.com/oniony/TMSU)
- install using x86_64 binary [release](https://github.com/oniony/TMSU/releases)
	- [zsh](https://github.com/oniony/TMSU/blob/master/misc/zsh/_tmsu) completion script

Works in user space, uses FUSE

## Tricks and Tips
- [External Integration](https://github.com/oniony/TMSU/wiki/Tricks-and-Tips#external-integration)
> The versatility of TMSU means it isn't very difficult to extract tags from text files (e.g. Markdown) and feed them into TMSU, for example the following could be used to extract #tags from markdown files in the current directory and assign tags to them.



## Issue
- [error: Transport endpoint is not connected](https://stackoverflow.com/a/19920009/51386)
	- fusermount -u YOUR_MNT_DIR
	