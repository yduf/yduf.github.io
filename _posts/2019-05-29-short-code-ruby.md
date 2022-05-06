---
title: Shortest code (Ruby)
published: true
tags: ruby codingame string array
---
## Tips
### Read inputs
{% highlight ruby %}
a,b,c=gets.split.map(&:to_i)

STDIN.read.split("\n") #read until EOF rather than iterate
{% endhighlight %}

## [String](https://ruby-doc.org/core-3.0.1/String.html)
### [Split string but keep multiple whitespace](https://stackoverflow.com/questions/46135748/ruby-split-string-but-keep-multiple-whitespace)
{% highlight ruby %}
msg = "Tiam his  message"
msg.chomp.split.to_s            # => ["Tiam", "his", "message"]
msg.chomp.split(/\s/).to_s		# => ["Tiam", "his", "", "message"]
{% endhighlight %}

### [Remove multiple spaces and new lines inside of String](https://stackoverflow.com/questions/7106964/remove-multiple-spaces-and-new-lines-inside-of-string)
{% highlight ruby %}
s = "Hello, my\n       name is Michael."
s.split.join(' ') #=> "Hello, my name is Michael."
{% endhighlight %}

### Iterate on String
{% highlight ruby %}
"input".chars.map { |c| puts c }	# => "input".split('').map
"input".each_char { |c| puts c }

# not short but usefull
str.each_char.with_index { |c,i| puts c,i }
{% endhighlight %}

### [Character values to Strings](https://makandracards.com/makandra/40838-ruby-converting-utf-8-codepoints-to-characters) && [SO](https://stackoverflow.com/questions/143822/ruby-character-to-ascii-from-a-string)
{% highlight ruby %}
116.chr          # => "t"
[116].pack('U*') # => "t"

"t".ord          # => 116
"t".unpack('U*') # => [106]

"string".bytes   # =>  "string".chars.map(&:ord)
{% endhighlight %}

## [Array](https://ruby-doc.org/core-3.0.1/Array.html)
### [Array from range](https://stackoverflow.com/questions/191329/correct-way-to-populate-an-array-with-a-range-in-ruby/6587096#6587096)
{% highlight ruby %}
*(1..10)         # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[*1..3, *?a..?c] # => [1, 2, 3, "a", "b", "c"]
{% endhighlight %}

### [Filter nil](https://stackoverflow.com/a/13485482/51386)
{% highlight ruby %}
[1, nil, 3, nil, nil].compact => [1, 3] 
{% endhighlight %}

### [Reverse Sort](https://stackoverflow.com/a/13222883/51386)
{% highlight ruby %}
a = ["test", "test2", "s"]
a.sort_by!{|str| str.length}.reverse!

a.sort_by! { |s| -s.length } # shorter
{% endhighlight %}

### Apply method on each elment
{% highlight ruby %}
array.map!(&:to_i)
{% endhighlight %}

### [inject operation](https://stackoverflow.com/questions/1538789/how-to-sum-array-of-numbers-in-ruby/1538801#1538801)
{% highlight ruby %}
array.reduce(:+)		# or inject (alias)
{% endhighlight %}

### [sum](https://stackoverflow.com/questions/1538789/how-to-sum-array-of-numbers-in-ruby/1539643#1539643)
{% highlight ruby %}
[1, 2, 3, 4].sum
{% endhighlight %}

### [repeating text](https://stackoverflow.com/a/2297020/51386)
{% highlight ruby %}
"0" * 99
{% endhighlight %}

### [Word count](https://stackoverflow.com/a/56673994/51386)
{% highlight ruby %}
["a", "b", "c", "b"].tally #=> {"a"=>1, "b"=>2, "c"=>1}
{% endhighlight %}

### p (puts)
