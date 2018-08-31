---
published: true
title: Read/Write File in Ruby
tags: file ruby
---
Simplest form of [Read](https://stackoverflow.com/a/5545293/51386) / [Write](https://stackoverflow.com/a/19337403/51386) for a file in Ruby:

{% highlight ruby %}
puts File.read(file_name)
{% endhighlight %}

{% highlight ruby %}
File.write('/path/to/file', 'Some glorious content')
{% endhighlight %}
