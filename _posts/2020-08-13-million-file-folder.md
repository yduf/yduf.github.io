---
published: true
title: Storing a million images in the filesystem
tags: filesystem
---
> Most of the newer systems I've worked with have pushed the file storage to the file system, and relied on databases for nothing more than indexing. File systems are designed to take that sort of abuse, they're much easier to expand, and you seldom lose the whole file system if one entry gets corrupted. - [SO](https://serverfault.com/a/95451)

> You can list a directory containing 8 million files! But not with ls. - [calls the syscall getdents directly](http://www.be-n.com/spw/you-can-list-a-million-files-in-a-directory-but-not-with-ls.html)

- [The ls command is not working for a directory with a huge number of files](https://unix.stackexchange.com/questions/120077/the-ls-command-is-not-working-for-a-directory-with-a-huge-number-of-files)

- [Storing a million images in the filesystem](https://serverfault.com/questions/95444/storing-a-million-images-in-the-filesystem#)

## [Theorical limits](https://kernelnewbies.org/Ext4#Bigger_filesystem.2Ffile_sizes) / [SE](https://serverfault.com/questions/98235/how-many-files-in-a-directory-is-too-many-downloading-data-from-net) / [SO](https://stackoverflow.com/a/466596)
- the maximum possible number of sub directories contained in a single directory in Ext3 is 32000
- Ext4 breaks that limit and allows an unlimited number of sub directories.
	- The maximum number of files is global, not per directory, and it's determined by the number of inodes allocated when the filesystem was created. [df -i](https://serverfault.com/questions/506465/is-there-a-hard-limit-to-the-number-of-files-a-directory-can-have/506471#506471)
    
{% highlight bash %}
 $ df -i | grep -v /dev/loop
    Filesystem       Inodes  IUsed    IFree IUse% Mounted on
    /dev/sdb2       7864320 388119  7476201    5% /
{% endhighlight %}

