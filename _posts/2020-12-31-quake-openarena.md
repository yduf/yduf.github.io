---
published: true
title: Open Arena
tags: games quake
---
> OpenArena is a Free Content project. Its goal is to create new, original media while providing a stand-alone multiplayer game in the process. - [Open Arena](http://openarena.ws/download.php)

[![caption](https://img.youtube.com/vi/BFAx6gLS1Hk/0.jpg)](https://www.youtube.com/watch?v=BFAx6gLS1Hk)

Free World - packed standalone version (unzip openarena-0.8.8-repack.zip)

### [server](http://dpmaster.deathmask.net/?game=openarena)

- [openarena](https://dpmaster.deathmask.net/?game=openarena)
seta sv_master1 "dpmaster.deathmask.net"

## [Install](https://openarena.fandom.com/wiki/Manual#Installing_OpenArena)

from `/nfs/tronaut/mnt/Backup/Console & Games/Games/OpenArena` unzip archive & launch `openarena.i386`

Can be launched from [Lutris]({% post_url 2023-08-25-wine-Lutris %}) with the advantage of cleaning up resolution and gamma on exit.

## Issue
### Network play
- openArena work only with openArena
- ioquake work only with ioquake
	- install openArena data over ioquake (/base) 

### [Display too Dark]()
SDL-bug on intel card, workaround:
`xgamma -gamma 1.6 && ./openarena.x86_64 && xgamma -gamma 1.0`

or install open arena data over ioquake.
