---
published: true
title: 'The Center of the Pixel is (0.5, 0.5)'
publisehd: true
tags: image opengl raytracing float
---
> Pixel centers at (0.5, 0.5) is the convention adopted by all major graphics APIs (OpenGL, DirectX, Vulkan, Metal). That’s because it makes the math, especially around image scaling, becomes a lot simpler. - [HN](https://news.ycombinator.com/item?id=23498294)

One common mistake is to not think in floating point coordinates all the way through. E.g. a rectangle that covers a single pixel should have coordinates like (100.0,100.0)-(101.0,101.0), NOT involving a 0.5 offset. You almost never offset anything by 0.5 in this convention. 1 pixel wide lines are an exception, but only because then the edges of the line are exactly at pixel boundaries. 

- [The Center of the Pixel is (0.5,0.5)](http://www.realtimerendering.com/blog/the-center-of-the-pixel-is-0-50-5/)
