---
title: Vector (C++)
published: true
tags: c++ vector array
---
> [cppreference](https://en.cppreference.com/w/cpp/container/vector.html)

### [intializer list](https://chatgpt.com/share/686a453b-7468-800d-b304-eca61633337b)

{% highlight cpp %}
#include <initializer_list>

struct Bucket {
  vector<float> boundaries;

  Bucket(std::initializer_list<float>&& edges):
    boundaries( edges)
  {}
};

// And then, you can pass list like that:
Bucket({ -40, -35, -30, -25, -20, -15, -10, -5, -3, 0, +10 };

{% endhighlight %}