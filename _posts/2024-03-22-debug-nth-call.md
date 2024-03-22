---
title: debugging the nth call
published: true
tags: debug-war c++
---
> the easiest way to debug a crash on the nth call of a piece of code is to set a hardware breakpoint - ydu

This assume the bug is reproducible.

1. - run the code until it crash
2. - not the place, and set a hardware breakpoint there - with counting enable, but no stop.
3. - rerun, note the count _N_ at which crash happens
4. - set the breakpoint to break at _N_ -1
5. - rerun, and now you are ready to debug in close condition to the crash.

This method allows to rerun close to normal performance and easily understand context of such bug.
