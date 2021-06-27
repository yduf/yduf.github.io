---
title: Fast I/O for Competitive Programming
published: true
tags: c++ file io-stream
---
> Basically cin/cout can outperform printf/scanf provided, that some optimisation are turned on. Otherwise major slow down can be expected. - [Yet again on C++ input/output](http://codeforces.com/blog/entry/5217)

### [`ios_base::sync_with_stdio(false)`](https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio)

Enabled by placing this line in the beginning of the program, before any input/output.

This command turns off iostreams and stdio synchronization (description). It is on by default, which means that calls to iostreams and stdio functions can be freely interleaved even for the same underlying stream. When synchronization is turned off, mixing calls is no longer allowed, but iostreams can potentially operate faster.

### [`cin.tie(nullptr)`](https://en.cppreference.com/w/cpp/io/basic_ios/tie)

By default, cin is tied to cout, which means that cout is flushed before any operation on cin. Turning this feature off allows iostreams, again, to operate faster. One should be careful with this optimization in interactive problems: it should either not be used, or an explicit flush should be issued each time.

### [`endl` vs "\n"](https://en.cppreference.com/w/cpp/io/manip/endl)

Frequent use of endl also negatively affects iostreams performance, because endl not only outputs a newline character, but also flushes the stream's buffer. You can simply output '\n' or "\n" instead of endl.

### [`std::getline`](https://stackoverflow.com/a/15036951/51386)

Streams pretty well know to be very slow. It is not a big surprise though - they need to handle localizations, conditions etc. One possible solution would be to read file line by line by std::getline( std:::cin, str ) and convert string to numbers yourself.

### [`cout.tie(nullptr)`](https://en.cppreference.com/w/cpp/io/basic_ios/tie) / [SO](https://stackoverflow.com/questions/6027034/why-cerr-flushes-the-buffer-of-cout)

On some system cerr may be tie to cout.

### [`std::unitbuf`](https://en.cppreference.com/w/cpp/io/manip/unitbuf)

if =cerr has unitbuf set, so it will be flushed at the end of every << operator.


### see also
- [Which is the fastest method of input in C++](https://stackoverflow.com/a/9747716/51386)
- [C++ fastest cin for reading stdin?](https://stackoverflow.com/questions/15036878/c-fastest-cin-for-reading-stdin/15036951#15036951)
- [The Standard Librarian: IOStreams and Stdio](http://www.drdobbs.com/the-standard-librarian-iostreams-and-std/184401305)
- [Using scanf() in C++ programs is faster than using cin?](https://stackoverflow.com/questions/1042110/using-scanf-in-c-programs-is-faster-than-using-cin)
- [Fast I/O for Competitive Programming](https://www.geeksforgeeks.org/fast-io-for-competitive-programming/)
- [All efficient input taking and fast I/O techniques in C++](https://medium.com/analytics-vidhya/all-efficient-input-taking-and-fast-i-o-techniques-in-c-a-complete-input-output-c-guide-for-3d2e40640e49)

![caption](https://www.cplusplus.com/img/iostream.gif)
