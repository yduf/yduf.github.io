---
published: true
title: Function declaration
tags: c++-syntax
---
> Regular function declarator syntax vs [Trailing return type](https://www.danielsieger.com/blog/2022/01/28/cpp-trailing-return-types.html) declaration. - [cppreference](https://en.cppreference.com/w/cpp/language/function)

- [Pros and Cons of Alternative Function Syntax in C++](https://blog.petrzemek.net/2017/01/17/pros-and-cons-of-alternative-function-syntax-in-cpp/)

{% highlight cpp %}
// C or C++98
int f(int x, int y) {
    // ...
}
{% endhighlight %}

{% highlight cpp %}
// C++11
auto f(int x, int y) -> int {
    // ...
}
{% endhighlight %}

{% highlight cpp %}
// C++14
auto f(int x, int y) {
    // The return type is deduced automatically
    // based on the function's body.
    // ...
}
{% endhighlight %}
