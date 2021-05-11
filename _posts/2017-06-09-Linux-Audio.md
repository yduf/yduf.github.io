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

## [Behringer UMC204HD](https://www.amazon.fr/Behringer-UMC204HD-U-PHORIA/dp/B00SAV96JM/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=BEHRINGER+%28UMC204HD%29&qid=1620732829&sr=8-2) / [Thomann](https://www.thomann.de/gb/behringer_u_phoria_umc204hd.htm)
- [Behringer U-PHORIA UMC202HD vs UMC204HD](https://www.youtube.com/watch?v=g3xgw1U8sIg)


## [Support](https://dragly.org/2014/01/12/focusrite-scarlett-2i2-flawlessly-working-on-ubuntu-with-jack/) for [focusrite 2i2](https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2)

- [linux issue](https://feaneron.com/2021/04/20/focusrite-is-hostile-to-linux-avoid-if-possible/)
- [latency issue](https://askubuntu.com/questions/1261052/how-to-setup-my-scarlett-2i2)
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
