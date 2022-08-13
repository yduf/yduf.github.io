---
published: true
title: Ender 6
tags: 3dprinter
---
> cheap CoreXY -  [r/ender6/](https://www.reddit.com/r/ender6/)

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J-kyutn5uYHtPmCA_dqoVgAAAA%26pid%3DApi&f=1) 

##  [Hardware](https://www.amazon.fr/Imprimante-Creality-dimpression-silencieuse-Nouvellement/dp/B08MQ2NBXS/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CN8NCG8ZFNMA&keywords=ender%2B6&qid=1643478583&sprefix=ender%2B6%2Caps%2C182&sr=8-1&th=1) / [darty](https://www.darty.com/nav/achat/informatique/imprimante_scanner/imprimante/creality_imprimante_3d_creality_a_structure_cubique_amelioree_ender_6_250_250_400mm_grande_taille_d_imprimante_ecran_tactile_couleur_hd_4_3_pouces__MK765783144.html) - 2022 - 295€

[review](https://3dprintbeginner.com/creality-ender-6-review/) / [assembly](https://forums.creality3dofficial.com/my-ender-6-assembly-process/)
- [Ender 6 upgrade](https://3dprintbeginner.com/creality-ender-6-upgrades-paid-and-free/)


- [Ender 6 linear rail (Y)](https://www.thingiverse.com/thing:4757747)
- [Ender 6 Complete Linear Rails Mod](https://www.thingiverse.com/thing:4757747/remixes)
- [Ender6 + SKR Mini V3.0](https://www.reddit.com/r/ender6/comments/sii1jf/ender6_skr_mini_v30/)

- [Belt Tensioning and Replacement Belt Source](https://www.reddit.com/r/ender6/comments/prxn5o/belt_tensioning_and_replacement_belt_source/)

## Motherboard

- [ mother board wiring](https://user-images.githubusercontent.com/46035129/101119293-caad8480-35c9-11eb-960d-3d9c698b4ba0.png)
- [Creality board](https://www.reddit.com/r/ender6/comments/rggqp3/comment/homyl8i/) - [mainboard fraud](https://youtu.be/DAfIEkHHoQc?t=79)
	- got an A/E board 


## [Firmware](https://www.creality.com/pages/download-ender-6?spm=..page_1934481.products_display_1.1) (1.0.4.9 20/04/2022)

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

[![caption](https://preview.redd.it/jp6mdnn97s361.jpg?width=640&crop=smart&auto=webp&s=68a346a3bfce06b129417b18ed712afeccf10100) ](https://www.reddit.com/r/ender6/comments/k8id45/why_is_the_ender_6_not_getting_as_much_attention/)

# [Customisation](https://www.thingiverse.com/yd007/collections/ender6)

- [Creality Ender 6 notes Barry Carter](https://github.com/ginge/Ender6)

## Misc
- [Ender 6 Y endstop relocation](https://www.thingiverse.com/thing:5222477) - easy to get more space
- Open Woven Sleeves / alternative to cable chain - [Câble Gaine de Protection Réglable](https://www.amazon.fr/gp/product/B08YN56FYG/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- **USB access** : usb slot on motherboard, need to unscrew plate, there is a hole in the frame to pass a cable (need to remove the power supply to pass the cable inside the frame)

- [My Ender 6 Journey to reliable, satisfying printing](https://www.reddit.com/r/ender6/comments/vf7qbt/my_ender_6_journey_to_reliable_satisfying_printing/)
	
	- [cable chain](https://www.thingiverse.com/thing:4731935) - is it good? - [no!](https://linustechtips.com/topic/1383007-3d-printer-drag-chain-an-opinion-piece-on-printed-energy-chains/) / [Safe 3D Printer Wiring Guide Using Drag Chains](https://www.youtube.com/watch?v=_HiuY015rOY&t=90s)
    - [stock screen with klipper](https://www.reddit.com/r/ender6/comments/rggqp3/comment/homyl8i/) / [2](https://www.youtube.com/watch?v=t1FgE3OgUA8)
- [V ref](https://www.reddit.com/r/ender6/comments/u7zmxc/ender_6_wbiqu_h2_vref_value_issues_mixed_drivers/)

## Direct Drive

### [BIQU H2 Extruder V2.0 ](https://3dprintbeginner.com/ender-6-direct-drive-conversion-h2-extruder/) / [3djake](https://www.3djake.com/biqu/h2-extruder-v20) / [review](https://3dwork.io/en/biqu-h2-extruder-review/)

[**Wiring**](https://www.reddit.com/r/BIGTREETECH/comments/mihwg1/ender_3_v2_biqu_h2_stepper_wiring/) / [convention](https://caggius.wordpress.com/stepper-motor-wiring-conventions/)
- [(Another) Biqu H2 direct drive extruder upgrade](https://www.reddit.com/r/ender6/comments/shn39o/another_biqu_h2_direct_drive_extruder_upgrade/)
- [BIQU H2 V2 swap](https://www.reddit.com/r/ender6/comments/rxcarq/finally_biqu_h2_v2_swap_ender_6/) - _everything else is stock_ - The H2 V2 has a full rectangular hot end, which means a bunch of thingiverse mounts were outdated
	- [mount plate](https://www.thingiverse.com/thing:4893522)
	- [Fan Duct](https://www.thingiverse.com/thing:5202213)
	- [configuring steps from the new extruder ](https://www.reddit.com/r/ender6/comments/rxcarq/finally_biqu_h2_v2_swap_ender_6/hu6fd46/) - don't change firmware for [that](https://www.reddit.com/r/ender6/comments/rvtlx8/comment/hrcky6w/?utm_source=reddit&utm_medium=web2x&context=3). You use printer face or [your octoprint]({% post_url 2017-09-24-Octoprint %}) to edit the [EEPROM CONFIG code](https://plugins.octoprint.org/plugins/eeprom_marlin/). => **you need to connect to usb port** and follow [instruction](https://www.reddit.com/r/ender6/comments/rvtlx8/comment/hrcky6w/?utm_source=reddit&utm_medium=web2x&context=3)
	- [Did the biqu h2 upgrade](https://www.reddit.com/r/ender6/comments/rvtlx8/did_the_biqu_h2_upgrade_everything_working_well/) - / [cable chain](https://www.thingiverse.com/thing:4731935)
	- Stepper config: 
    	- Number of pulses: 932steps/mm for stepper motor drive at 16 subdivisions  (micro-steps) (further correction is required)
        - Recommended motor current: 800mA
        - Extrusion capacity (based on existing): 600mm³/min(depending on filaments)

Alternative
- [Ender 6 Extruder Relocation](https://marksmakerspace.com/3dprinting/ender6-extruder-move.html)

![caption](https://cdn.shopify.com/s/files/1/1619/4791/products/9_601abe7a-ee33-40d1-9a38-8df2813b36f8_800x.jpg?v=1634899553)

## Z sensor

### [3DTouch Auto Leveling Sensor](https://www.geeetech.com/wiki/index.php/3DTouch_Auto_Leveling_Sensor) / [BL-Touch](http://www.klipper3d.org/BLTouch.html)

creality firmware 1.0.4.9 20/04/2022 doesn't work with [3DTouch v3.2](https://www.amazon.fr/gp/product/B08P51G69Z/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)

### [BLTouch installation]({% post_url 2022-07-30-3dprinter-bltouch %})

- [BLTouch](https://www.youtube.com/watch?v=Sqs6rGUX9yw) / [2](https://www.youtube.com/watch?v=FH0KHYU3_S8) - ender6 as a JSP connector for BLTouch. one can use the cable extension and join dupont together (matching colors)  to connect both jsp end. - [creality firmware needs flashing.](https://www.creality.com/pages/download-ender-6?spm=..page_1934481.products_display_1.1)
- [Does 3d touch work on ender 6](https://www.reddit.com/r/ender6/comments/pslddo/does_3d_touch_work_on_ender_6/) / [What Version of BLTouch works with Ender-6](https://forums.creality3dofficial.com/community/ender-6/what-version-of-bltouch-works-with-ender-6/)
- [Ender 6 CR Touch](https://www.reddit.com/r/ender6/comments/qngdd8/ender_6_cr_touch/) - rewire

## [Klipper]({% post_url 2017-12-28-Klipper %})
- [Klipper](https://3dprintbeginner.com/how-to-install-klipper-on-creality-ender-6/) - install on ender 6
	- [Ender 6 Klipper + BL-Touch ](https://www.smith3d.com/ender-6-klipper-bl-touch/) / [2](https://3dprintbeginner.com/how-to-install-klipper-on-creality-ender-6/)

**You need to use [the Desuuuu klipper build](https://github.com/Desuuuu/klipper) if you want the screen to work.** - see [Stock Screen? after installing Klipper](https://www.reddit.com/r/ender6c/comments/w9rwvk/stock_screen_after_installing_klipper/)
Concerned Topics: 
- [Feature request: extend protocol with UART commands ](https://klipper.discourse.group/t/feature-request-extend-protocol-with-uart-commands/2414)
- [DMT48270C043_03W](http://www.ampdisplay.com/documents/pdf/DMT48270C043_03WN.pdf) / [2012 Instruction Manual Beijing DWIN Technology](https://manualzz.com/doc/11786048/2012-instruction-manual-beijing-dwin-technology-co.--ltd)

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

[Compilation]()
{% highlight bash %}
$ cd ~/klipper/
# retrieve dependancy
$ ./scripts/install-debian.sh # or other OS as apropriate
$ make menuconfig
{% endhighlight %}


## [Spool inside](https://www.thingiverse.com/thing:5181697)

Once using a direct drive (or having moving the extruder).
- [ reverse bowden guide ](https://www.thingiverse.com/thing:4658388)

## Motherboard

- [BTT Octopus](https://3dwork.io/en/btt-octopus/)

## Speed
- [reality Ender 6 w/ BIQU H2 - 200mm/s@6k acceleration](https://www.youtube.com/watch?v=82gAH7u3tMM) / [100mm/s and 4000 acc](https://www.youtube.com/watch?v=EqPe5yzP3zo)

- [My regular speed is 150ms 3.5k accel](https://www.reddit.com/r/ender6/comments/k8id45/why_is_the_ender_6_not_getting_as_much_attention/)
