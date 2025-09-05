---
title: String Interpolation
published: true
tags: crystal ruby scala dlang string interpolation
---
> or variable binding

### [C++20](https://stackoverflow.com/questions/63121776/simplest-syntax-for-string-interpolation-in-c)
via std::format

### Crystal
Work alike ruby with either [#{}](https://crystal-lang.org/reference/syntax_and_semantics/literals/string.html#Interpolation)

{% highlight crystal %}
a = 1
b = 2
"sum: #{a} + #{b} = #{a + b}" # => "sum: 1 + 2 = 3"
{% endhighlight %}

 or [%{}](https://crystal-lang.org/api/0.35.1/String.html#%25%28other%29-instance-method) (native similar to Mustache).
 
{% highlight crystal %}
"sum: %{one} + %{two} = %{three}" % {one: 1, two: 2, three: 1 + 2} # => "sum: 1 + 2 = 3"
{% endhighlight %}

### D 
- [discussion](https://forum.dlang.org/thread/ncwpezwlgeajdrigegee@forum.dlang.org)

## [Lua](https://chatgpt.com/share/68bae107-7690-800d-9d42-e64a66e46792)
Lua doesn’t have built-in string interpolation

### Using string.format (most common way)
{% highlight ruby %}
local name = "Alice"
local age = 25

local msg = string.format("My name is %s and I am %d years old.", name, age)
print(msg)
{% endhighlight %}

### Using concatenation (..)
{% highlight ruby %}
name = "James"
puts "Hello, #{name}"  // Hello, James
{% endhighlight %}

### Custom interpolation function
{% highlight ruby %}
function interpolate(str, vars)
    return (str:gsub("($%b{})", function(w)
        return vars[w:sub(3, -2)] or w
    end))
end

local name, age = "Alice", 25
local msg = interpolate("My name is ${name} and I am ${age} years old.", {name=name, age=age})
print(msg)
{% endhighlight %}

### Ruby
- [Within string literral](http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html)
{% highlight ruby %}
name = "James"
puts "Hello, #{name}"  // Hello, James
{% endhighlight %}

- [On data read from a file](https://stackoverflow.com/questions/346380/in-ruby-can-you-perform-string-interpolation-on-data-read-from-a-file/6526209#6526209) -  (native similar to Mustache).
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

### [Javascript/Typescript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
{% highlight typescript %}
let value = 100;
console.log(`The size is ${ value }`);
{% endhighlight %}


### [m4]({% post_url 2019-02-27-m4 %})

### [maven](https://maven.apache.org/plugins/maven-resources-plugin/)

- parameter expansion -> see maven filtering

### [{{Mustache}} templates](http://mustache.github.io/)
- [mustache.js](https://github.com/janl/mustache.js)
