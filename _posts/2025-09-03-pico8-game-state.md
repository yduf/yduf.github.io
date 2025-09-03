---
title: Game State (Pico-8)
published: true
tags: game-engine pico8 lua
---
> State machine for your game - [Intro to a Main Menu](https://www.youtube.com/watch?v=nu2Ief1KYsU) / [advanced](https://nerdyteachers.com/Explain/MainMenu2/)

{% highlight lua %}
function init_menu()
    _update = update_menu
    _draw = draw_menu
end
{% endhighlight %}