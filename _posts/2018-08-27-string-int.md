---
title: String Interpolation
published: true
tags: crystal ruby scala dlang string interpolation
---
### Crystal
Work alike ruby with either [#{}](https://crystal-lang.org/reference/syntax_and_semantics/literals/string.html#Interpolation)

{% highlight crystal %}
a = 1
b = 2
"sum: #{a} + #{b} = #{a + b}" # => "sum: 1 + 2 = 3"
{% endhighlight %}

 or [%{}](https://crystal-lang.org/api/0.35.1/String.html#%25%28other%29-instance-method)
 
{% highlight crystal %}
"sum: %{one} + %{two} = %{three}" % {one: 1, two: 2, three: 1 + 2} # => "sum: 1 + 2 = 3"
{% endhighlight %}



### D 
- [discussion](https://forum.dlang.org/thread/ncwpezwlgeajdrigegee@forum.dlang.org)

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

### Javascript/Typescript
[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
{% highlight typescript %}
let value = 100;
console.log(`The size is ${ value }`);
{% endhighlight %}
