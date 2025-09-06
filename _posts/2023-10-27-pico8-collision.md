---
published: true
title: Collision (Pico-8)
tags: game-engine collision pico8
toc: true
---
> Collisions in games aren't just about hitting a wall, they're about breaking through barriers, smashing expectations, and crashing into new adventures! - _ChatGPT_

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

Yet we will distinguish 2 aspects: Map boundaries (ground&wall) et colliding with other object (sprites).

# Map Boundaries

[![caption](https://github.com/RuairiD/pico8-bump.lua/raw/master/img/slide.png) ](https://github.com/RuairiD/pico8-bump.lua)

### Collision

- [Guides for Sprite Collision detection ...](https://www.lexaloffle.com/bbs/?tid=28145)

- [Map-Collision Example](https://www.lexaloffle.com/bbs/?tid=46181) - big sprite x small block
	- [First Steps in PICO-8: Easy Collisions with Map Tiles](http://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles) - half filled tiles
	- [Simple Collision Function](https://www.lexaloffle.com/bbs/?tid=3116) - pixel level box collision - same size as map
    - [Advanced Micro Platformer - Starter Kit](https://www.lexaloffle.com/bbs/?tid=28793)
    - [pico8-bump.lua ](https://github.com/RuairiD/pico8-bump.lua)
    - [★ X-Zero](https://www.lexaloffle.com/bbs/?pid=70362#p) - big sprite x small block / virtual map
	
- [Programmer un jeu d'aventure à la Zelda](https://www.youtube.com/watch?v=opj-iZG1m94&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=6) - block level collision
    - [Micro Platformer - Simple Platforming Engine in 100 Lines of Code](https://www.lexaloffle.com/bbs/?tid=27626)
- [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - en mode casse brick

- [Pixel Perfect collision](https://forums.insertcredit.com/d/543-pico-8-dev-diary/7) 
	- [celeste work](https://github.com/ExOK/Celeste2)
		- tour of [Celest movement (MIT Licenced)](https://www.youtube.com/watch?v=RJN83kSzh2k&t=258s)


[![caption](http://gamedev.docrobs.co.uk/wp-content/uploads/2018/05/fget_map.png) ](http://gamedev.docrobs.co.uk/first-steps-in-pico-8-easy-collisions-with-map-tiles)

see also
- [How to make a Platformer Game!](https://nerdyteachers.com/Explain/Platformer/)

# Sprites Collision
- [Hit (pico8)](https://github.com/kikito/hit.p8?tab=readme-ov-file#hit) - Axis-Aligned Bounding Boxes (AABB) function that doing continuous collision detection - from same authors as [bump.lua](https://github.com/kikito/bump.lua?tab=readme-ov-file#bumplua)
	- [A PICO-8 Spaceshooter in 16 GIFs](https://ztiromoritz.github.io/pico-8-shooter/) - collision using box
    - [Breakout #6 - Collision - Pico-8 Hero](https://www.youtube.com/watch?v=ejDC-aIgVIE) - collision detection is a big deal!