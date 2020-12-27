---
published: true
title: Custom input stream in C++
tags: c++ file
---
> The proper way to create a new stream in C++ is to derive from `std::streambuf` and to override the `underflow()` operation for reading and the `overflow() and sync()` operations for writing. - [SO](https://stackoverflow.com/questions/14086417/how-to-write-custom-input-stream-in-c)

- [A Gentle Introduction to C++ IO Streams](https://www.cprogramming.com/tutorial/c++-iostreams.html)
