---
published: true
title: Incomplete type (c++)
tags: c++
---
## [From boost](https://www.boost.org/doc/libs/1_54_0/doc/html/container/containers_of_incomplete_types.html)

{% highlight cpp %}
#include <vector>
struct S {
    std::vector<S> v;
};
int main() { S s; }
{% endhighlight %}

The reason it works is because the template is evaluated only after the complete type is seen, and a variable of that type is declared outside its own definition. Not while it is being defined
