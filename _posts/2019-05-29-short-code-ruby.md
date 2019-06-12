---
title: Shortest code (Ruby)
published: true
tags: ruby codingame
---
## Tips
### Read inputs
{% highlight ruby %}
a,b,c=gets.split.map(&:to_i

msg = "Tiam his  message"
msg.chomp.split.to_s            # => ["Tiam", "his", "message"]
msg.chomp.split(/\s/).to_s		# => ["Tiam", "his", "", "message"]
{% endhighlight %}

### Iterate on String
{% highlight ruby %}
"input".each_char { |c| puts c }
{% endhighlight %}

### [Array from range](https://stackoverflow.com/questions/191329/correct-way-to-populate-an-array-with-a-range-in-ruby/6587096#6587096)
{% highlight ruby %}
a=*(1..10) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

### p (puts)
