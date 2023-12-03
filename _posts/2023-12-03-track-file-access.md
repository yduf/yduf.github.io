---
published: true
title: Track all files accessed
tags: trace
---
>  [SO](https://stackoverflow.com/questions/27428150/linux-how-to-track-all-files-accessed-by-a-process)

Using strace 
{% highlight bash %}
# -f => --follow-forks
# -t => --absolute-timestamps
# -e trace=file => filters only for syscalls that access the filesystem
# -o file => write trace to file rather than to stderror
strace -f -t -e trace=file --output-separately -o stracelog
{% endhighlight %}