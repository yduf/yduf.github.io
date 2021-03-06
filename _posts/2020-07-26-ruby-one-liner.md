---
published: true
title: Ruby one liner
tags: cli ruby
---
> The -n flag wraps your executed one-liner in an implicit while gets ... end block. When you combine this with the usage of Ruby’s special global variable $_, which stores the result of the most recent Kernel.gets command, you can do some nice (and readable) file processing! - [Smooth Ruby One-Liners](https://www.assertnotmagic.com/2017/10/05/smooth-one-liners/)

{% highlight bash %}
at /usr/shar/dict/words | ruby -ne 'printf("%-6s %s", $., $_)'
{% endhighlight %}

- [Ben does it in software](https://benoithamelin.tumblr.com/ruby1line)
- [Ruby one liners](https://github.com/learnbyexample/Command-line-text-processing/blob/master/ruby_one_liners.md)
- [Ruby one-liners for file manipulations ](https://www.bounga.org/ruby/2020/04/05/ruby-one-liners-for-file-manipulatiions/)
