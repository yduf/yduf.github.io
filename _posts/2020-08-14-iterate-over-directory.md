---
published: true
title: Iterate over directory
tags: ruby crystal filesystem file
excerpt_separator: ''
---
### Crystal
Like ruby, but each vs foreach, or does not exist,  string uses double quote (").

{% highlight crystal %}
Dir.each("/path/to/dir") {|filename|
  next if filename == "." || filename == ".."
  puts filename
  # Do work on the remaining files & directories
}
{% endhighlight %}

### [Ruby](https://stackoverflow.com/a/2512505)

{% highlight ruby %}
Dir.foreach('/path/to/dir') do |filename|
  next if filename == '.' or filename == '..'
  # Do work on the remaining files & directories
end
{% endhighlight %}
