---
published: true
title: 'Let''s make a Ray-Marcher [SH17C]'
tags: raytracing shader ray-marching distance
---
> Raymarching of distance field proved super powerful for creating rich images with complex shapes procedurally and interesting efficient lighting effects in a minimal amount of code. Not only the actual content creation code modeling was small, but the actual renderer itself, the whole technical setup to sinthetize images was ridiculously compact comparing to a mesh based rasterizer or raytracer. So, the exercise became really fruitful and I produced 5 images in 2008 alone that I presented to the "4 kilobyte Procedural Image" category of different demo partys across Europe. - [inigo quilez](https://iquilezles.org/www/articles/raymarchingdf/raymarchingdf.htm)

- [What is Ray Marching? Is Sphere Tracing the same thing?](https://computergraphics.stackexchange.com/questions/161/what-is-ray-marching-is-sphere-tracing-the-same-thing)

## [Coding Adventure](https://www.youtube.com/watch?v=Cp5WWtMoeKg)

[![caption](https://img.youtube.com/vi/XuSnLbB1j6E/0.jpg)](https://www.youtube.com/watch?v=XuSnLbB1j6E)

## [Tutorial 1](https://www.shadertoy.com/view/MdBfRK)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/MdBfRK?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>

## [Tutorial 2](https://www.shadertoy.com/view/4dSfRc)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/4dSfRc?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>

## basics of distance functions

Here you will find the distance functions for basic primitives, plus the formulas for combining them together for building more complex shapes, as well as some distortion functions that you can use to shape your objects. Hopefully this will be usefull for those rendering scenes with raymarching. You can see some of the results you can get by using these techniques in the [raymarching distance fields article](https://iquilezles.org/www/articles/raymarchingdf/raymarchingdf.htm).

- [ref](https://iquilezles.org/www/articles/distfunctions/distfunctions.htm)
