---
published: true
title: Iterate over Hash (C++)
tags: c++ loop iterate tuple hash
---
{% highlight cpp %}
unordered_map<int,string> hash;
for( auto& [k,v]: hash) {         // C++17
...
}
{% endhighlight %}

[
{% highlight cpp %}
unordered_map<int,string> hash;
for( auto& [k,v]: hash | std::views::reverse) {         // C++20
...
}
{% endhighlight %}
](https://stackoverflow.com/a/63194931/51386)
