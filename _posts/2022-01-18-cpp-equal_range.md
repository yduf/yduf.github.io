---
published: true
title: equal_range
tags: c++ search
---
The expected behavior, does not make sense to me...

> If we search for value 4, then the result is an empty sub-range because there is no such element in the input range. In this case, the first iterator returned points to 5 because this is the first element not less than 4; the second iterator points also to the element 5 because this is the first element greater than 4.  - [Understanding equal_range](https://mariusbancila.ro/blog/2019/01/14/understanding-equal_range/)  / [cppreference.com ](https://en.cppreference.com/w/cpp/algorithm/equal_range)


{% highlight cpp %}
auto [first, last] = std::equal_range(std::cbegin(v), std::cend(v), 4);
{% endhighlight %}

![caption](https://mariusbancila.ro/blog/wp-content/uploads/2019/01/eqr3.png)

