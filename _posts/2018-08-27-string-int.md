---
title: String Interpolation
published: true
tags: ruby scala string interpolation
---
### Ruby
- [Within string literral](http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html)
{% highlight ruby %}
name = "James"
puts "Hello, #{name}"  // Hello, James
{% endhighlight %}

- [On data read from a file](https://stackoverflow.com/questions/346380/in-ruby-can-you-perform-string-interpolation-on-data-read-from-a-file/6526209#6526209)
{% highlight ruby %}
vars = { name: "James"}
mystring = "Hello, %{name}"  // content of file, using %{} tags

mystring % vars              // => Hello, James, == string.format
{% endhighlight %}


### Scala

- [à la Ruby (scala 2.10)](https://docs.scala-lang.org/overviews/core/string-interpolation.html)
{% highlight scala %}
val name = "James"
println(s"Hello, $name")  // Hello, James
{% endhighlight %}

### D 
- [discussion](https://forum.dlang.org/thread/ncwpezwlgeajdrigegee@forum.dlang.org)
