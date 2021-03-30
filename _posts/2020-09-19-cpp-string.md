---
published: true
title: String (c++)
tags: c++ string
---
> Can a std::string contain embedded nulls? - [yes](https://stackoverflow.com/questions/2845769/can-a-stdstring-contain-embedded-nulls)

{% highlight cpp %}
std::string("\0world", 6);
s.append("\0world", 6);
{% endhighlight %}
