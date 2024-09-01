---
published: true
title: C++ format
tags: c++ string format single-header
---
> How to get fprintf results as a std::string w/o sprintf - [SO](https://stackoverflow.com/questions/69738/c-how-to-get-fprintf-results-as-a-stdstring-w-o-sprintf)

see also
- [Formatting Text in C++: The Old and The New Ways](https://mariusbancila.ro/blog/2023/09/12/formatting-text-in-c-the-old-and-the-new-ways/)/[HN](https://news.ycombinator.com/item?id=37530158) - speed comparison of available methods. - **format/{fmt}** seem to be generally much better.

- **[{fmt}](https://github.com/fmtlib/fmt)** an open-source formatting library providing a fast and safe alternative to C stdio and C++ iostreams. 
	- see [Motivations](https://github.com/fmtlib/fmt#motivation)
    - [header-only mode](https://stackoverflow.com/questions/66944554/how-to-use-fmt-library-in-the-header-only-mode)
    - Implementation of C++20 std::format
    - [Honey, I shrunk {fmt}](https://vitaut.net/posts/2024/binary-size/) / [HN](https://news.ycombinator.com/item?id=41415238) - show generating code size equivalent to call to printf

### C++20
- [Printing Formatted Strings in C++20](https://bw.org/2021/08/09/cpp20-print/)
- [std::format (C++20)](https://en.cppreference.com/w/cpp/utility/format/format)
    
![caption](https://user-images.githubusercontent.com/576385/88485597-d312f600-cf2b-11ea-9cbe-61f535a86e28.png)
