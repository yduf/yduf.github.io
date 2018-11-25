---
published: true
title: Multiple return values (C++17)
tags: c++
---
## [Example](https://stackoverflow.com/questions/38385451/multiple-return-values-structured-bindings-with-unmovable-types-and-guaranteed#38385654):
{% highlight cpp %}
struct S { int i; unique_ptr<widget> w; };
S f() { return {0, make_unique<widget>()}; }
auto [ my_i, my_w ] = f();
{% endhighlight %}
