---
published: true
title: Bitplane (Pico-8)
tags: pico8
---
> [Bitplanes! An overview](https://www.lexaloffle.com/bbs/?pid=134773)

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

### [0x5f5e / 24414](http://pico8wiki.com/index.php?title=Memory#Map)

Allows PICO-8 to mask out certain bits of the input source color of drawing operations, and to write to specific bitplanes in the screen (there's 4 of them since PICO-8 uses a 4BPP display). Bits 0..3 indicate which bitplanes should be set to the new color value, while bits 4..7 indicate which input color bits to keep.
    
For example, poke(0x5f5e, 0b00110111) will cause drawing operations to write to bitplanes 0, 1, and 2 only, with 0 and 1 receiving the color value bits, 2 being cleared, and 3 being unaltered.
This formula is applied for every pixel written:

{% highlight lua %}
dst_color = (dst_color & ~write_mask) | (src_color & write_mask & read_mask)
{% endhighlight %}

[![caption](https://www.lexaloffle.com/media/1/bunny_1.gif)](https://www.lexaloffle.com/bbs/?tid=50632)
