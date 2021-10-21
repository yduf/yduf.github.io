---
published: true
title: Find duplicate
tags: find duplicate file photo image
---
{% highlight bash %}
rdfind /mnt/Photo 		# look for duplicate and store the one found in results.txt
{% endhighlight %}

## [rdfind](https://rdfind.pauldreik.se/) / [github](https://github.com/pauldreik/rdfind)

[**Avoid manipulating the directories while rdfind is reading.**](https://rdfind.pauldreik.se/rdfind.1.html)

It does not follow symlink by default. 
It generate absolute path for symlink => see [symlink]({% post_url 2021-10-18-symlink %}) to transform them

**-makesymlinks true** replace duplicates with a symbolic link to the original. Exit.
{% highlight bash %}
rdfind -makesymlinks true /mnt/Photo
{% endhighlight %}

**-makehardlinks true** replace duplicates with a hard link to the original. Exit.
**-deleteduplicates true** delete (unlink) duplicate files. Exit.


## [fdupes](https://github.com/adrianlopezroche/fdupes)
- confusing options..

## [Duff](http://duff.dreda.org/)
- only scan ?

# With GUI

## FSLint
