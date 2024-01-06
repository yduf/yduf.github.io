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

`struct S : std::vector<S> {};` would work as well.
  
### see also 
- [boost](https://www.boost.org/doc/libs/1_54_0/doc/html/container/containers_of_incomplete_types.html)
- [My favourite memory leak](https://www.youtube.com/watch?v=LKKmPAQFNgE) - beware of swapping self referring vector
