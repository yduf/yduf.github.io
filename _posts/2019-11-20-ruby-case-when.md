---
published: true
title: swith/case statement
tags: ruby
---
> `case x` - [Advanced techniques](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/)

- `when String` - [matching object class](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/#matching-ranges-in-case-statements)  
- `when (1..10)` -  [matching ranges](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/#matching-ranges-in-case-statements)
- `when /BAR$/` - [matching regular expressions](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/#matching-regular-expressions-with-case-statements)
- `when -> (n) { n.to_s == "40" }` - [Matching procs and lambdas](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/#matching-procs-and-lambdas)
- `when Success` - [Writing your own matcher classes](https://www.honeybadger.io/blog/rubys-case-statement-advanced-techniques/#writing-your-own-matcher-classes)

simple as defining your own === method
{% highlight  ruby %}
class Success
  def self.===(item)
    item.status >= 200 && item.status < 300
  end
end
{% endhighlight %}