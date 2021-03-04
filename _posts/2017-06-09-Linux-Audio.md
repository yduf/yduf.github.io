---
published: true
tags: linux audio
title: Jack (linux-audio)
---
## Setup Jack Audio server

add bridge support for pulse-audio / jack (see also below)

sudo apt-get install pulseaudio-module-jack

add UI control 

sudo apt-get install qjackctl


[Jack application](http://jackaudio.org/applications/)

## [Support for focusrite 2i2](https://dragly.org/2014/01/12/focusrite-scarlett-2i2-flawlessly-working-on-ubuntu-with-jack/)

other:
- [1](http://linuxmao.org/Focusrite+Scarlett+2i2)
- [2](https://tuxicoman.jesuislibre.net/2016/09/focusrite-2i2-2eme-generation-sous-linux.html)
- [linux hardware support](https://wiki.linuxaudio.org/wiki/hardware_support)

## Killing Pulse Audio

sudo killall pulseaudio

This is necessary to redirect pulse audio through Jack
(otherwise video player will freee for example)

[see also](http://jackaudio.org/faq/pulseaudio_and_jack.html)


# Audio app

# virtual midi keyboard

[vmpk](http://vmpk.sourceforge.net/)

# Synthetize

[Qsynth + FluidSynth + soundfont](https://askubuntu.com/questions/34391/virtual-midi-piano-keyboard-setup)

# Guitar Effect

[guitar app](http://linuxmao.org/Le+coin+des+guitaristes)

[A Guitar Amp/Effect Solution For Linux](https://soosck.wordpress.com/2011/01/12/guitar-amplifier-effect-solution-linux/)

# Drum machine

[Hydrogen](http://hydrogen-music.org/hcms/)
