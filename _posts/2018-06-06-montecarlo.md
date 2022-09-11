---
title: Monte Carlo Method
published: true
tags: math algorithm
---
> Estimate pi by essentially throwing darts - [(pdf)](http://library.lanl.gov/cgi-bin/getfile?00326866.pdf)

1. Draw a unit square.
2. Inscribe a circle inside the square.
3. Throw a whole bunch of darts at the square, distributing them as randomly as possible.
4. Count the number of dart holes inside the circle. Divide by the total number of dart holes. Now you have an estimate of the ratio of the areas of the circle and the square. Call this number C. Since you know the area of the square is 1, the area of the circle must be C. C is also equal to pi * r^2, where r is the radius of the inscribed circle (which is 0.5). Thus, C = pi * (0.5)^2 = pi/4. Pi is therefore approximately 4C.

see also
- [Can you solve my favorite interview question?](https://www.youtube.com/watch?v=pvimAM_SLic)
- [Monte Carlo Geometry Processing](https://www.youtube.com/watch?v=bZbuKOxH71o)
