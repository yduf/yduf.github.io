---
published: true
title: Remove comments from C/C++ code
tags: c++ codingame
---
## [SO](https://stackoverflow.com/a/2394040/51386)

{% highlight bash %}
gcc -fpreprocessed -dD -E test.c
# or
gcc -fpreprocessed -dD -E -P -o test.c.tmp test.c
{% endhighlight %}