---
published: true
title: Lambda (c++)
tags: c++
---
> A lambda can only be converted to a function pointer if it does not capture - [SO](https://stackoverflow.com/a/28747100/51386)

Possible workaround using [`std::function`](https://en.cppreference.com/w/cpp/utility/functional/function) / [SO](https://stackoverflow.com/a/28747100/51386)

{% highlight cpp %}
#include <functional>
#include <utility>

struct Decide
{
  using DecisionFn = std::function<bool()>;
  Decide(DecisionFn dec) : dec_ {std::move(dec)} {}
  DecisionFn dec_;
};

int
main()
{
  int x = 5;
  Decide greaterThanThree { [x](){ return x > 3; } };
}
{% endhighlight %}

## [All About Lambda Function in C++(From C++11 to C++20)](http://www.vishalchovatiya.com/learn-lambda-function-in-cpp-with-example/)

![caption](https://secureservercdn.net/160.153.137.218/bkh.972.myftpupload.com/wp-content/uploads/Learn-lambda-function-in-C-with-example.png) <!-- .element height="50%" width="50% ustify-content="left" -->