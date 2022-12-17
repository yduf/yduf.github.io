---
published: true
title: Iterate over Dictionary (C++)
tags: c++ loop iterate dictionary tuple hash
---
{% highlight cpp %}
unordered_map<int,string> hash;
for( auto& [k,v]: hash) {         // C++17
...
}
{% endhighlight %}

[reverse](https://stackoverflow.com/a/63194931/51386)

{% highlight cpp %}
unordered_map<int,string> hash;
for( auto& [k,v]: hash | std::views::reverse) {         // C++20
...
}
{% endhighlight %}
