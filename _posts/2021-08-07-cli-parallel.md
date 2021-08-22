---
published: true
title: Parallel (xargs alt)
tags: parallelism
---
> [GNU Parallel](https://www.gnu.org/software/parallel/man.html) was designed by keeping [xargs](https://news.ycombinator.com/item?id=28258189) in mind, so majority of the command line options and parameters might match with xargs command. - [How To Run Multiple Commands In Parallel on Linux](https://www.slashroot.in/how-run-multiple-commands-parallel-linux)

- [Sem](https://www.gnu.org/software/parallel/sem.html) - semaphore for executing shell command lines in parallel

## Passing arguments
**By Default parallel convert STDOUT args to ARGV**

{% highlight bash %}
$ ls -1 | parallel echo
{% endhighlight %}

Using [`--pipe`](http://www.gnu.org/software/parallel/parallel_tutorial.html#pipe) Instead of treating the data on stdin (standard input) as arguments for a command to run, the data will be sent to stdin (standard input) of the command. - [Spreading block of data](http://www.gnu.org/software/parallel/parallel.html#spreading-blocks-of-data)

{% highlight bash %}
$ command_A | parallel --pipe command_B | command_C
{% endhighlight %}

## [Parallel vs X](https://www.gnu.org/software/parallel/parallel_alternatives.html#)
- [parallel vs xargs](https://unix.stackexchange.com/questions/104778/gnu-parallel-vs-i-mean-background-vs-xargs-p/104798#104798)
	- xargs deals badly with special characters (such as space, ' and ").
    - xargs can run a given number of jobs in parallel, but has no support for running number-of-cpu-cores jobs in parallel.
    - xargs has no support for grouping the output, therefore output may run together, e.g. the first half of a line is from one process and the last half of the line is from another process. 
    - xargs has no support for keeping the order of the output, therefore if running jobs in parallel using xargs the output of the second job cannot be postponed till the first job is done.
    - xargs has no support for running jobs on remote computers.
    - xargs has no support for context replace, so you will have to create the arguments.

## [Install](https://stackoverflow.com/questions/39757941/how-to-install-or-switch-to-older-version-of-gnu-parallel)

replace [20160922](http://mirror.ibcp.fr/pub/gnu/parallel/) with the version you want:

{% highlight bash %}
wget http://ftpmirror.gnu.org/parallel/parallel-20160922.tar.bz2
bzip2 -dc parallel-*.tar.bz2 | tar xvf -
cd parallel-*
./configure && make && sudo make install
{% endhighlight %}
