---
title: remap
published: true
tags: concept algorithm
---
> What a difference a function makes - [I Like Big Bits](http://www.ilikebigbits.com/2015_02_05_remap.html)

[![caption](http://www.ilikebigbits.com/2015_02_05_remap/remap.png) ](http://www.ilikebigbits.com/2015_02_05_remap.html)

It makes writing and reading the code an order of magnitude easier. 

{% highlight cpp %}
inline float remap(float x, float in_min, float in_max,
                   float out_min, float out_max)
{
    float t = (x - in_min) / (in_max - in_min);
    return lerp(out_min, out_max, t);
}

inline float remap_clamp(float x, float in_min, float in_max,
                         float out_min, float out_max)
{
    float t = (x - in_min) / (in_max - in_min);
    t = clamp(t, 0, 1);
    return lerp(out_min, out_max, t);
}
{% endhighlight %}

Usage

{% highlight cpp %}
alpha = remap_clamp(time, fade_start, fade_stop, 1, 0);
normal_encoded = remap(normal, -1, +1, 0, 255);
normal = remap(normal_encoded, 0, 255, -1, +1);
brightness = remap_clamp(distance, inner_radius, outer_radius, 1, 0);
water_height = remap(noise, -1, +1, min_height, max_height);
{% endhighlight %}