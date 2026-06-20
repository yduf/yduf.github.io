---
layout: post
title: Keyword (C++)
tags: c++ keyword
---
> Faking keyword arguments to functions in C++ - [blog](https://nibblestew.blogspot.com/2026/06/faking-keyword-arguments-to-functions.html) / [HN](https://news.ycombinator.com/item?id=48459999)

The add_argument method takes a single argument which is a struct. The extra curly braces inside the parentheses boil down to "whatever the underlying argument is, construct it in place with these parameters". The dotted names are designated initializers, so those fields get the specified value whereas other fields get their default values.

{% highlight c++ %}
parser.add_argument({.name{"size"},.other{true}});
{% endhighlight %}
