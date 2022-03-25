---
published: true
title: Custom input stream in C++
tags: c++ file io-stream codingame
---
> The proper way to create a new stream in C++ is to derive from `std::streambuf` and to override the `underflow()` operation for reading and the `overflow() and sync()` operations for writing. - [SO](https://stackoverflow.com/questions/14086417/how-to-write-custom-input-stream-in-c)

> Stream buffers represent input or output devices and provide a low level interface for unformatted I/O to that device. Streams, on the other hand, provide a higher level wrapper around the buffer by way of basic unformatted I/O functions and especially via formatted I/O functions (i.e., operator<< and operator>> overloads). Stream objects may also manage a stream buffer's lifetime. - [SO](https://stackoverflow.com/questions/8116541/what-exactly-is-streambuf-how-do-i-use-it/8117182#8117182)

- [Exposed buffers](http://wordaligned.org/articles/cpp-streambufs) - Copy streams / Redirect streams / Tee streams
	- [underflow](https://en.cppreference.com/w/cpp/io/basic_streambuf/underflow)

- [A Gentle Introduction to C++ IO Streams](https://www.cprogramming.com/tutorial/c++-iostreams.html)

- [The Boost Iostreams Library](https://www.boost.org/doc/libs/1_70_0/libs/iostreams/doc/index.html)
	- [Tee-ing input (cin) out to a log file (or clog)](https://stackoverflow.com/questions/998072/tee-ing-input-cin-out-to-a-log-file-or-clog)
    
### [ yduf/input_logger.hh ](https://gist.github.com/yduf/3806be006f79e31558b10026a85088da)
{% highlight cpp %}
#include "input_logger.hh"

int main() {
    // assume an input stream exist (work as well with cin)
    char a[] = "This is the input\nhello\n";
    std::istringstream in(std::string(std::begin(a), std::end(a)));

    // Then tie in stream to log stream, wich will output every input to cerr
    input_logger log( in);

    // use in stream normally
    std::string first, second;
    getline( in, first);            // will log =>This is the input
    in >> second; in.ignore();      // will log =>hello

    // and it works as expected
    std::cerr << "first is '" << first << "'\n";
    std::cerr << "second is '" << second << "'\n";
}
{% endhighlight %}
    
[![caption](https://upload.cppreference.com/mwiki/images/7/75/std-streambuf.svg)](https://en.cppreference.com/w/cpp/io/basic_streambuf)
