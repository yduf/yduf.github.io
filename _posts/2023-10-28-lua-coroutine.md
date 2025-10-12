---
published: true
title: 'Animation, Cutscene & Coroutine (Pico-8)'
tags: coroutine lua pico8
---
> Want to spice up your game with animated scene between bouts of gameplay? Cutscenes are uncommon on small platforms like Pico-8. There's no room for full motion video, so a scene must be described in code or with some kind of cutscene engine. This is made much easier with a Lua feature added in Pico-8 v0.1.6: coroutines. -  [Coroutines](https://www.lexaloffle.com/bbs/?tid=3458)

To run a coroutine, you call `coresume()`. Inside of the coroutine, you can call `yield()` to pause the coroutine and return from the `coresume()` call. Then when you call `coresume()` with that coroutine again, it will continue from the last `yield` statement called.

[Example of a dialog waiting button press](https://nerdyteachers.com/PICO-8/Guide/?COROUTINES)
{% highlight lua %}
function dialog()
	print("hello")
	yield()               --pause
	print("world")
	yield()               --pause
	print("how are you?")
end

c = cocreate(dialog)

function _update()
	if btnp(4) then 
		coresume(c) 
	end
end
{% endhighlight %}

## Animation
- [Coroutines and Animation in PICO-8 ](https://www.youtube.com/watch?v=tfGmjB72t0o) - show how to put coroutines in tables to easily define async operations.
- [CutscenesAndCoroutines](https://pico-8.fandom.com/wiki/CutscenesAndCoroutines)

- [RPG Dialogue Scripting Demo](https://www.lexaloffle.com/bbs/?tid=3833) - showcase use of coroutines to create animations and dialogue.
- [Iris Effect Coroutine](https://www.reddit.com/r/pico8/comments/ne1pfb/iris_effect_coroutine/)

### see also
- [Pico-8 coroutines are occasionally dead](https://stackoverflow.com/questions/54193676/pico-8-coroutines-are-occasionally-dead)
