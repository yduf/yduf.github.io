---
published: true
title: Alternative I/O models
tags: linux io file network
---
> What’s epoll? - [Julia Evans](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/)
> 
> What's `O_NONBLOCK` ? - [Blocking I/O, Nonblocking I/O, And Epoll](https://eklitzke.org/blocking-io-nonblocking-io-and-epoll)

- [select / poll / epoll: practical difference for system architects](http://www.ulduzsoft.com/2014/01/select-poll-epoll-practical-difference-for-system-architects/)
	- select carries quite a few design flaws which make it undesirable as a polling mechanism in the modern networking application... is there is any reason to use select at all?
		- The first reason is portability.
        - select can - _theoretically_ - handle the timeouts withing the one nanosecond precision, while both poll and epoll can only handle the one millisecond precision.
        - [No new code should be using select()](https://news.ycombinator.com/item?id=27216242)
    - In the vast majority of cases you would be choosing between poll and epoll/libevent.
	- To use epoll, much more preparation is needed.

- [Using select(2)](http://aivarsk.com/2017/04/06/select/) - Use libev, Boost.Asio or other libraries.
	- [libev](http://software.schmorp.de/pkg/libev.html) - A full-featured and high-performance event loop that is loosely modelled after libevent.
