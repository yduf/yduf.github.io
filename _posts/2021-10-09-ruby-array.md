---
published: true
title: Array (Ruby)
tags: ruby array
---
> [ruby-doc](https://ruby-doc.org/core-3.0.1/Array.html)

### [splat operator](https://ruby-doc.org/core-2.0.0/doc/syntax/calling_methods_rdoc.html#label-Array+to+Arguments+Conversion)

turn an Array into an argument list

{% highlight ruby %}
arguments = [2, 3]
my_method(1, *arguments)
# equivalent to 
my_method(1, 2, 3)
{% endhighlight %}


### [Splitting an array into equal parts in ruby](https://exceptionshub.com/splitting-an-array-into-equal-parts-in-ruby.html)

{% highlight ruby %}
a = [0, 1, 2, 3, 4, 5, 6, 7]
a.each_slice(3) # => #<Enumerator: [0, 1, 2, 3, 4, 5, 6, 7]:each_slice(3)>
a.each_slice(3).to_a # => [[0, 1, 2], [3, 4, 5], [6, 7]
{% endhighlight %}

see also
- [String litterals]({% post_url 2019-02-19-ruby-string %})
- [How to Iterate the Right Way]({% post_url 2019-03-30-ruby-iterate %})
- [Shortest code](2019-05-29-short-code-ruby)
