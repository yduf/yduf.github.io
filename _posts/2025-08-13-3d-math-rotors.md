---
title: Rotors
published: true
tags: math-3d graphic-3d geometry algebra
use_math: true
---
> 3D Rotors are in a sense the true form of quaternions, or in other words Quaternions are an obfuscated version of Rotors. - [Let's remove Quaternions from every 3D Engine](https://marctenbosch.com/quaternions/)
 / [HN](https://news.ycombinator.com/item?id=43234510)

Rotors (unlike quaternions) can easily be extended to higher dimensions

Rotors like [quaternions]({% post_url 2018-09-07-quaternion %}) also require 4 dimensions to represent 3d rotations, they're just labeled slightly more intuitively. - [HN](https://news.ycombinator.com/item?id=43268272):

- **quaterions**: $ a + b*i + c*j + d*k $  
- **rotors**:  $ a + b*xy + c*yz + d*zx $

### [bivector](https://marctenbosch.com/quaternions/#bivectors)

Bivectors have components, just like vectors. But they are defined in terms of basis planes instead of basis lines like vectors.

The idea of a bivector might seem a bit strange at first, but they are pretty much as fundamental as vectors. If a vector is like a line, **then a bivector is like a plane**... The properties of the outer product are suited to capture the properties of planes.

In 3D, a bivector has three coordinates, one per plane: (xy, xz, and yz). Vectors also have three coordinates, one per axis (x, y and z). Each plane is perpendicular to one axis. **This is a coincidence that only happens in three dimensions** (*) and it is why historically we have been confusing bivectors with vectors.

_(*) In 2D there is only one basis bivector (xy), in 3D there are 3 basis bivectors (xy,xz,yz), in 4D there are 6 basis bivectors (xy,xz,xw,yz,yw,zw), etc..._

In programming terms, they both have the same memory layout, but different operations. Using a 3D vector instead of a 3D bivector is like "type-casting" the bivector.