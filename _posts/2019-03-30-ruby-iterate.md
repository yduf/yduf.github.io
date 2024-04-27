---
published: true
title: How to Iterate the Right Way
tags: ruby loop iterate string
---
> If any of you have written code in the last year that had an explicit loop […], you don’t understand collections. [David West](http://jeromedalbert.com/ruby-how-to-iterate-the-right-way/).

see also
- [Ruby vs Python comes down to the for loop](https://softwaredoug.com/blog/2021/11/12/ruby-vs-python-for-loop.html) / [HN](https://news.ycombinator.com/item?id=40111184) - Ruby inherits it's approach to flow control from Smalltalk, while Python comes from a C/Algol-like heritage.
	- [HN](https://news.ycombinator.com/item?id=40111383) - Once you implement `each`, `include Enumerable` is all it takes to get the full set of collection methods (including `max`/`min` etc, if the entries define `<=>`). 
- [	No Stinking Loops](https://news.ycombinator.com/item?id=38663619) - The K language provides constructs like each, over, and scan to perform what would be looping behavior in other languages.

## [see also Enumerable](http://ruby-doc.org/core-2.6.3/Enumerable.html)
- [none?](http://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-none-3F), [any?](http://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-any-3F), [one?](http://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-one-3F),  [all?](http://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-all-3F)
- [include?](http://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-include-3F)
- min_by, max_by, sort_by
- filter, reject, select


As a side note... 
## [negative loop in ruby](https://stackoverflow.com/questions/8926477/how-to-write-negative-loop-in-ruby-like-fori-index-i-0-i)

[range 10..1 is not usable](https://stackoverflow.com/questions/7705141/why-doesnt-backward-for-loop-work-in-ruby-eg-for-i-in-10-1#7705159)

{% highlight ruby %}
for i in 10.downto 0
  puts i
end

or

10.step(0, -1){ |i| puts i}

or

10.downto 0 do |i|
  puts i
end
{% endhighlight %}


### Natural forward loop
{% highlight ruby %}
for i in 1..10
  ...
end
{% endhighlight %}

### Iterate on string
{% highlight ruby %}
"input".each_char { |c| ... }
"input".chars.map { |c| ... }
"input".chars.each_with_index { |c,i| ... }
"input".bytes     { |c| ... }
{% endhighlight %}
