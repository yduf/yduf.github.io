---
title: check if a member exist (C++ SFINAE)
published: true
tags: c++
---
> there is a proposal for C++17 that makes it really much simpler - [SO](https://stackoverflow.com/a/30848101/51386) + [N4502](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2015/n4502.pdf)

This part is the constant part, put it in a header.
{% highlight cpp %}
// See http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2015/n4502.pdf.
template <typename...>
using void_t = void;

// Primary template handles all types not supporting the operation.
template <typename, template <typename> class, typename = void_t<>>
struct detect : std::false_type {};

// Specialization recognizes/validates only types supporting the archetype.
template <typename T, template <typename> class Op>
struct detect<T, Op, void_t<Op<T>>> : std::true_type {};
{% endhighlight %}

then there is the variable part, where you specify what you are looking for (a type, a member type, a function, a member function etc.). In the case of the OP:

{% highlight cpp %}
template <typename T>
using toString_t = decltype(std::declval<T>().toString());

template <typename T>
using has_toString = detect<T, toString_t>;
{% endhighlight %}

## [C++ 11](https://stackoverflow.com/a/13787502/51386)
{% highlight cpp %}
struct general_ {};
struct special_ : general_ {};
template<typename> struct int_ { typedef int type; };

template<typename Lhs, typename Rhs,
         typename int_<decltype(Lhs::normal)>::type = 0>
void modifyNormal(Lhs &&lhs, Rhs &&rhs, special_) {
   lhs.normal = rhs * lhs.normal;
}

template<typename Lhs, typename Rhs>
void modifyNormal(Lhs &&lhs, Rhs &&rhs, general_) {
   // do nothing
}
{% endhighlight %}
