---
published: true
---
## Setup Jack Audio server

add bridge support for pulse-audio / jack (see also below)

sudo apt-get install pulseaudio-module-jack

add UI control 

sudo apt-get install qjackctl


## [Support for focusrite 2i2](https://dragly.org/2014/01/12/focusrite-scarlett-2i2-flawlessly-working-on-ubuntu-with-jack/)

## Killing Pulse Audio

sudo killall pulseaudio

This is necessary to redirect pulse audio through Jack
(otherwise video player will freee for example)

[see also](http://jackaudio.org/faq/pulseaudio_and_jack.html)
