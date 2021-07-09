---
published: true
tags: linux audio guitar DAW
title: Jack (linux audio)
---
> JACK Audio Connection Kit - [Jack application](http://jackaudio.org/applications/)

- [A Beginners Guide to Getting Started with JACK](https://linuxaudio.github.io/libremusicproduction/html/articles/demystifying-jack-%e2%80%93-beginners-guide-getting-started-jack.html)
	- [JACK Latency tests](https://wiki.linuxaudio.org/wiki/jack_latency_tests)
    - [Get rid of 0.5s latency when playing audio over Bluetooth](https://askubuntu.com/questions/145935/get-rid-of-0-5s-latency-when-playing-audio-over-bluetooth-with-a2dp) - `sudo apt install pavucontrol` changing profile can improve latency

![caption](https://linuxaudio.github.io/libremusicproduction/html/sites/default/files/articles/Jacklogo.png)

## Installation

=> [Install Pipewire]({% post_url 2021-03-04-audio-pipewire %})

## Setup Jack Audio server
add bridge support for pulse-audio / jack (see also below)
- sudo apt-get install pulseaudio-module-jack

add UI control 
- sudo apt-get install qjackctl

# App

## Patchbay 
- [managing audio connection]({% post_url 2021-07-09-audio-jack-patchbay %})

## virtual midi keyboard

[vmpk](http://vmpk.sourceforge.net/)

## Synthetize

[Qsynth + FluidSynth + soundfont](https://askubuntu.com/questions/34391/virtual-midi-piano-keyboard-setup)

## Guitar Effect

- [guitar app](http://linuxmao.org/Le+coin+des+guitaristes)
- [A Guitar Amp/Effect Solution For Linux](https://soosck.wordpress.com/2011/01/12/guitar-amplifier-effect-solution-linux/)

## Drum machine

- [Hydrogen](http://hydrogen-music.org/hcms/)
