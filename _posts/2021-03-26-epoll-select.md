---
published: true
title: Alternative I/O models ( select / io_uring)
tags: linux io-stream file socket event network
---
> What’s epoll? - [Julia Evans](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/)
> 
> What's `O_NONBLOCK` ? - [Blocking I/O, Nonblocking I/O, And Epoll](https://eklitzke.org/blocking-io-nonblocking-io-and-epoll)

- [select / poll / epoll: practical difference for system architects](http://www.ulduzsoft.com/2014/01/select-poll-epoll-practical-difference-for-system-architects/)
	- [**No new code should be using select()**](https://news.ycombinator.com/item?id=27216242)
    - In the vast majority of cases you would be **choosing between poll and epoll/libevent**.
	- To use epoll, much more preparation is needed.
	- select carries quite a few design flaws which make it undesirable as a polling mechanism in the modern networking application... is there is any reason to use select at all?
		- The first reason is portability.
        - select can - _theoretically_ - handle the timeouts withing the one nanosecond precision, while both poll and epoll can only handle the one millisecond precision.

- [Using select(2)](http://aivarsk.com/2017/04/06/select/) - Use libev, Boost.Asio or other libraries.
	- [libev](http://software.schmorp.de/pkg/libev.html) - A full-featured and high-performance event loop that is loosely modelled after libevent.
    
### [io_uring](Welcome to Lord of the io_uring)
- [Waiting for many things at once with io_uring](https://news.ycombinator.com/item?id=42135412)
	- [Do Files want to be Actors?](https://news.ycombinator.com/item?id=42595700) - using his io_uring test server, like this one[0] claiming 180 GB/s of write throughput, which is fast enough to start blurring the lines with memory bandwidth.  You can't use mmap() for large persistent data because CPU silicon doesn't support enough virtual memory
