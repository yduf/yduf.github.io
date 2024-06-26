---
published: true
title: '# Ender 6'
tags: 3dprinter klipper
---
> cheap CoreXY -  [r/ender6/](https://www.reddit.com/r/ender6/) / [klipper config](https://github.com/yduf/klipper-ender6-config) / [server](http://ender6/) / [Moonraker](http://ender6:7125/)

## [Hardware](https://www.amazon.fr/Imprimante-Creality-dimpression-silencieuse-Nouvellement/dp/B08MQ2NBXS/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CN8NCG8ZFNMA&keywords=ender%2B6&qid=1643478583&sprefix=ender%2B6%2Caps%2C182&sr=8-1&th=1) / [darty](https://www.darty.com/nav/achat/informatique/imprimante_scanner/imprimante/creality_imprimante_3d_creality_a_structure_cubique_amelioree_ender_6_250_250_400mm_grande_taille_d_imprimante_ecran_tactile_couleur_hd_4_3_pouces__MK765783144.html) - 2022 - 295€

[![caption](https://preview.redd.it/jp6mdnn97s361.jpg?width=640&crop=smart&auto=webp&s=68a346a3bfce06b129417b18ed712afeccf10100) ](https://www.reddit.com/r/ender6/comments/k8id45/why_is_the_ender_6_not_getting_as_much_attention/)

[review](https://3dprintbeginner.com/creality-ender-6-review/) / [assembly](https://forums.creality3dofficial.com/my-ender-6-assembly-process/)
- [Ender 6 upgrade](https://3dprintbeginner.com/creality-ender-6-upgrades-paid-and-free/)


- [Ender 6 linear rail (Y)](https://www.thingiverse.com/thing:4757747)
- [Ender 6 Complete Linear Rails Mod](https://www.thingiverse.com/thing:4757747/remixes)
- [Ender6 + SKR Mini V3.0](https://www.reddit.com/r/ender6/comments/sii1jf/ender6_skr_mini_v30/)

- [Belt Tensioning and Replacement Belt Source](https://www.reddit.com/r/ender6/comments/prxn5o/belt_tensioning_and_replacement_belt_source/)

### [Hotend](https://www.reddit.com/r/ender6/comments/q1dv39/does_the_ender_6_use_the_same_hotend_setup_as_any/)

The ender 6 has a 2 pin connector on the "heat" wire, or the heat catridge that is unique to the printer. The rest is the same.

- [The heater stopped working. I bought a new one and replaced it, but its still didn't work. Then I found out that this spray board failed on the heater pin. So I bought a 2m cable one and connected it directly to mainboard.](https://www.reddit.com/r/ender6/comments/t67n1q/comment/hzaogkx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## Motherboard

- [ mother board wiring](https://user-images.githubusercontent.com/46035129/101119293-caad8480-35c9-11eb-960d-3d9c698b4ba0.png)
- [Creality board](https://www.reddit.com/r/ender6/comments/rggqp3/comment/homyl8i/) - [mainboard fraud](https://youtu.be/DAfIEkHHoQc?t=79)
	- got an [A/E board](https://www.reddit.com/r/ender6/comments/u7zmxc/ender_6_wbiqu_h2_vref_value_issues_mixed_drivers/) => 2xTMC2208 ( X + Y) and 2xA4988 ( Z1 + E1) 
	- [V ref](https://www.reddit.com/r/ender6/comments/u7zmxc/ender_6_wbiqu_h2_vref_value_issues_mixed_drivers/)
    
For idea for replacement
- [Ender 6 (duh), SKR Mini E3 v3.0, Klipper - IT'S ALIVE! ](https://www.reddit.com/r/ender6/comments/z68w1d/ender_6_duh_skr_mini_e3_v30_klipper_its_alive/)
- [Toasted motherboard (suggest upgrade) ](https://www.reddit.com/r/ender6/comments/18tmlgh/toasted_motherboard_suggest_upgrade/)
- [BTT Octopus](https://3dwork.io/en/btt-octopus/) - considered for custom toolchanger

### Spray Board

- [What is the K-fan1?](https://www.reddit.com/r/ender6/comments/15dhqjv/what_is_the_kfan1/) - 2nd part cooling fan. Share the same pin as k-fan 

[![caption](https://preview.redd.it/i-just-an-ender-6-but-my-heater-cartridge-doesnt-work-any-v0-yoqdrk6gw9l81.jpg?width=3024&format=pjpg&auto=webp&s=b7fc5dc2a124cea7a0e14ba6c3891bf930e1a318)](https://www.reddit.com/r/ender6/comments/t67n1q/i_just_an_ender_6_but_my_heater_cartridge_doesnt/)


### Screen
- [DMT48270C043_03W](http://www.ampdisplay.com/documents/pdf/DMT48270C043_03WN.pdf) / [2012 Instruction Manual Beijing DWIN Technology](https://manualzz.com/doc/11786048/2012-instruction-manual-beijing-dwin-technology-co.--ltd) - also know as DGUS, see [Klipper](#klipper)


## [Firmware](https://www.creality.com/pages/download-ender-6?spm=..page_1934481.products_display_1.1) (Creality 1.0.4.9 20/04/2022)

unzip
- .bin file is for flashing printer board
- DWIN_SET.zip is for flashing screen board (was not neccesary for bltouch)
	- need to unmount screen to access sdcard slot

**Issue with Octoprint**
see 
- [OctoPrint doesn't show a temperature graph for my Creality printer with stock firmware ](https://community.octoprint.org/t/octoprint-doesnt-show-a-temperature-graph-for-my-creality-printer-with-stock-firmware/23901#double)

## First layer
- [Bed adhesion](https://www.reddit.com/r/3Dprinting/comments/9g7hmp/ender_3_creality_glass_bed_not_sticking/)
	- for the 1st layer, bed temp 70
	- for the 2nd layer, bed 60

- spring are sensible to heat variation (especially when room temp is close to 30°C)



# [Customisation](https://www.thingiverse.com/yd007/collections/ender6)

- [Creality Ender 6 notes Barry Carter](https://github.com/ginge/Ender6)

- Open Woven Sleeves / alternative to cable chain - [Câble Gaine de Protection Réglable](https://www.amazon.fr/gp/product/B08YN56FYG/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- **USB access** : usb slot on motherboard, need to unscrew plate, there is a hole in the frame to pass a cable (need to remove the power supply to pass the cable inside the frame)


## Misc

### [Ender 6 Y endstop relocation](https://www.thingiverse.com/thing:5222477) - easy to get more space

[![caption](https://i.ibb.co/BzHLHVm/fc453edc-01d1-4cd2-9794-60737011d736.jpg)

### [Ender 6 Extruder Relocation](https://marksmakerspace.com/3dprinting/ender6-extruder-move.html)

- [smoothed version of the spacer](https://www.thingiverse.com/thing:4809986)
- [filament guide](https://www.thingiverse.com/thing:5031418) and filler plate
	- or from [ Filament Guide / Extruder Filler ](https://www.thingiverse.com/thing:4893522)

[![caption](https://marksmakerspace.com/3dprinting/images/ender6-extruder-move/IMG_4008.jpeg) ](https://marksmakerspace.com/3dprinting/ender6-extruder-move.html)


### [Spool inside](https://www.thingiverse.com/thing:5181697)

Once using a direct drive (or having moving the extruder).
- [ reverse bowden guide ](https://www.thingiverse.com/thing:4658388)
- [Ender6 Filament Relocation](https://www.thingiverse.com/thing:4812210)

- [My Ender 6 Journey to reliable, satisfying printing](https://www.reddit.com/r/ender6/comments/vf7qbt/my_ender_6_journey_to_reliable_satisfying_printing/)
	
	- [cable chain](https://www.thingiverse.com/thing:4731935) - is it good? - [no!](https://linustechtips.com/topic/1383007-3d-printer-drag-chain-an-opinion-piece-on-printed-energy-chains/) / [Safe 3D Printer Wiring Guide Using Drag Chains](https://www.youtube.com/watch?v=_HiuY015rOY&t=90s)
    - [stock screen with klipper](https://www.reddit.com/r/ender6/comments/rggqp3/comment/homyl8i/) / [2](https://www.youtube.com/watch?v=t1FgE3OgUA8)


## Direct Drive

Now running with [Orbiter v2.0 and custom head.](https://www.printables.com/model/808601-orbiter-v2-ender6)

[![caption](https://media.printables.com/media/prints/808601/images/6253584_9156e935-3bcf-462c-8263-846d757082e0_ae8bf69f-85b2-43e4-bee5-2a1e4be7b7fb/thumbs/inside/1600x1200/jpg/large_display_bdd7f57d-b421-4009-95ae-8b9154ff99b3_808601.webp)](https://www.printables.com/model/808601-orbiter-v2-ender6)

**Previously**
- [BIQU H2 Extruder V2.0 ]({% post_url 2024-04-26-3dprinter-biqu-h2 %})

**Alternative**
- [Ender 6 Extruder Relocation](https://marksmakerspace.com/3dprinting/ender6-extruder-move.html)



## Z sensor

### [3DTouch Auto Leveling Sensor](https://www.geeetech.com/wiki/index.php/3DTouch_Auto_Leveling_Sensor) / [BL-Touch](http://www.klipper3d.org/BLTouch.html)

<span style="color:red">[**creality firmware 1.0.4.9 20/04/2022 doesn't work with [**3DTouch v3.2**](https://www.amazon.fr/gp/product/B08P51G69Z/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)**]</span>
	- **it Works with Klipper using same board**
    

### [BLTouch installation]({% post_url 2022-07-30-3dprinter-bltouch %})

- [Wiring BLTouch](https://www.youtube.com/watch?v=Sqs6rGUX9yw) / [2](https://www.youtube.com/watch?v=FH0KHYU3_S8) - ender6 as a JSP connector for BLTouch. one can use the cable extension and join dupont together (matching colors)  to connect both jsp end. - [creality firmware needs flashing.](https://www.creality.com/pages/download-ender-6?spm=..page_1934481.products_display_1.1)
	- [info on default motherboard wiring](https://www.reddit.com/r/ender6/comments/wv9e54/2_different_bltouch_not_working_fast_red_blink/?utm_source=share&utm_medium=web2x&context=3) - default is working fine with klipper
- [Does 3d touch work on ender 6](https://www.reddit.com/r/ender6/comments/pslddo/does_3d_touch_work_on_ender_6/) / [What Version of BLTouch works with Ender-6](https://forums.creality3dofficial.com/community/ender-6/what-version-of-bltouch-works-with-ender-6/)
- [Ender 6 CR Touch](https://www.reddit.com/r/ender6/comments/qngdd8/ender_6_cr_touch/) - rewire

## [Klipper]({% post_url 2017-12-28-Klipper %})
- [Klipper](https://3dprintbeginner.com/how-to-install-klipper-on-creality-ender-6/) - install on ender 6
	- [Ender 6 Klipper + BL-Touch ](https://www.smith3d.com/ender-6-klipper-bl-touch/) / [2](https://3dprintbeginner.com/how-to-install-klipper-on-creality-ender-6/)

**You need to use [the Desuuuu klipper build](https://github.com/Desuuuu/klipper) if you want the screen to work.** - see [Stock Screen? after installing Klipper](https://www.reddit.com/r/ender6/comments/w9rwvk/stock_screen_after_installing_klipper/?utm_source=share&utm_medium=web2x&context=3)
Concerned Topics: 
- [Feature request: extend protocol with UART commands ](https://klipper.discourse.group/t/feature-request-extend-protocol-with-uart-commands/2414)


### Klipper compilation

Merge Desuu branch into main line
{% highlight bash %}
$ git clone https://github.com/Klipper3d/klipper
$ cd ~/klipper/
$ git remote add -f desuu https://github.com/Desuuuu/klipper
$ git merge desuu/dgus-reloaded
# resolve conflict on README only
$ git commit -am "resolve"
{% endhighlight %}

[Compilation](https://3dprintbeginner.com/install-klipper-on-sidewinder-x1/)
{% highlight bash %}
$ cd ~/klipper/
# retrieve dependancy
$ ./scripts/install-debian.sh # or other OS as apropriate
$ export LC_ALL=C # maybe necessary to resolve locale.Error: unsupported locale setting
$ make menuconfig
{% endhighlight %}

Choose option for Ender6/Desuu screen
- Enable extra low level
	- Micro-controller Architecture STM32
    - processor model STM32F103
    - bootloader offset 28Kib
    - clock 8Mhz
    - USART1 on PA10/PA9
- Enable Degus screen
    - screen serial UART3
- 250k serial ports
    
![caption](https://3dprintbeginner.com/wp-content/uploads/2022/01/image-3.png) 

Build et flash
{% highlight bash %}
$ make
# then retrieve /klipper/out/klipper.bin file on an SD card.
{% endhighlight %}

This will flash the ender6 firmware.
Screen has to be flashed separately to be functional.

> Next, plug the SD card in your printer and turn it on. The installation process takes about 15 seconds. I recommend you wait for a minute, then remove the SD card and restart your printer.

> When you are flashing the board firmware, there won’t be any information displayed on the touchscreen. It might look like the screen is stuck, and the progress bar does not move, but this is ok. Just continue to the next step.

> It’s also worth noting that if you want to re-flash the board, always change the filename. The Creality board doesn’t start the flash process again, if you use the same firmware name, as in your previous flash. 

### [Flashing screen](https://github.com/Desuuuu/DGUS-reloaded-Klipper/wiki/Flashing-the-firmware)

- unbox the screen, 
- get access to the mini SD Card port
- format SD Card to **FAT32 and 4096 bytes sector (mandatory)**
	- partition disk if greater thatn 16Go, to be able to specify 4096 boot sector (system windows partition tools will allows that)
    - or with a correct sized partition (16go) on linux, use 
    	- `lsblk`, then
        - `sudo mkfs.fat -S 4096 /dev/sdxn`
	- [alternative](https://askubuntu.com/questions/493262/fat32-formatting) - untested
    	- sudo mkdosfs /dev/DISKANDPARTITION -s 16 -F 32
- copy DWIN_SET from latest [release](https://github.com/Desuuuu/DGUS-reloaded-Klipper/releases)
- add T5UID1.CFG from [here](https://github.com/Desuuuu/DGUS-reloaded-Klipper/blob/master/extras/flash_reset)

**Flashing**
- Turn off and unplug your printer (both power and USB).
- Insert the micro SD card into the slot.
- **Do not cut power to the printer while the flashing procedure is running!**
	- Plug the printer's power cable back (and only the power cable) and turn the printer on.
    - After a few second, the screen's background will turn blue and the flashing procedure will begin.
    - When the procedure ends, you will be back on the page with a blue background. There will be an END message at the top and you'll be presented with a summary of what was flashed.
		- <span style="color:red">if all presented with `Download .xxx Files:000  then` **No flashing has been done**</span> probably because SD Card does not respect 4096 sector size.
- At this point, you can turn your printer back off, remove the micro SD card from the touchscreen and reassemble your printer if you had to disassemble it previously.

[![caption](https://3dprintbeginner.com/wp-content/uploads/2021/03/Firmware-flash-end-on-Ender-6-Touchscreen-768x512.jpg)](https://3dprintbeginner.com/how-to-install-klipper-on-creality-ender-6/)


*** Desuu menu config option***

see [sample-t5uid1.cfg](https://github.com/Desuuuu/klipper/blob/dgus-reloaded/config/sample-t5uid1.cfg)

## Speed
- [reality Ender 6 w/ BIQU H2 - 200mm/s@6k acceleration](https://www.youtube.com/watch?v=82gAH7u3tMM) / [100mm/s and 4000 acc](https://www.youtube.com/watch?v=EqPe5yzP3zo)

- [My regular speed is 150ms 3.5k accel](https://www.reddit.com/r/ender6/comments/k8id45/why_is_the_ender_6_not_getting_as_much_attention/)
