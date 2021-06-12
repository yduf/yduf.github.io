---
published: true
title: Ternary-coded decimal
tags: bits math c++ tic-tac-toe
---

## Increment

This increment from 1 to N in ternary representation

{% highlight cpp %}
#include <cstdint>

#include <iostream>
#include <bitset>

int main() {
    uint16_t b = 0;

    for( int i = 0; i < 10; ++i) {
        std::cout << std::bitset<16>( b) << " = " << i << std::endl;

        // ternary increment
        auto comb = b & 0b10101010'10101010;
        auto mask = comb >> 1;
        auto inc = ( ( b | mask) +1 ) & ~mask;
        b = inc;
    }
}
{% endhighlight 

## Resources
- [Binary Coded Ternary and Its Inverse](http://homepage.divms.uiowa.edu/~jones/ternary/bct.shtml)
- [Ternary numeral system](https://en.wikipedia.org/wiki/Ternary_numeral_system#Binary-coded_ternary)
- [Binary-coded decimal](https://en.wikipedia.org/wiki/Binary-coded_decimal)