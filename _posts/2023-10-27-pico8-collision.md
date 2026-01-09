---
published: true
title: Collision (Pico-8)
tags: pico8 game-engine collision
toc: true
---
> Collisions in games aren't just about hitting a wall, they're about breaking through barriers, smashing expectations, and crashing into new adventures! - _ChatGPT_

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

Yet we will distinguish 2 aspects: [Map boundaries](#map-boundaries) (ground&wall) and [colliding](#sprites-collision) with other object (sprites).

# Map Boundaries

- [Zelda in Pico-8 - Top-Down Movement](https://prose.io/#yduf/yduf.github.io/edit/master/_posts/2023-10-28-pico8-map.md)

[![caption](https://github.com/RuairiD/pico8-bump.lua/raw/master/img/slide.png) ](#general-aabb-solution)

## 8x8 Sprite
Pico8 engine provide a lot of support for this through the map & flag function: converting sprite 8x8 coordinates to map coordinate and retrieving cell flags, allows to check for obstacle easily on the 8x8 grid map... at least for cell to cell moves.

[![8x8 collision map schema](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/05/fget_explanation.png)](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles)

Some example using this technics:
- [How to make a Platformer Game!](https://nerdyteachers.com/Explain/Platformer/)
- [Pico-8 Collisions with background tiles using fget and mget](https://www.youtube.com/watch?v=Gs0XFViFxFs) / [blog](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles) - xy to grid location / flag on map with 8x8 block.
	- [Simple Collision Function](https://www.lexaloffle.com/bbs/?tid=3116) demo cart
    - [online interactive](https://nerdyteachers.com/PICO-8/Collision/98)
- [Guides for Sprite Collision detection ...](https://www.lexaloffle.com/bbs/?tid=28145)
    - [Advanced Micro Platformer - Starter Kit](https://www.lexaloffle.com/bbs/?tid=28793)
	- [Programmer un jeu d'aventure à la Zelda](https://www.youtube.com/watch?v=opj-iZG1m94&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=6) - block level collision
    - [Micro Platformer - Simple Platforming Engine in 100 Lines of Code](https://www.lexaloffle.com/bbs/?tid=27626)
- [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - en mode casse brick
    
[![caption](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/05/fget_col.gif)](http://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles)

Previously:
- [Pixel Perfect collision](https://forums.insertcredit.com/d/543-pico-8-dev-diary/7) 
	- [celeste work](https://github.com/ExOK/Celeste2)
		- tour of [Celest movement (MIT Licenced)](https://www.youtube.com/watch?v=RJN83kSzh2k&t=258s)

## Arbitrary Sized Sprite
For sprite greater than 8x8, you can thought of them as composite sprite, and by checking on 8 fence pole bouding box, achieve the same behavior implemented above:
- [Map-Collision Example](https://www.lexaloffle.com/bbs/?tid=46181) - big sprite x small block - rectangular check on 8x8pix checkpoint
- [★ X-Zero](https://www.lexaloffle.com/bbs/?pid=70362#p) - big sprite x small block / virtual map

## General AABB solution

- [pico8-bump.lua ](https://github.com/RuairiD/pico8-bump.lua?tab=readme-ov-file#pico8-bumplua) 
	- see also [**Hit**](#sprites-collision) for Pico8 below (422 tokens vs 2646)

[![demo](https://camo.githubusercontent.com/5ab4531956fc1722485ad0f1e781b69bf5f3d6f0aaa3a06f5b9348c096a9958e/68747470733a2f2f6b696b69746f2e6769746875622e696f2f62756d702e6c75612f696d672f62756d702d73696d706c6564656d6f2e676966)](https://github.com/RuairiD/pico8-bump.lua)

# Sprites Collision

## Simple approach  
- [A PICO-8 Spaceshooter in 16 GIFs](https://ztiromoritz.github.io/pico-8-shooter/) - collision using box
- [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - collision detection is a big deal!

[![aabb](https://gamedev.docrobs.co.uk/wp-content/uploads/2018/03/square_collision.png)](https://gamedev.docrobs.co.uk/first-steps-in-pico-8-hitting-things)

## More General
- [Hit (pico8)](https://github.com/kikito/hit.p8?tab=readme-ov-file#hit) - Axis-Aligned Bounding Boxes (AABB) function that doing continuous collision detection - from same authors as [bump.lua](https://github.com/kikito/bump.lua?tab=readme-ov-file#bumplua)
	- There is card on repo that demonstrate hit code
    
[![hit card](https://github.com/kikito/hit.p8/raw/365c01dafec9b666641ccc62b134c55ff4a6a464/hit.p8.png)](https://www.lexaloffle.com/bbs/widget.php?pid=hit)
    
### Invisible Hitbox

For sprite to sprite, instead of trying to calculate the collision of what is displayed on screen you could use invisibles hitbox.

[![hitbox illustration](https://www.lexaloffle.com/bbs/files/13994/Image%20du%20presse-papiers.jpg)](https://www.lexaloffle.com/bbs/?pid=33068#p)

### [Pixel Perfect](https://www.lexaloffle.com/bbs/?tid=3510)
Pixel perfect sprite-based collision using mask derived from sprite.
- [bitmask example](https://www.lexaloffle.com/bbs/?pid=98474#p)
	- [defenderexample](https://www.lexaloffle.com/bbs/?tid=44925)
	- [Collision By Pixel](https://www.lexaloffle.com/bbs/?pid=70416)

see also
- [Collision (nerdyteachers)](https://nerdyteachers.com/PICO-8/Collision/)
- [Collision Detection (An Overview) (UPDATED!)](https://www.youtube.com/watch?v=oOEnWQZIePs) -  AABB vs SAT.
- [Building Collision Simulations: An Introduction to Computer Graphics](https://www.youtube.com/watch?v=eED4bSkYCB8&t=825s) - multi sphere collision
	- filter test by projecting bounding box on one axis
    - K-D Trees
    - Bouding Volume Hierarchies
- [ locus.p8 ](https://www.lexaloffle.com/bbs/?pid=165425) / [github](https://github.com/kikito/locus.p8?tab=readme-ov-file#locusp8) - A sparse spatial grid for Pico-8
