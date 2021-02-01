---
published: true
title: Iterate over Hash (C++)
tags: c++ loop iterate tuple hash
excerpt_separator: ''
---
## C++17

{% highlight cpp %}
unordered_map<int,string> hash;
for( auto& [k,v]: hash) {
...
}
{% endhighlight %}
