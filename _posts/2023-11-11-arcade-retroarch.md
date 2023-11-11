---
published: true
title: RetroArch
tags: arcade
---
> a frontend for emulators, game engines and media players.

[![caption](https://www.retroarch.com/images/logo.png)](https://www.retroarch.com/)

### [RetroArch MAME Tips (Best Core, ROMs and Versions)](https://purplepedia.com/what-is-the-best-mame-core-for-retroarch/)

The best MAME core for RetroArch is the [MAME 2003-Plus](https://github.com/christianhaitian/arkos/wiki/ArkOS-Emulators-and-Ports-information#mame-2003).

After installing RetroArch on your gaming system, the next thing you need to do is install cores that will run the games you want to play. 

Each MAME core has a specific ROMset version, and it will not work if you download a different version. For example, if you have installed the MAME 2003 core, its required ROMset version is [MAME 0.78](https://github.com/christianhaitian/arkos/wiki/ArkOS-Emulators-and-Ports-information#mame-2003). 

The given rom set must be put in the specific folder [./mame2003](https://www.reddit.com/r/RG351/comments/zx8jwb/arkos_playing_mame_games_through_retroarch/) to be used by that core.
- [MAME_2003-Plus_Reference_Set_2018/](https://archive.org/download/MAME_2003-Plus_Reference_Set_2018/samples/) - for sound sample.

Alternative is to put them in the ./arcade folder

### Cores
- [MAME 2003-Plus](https://docs.libretro.com/library/mame2003_plus/) - MAME 2003-Plus began with the game drivers from MAME 0.78, meaning that 95% or more of MAME 0.78 romsets will work as-is in MAME 2003-Plus, where they immediately benefit from its bugfixes and other improvements. In order to play the new games and games which received ROM updates in MAME 2003-Plus, you will need to find or build MAME 2003-Plus romsets.

We recommend the Full Non-Merged format, where each romset zip files includes all the files needed to run each game, including any ROMs from 'parent' ROM sets and BIOS sets.

### Troubleshooting

see [Generating Logs](https://docs.libretro.com/guides/generating-retroarch-logs/) to enable logs (Settings/Loggin) in RetroArch (to diagnose roms issue for egs).
Once enabled.

Logs are generated in /home/ark/.emulationstation/es_log.txt on RGB30 using ArkOS.
It's also possible to launch retro-arch directly from ternminal (even through ssh) provided Emulation station is exited before.


