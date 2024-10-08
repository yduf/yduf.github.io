---
published: true
title: Posix Signal
tags: c++ signal
---
> Unix Signals are a bit of a pain: They seem deceptively simple, but aren’t. They are asynchronous. Signals are delivered to any one thread that has not blocked the signal, including (and as a most likely candidate) the main thread. - [Signal Handlers for Multithreaded C++](https://thomastrapp.com/posts/signal-handlers-for-multithreaded-c++//)

The asynchronous nature of signals limits the interaction of signal handlers with the rest of the process as much for there to be a man page about it: [man 7 signal-safety](https://man7.org/linux/man-pages/man7/signal-safety.7.html). Notice how the whitelist of safe function calls misses anything that is fun.

- [std::signal](https://en.cppreference.com/w/cpp/utility/program/signal)

- The primary problem is that if the signal interrupts malloc() or some similar function, the internal state may be temporarily inconsistent while it is moving blocks of memory between the free and used list, or other similar operations. If the code in the signal handler calls a function that then invokes malloc(), this may completely wreck the memory management. - [SO](https://stackoverflow.com/questions/16891019/how-to-avoid-using-printf-in-a-signal-handler)

- user space functions have their own purpose and side-effect. Some are not re-entrance safe, those functions can't be called from signal handler. man 7 signal will help you find out which are re-entrance safe. Take example, you can call sys_futex() anywhere including signal handler, but if you use sys_futex() to implement a mutex, the sys_futex() inside signal handler may blocked for ever when the signal interrupts the critical section of the mutex. [SO](https://stackoverflow.com/a/11684043/51386)

- One technique which is especially useful in programs which have a select loop is to write a single byte down a pipe on receipt of a signal and then handle the signal in the select loop. - [SO](https://stackoverflow.com/a/44183322/51386)

### [Converting SIGSEGV signals to C++ exception](https://github.com/Plaristote/segvcatch) segvcatch

This is a crossplatform C++ library designed to convert a hardware exceptions, such as segmentation fault, or floating point errors, into a software language exceptions, which can be handled later with a try/catch construction.

Other words, it's a crossplatform structured exception handling (SEH).

- [How to write a signal handler to catch SIGSEGV?](https://stackoverflow.com/questions/2663456/how-to-write-a-signal-handler-to-catch-sigsegv) - When your signal handler returns (assuming it doesn't call exit or longjmp or something that prevents it from actually returning), the code will continue at the point the signal occurred, reexecuting the same instruction. Since at this point, the memory protection has not been changed, it will just throw the signal again, and you'll be back in your signal handler in an infinite loop.

### see also
- [Signals. I spent 2 years to understand this part.](https://www.youtube.com/watch?v=d0gS5TXarXc) - start with describing hardware interrupt & kernel handling, then move on to signal.
