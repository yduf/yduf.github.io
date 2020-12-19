---
published: true
title: FFT & Polynomial representation
tags: math fft polynomial 3blue1brown
---
> The Fast Fourier Transform (FFT) is a tricky algorithm to understand so we take a look at it in a context that we are all familiar with: polynomial multiplication. You will see how the core ideas of the FFT can be "discovered" through asking the right questions. The key insights that are presented in this video is that polynomial multiplication can be improved significantly by multiplying polynomials in a special value representation. The challenge that presents itself is the problem of converting a polynomial from a standard coefficient representation to value representation. - [(FFT): Most Ingenious Algorithm Ever?](https://www.youtube.com/watch?v=h7apO7q16V0)

- Coefficient representation vs Value representation (n+1 point off polynomial).
- There is one to one correspondance between this representation.
- Multiplying  polynomial is $O(n²)$ for coefficient representation while being $O(n \log n)$ for value representation (but more complex in algorithm involved == the FFT).
