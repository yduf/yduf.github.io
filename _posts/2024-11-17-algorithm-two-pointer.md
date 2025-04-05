---
title: Two Pointer Technique
published: true
tags: algorithm array sort c++
use_math: true
---
> a popular programming technique used  to solve problems involving arrays or lists efficiently. It involves using two pointers (or indices) to traverse the data structure and is commonly used in problems related to searching, sorting, and subarray operations. It Typically can reduces the time complexity from $O(n^2)$ to $O(n)$ for many problems. - [ChatGPT](https://chatgpt.com/share/673a4e0a-63e8-800d-9cdd-0205872b9087)

### Example

[**std::unique**](https://en.cppreference.com/w/cpp/algorithm/unique) - use this 2 pointer techniques

{% highlight cpp %}
template<class ForwardIt>
ForwardIt unique(ForwardIt first, ForwardIt last)
{
    if (first == last)
        return last;
 
    ForwardIt result = first;
    while (++first != last)
        if (!(*result == *first) && ++result != first)
            *result = std::move(*first);
 
    return ++result;
}
{% endhighlight %}

see also
- [LeetCode](https://leetcode.com/problem-list/two-pointers/) - Two pointer problem.
