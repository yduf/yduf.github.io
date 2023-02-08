---
published: true
title: Traces vs. Snapshots
tags: debug mental-model stacktrace
---
> To my surprise, some programmers consider using print statements instead of debuggers as a wholly inferior means of debugging. As I view the debugging process, they are complementary techniques. But the issue is not really “print statements” versus “debuggers.” - [It’s traces versus snapshots.](https://www.scott-a-s.com/traces-vs-snapshots/) / [HN](https://news.ycombinator.com/item?id=31293046)

Here's one of its most important use cases. Have you ever had you debugger stupified by a NULL function pointer before? Debuggers aren't very good at handling this situation. Because once the control flow jumps to the NULL page, you'd need to find a way to rewind execution history to figure out how it got there. - [	Logging C Functions](https://news.ycombinator.com/item?id=31443198)

see also
- [Time Travel Debugger]({% post_url 2021-09-15-debug-time-travel %})
- [	Logging C Functions](https://news.ycombinator.com/item?id=31443198) - features of the Cosmopolitan Libc runtime is its --ftrace flag that logs C function calls.
	- [	Debugging C with Cosmopolitan Libc](https://ahgamut.github.io/2022/10/23/debugging-c-with-cosmo/)
- [Error Context ](http://www.ilikebigbits.com/2016_02_28_error_context.html)– a stack trace for data
- [Boost.Stacktrace](https://github.com/boostorg/stacktrace)

![caption](https://www.scott-a-s.com/files/state_view.png)