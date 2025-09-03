---
published: true
title: Games Map (Pico-8)
tags: codingame pico8
layout: pico8
---
> [Making a Roguelike](https://www.youtube.com/watch?v=qLIPY0ro5UY&t=108s)

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />


### Tricks
- [Smooth Map Screens Transition](https://mboffin.itch.io/pico-8-smooth-map-screens)
	- see end of [Programmer un jeu d'aventure EP3 : Dialogues et animations](https://www.youtube.com/watch?v=z2A-Cr4ESZ4)
- [ Spawn Enemies](https://www.youtube.com/watch?v=8jb8SHNS66c)
- [Study notes on Pico-8 movement](https://ljvmiranda921.github.io/notebook/2021/01/31/pico8-offset/)

### Map Editor

- [jaP8e](https://www.lexaloffle.com/bbs/?tid=49307) / [github](https://github.com/GPIforGit/jaP8e) - Editor for code, graphic, charset, sound

[![caption](https://www.lexaloffle.com/media/58188/map.gif)](https://www.lexaloffle.com/bbs/?tid=49307)

- [Picohorn](https://github.com/WuffMakesGames/Picohorn#picohorn)  - map editor for celeste

- [PicoMap](https://www.lexaloffle.com/bbs/?tid=42848) -  allows console game size worlds to fit in a single Pico-8 cart.

### [Reload](https://www.youtube.com/watch?v=QF5jZWAhl1s&list=PLea8cjCua_P3LL7J1Q9b6PJua0A-96uUS&index=16&t=726s)
{% highlight lua %}
reload(0x2000,0x2000,0x1000)	-- reset the map to its card definition
{% endhighlight %}
