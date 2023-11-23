---
published: true
title: Sprite (Pico-8)
tags: pico8 sprite pixelart
---
> A small or elusive supernatural being; an elf or pixie. - [noun](https://www.wordnik.com/words/sprite)

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

- [The secret guide to bullets, sprites, and animations](https://www.lexaloffle.com/bbs/?tid=44686)
- [draw pico-8 sprites!](https://nerdyteachers.com/PICO-8/Draw/Sprite/) - up to 32x32

### External tools
- [`export`](https://youtu.be/srPKBhzgZhc?feature=shared&t=724)
	- `export spritesheet.png`
	- `import spritesheet.png`
- [respriter](https://www.lexaloffle.com/bbs/?tid=35255) -  move sprites around and have the map updated to point to the new location of your sprites ( remove the 2 square brackets on tab 5, line 375. to fix bugs on latest version)

### Sprite Rotation
- [tline sprite rotation/scaling](https://www.lexaloffle.com/bbs/?pid=78451)
- [Sprite Rotation](https://www.lexaloffle.com/bbs/?tid=41632) - 64x64

### Animating Big Sprite

- [How to Animate 16x16 Sprites in Pico-8](https://www.youtube.com/watch?v=LkA5NhHFoVM)
- [4x4 Sprites](https://www.lexaloffle.com/bbs/?tid=3287) - use sspr()
	- [sspr() is twice as slow as spr()](https://www.lexaloffle.com/bbs/?pid=20105#p) - There are indeed 'artificial' costs assigned to the internal draw operations. For spr() it's around 1 Lua vm instruction per drawn pixel, and sspr() it's 2.

### Collision
- [Guides for Sprite Collision detection ...](https://www.lexaloffle.com/bbs/?tid=28145)

### [Stacked Sprites](https://www.youtube.com/watch?v=_Z5eg9UvLRw)

- [Beginners Guide to Sprite Stacking using Magica Voxel and GameMaker Studio 2 or any Other Engine](https://medium.com/@avsnoopy/beginners-guide-to-sprite-stacking-in-gamemaker-studio-2-and-magica-voxel-part-1-f7a1394569c0)
- [Flaming Stacks: Using stacked sprites in Flame](https://blog.codemagic.io/flaming-stacks/)
- [Sprite Stacking](https://www.samd.is/2020/04/10/sprite-stacking.html) -  How to Make a 3D Game with a 2D Engine
- [Sprite stacking example](https://www.lexaloffle.com/bbs/?pid=80083)

{::nomarkdown}
<div class="myvideo">
   <video  style="display:block; width:100%; height:auto;" autoplay controls loop="loop">
       <source src="https://preview.redd.it/nagwcs5ih9db1.gif?format=mp4&s=de675ac91c34d5696dbac07e8030629e746e882b"  type="video/mp4"  />
   </video>
</div>
{:/}

### [Sprite Composer](https://www.lexaloffle.com/bbs/?tid=50974)

Create animation from sprite composition

[ ![caption](https://www.lexaloffle.com/media/72593/home_explore%20p8_0.gif) ](https://www.lexaloffle.com/bbs/?tid=50908)


### see also
- [Tutorial: Additional Sprite Memory](https://www.lexaloffle.com/bbs/?tid=33758)
- [Sprite Stacking with lighting in GameMaker Studio 2.3 - Part 1](https://www.youtube.com/watch?v=DNDwo7855Gs)
