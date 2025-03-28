---
published: true
title: Array (Ruby)
tags: ruby array
---
> [ruby-doc](https://ruby-doc.org/core-3.0.1/Array.html)

### [_it_ (Ruby 3.4)](https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/)
{% highlight ruby %}
ary = ["foo", "bar", "baz"]

p ary.map { it.upcase } #=> ["FOO", "BAR", "BAZ"]
{% endhighlight %}

it very much behaves the same as _1. When the intention is to only use _1 in a block, the potential for other numbered parameters such as _2 to also appear imposes an extra cognitive load onto readers. So it was introduced as a handy alias. Use it in simple cases where it speaks for itself, such as in one-line blocks.


### [First and Rest in Ruby](https://avdi.codes/first-and-rest-in-ruby/)
{% highlight ruby %}
many = [0,1,2,3,4]
first, rest = many.first, many[1..-1]
{% endhighlight %}

### [splat operator](https://ruby-doc.org/core-2.0.0/doc/syntax/calling_methods_rdoc.html#label-Array+to+Arguments+Conversion)

turn an Array into an argument list

{% highlight ruby %}
arguments = [2, 3]
my_method(1, *arguments)
# equivalent to 
my_method(1, 2, 3)
{% endhighlight %}

the inverse is to gather arguments as if they were in an array

{% highlight ruby %}
def my_method(*a, **kw)
  p arguments: a, keywords: kw
end
{% endhighlight %}

### [Splitting an array into equal parts in ruby](https://exceptionshub.com/splitting-an-array-into-equal-parts-in-ruby.html)

{% highlight ruby %}
a = [0, 1, 2, 3, 4, 5, 6, 7]
a.each_slice(3) # => #<Enumerator: [0, 1, 2, 3, 4, 5, 6, 7]:each_slice(3)>
a.each_slice(3).to_a # => [[0, 1, 2], [3, 4, 5], [6, 7]
{% endhighlight %}

- [How to map/collect with index in Ruby?](https://stackoverflow.com/questions/4697557/how-to-map-collect-with-index-in-ruby) 
`arr.each_with_index.map { |x,i| [x, i+2] }`
or  
`[:a, :b, :c].map.with_index(2).to_a` #=> [[:a, 2], [:b, 3], [:c, 4]]

see also
- [Console table format in ruby](https://stackoverflow.com/questions/36156305/console-table-format-in-ruby)
	- [ConsoleTable](https://github.com/rodhilton/console_table?tab=readme-ov-file#consoletable--) - a helper class that allows you to print data to a console in a clean, table-like fashion.
- [String litterals]({% post_url 2019-02-19-ruby-string %})
- [How to Iterate the Right Way]({% post_url 2019-03-30-ruby-iterate %})
- [Shortest code](2019-05-29-short-code-ruby)
