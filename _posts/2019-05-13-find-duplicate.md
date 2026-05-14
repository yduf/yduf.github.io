---
published: true
title: Find duplicate ⧉
tags: backup find duplicate file photo image project
toc: true
---
> Finding Duplicate / [checking backup coverage](https://chatgpt.com/share/6a05aaf6-77e4-83eb-8f5a-bbded9ba6978)

[![Czkawka](https://user-images.githubusercontent.com/41945903/102616149-66490400-4137-11eb-9cd6-813b2b070834.png)](https://github.com/qarmin/czkawka#features)

# Project 💭 
Make a tool dedicated to find if a file or folder is archived on a backupp drive, based
on content not folder structure.

# [Krokiet / Czkawka ⮺](https://github.com/qarmin/czkawka#features)

- [Comparing Folder](https://chatgpt.com/share/6a05aae9-0e90-83eb-82f5-4aef4673646d)

{% highlight bash %}
$ SLINT_BACKEND=winit-software \
         SLINT_RENDERER=software \
         ./linux_krokiet_all_backends_x86_64
{% endhighlight %}


{% highlight bash %}
rdfind /mnt/Photo 		# look for duplicate and store the one found in results.txt
{% endhighlight %}

# [rdfind ⮺](https://rdfind.pauldreik.se/) / [github](https://github.com/pauldreik/rdfind)

[**Avoid manipulating the directories while rdfind is reading.**](https://rdfind.pauldreik.se/rdfind.1.html)

It does not follow symlink by default. 
It generate absolute path for symlink => see [symlink]({% post_url 2021-10-18-symlink %}) to transform them

**-makesymlinks true** replace duplicates with a symbolic link to the original. Exit.
{% highlight bash %}
rdfind -makesymlinks true /mnt/Photo
{% endhighlight %}

**-makehardlinks true** replace duplicates with a hard link to the original. Exit.
**-deleteduplicates true** delete (unlink) duplicate files. Exit.


# [fdupes ⮺](https://github.com/adrianlopezroche/fdupes)
- confusing options..

# [Duff ⮺](http://duff.dreda.org/)
- only scan ?

# With GUI

## FSLint
