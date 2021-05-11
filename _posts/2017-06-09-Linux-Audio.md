---
published: true
tags: linux audio guitar
title: Jack (linux audio)
---
> JACK Audio Connection Kit - [Jack application](http://jackaudio.org/applications/)

## Setup Jack Audio server
add bridge support for pulse-audio / jack (see also below)
sudo apt-get install pulseaudio-module-jack
add UI control 
sudo apt-get install qjackctl

## [Support](https://dragly.org/2014/01/12/focusrite-scarlett-2i2-flawlessly-working-on-ubuntu-with-jack/) for [focusrite 2i2](https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2)

- [linux issue](https://feaneron.com/2021/04/20/focusrite-is-hostile-to-linux-avoid-if-possible/)
- [latenct issue](https://askubuntu.com/questions/1261052/how-to-setup-my-scarlett-2i2)

![caption](https://focusrite.com/sites/focusrite/files/styles/slideshow/public/scarlett2i2-bullets-front.png?itok=oMHQG9Lf)

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
