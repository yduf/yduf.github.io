---
published: true
title: How do mouse events work in linux?
tags: linux mouse
---
> Each 'mouse' device is assigned to a single mouse or digitizer, except the last one - 'mice'. This single character device is shared by all mice and digitizers, and even if none are connected, the device is present.  This is useful for hotplugging USB mice, so that programs can open the device even when no mice are present.
 - [SE](https://unix.stackexchange.com/questions/25601/how-do-mouse-events-work-in-linux) / [input/input.txt](https://www.kernel.org/doc/Documentation/input/input.txt)
