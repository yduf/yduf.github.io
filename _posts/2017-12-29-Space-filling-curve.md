---
title: Space filling curve
published: true
tags: math  3blue1brown range search space curve morton-code penrose
---
> [Peano curve (1890)](https://en.wikipedia.org/wiki/Peano_curve) the first example of a space-filling curve to be discovered.

[Hilbert curve (1891)](https://en.wikipedia.org/wiki/Hilbert_curve) gives a mapping between 1D and 2D space that fairly well preserves locality.[3] If (x,y) are the coordinates of a point within the unit square, and d is the distance along the curve when it reaches that point, then points that have nearby d values will also have nearby (x,y) values. The converse can't always be true. There will sometimes be points where the (x,y) coordinates are close but their d values are far apart.

[Z-order curve (1966)](https://en.wikipedia.org/wiki/Z-order_curve). The z-value of a point in multidimensions is simply calculated by [interleaving the binary]({% post_url 2017-12-30-bit-interleave %}) representations of its coordinate values. Once the data are sorted into this ordering, any one-dimensional data structure can be used such as binary search trees, B-trees, skip lists or (with low significant bits truncated) hash tables. The resulting ordering can equivalently be described as the order one would get from a depth-first traversal of a quadtree.

As an alternative, the Hilbert curve has been suggested as it has a better order-preserving behaviour, but here the calculations are much more complicated, leading to significant processor overhead.

Paper [multidimensional range search](http://www.vision-tools.com/h-tropf/multidimensionalrangequery.pdf)

More detailed explaination on narrowing range search:
- [How to use Morton Order(z order curve) in range search?](https://stackoverflow.com/questions/30170783/how-to-use-morton-orderz-order-curve-in-range-search)
- [LitMax and BigMin computation](http://docs.raima.com/rdme/9_1/Content/GS/POIexample.htm#zdivide)

![caption](https://i.stack.imgur.com/Lqa16.png)

see also:
- [Hilbert's Curve: Is infinite math useful? (3blue1Brown)](https://www.youtube.com/watch?v=3s7h2MHQtxc)
- [	Experiment with Penrose Tilings and other patterns](https://news.ycombinator.com/item?id=33818693) / [Pattern Collider](https://github.com/aatishb/patterncollider#readme)
