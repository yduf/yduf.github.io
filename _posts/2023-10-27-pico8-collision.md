---
published: true
title: Collision (Pico-8)
tags: game-engine collision pico8
toc: true
---
> Collisions in games aren't just about hitting a wall, they're about breaking through barriers, smashing expectations, and crashing into new adventures! - _ChatGPT_

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

Yet we will distinguish 2 aspects: [Map boundaries](#map-boundaries) (ground&wall) and [colliding](#sprites-collision) with other object (sprites).

# Map Boundaries

[![caption](https://github.com/RuairiD/pico8-bump.lua/raw/master/img/slide.png) ](https://github.com/RuairiD/pico8-bump.lua)

## 8x8 Sprite
- [Guides for Sprite Collision detection ...](https://www.lexaloffle.com/bbs/?tid=28145)
    - [Advanced Micro Platformer - Starter Kit](https://www.lexaloffle.com/bbs/?tid=28793)
    - [★ X-Zero](https://www.lexaloffle.com/bbs/?pid=70362#p) - big sprite x small block / virtual map
	
- [Programmer un jeu d'aventure à la Zelda](https://www.youtube.com/watch?v=opj-iZG1m94&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=6) - block level collision
    - [Micro Platformer - Simple Platforming Engine in 100 Lines of Code](https://www.lexaloffle.com/bbs/?tid=27626)
- [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - en mode casse brick

- [Pixel Perfect collision](https://forums.insertcredit.com/d/543-pico-8-dev-diary/7) 
	- [celeste work](https://github.com/ExOK/Celeste2)
		- tour of [Celest movement (MIT Licenced)](https://www.youtube.com/watch?v=RJN83kSzh2k&t=258s)


[![caption](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/05/fget_col.gif)](http://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles)

see also
- [How to make a Platformer Game!](https://nerdyteachers.com/Explain/Platformer/)
- [Pico-8 Collisions with background tiles using fget and mget](https://www.youtube.com/watch?v=Gs0XFViFxFs) / [blog](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles) - xy to grid location / flag on map with 8x8 block.
	- [Simple Collision Function](https://www.lexaloffle.com/bbs/?tid=3116) demo cart
    - [online interactive](https://nerdyteachers.com/PICO-8/Collision/98)

[![8x8 collision map schema](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/05/fget_explanation.png)](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles)

## Arbitrary Sized Sprite
- [Map-Collision Example](https://www.lexaloffle.com/bbs/?tid=46181) - big sprite x small block - rectangular check on 8pix checkpoint

## General AABB solution
- [pico8-bump.lua ](https://github.com/RuairiD/pico8-bump.lua) - see also **Hit** below

[![demo](https://camo.githubusercontent.com/5ab4531956fc1722485ad0f1e781b69bf5f3d6f0aaa3a06f5b9348c096a9958e/68747470733a2f2f6b696b69746f2e6769746875622e696f2f62756d702e6c75612f696d672f62756d702d73696d706c6564656d6f2e676966)](https://github.com/RuairiD/pico8-bump.lua)

# Sprites Collision
- [Hit (pico8)](https://github.com/kikito/hit.p8?tab=readme-ov-file#hit) - Axis-Aligned Bounding Boxes (AABB) function that doing continuous collision detection - from same authors as [bump.lua](https://github.com/kikito/bump.lua?tab=readme-ov-file#bumplua)
	- [A PICO-8 Spaceshooter in 16 GIFs](https://ztiromoritz.github.io/pico-8-shooter/) - collision using box
    - [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - collision detection is a big deal!
    
[![aabb](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/03/square_collision.png)](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-hitting-things)
    
### Invisible Hitbox

For sprite to sprite, instead of trying to calculate the collision of what is displayed on screen you could use invisibles hitbox.

[![hitbox illustration](https://www.lexaloffle.com/bbs/files/13994/Image%20du%20presse-papiers.jpg)](https://www.lexaloffle.com/bbs/?pid=33068#p)

see also
- [Collision Detection (An Overview) (UPDATED!)](https://www.youtube.com/watch?v=oOEnWQZIePs) -  AABB vs SAT.