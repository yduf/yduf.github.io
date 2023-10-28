---
published: true
title: Develop on Pico8
tags: pico8 codingame lua
---
> Getting Started - [Tutorial](https://forum.clockworkpi.com/t/pico-8-gamedev-1-getting-started-tutorial/2347) / [Guide](https://nerdyteachers.com/PICO-8/Guide/?Getting-started) / [Awesome PICO-8](https://pico-8.github.io/awesome-PICO-8/) / [Helpful Posts](https://www.lexaloffle.com/bbs/?tid=46423&tkey=nRj2qnQJGlshLM9R9bJs)

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

### [Keyboard Shortcuts](https://pico-8.fandom.com/wiki/Keyboard_Shortcuts)
Reload/Run/Restart  Ctrl+R  
Quick-Save          Ctrl+S    

### [Lua](https://pico-8.fandom.com/wiki/Lua)
- [Tables](https://pico-8.fandom.com/wiki/Tables)
	- Metatables ?
- [Coroutines]({% post_url 2023-10-28-lua-coroutine %})
- [using External Editor]({% post_url 2023-10-22-vscode-pico8 %})
- [multi assignment](https://stackoverflow.com/questions/15256516/how-does-multiple-assignment-work) - `local x,y = 10, 11`
- [Multiline comments](https://stackoverflow.com/a/22722493/51386)
- [16.16 fixed point numbers](https://www.lexaloffle.com/bbs/?tid=39319) - need a library for float

{% highlight lua %}
--[=====[ 
for k,v in pairs(t) do
   local d = fullToShort[k]
   local col = xColours[v[1]] -- It stops here!
   cecho(string.format(("<%s>%s ", col, d))
end
--]=====]
{% endhighlight %}


### Tips
- [Circular Clipping Masks](https://www.lexaloffle.com/bbs/?tid=46286)
- [Storing Binary Data as Strings](https://www.lexaloffle.com/bbs/?tid=38692)

### Tutorials
- [Pico-8 Tutorial Crash Course For TOTAL Game Dev Beginners!](https://www.youtube.com/watch?v=LTMN5ItzzuA) - general intro on tools available - very basic sprite move
- [Let's make a PICO-8 Game in 30 Minutes!](https://www.youtube.com/watch?v=RJN83kSzh2k) - more complete overview
	- how to reuse existing game to make your own - [use celest movement (MIT Licenced)](https://www.youtube.com/watch?v=RJN83kSzh2k&t=258s)
- [Programmer des mini-jeux avec PICO-8 ! Tuto pour débuter](https://www.youtube.com/watch?v=YXbR0eqPoAw&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=1)
	- [Programmer un shoot'em up !](https://www.youtube.com/watch?v=Ri8fqTMizmI&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=3)
	- [Programmer un jeu d'aventure à la Zelda](https://www.youtube.com/watch?v=opj-iZG1m94&list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE&index=5)
		- moitié basse de la map / partagé avec les planche de sprites 3 & 4

### [Debug](https://www.reddit.com/r/pico8/comments/s1dzk9/how_to_debug_a_game_in_pico8/)

- [log/debug tips](https://youtu.be/srPKBhzgZhc?feature=shared&t=392)

- You can also STOP() in code and it will stop the interpreter. Then run “.” To single step. “R” to continue running.

- You can also inspect variable with [print](https://youtu.be/srPKBhzgZhc?feature=shared&t=680) from pico8 console.
	- and from code itself  [`print('score: '..score, 0, 120, 8)`](https://pico-8.fandom.com/wiki/Print)
    
- [printh](https://www.lexaloffle.com/bbs/?tid=2549) -  prints a string to the host operating system's console.

- [HELP: Performance profiling?](https://www.lexaloffle.com/bbs/?pid=51496)
