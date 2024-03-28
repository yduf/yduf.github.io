---
published: true
title: String litterals (c++)
tags: c++ string
---
> Can a std::string contain embedded nulls? - [yes](https://stackoverflow.com/questions/2845769/can-a-stdstring-contain-embedded-nulls)

### [Raw string literals c++11](https://stackoverflow.com/a/5460235/51386)

This is the closest to [Ruby Heredoc]({% post_url 2019-02-19-ruby-string %})

{% highlight cpp %}
const char * vogon_poem = R"V0G0N(
             O freddled gruntbuggly thy micturations are to me
                 As plured gabbleblochits on a lurgid bee.
              Groop, I implore thee my foonting turlingdromes.   
           And hooptiously drangle me with crinkly bindlewurdles,
Or I will rend thee in the gobberwarts with my blurlecruncheon, see if I don't.

                (by Prostetnic Vogon Jeltz; see p. 56/57)
)V0G0N";
{% endhighlight %}

older solution, for a one line string

{% highlight cpp %}
std::string multiline_str =
    "Line 1 "
    "Line 2 "
    "Line 3";
{% endhighlight %}

or [with a _macro_](https://www.delftstack.com/howto/cpp/cpp-multiline-string-cpp/) / [SO](https://stackoverflow.com/a/14293615/51386). It will replace any number of consecutive whitespace characters by a single space
{% highlight cpp %}
#define MULTILINE_STRING(...) #__VA_ARGS__

 std::string multiline_str = MULTILINE_STRING(
      I love getting my doubts solved 
      by the help of Delft Stack Tutorials.);
{% endhighlight %}

### see also
- [	Just how constexpr is C++20’s std:string?](https://news.ycombinator.com/item?id=37431425)

{% highlight cpp %}
std::string("\0world", 6);
s.append("\0world", 6);
{% endhighlight %}
