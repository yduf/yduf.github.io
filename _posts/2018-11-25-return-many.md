---
published: false
---
{% highlight cpp %}
struct S { int i; unique_ptr<widget> w; };
S f() { return {0, make_unique<widget>()}; }
auto [ my_i, my_w ] = f();
{% endhighlight %}
