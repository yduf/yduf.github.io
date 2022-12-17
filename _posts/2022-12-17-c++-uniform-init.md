---
published: true
title: C++ Uniform Unitialisation
tags: c++
---
> Why not just use the classic int x = 1; and call it a day? - [Benefits & Pitfalls](https://ianyepan.github.io/posts/cpp-uniform-initialization/)

- Consistent syntax
- does not allow narrowing conversions.

But 
- variable declared with auto uses brace initialization, its type could be deduced to std::initializer_list
-  using std::vectors v(5, 0) != v{5, 0};
-  when there’s an overloading constructor that declares its parameter of type std::initializer_list
