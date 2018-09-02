---
published: true
title: Flashing arduino (cli)
tags: arduino cli linux firmware
---
## Install [avrdude]()

avrdude is part of arduin sdk. It can also be installaed alone:
{% highlight bash %}
sudo apt-get install avrdude
{% endhighlight %}

## [using avrdude](https://typeunsafe.wordpress.com/2011/07/22/programming-arduino-with-avrdude/)

### for AtMEga 2560 board
{% highlight bash %}
avrdude -p"atmega2560" -c"wiring" -P"/dev/ttyUSB0" -D -U"flash:w:[put-hex-file-path-here]:i"
{% endhighlight %}
