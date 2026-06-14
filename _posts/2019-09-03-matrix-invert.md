---
published: true
title: Don’t invert that matrix
tags: matrix math numerical
excerpt_separator: <!--more-->
---
> There is hardly ever a good reason to invert a matrix... <!--more--> you’re still better off solving Ax = b than multiplying by A-1, even if the computation of A-1 came for free. Solving the system is more numerically accurate than the performing the matrix multiplication - [Cook](https://www.johndcook.com/blog/2010/01/19/dont-invert-that-matrix/)