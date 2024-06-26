---
published: true
title: Using linux as a Synth with a Midi Keyboard
tags: audio midi
---
> Simplest step for Audio setup.

### Prerequisite

Setup Linux Audio [Kernel]({% post_url 2023-11-09-linux-audio %}) and  [Pipewire]({% post_url 2021-03-04-audio-pipewire %})

# Setup a synth

### Piano
- install [sfizz SFZ intrument synthesizer](https://freepats.zenvoid.org/links.html) + [Upright Piano KW](https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html) soundfont
	- [Best free and native piano app/VST?](https://www.reddit.com/r/linuxaudio/comments/s6xwow/best_free_and_native_piano_appvst/)
    
Sfizz UI is not chown on it's own : it has to be embeded by an other software.
This work with ardour, but make the setup a bit more complex.

### Pads
- [Hydrogen drum machine with Akai LPD8 USB/MIDI pad](https://www.youtube.com/watch?v=jrHYHjIRBt4)
- [Electronic Drums as USB Midi Input Device with Hydrogen](https://www.youtube.com/watch?v=SvBweh5CoEw)
- [How to setup a MIDI drumset to work with Hydrogen ](https://www.youtube.com/watch?v=BgOHtm0Sj5o)


### see also
- [Step-by-step to run a midi keyboard input device?](https://askubuntu.com/questions/147052/step-by-step-to-run-a-midi-keyboard-input-device-12-04)
- [Simple piano application for Linux?](https://www.reddit.com/r/linuxaudio/comments/gxcxdq/simple_piano_application_for_linux/)
