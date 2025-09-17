---
title: Game State (Pico-8)
published: true
tags: game-engine pico8 lua
---
> State machine for your game - [Intro to a Main Menu](https://www.youtube.com/watch?v=nu2Ief1KYsU) / [advanced](https://nerdyteachers.com/Explain/MainMenu2/)

see also
- [Adding a Main Menu to a Pico 8 game.](https://www.youtube.com/watch?v=5G5Pj-0e0y4)

{% highlight lua %}
function draw_menu()
  print("press ❎ to start", 30, 60, 6)
end

function init_menu()
    _update = update_menu
    _draw = draw_menu
end
{% endhighlight %}
