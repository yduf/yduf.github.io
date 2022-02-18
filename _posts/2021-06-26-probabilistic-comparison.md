---
published: true
title: Probabilistic Comparison
tags: algorithm hash math probability
---
> You can probabilistically compare two unsorted vectors (u,v) in O(n) - [SO](https://stackoverflow.com/a/17394863/51386)

{% highlight cpp %}
U= xor(h(u[0]), h(u[1]), ..., h(u[n-1]))
V= xor(h(v[0]), h(v[1]), ..., h(v[n-1]))
{% endhighlight %}

If U==V then the vectors are probably equal.
h(x) is any [non-cryptographic hash function](https://en.wikipedia.org/wiki/List_of_hash_functions#Non-cryptographic_hash_functions).
