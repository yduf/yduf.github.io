---
published: true
tags: linux audio guitar
title: Jack (linux audio)
---
> JACK Audio Connection Kit - [Jack application](http://jackaudio.org/applications/)

## Setup Jack Audio server
add bridge support for pulse-audio / jack (see also below)
- sudo apt-get install pulseaudio-module-jack

add UI control 
- sudo apt-get install qjackctl




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
