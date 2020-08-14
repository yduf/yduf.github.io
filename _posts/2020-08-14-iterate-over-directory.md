---
published: true
title: Iterate over directory
tags: ruby crystal filesystem file
excerpt_separator: ''
---
### [Crystal](https://crystal-lang.org/api/0.35.1/Dir.html#each(&:String-%3E):Nil-instance-method)
Like ruby, but each_child vs foreach+next(.,..), or does not exist,  string uses double quote (").

{% highlight crystal %}
Dir.each_child("/path/to/dir") {|filename|
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
