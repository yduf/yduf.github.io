---
published: true
title: Filesystem that uses tags rather than folders
tags: tags filesystem
---
> TMSU was born out of frustration with the hierarchical nature of filesystems - [Home](https://tmsu.org/) / [Stackoverflow](https://stackoverflow.com/questions/3263036/file-system-that-uses-tags-rather-than-folders)

see also
- [I am endlessly fascinated with content tagging systems](https://news.ycombinator.com/item?id=33248391)
- [What's a good solution for file-tagging in linux?](https://superuser.com/questions/81563/whats-a-good-solution-for-file-tagging-in-linux)
	- [Modify ext4 file system to add custom attribute for files](https://stackoverflow.com/questions/44440575/modify-ext4-file-system-to-add-custom-attribute-for-files) - There is no indexing of these values. You have to check all existing files
    	- [Extended attributes: the good, the not so good, the bad.](https://www.lesbonscomptes.com/pages/extattrs.html)
		- [How I use the attr command with my Linux filesystem](https://opensource.com/article/22/6/linux-attr-command)
		- [Executing a bash script upon file creation](https://stackoverflow.com/questions/14692353/executing-a-bash-script-upon-file-creation)

# Principle
- [Designing better file organization around tags, not hierarchies](https://www.nayuki.io/page/designing-better-file-organization-around-tags-not-hierarchies#contents)

# [Tsmu](https://github.com/oniony/TMSU)
- install using x86_64 binary [release](https://github.com/oniony/TMSU/releases)
	- [fish autocompletion](https://github.com/0ion9/fish_tmsu) - [\[1\]](https://github.com/oniony/TMSU/issues/169)
	- [zsh](https://github.com/oniony/TMSU/blob/master/misc/zsh/_tmsu) completion script

Works in user space, uses FUSE

## [Tagging](https://github.com/oniony/TMSU/wiki/Tag-and-Value-Names)
- support unicode tags (hopefully)
{% highlight bash %}
$ tmsu tag <file> --tags='score=★★★★☆'
$ tmsu tag --tags="iron-giant sci-fi" ./Pictures/iron-giant/*
  
# Mounting FUSE filesystem
tmsu mount mount-point
{% endhighlight %} 
  
## Tricks and Tips
- [External Integration](https://github.com/oniony/TMSU/wiki/Tricks-and-Tips#external-integration)
> The versatility of TMSU means it isn't very difficult to extract tags from text files (e.g. Markdown) and feed them into TMSU, for example the following could be used to extract #tags from markdown files in the current directory and assign tags to them.

Injecting my blog tags into tmsu, usig ripgrep and [ruby one liner](2020-07-26-ruby-one-liner):
{% highlight bash %}
rg "tags:" | ruby -ne 'puts "tmsu tag \'#{$1}\' --tags=\'#{$2}\'" if $_ =~ /([^:]+):[^:]+:(.+)$/ ' | bash
{% endhighlight %}

- [Tagging a Directory and its Contents](Tagging a Directory and its Contents)

## DEV
- [\[Proposal\] Non-Sequential IDs in SQLite3 Database](https://github.com/oniony/TMSU/pull/91)
  
## Issue
### FUSE [error: Transport endpoint is not connected](https://stackoverflow.com/a/19920009/51386)
- fusermount -u YOUR_MNT_DIR
