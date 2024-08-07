---
published: true
title: Vector games on laser beam
tags: laser vector-graphic games esp32 electronic
---
> running TEMPEST, SEGA STARTREK, my game Word War vi, and some demos on a home made RGB laser projector driven by openlase modified to support color. - [youtube](https://www.youtube.com/watch?v=eA6pvAZ3nq4) 

## [Laser Projected Asteroids](https://www.youtube.com/watch?v=LXDwGygCokU&t=0s)
[ESP32 Asteroids](https://github.com/atomic14/esp-asteroids),   
[it use git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), after clone run:
- `git submodule init` 
- `git submodule update`
Compile with [Platform.io]({% post_url 2018-08-06-platorm-io %})
- issue with [x509_crt_bundle](https://github.com/espressif/esp-idf/issues/7621#issuecomment-931273887) - workaround is to disable them 

- [Schematics](https://oshwlab.com/chris_9044/laser-show-driver-breadboard) / [easyeda](https://easyeda.com/editor#id=129a292fc01a4e27935e7416db2ddd6e)      
- [TTGO-T8-ESP32](https://github.com/LilyGO/TTGO-T8-ESP32)
- [galvanometre](https://fr.aliexpress.com/item/4000739365447.html?spm=a2g0o.productlist.0.0.32c761efTn3lVy&algo_pvid=b6469537-23db-4eb9-a8d0-c2826d20d782&algo_exp_id=b6469537-23db-4eb9-a8d0-c2826d20d782-10&pdp_ext_f=%7B%22sku_id%22%3A%2210000006790138317%22%7D)
	- [with ILDA](https://fr.aliexpress.com/item/32335326943.html?spm=a2g0o.productlist.0.0.32c761efTn3lVy&algo_pvid=b6469537-23db-4eb9-a8d0-c2826d20d782&algo_exp_id=b6469537-23db-4eb9-a8d0-c2826d20d782-21&pdp_ext_f=%7B%22sku_id%22%3A%2260302493105%22%7D) / [ILDA pinout](https://www.laserworld.com/en/laser-technical-faq/1140-how-is-the-ilda-connector-pinout.html)

## [A Complete Guide to Laser Shows  ](http://www.laserist.org/guide-to-laser-shows.htm)

## Others

- [Playing MAME Games On A RGB Laser Projector](https://hackaday.com/2013/03/12/playing-mame-games-on-a-rgb-laser-projector/)

- [Openlase](https://marcan.st/2010/11/openlase-open-realtime-laser-graphics/) / [github](https://github.com/marcan/openlase) - open realtime laser graphics
	- [openlase-mame](https://github.com/jv4779/openlase-mame) - A very crude first attempt at interfacing MAME vector games to openlase for laser projector display. 

- [Vector display overview](https://trmm.net/Category:Vector_display/)

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OR253GzfK5vbkHussIfwOAHaEK%26pid%3DApi&f=1)
