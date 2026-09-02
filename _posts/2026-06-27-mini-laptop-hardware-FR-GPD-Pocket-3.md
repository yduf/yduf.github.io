---
title: GPD Pocket 3 📟
tags: laptop-mini cyberdeck stylus pc-hardware retro picotron project
toc: true
---
> My Travel Buddy  - [Review (Pocket 4)](https://www.youtube.com/watch?v=POeAkLD3w08) / [amazon](https://www.amazon.fr/GPD-Pocket-Ordinateur-Portable-Bluetooth/dp/B0DNR8DNLS/) / [size](https://www.youtube.com/shorts/ODeQJshC88o) / [r/GPDPocket ](https://www.reddit.com/r/GPDPocket/)

<link rel="shortcut icon" href="https://fontsaddict.com/images/icons/png/28544.png" type="image/x-icon" />

[**amazon**](https://www.amazon.fr/dp/B0DDRJJL1R) - 2026 / 850€

<div markdown="1" style="display:flex; align-items:center; gap:1rem; margin:1rem 0">
  <div  markdown="1">[![photo](https://m.media-amazon.com/images/I/418iV6xJf6L._AC_SX300_SY300_QL70_ML2_.jpg)](https://www.amazon.fr/dp/B0DDRJJL1R)
</div>
- Pentium Gold 7505, 2 cores / 4 threads 
- 16Go Ram / 512Go storage
- Graphique UHD 
- Wi-Fi 6E Tri Band (802.11ax) / 2.5G Eth
- 725 g
</div>

# [Pocket 3 ⮺](https://chatgpt.com/share/6a4219ff-0cb0-83eb-a553-29faa0c3f643)

A small form factor laptop, yet mostly as capable as my [Huawei laptop]({% post_url 2021-07-18-laptop-huawei-matebook-14 %}). 

**Alternatives**
- [Pocket 3](https://www.amazon.fr/GPD-Quad-Core-1920x1200p-Bluetooth-GPD-POCKET-3-N6000/dp/B09Q3KWFR6) - N6000 Quad-Core / 8Go version (discovered afterward) - 720€
- [Pocket 4](https://www.youtube.com/watch?v=POeAkLD3w08) has much better (over) spec  but was too pricey for the job. - start at 1200€
- [Kooforway](https://www.amazon.fr/gp/aw/d/B0DFQBSQBL) / [video](https://www.youtube.com/watch?v=QAFw0T09la0) - was cheaper even if less powerfull (N95) and could have been sufficient  - 450€
- [CHUWI Minibook](https://www.reddit.com/r/pico8/comments/1v2m49n/new_8_laptop_travel_setup/) / [review](https://www.youtube.com/watch?v=R7ojRfHvW-k) - 470€ 
- [PEAKAGO](https://www.youtube.com/watch?v=oHaQi9ajkrY) - obsolete?

[**Should not buy**](https://www.reddit.com/r/cyberDeck/)
These looks nice / but are probably a bad choice
- [uConsole](https://www.clockworkpi.com/home-uconsole) - [À quoi sert votre uConsole ? ](https://www.reddit.com/r/ClockworkPi/comments/1jj1zu8/what_does_your_uconsole_do/?tl=fr)
- [hackberry pi](https://www.reddit.com/r/pico8/comments/1vibrc1/got_my_portable_gamedev_setup_working/)
- [picocalc](https://www.clockworkpi.com/picocalc)


| [CPU](https://chatgpt.com/share/6a803796-cbf0-83eb-bad7-902ef047e39f)                    | Cores / Threads | Architecture             | Relative Overall Performance* | Relative Single-Core | Typical Power |
| --------------------------- | --------------: | ------------------------ | ----------------------------: | -------------------: | ------------: |
| **N6000**        |           4 / 4 | Jasper Lake (Atom)       |      ▮▮▮▮▮▮&nbsp;&nbsp;**55**  |    **60** |    6 W |
| **Pentium 7505** |           2 / 4 | Tiger Lake (Core)        |  ▮▮▮▮▮▮▮▮▮▮&nbsp;&nbsp;**98**  |   **100** |   15 W |
| **N95**          |           4 / 4 | Alder Lake-N (Gracemont) |  ▮▮▮▮▮▮▮▮▮▮&nbsp;**100** |    **84** |   15 W |
| [**i7-10510U**]({% post_url 2021-07-18-laptop-huawei-matebook-14 %})    |           4 / 8 | Comet Lake               | ▮▮▮▮▮▮▮▮▮▮▮&nbsp;**115** |    **95** |   15 W |



**Pro**
- screen touch is usefull in that config, as it allozs to replace mouse wheel for scrolling
- usb-C supercharge

**Cons**

## Issue

### Frame
The version I got had a twisted frame out of the box - but I was leaving the day after and returning it was not an option

- [ GPD Pocket 3 not sitting flat on desk ](https://www.reddit.com/r/GPDPocket/comments/sa7oja/gpd_pocket_3_not_sitting_flat_on_desk/?utm_source=chatgpt.com) - check pad flatness / unscrewing botton may help unwrap

### [Camera ⮺](https://chatgpt.com/share/6a5e06c8-10bc-83eb-abd5-2e8f856efb22)

Defautlt setup is very slow 
- 1600×1200 × 2 bytes/pixel ≈ 3.8 MB per frame
- ×15 fps ≈ 57 MB/s over USB

Reconfigure it

{% highlight bash %}
$ qv4l2
{% endhighlight %}
## Keyboard

Keyboard size is ok, but
- It is qwerty - I should fix that some way
  - minim remap with [keyd]({% post_url 2026-05-10-keyboard-qmk-via %})
    - Q <-> A, W <-> Z 
    - capslock -> ctrl

<details markdown="1"><summary>keyd config</summary>
{% highlight init %}
[ids]
258a:000c:f0dea6ce

[main]
q = a
w = z
a = q
z = w
capslock = leftcontrol
{% endhighlight %}
</details>

## BIOS

<div class="encart blue" markdown="1">
BIOS => press `F12` on start  
boot => press `Fn+F7`
</div>

## Spec

- CPU - Pentium Gold 7505 (64 bits @ 3,5 GHz) 
- Graphique UHD 
- RAM 16 Go LPDDR4x 
- SSD 512 Go M.2 NVMe. 
- Wi-Fi 6E Tri Band (802.11ax) 
- Bluetooth 5.0 
- 2x USB 3.2 Type A 
- Thunderbolt 4 (compatible avec USB4 et USB 3.2 Type C) 
- LAN : RJ45 Multi-Gigabit 2.5G Ethernet 10/100/1000/2500M. 
- Sortie vidéo HDMI Ultra HD 8K
- Sortie/entrée audio AUX
- Module d'extension 
  - USB 3.2 Type-A Gen1 (inclus)
  - RS232 (non inclus).
  -  KVM (entrée HDMI + entrée USB) (non inclus). 
  -  Batterie : lithium polymère 38,5 Wh (7,7 V - 5000 mAh).
    - Autonomie de la batterie : jusqu'à 9 heures avec une utilisation légère (2 heures avec une utilisation intensive).

- Écran tactile multi-touch (jusqu'à 3 doigts) avec support Stylus Pen (4096 niveaux) 
- Clavier rétroéclairé 
-  Souris tactile 
-   Webcam Full HD 
-    Haut-parleurs stéréo 
-     Microphone 
-      Lecteur d'empreintes digitales. 


- support bluetooth controller
  - [8Bitdo Sn30 Pro Wireless Bluetooth Controller](https://www.amazon.fr/Bluetooth-Contr%C3%B4leur-Nouvelle-Nintendo-Commutateur/dp/B07CQKTWD8)
- can connect side to side connector (for info)

## Module
- [KVM Original Pocket 4](https://www.amazon.fr/GPD-Module-KVM-Original-Pocket/dp/B0DYM5SDCX)

# Tear Down
- [ShortCircuit](https://www.youtube.com/watch?v=6ar72m4PLW0&t=311s)

# Linux Support

<div class="encart blue" markdown="1">
see [Windows 11 / linux Dual Boot]({% post_url 2026-04-30-windows-linux-dual-boot %})

**disable secure boot**
**You cannot repartition Windows partition from linux**
- need to boot windows => but fortunately it is less an hassle than on Dell 
  - **I have done that without internet connectivity**
- juste enter login/password + few config and it's setup

- [linux firmware](https://www.gpd.hk/gpdpocket3firmware) / [github](https://github.com/wimpysworld/umpc-ubuntu)
</div>

[Kubuntu]({% post_url 2026-06-30-linuxsystem-kubuntu %}) is  working perfectly fine (auto orientation / custom dpi font scaling).

**see also**
- [Some Notes on running Linux on the GPD Pocket 4](https://wstyler.ucsd.edu/posts/linux_gpdpocket4.html)
- [GPD Pocket 4 Speaker DSP](https://kittenlabs.de/blog/2025/04/06/gpd-pocket-4-speaker-dsp/) [HN](https://news.ycombinator.com/item?id=43635295)
- [Linux configs for Gpd Pocket 4](https://codeberg.org/elloskelling/linux-gpd-pocket-4)
- [UMPC hardware configuration for Ubuntu](https://github.com/wimpysworld/umpc-ubuntu)
- [Linux on the GPD Pocket 3 mini-laptop (Ubuntu 21.10 and Fedora 35) ](https://www.youtube.com/watch?v=WAbSuOY1Ka8)

# Windows 11

<div class="encart blue" markdown="1">
To resize partition: Win + X → choose Disk Management

**Bitlocker was not activated by default on this system**
</div>

- [This is the flashing firmware of Pocket 3 1195G7 / 1125G4 / 7505 (Windows 11 integrated with the driver). ](https://www.gpd.hk/gpdpocket3firmware)
  - **Attention: reinstallnation will remove all data in drive C, please backup your data before action.**

# [ Mini Micro  ⮺ 💭](https://news.ycombinator.com/item?id=48291947)

Coud be used to setup a neo-retro virtual computer

- [Mini Micro Fantasy Computer](https://miniscript.org/MiniMicro/index.html#about)

[![demo](https://miniscript.org/MiniMicro/img/asteroids.gif)](https://miniscript.org/MiniMicro/index.html#about)

- [picotron]({% post_url 2025-04-12-main-picotron %})

[![screenshot](https://www.lexaloffle.com/dl/wip/picotron_desktop2.png)](https://www.lexaloffle.com/picotron.php)

# see also
## Cyberdeck
- [r/cyberDeck/](https://www.reddit.com/r/cyberDeck/)
  - [ conception d'une boîte à outils ](https://www.reddit.com/r/cyberDeck/comments/1w127xp/toolbox_build/) - for CNC?
  - [ boîte à chier 2.0 ](https://www.reddit.com/r/cyberDeck/comments/1vv2ddt/shitbox_20/)
- [r/phonedeck/](https://www.reddit.com/r/phonedeck/)
  - [Modular C‑Deck - Clamshell Palmtop](https://www.printables.com/model/1355982-modular-c-deck-clamshell-palmtop)
  - [Rii Mini Clavier K01X1 ](https://www.amazon.fr/Rii-Clavier-AZERTY-Touchpad-Android/dp/B082VYZ694)
  - [Rii Mini Clavier Rétroéclairé](https://www.amazon.fr/Rii-R%C3%A9tro%C3%A9clair%C3%A9-Bluetooth-Ultra-Portable-Compatible/dp/B0DL28446F)


[![photo](https://media.printables.com/media/prints/70164c0b-9e5c-42e5-b919-e2f6d134d429/images/10238637_491ca806-bf37-4364-a50a-e7b6a40fdbcf_1f63d2ed-011b-4023-8e32-0b351e4b691d/thumbs/inside/1600x1200/jpeg/photo_2025-06-21-160734.webp)](https://www.printables.com/model/1355982-modular-c-deck-clamshell-palmtop)