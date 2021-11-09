---
published: true
title: nth_element (C++)
tags: c++ sort algorithm complexity median
excerpt_separator: <!--more-->
---
> a partial sorting algorithm that rearranges elements in \[first, last) with O(N) worst running time. - [nth_element](https://en.cppreference.com/w/cpp/algorithm/nth_element)


- The element pointed at by nth is changed to whatever element would occur in that position if [first, last) were sorted. 
- All of the elements before this new nth element are less than or equal to the elements after the new nth element. 

On average, the implementations of C++ are based on [introspective selection](https://en.wikipedia.org/wiki/Selection_algorithm) which has O(N) worst running time. 
<!--more-->

## [Median](https://helloacm.com/c-coding-reference-partial-sorting-with-nth_element-from-algorithm-header/)
Using the nth_element, we can specify the Nth to be the middle, which will be the definition of the median number (in the sorted array).

{% highlight cpp %}
vector<int> data = { 5, 4, 2, 3, 9, 8, 6, 7, 0, 1 };
nth_element(begin(data), begin(data) + data.size() / 2, end(data));
cout << "Median is " << (data[data.size()/2]);
{% endhighlight %}
