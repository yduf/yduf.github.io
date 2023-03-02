---
published: true
title: Posix Signal
tags: c++ signal
---
> Unix Signals are a bit of a pain: They seem deceptively simple, but aren’t. They are asynchronous. Signals are delivered to any one thread that has not blocked the signal, including (and as a most likely candidate) the main thread. - [Signal Handlers for Multithreaded C++](https://thomastrapp.com/posts/signal-handlers-for-multithreaded-c++//)

The asynchronous nature of signals limits the interaction of signal handlers with the rest of the process as much for there to be a man page about it: [man 7 signal-safety](https://man7.org/linux/man-pages/man7/signal-safety.7.html). Notice how the whitelist of safe function calls misses anything that is fun.

- [std::signal](https://en.cppreference.com/w/cpp/utility/program/signal)

- The primary problem is that if the signal interrupts malloc() or some similar function, the internal state may be temporarily inconsistent while it is moving blocks of memory between the free and used list, or other similar operations. If the code in the signal handler calls a function that then invokes malloc(), this may completely wreck the memory management. - [SO](https://stackoverflow.com/questions/16891019/how-to-avoid-using-printf-in-a-signal-handler)

- One technique which is especially useful in programs which have a select loop is to write a single byte down a pipe on receipt of a signal and then handle the signal in the select loop. - [SO](https://stackoverflow.com/a/44183322/51386)
