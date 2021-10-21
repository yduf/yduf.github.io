---
published: true
title: Find duplicate
tags: find duplicate file photo image
---
{% highlight bash %}
rdfind /mnt/Photo 		# look for duplicate and store the one found in results.txt
{% endhighlight %}

## [rdfind](https://rdfind.pauldreik.se/) / [github](https://github.com/pauldreik/rdfind)

It does not follow link symlink by default. 
It generate absolute path for symlink => see [symlink]({% post_url 2021-10-18-symlink %}) to transform them

- If flag ”-makeresultsfile true”, then print results file (default).
- If flag ”-deleteduplicates true”, then delete (unlink) duplicate files. Exit.
- If flag ”-makesymlinks true”, then replace duplicates with a symbolic link to the original. Exit.
- If flag ”-makehardlinks true”, then replace duplicates with a hard link to the original. Exit.


## [fdupes](https://github.com/adrianlopezroche/fdupes)
- confusing options..

## [Duff](http://duff.dreda.org/)
- only scan ?

# With GUI

## FSLint
