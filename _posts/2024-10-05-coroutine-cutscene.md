---
title: How to implement action sequences and cutscenes
published: true
tags: coroutine codingame lua
---
> This post will show ways of implementing actions sequences and cutscenes in video games. - [Elias Daler](https://edw.is/how-to-implement-action-sequences-and-cutscenes/)

Possible way of doing it:
- State machine (with a lot of if in bruteforce case) 
- Action list 
- Coroutine - combined with action list

The approach is not perfect, however. For example, it’s hard to handle saving. For example, suppose that you have a long tutorial which is just one big coroutine. The player won’t be able to save during this tutorial, because you’d have to serialize coroutine’s state and then resume coroutine exactly from the point it was paused at.

{% highlight lua %}
local function f()
  print("hello")
  coroutine.yield()
  print("world!")
end

local c = coroutine.create(f)
coroutine.resume(c)
print("uhh...")
coroutine.resume(c)
{% endhighlight %}

Which output
{% highlight lua %}
hello
uhh...
world
{% endhighlight %}

### see also
- [Coroutine (Lua)]({% post_url 2023-10-28-lua-coroutine %})

[![caption](https://edw.is/how-to-implement-action-sequences-and-cutscenes/coroutine-game-loop.png)](https://edw.is/how-to-implement-action-sequences-and-cutscenes/)