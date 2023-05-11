---
published: true
title: Reflection in C++
tags: c++ reflection
---
> Reflection in C++ - Past, Present, and Hopeful Future - [Andrei Alexandrescu - CppCon 2022](https://www.youtube.com/watch?v=YXIVw6QFgAI)

- [Brief History](https://youtu.be/YXIVw6QFgAI?t=1944) of reflection in general
- [Metaprogramming](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p2237r0.pdf)
	- [P1240 Scalable Reflection in C++](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p1240r2.pdf)
    
{% highlight cpp %}
#include <meta>
template<Enum T>
std::string to_string(T value) { // Could also be marked constexpr
	template for (constexpr auto e : std::meta::members_of(^T)) {
		if ([:e:] == value) {
			return std::string(std::meta::name_of(e));
		}
	}
	return "<unnamed>";
}
{% endhighlight %}


- [Circle lang](https://www.circle-lang.org/quickref.html) -  a new language that extends C++ 17 to support data-driven imperative metaprogramming. Circle combines the immediacy and flexibility of a scripting language with the type system, performance and universality of C++. 