---
published: true
title: Iterate over directory
tags: ruby crystal filesystem file
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

### [C++](https://en.cppreference.com/w/cpp/filesystem/directory_iterator)
{% highlight cpp %}
#include <filesystem>
namespace fs = std::filesystem;
 
int main()
{
    for(auto& p: fs::directory_iterator("/app"))
        std::cout << p.path() << '\n';
}
{% endhighlight %}