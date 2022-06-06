---
published: true
title: Floating point number (IEEE-754)
tags: math float history c++
---
> But why did DEC use 8 bits for the exponent in the F and D formats? The reason is to be able to represent all important physical constants, including the Plank constant (6.626070040 × 10^-34) and the Avogradro constant (6.022140857 × 10^23) - [SO](https://retrocomputing.stackexchange.com/questions/13493/where-did-the-free-parameters-of-ieee-754-come-from/13496#13496)

see also
- [Floating-point arithmetic (wikipedia)](https://en.wikipedia.org/wiki/Floating-point_arithmetic)
- [floats, bits, and constant expressions](https://brnz.org/hbr/?p=1518) - Can you access the bits that represent an IEEE754 single precision float in a C++14 constant expression (constexpr)?

### [	Floating point visually explained](https://news.ycombinator.com/item?id=29368529)

Instead of Exponent, think of a Window between two consecutive power of two integers. Instead of a Mantissa, think of an Offset within that window.

[![caption](https://fabiensanglard.net/floating_point_visually_explained/floating_point_intuitive.svg)](https://fabiensanglard.net/floating_point_visually_explained/)


[![caption](https://fabiensanglard.net/floating_point_visually_explained/floating_point_window.svg)](https://fabiensanglard.net/floating_point_visually_explained/)
