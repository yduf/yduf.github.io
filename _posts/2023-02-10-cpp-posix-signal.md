---
published: true
title: Posix Signal
tags: c++ signal
---
> Unix Signals are a bit of a pain: They seem deceptively simple, but aren’t. They are asynchronous. Signals are delivered to any one thread that has not blocked the signal, including (and as a most likely candidate) the main thread. - [Signal Handlers for Multithreaded C++](https://thomastrapp.com/posts/signal-handlers-for-multithreaded-c++//)

The asynchronous nature of signals limits the interaction of signal handlers with the rest of the process as much for there to be a man page about it: man 7 signal-safety. Notice how the whitelist of safe function calls misses anything that is fun.

- [std::signal](https://en.cppreference.com/w/cpp/utility/program/signal)
