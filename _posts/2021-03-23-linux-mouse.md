---
published: true
title: How do mouse events work in linux?
tags: linux mouse
---
> _evdev_ is the generic input event interface. It passes the events generated in the kernel straight to the program, with timestamps...This should be the way for GPM and X to get keyboard and mouse events. It allows for multihead in X without any specific multihead kernel support. The event codes are the same on all architectures and are hardware independent. - [SE](https://unix.stackexchange.com/questions/25601/how-do-mouse-events-work-in-linux) / [input/input.txt](https://www.kernel.org/doc/Documentation/input/input.txt)

> You can use blocking and nonblocking reads, and also select() on the /dev/input/eventX devices, and you’ll always get a whole number of input events on a read. - [Event interface](https://www.kernel.org/doc/html/v4.14/input/input.html#event-interface) / [Input event codes](https://www.kernel.org/doc/html/latest/input/event-codes.html#input-event-codes)

- [linux/input-event-codes.h](https://github.com/torvalds/linux/blob/master/include/uapi/linux/input-event-codes.h)
- [evtest](https://www.systutorials.com/docs/linux/man/1-evtest/) - Input device event monitor and query tool
	- [evtest.c](https://github.com/freedesktop-unofficial-mirror/evtest/blob/master/evtest.c)
	- [libevdev](https://www.freedesktop.org/wiki/Software/libevdev/) -  a wrapper library for evdev devices.

- [Writing Linux Mouse Drivers](https://www.linuxtoday.com/blog/writing-linux-mouse-drivers.html)

- [Internal input event handling in the Linux kernel and the Android userspace](https://jichu4n.com/posts/internal-input-event-handling-in-the-linux-kernel-and-the-android-userspace/) - describe poll on multi /dev/input/event*

- [ plato/src/input/remarkable.rs ](https://github.com/darvin/plato/blob/master/src/input/remarkable.rs)

- [Linux input device events, how to retrieve initial state](https://stackoverflow.com/questions/27063833/linux-input-device-events-how-to-retrieve-initial-state)
