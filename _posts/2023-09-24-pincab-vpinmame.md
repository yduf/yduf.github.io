---
published: true
title: VPinMame
tags: pincab emulator
---
> PinMAME emulates the hardware found in almost every solid state pinball machine created from the earliest days of CPU-controlled machines (mid 1970's) through 2014 (Stern SAM), with around 770 emulated unique Pinball machines and many more clones/revisions (overall more than 2700 sets). - [github](https://github.com/vpinball/pinmame)

[![caption](https://i.imgur.com/DRxjPjz.png)](https://vpuniverse.com/forums/topic/4928-dmdext-freezy-and-future-pinball-real-and-virtual-dmd-support/?tab=comments)

For [Visual Pinball Standalone](https://github.com/vpinball/vpinball/blob/standalone/standalone/README.md) it is embeded via libpinmame, so there is no additional setup.  
**But**, roms should be present in `$HOME/.pinmame/roms` and within their own folder or zip.
ex: `$HOME/.pinmame/roms/totan_14.zip`

For other setup, it's automatically installed if you use the installer. If you just build VPX from source (not standalone version), you probably don't have PinMAME at all. - [ External Tables & Roms with Visual Pinball built from source #45 ](https://github.com/vpinball/vpinball/issues/45#issuecomment-1066202713)

see also
- [How Does VisualPinball/VisualPinMAME Generally Work?](https://pinballnirvana.com/forums/threads/how-does-visualpinball-visualpinmame-generally-work.4292/) - Both VP and VPM must be installed in order to play a VPM table, while VP alone is enough for VP tables only.
	- [VPinMAME Test](https://www.youtube.com/watch?v=bNGuFXNCNDk&t=23s)