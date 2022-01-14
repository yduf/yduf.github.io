---
published: true
title: LD_LIBRARY_PATH & ldconfig
tags: linker lib
---
> Libraries in /usr/local/lib not found - [SO](https://stackoverflow.com/questions/17889799/libraries-in-usr-local-lib-not-found)

Pick one or the other

- add the path to the `LD_LIBRARY_PATH`
{% highlight bash %}
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/lib"
{% endhighlight %}

- update the configuration file of the runtime linker
{% highlight bash %}
# add to /etc/ld.so.conf.d/usr_local_lib.conf
/usr/local/lib

# and then run
ldconfig
{% endhighlight %}