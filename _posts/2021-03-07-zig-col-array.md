---
published: true
title: Zig's comptime code execution
tags: zig lang vector data
---
> a generic container class (similar to vector in C++ or List in C#). But! With a twist!
> 
> It stores structs in "column major" order in memory (e.g., if a struct had two fields A and B, then in-memory layout would be A...AB...B), and you can idiomatically and efficiently get a a slice of the values of each column. - [HN](https://news.ycombinator.com/item?id=26374268)
