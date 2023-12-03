---
published: true
title: Track all files accessed
tags: file trace
---
>  [SO](https://stackoverflow.com/questions/27428150/linux-how-to-track-all-files-accessed-by-a-process)

Using strace 
{% highlight bash %}
# -f => --follow-forks
# -t => --absolute-timestamps
# -e trace=file => filters only for syscalls that access the filesystem
# -o file => write trace to file rather than to stderror
strace -f -t -e trace=file -o stracelog <your command here>
{% endhighlight %}

### [How can I determine what process has a file open in Linux?](https://superuser.com/questions/97844/how-can-i-determine-what-process-has-a-file-open-in-linux)

use lsof or fuser
  
{% highlight bash %}
$ lsof /home/fin
COMMAND   PID USER   FD   TYPE DEVICE SIZE    NODE NAME
bash    21310  fin  cwd    DIR    8,1 4096 5054467 /home/fin
lsof    21320  fin  cwd    DIR    8,1 4096 5054467 /home/fin
lsof    21321  fin  cwd    DIR    8,1 4096 5054467 /home/fin
{% endhighlight %}
