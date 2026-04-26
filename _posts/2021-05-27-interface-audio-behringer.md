---
published: true
title: Behringer UMC204HD / UMC404HD
tags: DAW audio-hardware guitar midi network bus
toc: true
---
> Interface audio numérique USB - [Thomann](https://www.thomann.de/fr/behringer_u_phoria_umc204hd.htm?ref=intl&shp=eyJjb3VudHJ5IjoiZnIiLCJjdXJyZW5jeSI6MiwibGFuZ3VhZ2UiOiJmciJ9)

# [Behringer U-PHORIA UMC202HD vs UMC204HD](https://www.youtube.com/watch?v=g3xgw1U8sIg)
- test with [ardour](https://discourse.ardour.org/t/behringer-umc204hd-and-umc404hd/104756)
- [ Interface walkthrough](https://www.youtube.com/watch?v=dJaYyyn8eAE)

[![caption](https://images.static-thomann.de/pics/bdb/359082/12426217_800.jpg)](https://www.thomann.de/fr/behringer_u_phoria_umc204hd.htm?ref=intl&shp=eyJjb3VudHJ5IjoiZnIiLCJjdXJyZW5jeSI6MiwibGFuZ3VhZ2UiOiJmciJ9)

[![caption](https://discourse.ardour.org/uploads/default/original/2X/5/5926b8834dfdcda049ed39a4a4a34240495ebbf6.jpeg)](https://www.thomann.fr/behringer_u_phoria_umc204hd.htm?ref=intl&shp=eyJjb3VudHJ5IjoiZnIiLCJjdXJyZW5jeSI6MiwibGFuZ3VhZ2UiOiJmciJ9)

## Configuration 

**48V** - Le bouton pour desactiver le **48V** se trouve sur la face arriere => il agit globalement.
**LINE** (⬛ désactivé) - Pour des sources niveau ligne (clavier, synthé, boîte à rythmes, sortie d’un autre appareil audio).
- Le signal est déjà amplifié, donc pas besoin de gain élevé.
**INST** (▬ activé) - Pour brancher directement une guitare ou basse (signal instrument, haute impédance).
- L’entrée devient adaptée aux micros passifs d’instruments.
**PAD** - le PAD atténue le signal entrant (généralement de **-15 dB** environ).
- (▬ activé) - Réduit un signal trop fort pour éviter la saturation (clipping). Utile avec :
  - micros très puissants (ex : batterie, ampli guitare)
  - sources ligne très “chaudes”
  - Si ça sature même avec peu de gain → active le PAD
- (⬛ désactivé)
  - Pour les signaux normaux ou faibles (voix, guitare, etc.)

🎤 Micro chant → LINE + PAD OFF  
🎸 Guitare directe → INST + PAD OFF  
🥁 Micro sur caisse claire (très fort) → LINE + PAD ON  
🎹 Synthé → LINE + PAD OFF (sauf si ça clip)  

<div class="encart blue" markdown="1">
**Notes**: [UMC404HD Low Mic Volume](https://chatgpt.com/share/69edd22c-9220-83eb-8095-505f4f615607)

### USB mic “loudness bias”

This is the big psychological trap:

-USB mics often sound “better” immediately because they are pre-processed
-XLR interfaces give a more natural but quieter raw signal

You are expected to add:

-Compression
-Normalization
-Gain in post

### Mic type matters a LOT

Some dynamic mics (especially broadcast-style) are naturally quiet:

- They may need a cloudlifter/FetHead-style booster
- The UMC404HD preamps are decent, but not extremely high-gain
</div>



# Micro

🎤 Micro chant → **LINE** + **PAD OFF**  

<div class="encart blue" markdown="1">
The UMC404HD relies entirely on its preamp gain knobs.

Turn the GAIN knob up significantly (often 50–75% or more for dynamic mics)  
Watch the SIG/CLIP LED  
You want green signal activity  
Occasional orange is OK  
Red clipping = too high  

If the gain is low, your signal will sound weak even if everything else is correct.

**Phantom power mismatch (VERY important)**
If your mic is a condenser:
- You MUST enable +48V phantom power

If it’s off: Audio will be extremely quiet or almost unusable

If your mic is dynamic (like SM58/SM7B-type):
- Phantom power is not required (but usually won’t hurt on modern mics)
</div>


## [MAONO PD200XS](https://www.amazon.fr/dp/B0CN493YHF)

74€ - 2025 - MAONO XLR-USB **Dynamiques** Micro Kit, PC Podcast Micro avec Bras

Both **XLR** and **USB** can be used as the same time.

<div class="encart blue" markdown="1">
**XLR** → UMC404HD

Gain : commence vers 40–50% et ajuste  
❌ Pas de 48V (phantom) → le PD200X est dynamique

Parle à ~10–15 cm du micro (idéal avec filtre anti-pop)
</div>

<div class="encart vert" markdown="1">
**USB**

Mic is recognized as USB Audio
- light are working
- mic mute button is working only on USB audio
  - it doesn't cut the XLR output
- Gain Knob is working
  - for mic input
  - for Headset monitor

The Heaset can be used as an audio card so you hear also system sound (or any other configured by patchbay)

The knob and mute button are not visible from linux host.
</div>

## [Behringer XM8500](https://www.thomann.fr/behringer_xm8500_bundle.htm)

38€ - 2024 

- Directivité: Cardioïde
- Réponse en fréquence: 50 - 15.000 Hz
- Impédance: 150 Ohm
- Connecteur **XLR**

# [Alternative](https://wiki.linuxaudio.org/wiki/hardware_support)

## [focusrite 2i2](https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2) with [Jack Support](https://dragly.org/2014/01/12/focusrite-scarlett-2i2-flawlessly-working-on-ubuntu-with-jack/) / [1](http://linuxmao.org/Focusrite+Scarlett+2i2) / [2](https://tuxicoman.jesuislibre.net/2016/09/focusrite-2i2-2eme-generation-sous-linux.html)
- [linux issue](https://feaneron.com/2021/04/20/focusrite-is-hostile-to-linux-avoid-if-possible/) - Focusrite is hostile to Linux, avoid if possible
- [latency issue](https://askubuntu.com/questions/1261052/how-to-setup-my-scarlett-2i2)

# see also
- [StageConnect: Behringer protocol is open source](https://news.ycombinator.com/item?id=45625251) - StageConnect is a connection to transmit 32 uncompressed audio-channels via a single XLR cable. StageConnect is based on A2B, the Automotive Audio Bus (A2B).
