---
published: true
title: Bounding Box & Intersection
tags: math codingame line intersection
---
> Games use segment intersection tests all the time, for everything from line of sight to checking whether a bullet hit a monster. This is the most complicated of the four AABB tests, and is commonly known as a slab test. It finds the time of the line’s intersection with the near and far edges of each axis of the AABB. If they overlap, the segment is intersecting. - [Intersection Tests in 2D](http://noonat.github.io/intersect/)


see also
- [Minkowski sum](https://gamedev.stackexchange.com/questions/93035/whats-the-fastest-way-checking-if-two-moving-aabbs-intersect) - What's the fastest way checking if two moving AABBs intersect?
- [Line Segment Intersection](https://www.cs.umd.edu/class/spring2020/cmsc754/Lects/lect04-intersection.pdf)
	- [ Sweep-Line Algorithm for Line Segment Intersection (2/5) \| Computational Geometry - Lecture 02 ](https://www.youtube.com/watch?v=qkhUNzCGDt0)
- [An Algorithm for Polygon Intersections](https://www.gorillasun.de/blog/an-algorithm-for-polygon-intersections/) / [HN](https://news.ycombinator.com/item?id=33053320) - describe an algorithm that can compute convex polygon intersections. / method for intersections between axis-aligned rectangles, a function that can determine the intersection of two line segments, as well as a point in polygon test.
