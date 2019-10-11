---
published: true
title: Expect the expected (2018 - Andrei)
tags: exception lang error-handling c++
---
> Reinventing exceptions.

- [C++ Russia 2018](https://www.youtube.com/watch?v=CGwk3i1bGQI)
- [CppCon 2018](https://www.youtube.com/watch?v=PH4WBuE1BHI)

### When should you use them ?
- for eg network code may want to retry thing
- You want to have error immediately recognisable
- Want to transport information from where it happens to where it is handle.

### Expected<T,E>
- followup from [Systematic Error Handling in C++]({% post_url 2019-09-21-cpp-error-handling %})
