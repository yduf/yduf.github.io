---
title: Integer Overflow
tags: bits puzzle
toc: true
---
> Integer overflow (and underflow – I’ll lump them together) is one of those pesky things that creeps up in the real world and makes low-level software a little less clean and elegant than what you might see in an algorithms textbook. - [Testing for Integer Overflow in C and C++](https://blog.reverberate.org/2012/12/testing-for-integer-overflow-in-c-and-c.html) / [wikipedia](https://en.wikipedia.org/wiki/Integer_overflow)

- [How to detect integer overflow in C](https://stackoverflow.com/questions/55468823/how-to-detect-integer-overflow-in-c)

[![caption](https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Odometer_rollover.jpg/500px-Odometer_rollover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail)](https://en.wikipedia.org/wiki/Odometer)


# see also

## [ The World Before 8-bit Bytes Won ⮺](https://pikuma.com/blog/c-integer-sizes-not-a-mistake)

| Machine                                                              | Word size | Notes                                                                             |
| -------------------------------------------------------------------- | --------: | --------------------------------------------------------------------------------- |
| [DEC PDP-8](https://en.wikipedia.org/wiki/PDP-8)                     |   12 bits | Hugely popular minicomputer                                                       |
| [DEC PDP-7](https://en.wikipedia.org/wiki/PDP-7)                     |   18 bits | Where UNIX was born, in assembly                                                  |
| [DEC PDP-11](https://en.wikipedia.org/wiki/PDP-11)                   |   16 bits | Byte-addressed; where C grew up                                                   |
| [DEC PDP-10 / DECSYSTEM-20](https://en.wikipedia.org/wiki/PDP-10)    |   36 bits | Characters were often packed 7 or 9 bits at a time                                |
| Honeywell 6000 series                                                |   36 bits | 9-bit characters; an early C target                                               |
| UNIVAC 1100 / Unisys 2200                                            |   36 bits | **Ones'-complement** arithmetic, 9-bit chars; still has a C compiler today        |
| IBM 7090 / 7094                                                      |   36 bits | 6-bit character codes                                                             |
| SDS 940, ICL 1900, Harris                                            |   24 bits | ICL used 6-bit characters                                                         |
| Burroughs B5000 family                                               |   48 bits | Tagged, stack-oriented architecture                                               |
| [CDC 6600](https://en.wikipedia.org/wiki/CDC_6600)                   |   60 bits | 6-bit characters, **no byte addressing at all**                                   |
| [Cray-1](https://en.wikipedia.org/wiki/Cray-1)                       |   64 bits | Word-addressed; in C, `short`, `int`, and `long` could all be 64 bits             |
| [Data General Nova](https://en.wikipedia.org/wiki/Data_General_Nova) |   16 bits | Word-addressed; byte pointers had a *different representation* than word pointers |
| Intel 8086                                                           |   16 bits | Segmented memory; `near` and `far` pointers                                       |
