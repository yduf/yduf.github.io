---
published: true
title: Flashing arduino (cli)
tags: arduino cli linux firmware
---
## [using avrdude](https://typeunsafe.wordpress.com/2011/07/22/programming-arduino-with-avrdude/)

{% highlight bash %}
avrdude -v -p atmega328p -c arduino -P /dev/ttyUSB0 -b 57600 -D -U flash:w:blink.hex:i
{% endhighlight %}

