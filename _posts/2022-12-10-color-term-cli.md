---
published: true
title: Simple Colored output (term)
tags: c++ ruby color term cli
---
> Berlin and Kay found that, in languages with fewer than the maximum eleven color categories, the colors followed a specific evolutionary pattern. - Using terminal color code

## [List of ANSI color escape sequences](https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences)

### [Ruby](https://stackoverflow.com/questions/1489183/how-can-i-use-ruby-to-colorize-the-text-output-to-a-terminal/16363159#16363159)

{% highlight ruby %}
## 24 grey level
(232..255).each { |l| 
    print "\033[48;5;#{l}m  "
}
puts "done"
{% endhighlight %}


### [C++](https://stackoverflow.com/questions/9158150/colored-output-in-c)


[![caption](https://i.stack.imgur.com/KTSQa.png)](https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences)
