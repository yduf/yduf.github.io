---
published: true
title: Binary format & literals in C++
tags: c++ bits literals
excerpt_separator: ''
---
> 0b1000’0000’0000’0000 & cout << std::bitset<32>(v) - [Binary solo](https://www.youtube.com/watch?v=NI9nopaieEc)

## [C++14 binary literals and digit separator](http://candcplusplus.com/c14-binary-literals-and-digit-separator)
{% highlight cpp %}
auto binary=0b10001000 ; //binary digit
auto hex=0x12ab; ///hexadecimal number
auto octal=0127 ; //octal number

auto B16=0b1000’0000’0000’0000 , //easier to guess the number 
{% endhighlight %}

## [Printing numbers in binary format in C++](https://katyscode.wordpress.com/2012/05/12/printing-numbers-in-binary-format-in-c/)

### [In C++20 you'll be able to use std::format to do this](https://stackoverflow.com/a/65330928/51386)
{% highlight cpp %}
std::cout << std::format("{:b}", a);
{% endhighlight %}

### [otherwise](https://stackoverflow.com/questions/7349689/how-to-print-using-cout-a-number-in-binary-form)
The easiest way is probably to create an std::bitset representing the value, then stream that to cout.

{% highlight cpp %}
#include <bitset>
  
int v = 0x12345678;
std::cout << std::bitset<32>(v);
{% endhighlight %}

