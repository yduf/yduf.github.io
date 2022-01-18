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

What I would expect is more something in the line of [this](https://stackoverflow.com/a/28405093/51386):
> if you want the closest entry, you need to check both the returned entry and the one before and compare the differences.

which should translate to this:
{% highlight cpp %}
template<class T>
auto bound( int pos, map<int,T>& m) {

  auto lb = m.lower_bound( pos );
  std::pair<typename map<int,T>::iterator, typename map<int,T>::iterator> res;
  res.first = lb;
  res.second = lb;

  if( lb == m.end() && m.size() > 0) {
    // not found, we want to have the last element
    res.first = std::prev( m.end());
  } else if (lb == m.begin()) {
    // or first element
  } else {
    if (lb->first == pos)
      // value found in map
      ;
    else {
      // value not found in map, we want it to be bounded by existing value
        res.first = std::prev(lb);
    }
  }

  return res;
}
{% endhighlight %}

