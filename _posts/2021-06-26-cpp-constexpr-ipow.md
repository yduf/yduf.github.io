---
published: true
title: Fast constexpr integer power (ipow)
tags: c++ math power recurse optimize fastware Fibonacci
---
> A good optimizing compiler will transform tail-recursive functions to run as fast as imperative code. - [SO](https://stackoverflow.com/questions/17719674/c11-fast-constexpr-integer-powers#17728525)

see also
- [C++ Super Optimization: 1000X Faster](https://www.youtube.com/watch?v=8-VZoXn8f9U) - general overview of `constexpr` usage and optimisation 
	- demo with recursive Fibonacci and prime number
- [Fast alternative to pow()](https://chatgpt.com/share/6735d225-a59c-800d-b059-58adc4717ded)

### ipow
{% highlight cpp %}
#include <cstdint>

constexpr int64_t ipow(int64_t base, int exp, int64_t result = 1) {
  return exp < 1 ? result : ipow(base*base, exp/2, (exp % 2) ? result*base : result);
}
{% endhighlight %}

### double^int
template <int N>
double power(double x) {
    if constexpr (N == 0) return 1.0;
    else if constexpr (N == 1) return x;
    else return x * power<N - 1>(x);
}

double result = power<3>(x);  // computes x^3 at compile time
{% endhighlight %}
