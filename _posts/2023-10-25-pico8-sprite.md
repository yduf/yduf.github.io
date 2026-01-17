---
published: true
title: Sprite (Pico-8)
tags: pico8 sprite pixelart online
toc: true
---
> A small or elusive supernatural being; an elf or pixie. - [noun](https://www.wordnik.com/words/sprite)

For collision looks [here]({% post_url 2023-10-27-pico8-collision %})

see also
- [Vector Sprite]({% post_url 2023-11-12-games-pico8 %}#vector-game)
	- [Anti-aliased vectors](https://www.lexaloffle.com/bbs/?pid=49754) by elice and freds72.

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

# Editor

Tips for the Embeded Pico 8 Editor
- **to swap out a color** in your sprite for another one, just select the color you want and control-click the color you’re replacing to instantly replace all of it.
- [poke(0x5f2e,1)](https://www.lexaloffle.com/bbs/?tid=54390) - prevents PICO-8 from resetting the palette when you return to the editor - so you can used customized palette to draw sprite

**Online editor**: [draw pico-8 sprites!](https://nerdyteachers.com/PICO-8/Draw/Sprite/) - up to 32x32

# Sprite Animation
- [The secret guide to bullets, sprites, and animations](https://www.lexaloffle.com/bbs/?tid=44686)

## Basic
- [Easy Sprite Animation in Pico-8 - Beginner Tutorial](https://www.youtube.com/watch?v=8JQz2SL5_Js) - cover animation as basic example
	- animation loop & boundary
    - speed setting

Assuming you have GFX 8x8 sprite available from 1 to 5, code looks like this (from [How to Animate a Sprite!](https://nerdyteachers.com/PICO-8/Game_Mechanics/?tutorial=4)):
{% highlight lua %}
sprite = 1
x = 64
y = 64
timing = 0.25

function _draw()
    cls()
    spr(sprite, x, y)
end

function _update()
    --animate
    sprite += timing
    if sprite >= 5 then sprite = 1 end
end
{% endhighlight %}

###  [`anim()`](https://www.lexaloffle.com/bbs/?tid=3115&autoplay=1#pp)

Obviously code above can be made generic (see  [`anim()`](https://www.lexaloffle.com/bbs/?tid=3115&autoplay=1#pp)),
and complefixied when dealing with non-symetrical actor (multi 8x8 sprite) (see [Advanced animation](https://www.lexaloffle.com/bbs/?pid=19274&tid=3135&autoplay=1#pp)).

see also
- [Study notes on Pico-8 movement](https://ljvmiranda921.github.io/notebook/2021/01/31/pico8-offset/)
- [Reusable Actor Class (Quick Start Library) ](https://www.reddit.com/r/pico8/comments/12awvi5/reusable_actor_class_quick_start_library/) / [github](https://github.com/gcoulby/pico-8-reusable-actor) / [demo]()

### External tools
- [`export`](https://youtu.be/srPKBhzgZhc?feature=shared&t=724)
	- `export spritesheet.png`
	- `import spritesheet.png`
- [respriter](https://www.lexaloffle.com/bbs/?tid=35255) -  move sprites around and have the map updated to point to the new location of your sprites ( remove the 2 square brackets on tab 5, line 375. to fix bugs on latest version)

### Flipping Sprite

[`spr`](https://pico-8.fandom.com/wiki/Spr) has direct support to flip sprite around x and y.

### Sprite Rotation
- [tline sprite rotation/scaling](https://www.lexaloffle.com/bbs/?pid=78451)
- [tline sprite rotation demo/mini-tutorial](https://www.lexaloffle.com/bbs/?tid=45269)
- [Sprite Rotation](https://www.lexaloffle.com/bbs/?tid=41632) - 64x64
- [2D transforms](https://www.lexaloffle.com/bbs/?tid=49055)


### Animating Big Sprite

- [How to Animate 16x16 Sprites in Pico-8](https://www.youtube.com/watch?v=LkA5NhHFoVM)
- [4x4 Sprites](https://www.lexaloffle.com/bbs/?tid=3287) - use sspr()
	- [sspr() is twice as slow as spr()](https://www.lexaloffle.com/bbs/?pid=20105#p) - There are indeed 'artificial' costs assigned to the internal draw operations. For spr() it's around 1 Lua vm instruction per drawn pixel, and sspr() it's 2.

### Outline
- [More efficient sprite outline](https://www.lexaloffle.com/bbs/?pid=145863#p)
- [Cloud Outline](https://www.lexaloffle.com/bbs/?tid=36885)

### Generating Sprite
- [Procedural Animated Sprites Using Screen Space in Pico-8](https://www.youtube.com/watch?v=GZ_U5vXcH8M) / [itch.io](https://isaacgames.itch.io/synthwave-visualizer) - retro sun animation with sprite generated gradiant

### Exploding Sprite
- [how to manipulate sprite pixels](https://www.lexaloffle.com/bbs/?tid=39162)

### Tips
- [Shadow Techniques](https://www.lexaloffle.com/bbs/?tid=27653) - PEEK/POKE MERGE
- [exploding sprite in particle](https://www.lexaloffle.com/bbs/?tid=39162)
- [draws a sprite to the screen with an outline of the specified colour](https://gist.github.com/Liquidream/1b419261dc324708f008f24ee6d13d7b)
- [z-index](https://www.lexaloffle.com/bbs/?pid=35182) - use hash (table) indexed on z, rather than sorting sprite for drawing

### Collision
For collision looks [here]({% post_url 2023-10-27-pico8-collision %})

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


### Storing sprite
- [Spritesheet To P8SCII](https://www.lexaloffle.com/bbs/?tid=49536)

### see also
- [Tutorial: Additional Sprite Memory](https://www.lexaloffle.com/bbs/?tid=33758)
- [Sprite Stacking with lighting in GameMaker Studio 2.3 - Part 1](https://www.youtube.com/watch?v=DNDwo7855Gs)
