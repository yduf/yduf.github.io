---
published: true
title: How do mouse events work in linux?
tags: linux mouse
---
> _evdev_ is the generic input event interface. It passes the events generated in the kernel straight to the program, with timestamps...This should be the way for GPM and X to get keyboard and mouse events. It allows for multihead in X without any specific multihead kernel support. The event codes are the same on all architectures and are hardware independent. - [SE](https://unix.stackexchange.com/questions/25601/how-do-mouse-events-work-in-linux) / [input/input.txt](https://www.kernel.org/doc/Documentation/input/input.txt)

- [Writing Linux Mouse Drivers](https://www.linuxtoday.com/blog/writing-linux-mouse-drivers.html)
