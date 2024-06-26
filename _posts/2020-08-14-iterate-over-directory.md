---
published: true
title: Iterate over directory
tags: loop iterate filesystem file ruby crystal c++
---
### [Crystal](https://crystal-lang.org/api/0.35.1/Dir.html#each(&:String-%3E):Nil-instance-method)
Similar to ruby [Dir](https://ruby-doc.org/core-2.7.1/Dir.html).

Work with pattern scan, but currently **\*\*** not supported ⚠[recursive issue](https://github.com/crystal-lang/crystal/issues/1433)

{% highlight crystal %}
Dir["/app/**"].each {|filename|
  puts filename
}
{% endhighlight %}

### [Ruby](http://lofic.github.io/tips/ruby-recursive_globbing.html) / [SO](https://stackoverflow.com/a/20527887/51386)

{% highlight ruby %}
Dir["**/*"].each do |filename|
  puts filename
end
{% endhighlight %}

see also
- [How to list directory contents including dotfiles but not . and ..?](https://stackoverflow.com/questions/11385795/how-to-list-directory-contents-including-dotfiles-but-not-and)
- [Paths in Ruby](https://www.clairecodes.com/blog/2016-01-01-paths-in-ruby/) - for path manipulation, eg: `File.expand_path( File.join( File.dirname(__FILE__), '../other' ))` or `File.expand_path('../other', __FILE__)`

### [C++ (x17)]({% post_url 2020-09-06-filesystem-tools %})
{% highlight cpp %}
#include <filesystem>
namespace fs = std::filesystem;
 
int main() {
    for(auto& p: fs::directory_iterator("/app"))
        std::cout << p.path() << '\n';
}
{% endhighlight %}

for g++ version < 9.0 link with `-lstdc++fs` see [undefined reference when using experimental/filesystem](https://stackoverflow.com/questions/49249349/undefined-reference-when-using-experimental-filesystem)

see also
- [std::filesystem::is_directory](https://en.cppreference.com/w/cpp/filesystem/is_directory) - example of checking different filetype. There are 2 kind of api: one trigger exception, the other return an error code.