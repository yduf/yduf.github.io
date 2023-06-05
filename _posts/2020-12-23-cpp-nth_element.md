---
published: true
title: nth_element (C++) / Finding the first n largest elements in an array
tags: c++ sort algorithm complexity median
excerpt_separator: <!--more-->
---
> a partial sorting algorithm that rearranges elements in \[first, last) with O(N) worst running time. - [nth_element](https://en.cppreference.com/w/cpp/algorithm/nth_element) / [SO](https://stackoverflow.com/questions/7272534/finding-the-first-n-largest-elements-in-an-array)

<!--more-->

## [nth_element (C++)](https://en.cppreference.com/w/cpp/algorithm/nth_element)
- The element pointed at by nth is changed to whatever element would occur in that position if [first, last) were sorted. 
- All of the elements before this new nth element are less than or equal to the elements after the new nth element. 

On average, the implementations of C++ are based on [introspective selection](https://en.wikipedia.org/wiki/Selection_algorithm) which has O(N) worst running time. 

### [Median](https://helloacm.com/c-coding-reference-partial-sorting-with-nth_element-from-algorithm-header/)
Using the nth_element, we can specify the Nth to be the middle, which will be the definition of the median number (in the sorted array).

{% highlight cpp %}
vector<int> data = { 5, 4, 2, 3, 9, 8, 6, 7, 0, 1 };
nth_element(begin(data), begin(data) + data.size() / 2, end(data));
cout << "Median is " << (data[data.size()/2]);
{% endhighlight %}
  
  
## [Using a priority queue](https://stackoverflow.com/a/7273074/51386)

Applicable to an unbounded input stream

- Unconditionnally insert into the queue the n first elements
- For each remaining element x, insert x if it is greater than the least element of the queue (O(log n) operation), and remove the least element (O(log n)).
- When done, the priority queue contains n elements, which are the n largest elements of the original array.

Total complexity: O(N log n) where N is the total number of elements in the array.
  
see also
- [std::priority_queue](https://en.cppreference.com/w/cpp/container/priority_queue) - use vector as underlying container
	- [How to preallocate(reserve) a priority_queue<vector>?](https://stackoverflow.com/a/29236236/51386)

