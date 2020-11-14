---
published: true
title: Vector with Incomplete type (C++)
tags: c++ tree
---
{% highlight cpp %}
#include <vector>
struct S {
    std::vector<S> v;
};

int main() { S s; }
{% endhighlight %}

see [boost](https://www.boost.org/doc/libs/1_54_0/doc/html/container/containers_of_incomplete_types.html)
