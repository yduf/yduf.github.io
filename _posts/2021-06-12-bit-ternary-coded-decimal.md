---
published: true
title: Binary-coded Ternary
tags: ternary bits math c++ tic-tac-toe
---
> Representing [Tic-tac-toe]({% post_url 2021-06-08-tic-tac-toe %}) in ternary form, and efficiently generating all possible boards. - yduf

Rather than doing binary to ternary number conversion [(implying divide and mod by 3)](https://stackoverflow.com/a/7466840/51386), we can directly count in binary-coded ternary form.

## Ternary Increment
My own code to increment from 1 to N in binary-coded ternary representation. Trick is to use the binary + for handling carry over, by first allowing propagation when it will be needed and then masking spurious bits.

TODO: would it allow general addition operation (ternary) + binary operand ?

{% highlight cpp %}
#include <cstdint>

#include <iostream>
#include <bitset>

int main() {
    uint16_t b = 0;

    for( int i = 0; i < 10; ++i) {
        std::cout << std::bitset<16>( b) 
                  << " = " << i 
                  << std::endl;

        // ternary increment
        auto comb = b & 0b10101010'10101010;
        auto mask = comb >> 1;
        auto inc = ( ( b | mask) +1 ) & ~mask;
        b = inc;
  
        // ternary decrement
        auto int3 = b;
        --int3;
        comb = int3 & 0b10101010'10101010;
        mask = comb >> 1;
        int3 = int3 & ~mask;
  		
        // int3 == b before increment 
    }
}
{% endhighlight %}

Notes: it still requires 2*9=18bits to represent Tic-tac-toe state in Binary-Coded Ternary (contrary to the sample code above which use 16bits integer).

## Resources
- [Binary Coded Ternary and Its Inverse](http://homepage.divms.uiowa.edu/~jones/ternary/bct.shtml)
- [Ternary numeral system](https://en.wikipedia.org/wiki/Ternary_numeral_system#Binary-coded_ternary)
- [Binary-coded decimal](https://en.wikipedia.org/wiki/Binary-coded_decimal)
- [How can 3-state bit packed together?](https://stackoverflow.com/questions/50943386/how-can-3-state-bit-packed-together)
- [Power of three](https://en.wikipedia.org/wiki/Power_of_three)
- [Bitboard to titboard (ternary bitboard) conversion](https://stackoverflow.com/questions/53708165/bitboard-to-titboard-ternary-bitboard-conversion)
- [Titboards](https://www.chessprogramming.org/Titboards)
