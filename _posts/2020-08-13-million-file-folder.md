---
published: true
title: Storing a million images in the filesystem
tags: filesystem file
---
> Most of the newer systems I've worked with have pushed the file storage to the file system, and relied on databases for nothing more than indexing. File systems are designed to take that sort of abuse, they're much easier to expand, and you seldom lose the whole file system if one entry gets corrupted. - [SO](https://serverfault.com/a/95451)

> You can list a directory containing 8 million files! But not with ls. - [calls the syscall getdents directly](http://www.be-n.com/spw/you-can-list-a-million-files-in-a-directory-but-not-with-ls.html)

`ls -1f` - [avoid sort](https://news.ycombinator.com/item?id=28192332)

- [The ls command is not working for a directory with a huge number of files](https://unix.stackexchange.com/questions/120077/the-ls-command-is-not-working-for-a-directory-with-a-huge-number-of-files)
- [Storing a million images in the filesystem](https://serverfault.com/questions/95444/storing-a-million-images-in-the-filesystem#)	

If you'll put millions of files, then directory size grows up to a few megabytes in size. If you decide to clean up later, you'd probably expect the directory size to shrink. But it never happens. Unless you run fsck or re-create a directory.

That's because nobody believes the implementation effort really worth it. - [HN](https://news.ycombinator.com/item?id=28193266) 


### zfs
> files and placed them in nested directories 1/2/3/4/5/6/7/8 .. ended up having about 25 million files or so. Access to any one file with a known path was instant. Listing any directory with a known path was instant.
 in one directory. I got up to about 3.7 million files in one directory before I stopped. Listing the directory to get a count took about 5 minutes. Deleting all the files in that directory took 20 hours. But lookup and access to any file was instant. - [SO](https://serverfault.com/questions/95444/storing-a-million-images-in-the-filesystem/739017#739017)

### ext4

> Trying to store millions of files in a Ubuntu server in ext4. Ended running my own benchmarks. Found out that flat directory performs way better while being way simpler to use - [SO](https://stackoverflow.com/a/53892874)
> I found out after publishing this article, that ext4 limits is around 10,118,651 (or ~ 10,233,706) files per directory for md5 long filename. - [article](https://medium.com/@hartator/benchmark-deep-directory-structure-vs-flat-directory-structure-to-store-millions-of-files-on-ext4-cac1000ca28)

![caption](https://miro.medium.com/max/875/1*4o4TfqUH5ObSObJAGaXqLg.png) <!-- .element height="50%" width="50% ustify-content="left" -->


## [Theorical limits](https://kernelnewbies.org/Ext4#Bigger_filesystem.2Ffile_sizes) / [SE](https://serverfault.com/questions/98235/how-many-files-in-a-directory-is-too-many-downloading-data-from-net) / [SO](https://stackoverflow.com/a/466596)
- the maximum possible number of sub directories contained in a single directory in Ext3 is 32000
- Ext4 breaks that limit and allows an unlimited number of sub directories.
	- The maximum number of files is global, not per directory, and it's determined by the number of inodes allocated when the filesystem was created. [df -i](https://serverfault.com/questions/506465/is-there-a-hard-limit-to-the-number-of-files-a-directory-can-have/506471#506471)
    
{% highlight bash %}
 $ df -i | grep -v /dev/loop
    Filesystem       Inodes  IUsed    IFree IUse% Mounted on
    /dev/sdb2       7864320 388119  7476201    5% /
{% endhighlight %}
