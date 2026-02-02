---
title: Vector (C++)
published: true
tags: c++ vector array
---
> [cppreference](https://en.cppreference.com/w/cpp/container/vector.html)

**see also**
- [semistable vector](https://github.com/joaquintides/semistable_vector?tab=readme-ov-file#a-proof-of-concept-of-a-semistable-vector-container)
- [The magic container](https://www.youtube.com/watch?v=L4xOCvELWlU) - Data + Index + reverse index

### [intializer list](https://chatgpt.com/share/686a453b-7468-800d-b304-eca61633337b) / [ref](https://en.cppreference.com/w/cpp/utility/initializer_list.html)

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
