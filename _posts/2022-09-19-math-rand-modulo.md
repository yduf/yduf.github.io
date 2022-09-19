---
published: true
title: Modulo sampling
tags: math random algorithm security
---
> the big problem with modulo biases is that they can allow you to recover private keys for certain schemes - [Modulo Bias and how to avoid it](https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/)

the problem appears when you have to pick at random an integer, usually you want to pick the integer in a given range, but you want the integer to be uniformly distributed within the given range. For example, if your range is [0, 106], you’d like all values between 0 and 106 inclusive to be as likely as each other, with the probability of getting any of the 107 values x \in [0, 106] being thus P(x)=\frac{1}{107}, however, when generating a random value, one will usually get a random byte string. Typically by relying on GetRandom, or on /dev/urandom, which both will provide you with a set number of random bytes. So in this example, it would suffice to sample at random 1 byte, since with 8 bits you can represent 255 values. But then you need a way to constrain your random byte to only the values 0 to 106, and that is typically where the modulo is misused and causing a Modulo Bias: your random byte, once casted to an integer will have a value between 0 and 255, thus one might be tempted to take its value modulo 107, because then you are guaranteed to obtain a value in the range 0 to 106, since 107 would be mapped to 0, 108 to 1, etc.

