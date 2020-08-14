---
published: true
title: Iterate over directory
tags: ruby crystal filesystem file
excerpt_separator: ''
---
### [Crystal](https://crystal-lang.org/api/0.35.1/Dir.html#each(&:String-%3E):Nil-instance-method)
Similar to ruby [Dir](https://ruby-doc.org/core-2.7.1/Dir.html).

Work with pattern scan, but currently **\*\*** not supported ⚠[recursive issue](https://github.com/crystal-lang/crystal/issues/1433)

{% highlight crystal %}
Dir["/app/**"].each {|filename|
  puts filename
}
{% endhighlight %}

### [Ruby](https://stackoverflow.com/a/20527887/51386)

{% highlight ruby %}
Dir["/app/**"].each do |filename|
  puts filename
end
{% endhighlight %}
