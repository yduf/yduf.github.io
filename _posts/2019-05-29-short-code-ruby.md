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
# this may be equivalent
$<.read.split("\n")
$<.read.split.drop(1) #eg: to eliminate size given

# read full input
gets('')
pp $_
{% endhighlight %}

see also
- [Pre-defined global variables](https://rubyreferences.github.io/rubyref/language/globals.html)
- [pseudo-variables](https://www.zenspider.com/ruby/quickref.html#pseudo-variables)
- [Get substring after the first = symbol in Ruby](https://stackoverflow.com/questions/14073743/get-substring-after-the-first-symbol-in-ruby)

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

### [Iterate on String]({% post_url 2019-03-30-ruby-iterate %}#iterate-on-string)
{% highlight ruby %}
"input".bytes     { |c| puts c }
"input".each_char { |c| puts c }
"input".chars.map { |c| puts c }	# => "input".split('').map

# not short but usefull
str.each_char.with_index { |c,i| puts c,i }
{% endhighlight %}

### [All prefix of a string](https://stackoverflow.com/a/18078171/51386)

{% highlight ruby %}
acc = ''
str.chars.map {|c| acc += c }
{% endhighlight %}

### [Formatting](https://www.rubyguides.com/2012/01/ruby-string-formatting/) using [String.format]({% post_url 2018-08-27-string-int %}#ruby) / [sprintf](https://ruby-doc.org/core-2.0.0/Kernel.html#method-i-sprintf)
{% highlight ruby %}
puts "%0.1f %s" % [a,b]
{% endhighlight %}

### [Hex/Binary conversion](https://docs.ruby-lang.org/en/3.0/String.html#method-i-hex)
{% highlight ruby %}
puts "%x" % 10 # a
puts "%X" % 10 # A
puts "%#x" % 10 # 0ba , probleme 0 => gives 0 and not 0x0

"0x0a".hex  # => 10

{% endhighlight %}

### [String Litteral](https://docs.ruby-lang.org/en/master/syntax/literals_rdoc.html#label-String+Literals)
{% highlight ruby %}
?[          # => "["
{% endhighlight %}

### [Character values to Strings](https://makandracards.com/makandra/40838-ruby-converting-utf-8-codepoints-to-characters) && [SO](https://stackoverflow.com/questions/143822/ruby-character-to-ascii-from-a-string)
{% highlight ruby %}
116.chr          # => "t"
[116].pack('U*') # => "t"

"t".ord          # => 116
"t".unpack('U*') # => [106]

"string".bytes   # =>  "string".chars.map(&:ord)
{% endhighlight %}

## [Array]({% post_url 2021-10-09-ruby-array %}) / [Ruby-doc](https://ruby-doc.org/core-3.0.1/Array.html) / [Hash](https://ruby-doc.org/core-3.1.2/Hash.html)
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

## [On Looping](https://codegolf.stackexchange.com/a/156957/119077)
### Apply method on each element
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

### [Word count](https://stackoverflow.com/a/56673994/51386) with [Enumerable.tally](https://ruby-doc.org/core-3.1.2/Enumerable.html#method-i-tally)
{% highlight ruby %}
["a", "b", "c", "b"].tally #=> {"a"=>1, "b"=>2, "c"=>1}
{% endhighlight %}

### [p vs puts](https://www.rubyguides.com/2018/10/puts-vs-print/)

### [call lambda](https://stackoverflow.com/a/19416173/51386)
{% highlight ruby %}
fact = -> (x){ x < 2 ? 1 : x*fact.(x-1)}

p fact.call(5)
p fact.(5)
p fact[5]
{% endhighlight %}

see also
- [eonu/ruby-golf ](https://github.com/eonu/ruby-golf)
- [Tips for golfing in Ruby](https://codegolf.stackexchange.com/questions/363/tips-for-golfing-in-ruby)
- [Code Golf tips of ruby](https://github.com/siman-man/ruby-golf-style-guide)
- [ruby-codegolf](https://ruby-codegolf.netlify.app/others.html)
- [Ruby - code-golf/code-golf GitHub Wiki](https://github-wiki-see.page/m/code-golf/code-golf/wiki/Ruby) -  char packer trick - But doesn't work with Codingame which count bytes

Example
- [Prefix Tree Traversal](https://codegolf.stackexchange.com/questions/54733/prefix-tree-traversal)
- [Sum positive number](https://www.ruby-forum.com/t/shortest-code/184803)
- [Make an alphabeTrie](https://codegolf.stackexchange.com/questions/170580/make-an-alphabetrie)
