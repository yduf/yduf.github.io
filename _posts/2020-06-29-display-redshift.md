---
published: true
title: RedShift
tags: red display brightness
---
> Experimentation for getting submarine environment for night work.

- [xrandr](https://unix.stackexchange.com/questions/526537/is-it-possible-to-change-my-display-to-amber-monochrome/526590#526590)
> gives you an almost monochrome red-on black. The triplet of numbers are rgb values for the gamma correction, separated by :, in the range of 0-1. Replace 1:0.01:0.01 with 0.01:1:0.01 for green, and 0.01:0.01:1 for blue. This method only works with dark/black backgrounds, because the gamma correction of bright white is just white.

{% highlight bash %}
xrandr --output $OUTPUT --gamma 1:0.01:0.01
{% endhighlight %}

Use xrandr -q to find the output ID to use for $OUTPUT; my laptop screen is LVDS-1, for instance.

- [shader](https://unix.stackexchange.com/questions/526537/is-it-possible-to-change-my-display-to-amber-monochrome/567695#567695)
> If you use a compositing window manager that supports plugins, you can likely make a plugin that will alter the screen pixels as you wish, i.e. calculate luminance of the input pixel and modulate the result with amber color (applying gamma correction back and forth as needed).
