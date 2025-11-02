---
published: true
title: "K40 laser cutter \U0001F6A7 "
tags: cnc laser-cut in-progress
---
> Your new laser cutter may attempt to kill you in a number of way... - [The k40 laser resource](https://k40lasercutter.com/) / [r/lasercutting](https://www.reddit.com/r/lasercutting/wiki/k40) / [K40laser.se](https://www.k40laser.se) / [Laser Gods](https://www.lasergods.com)

<link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/9252/9252648.png" type="image/x-icon" />

[![caption](https://qph.cf2.quoracdn.net/main-qimg-1482f39eeb7fe2a2abc3631275f95e42-c)](https://news.ycombinator.com/item?id=38865518)


1. Never fire the laser with the cover open.
1. Never operate the laser without the water pump functioning, and proper ventilation.
1. Never look at the laser directly. Reflections from the laser can permanently blind you. Even reflections off of a wall or material being cut can be incredibly dangerous.
1. Never leave the operating laser unattended.
1. Have a fire extinguisher on hand, and be able to kill power to the unit immediately in case of emergency.


# [Hardware](https://www.reddit.com/r/lasercutting/wiki/k40/)

## Fred Gift

A 3020 model
- [M2 Nano - LiHuiyu Studio Labs](https://www.raylasers.com/product/cloudray-lihuiyu-m2nano-laser-control-set/)
	- Firmware ver 2019.01.12
    - Model 6C6879-LASER-M2:9


[![the beast](https://m.media-amazon.com/images/I/51U5dvHWGCL._AC_UL480_QL65_.jpg)](https://www.amazon.fr/am%C3%A9lior%C3%A9-graveur-affichage-num%C3%A9rique-imprimante/dp/B0FD9FDWS8)

## CO2 Laser

![high voltage](https://cdn-icons-png.flaticon.com/128/813/813835.png)] - <span style="color:red">[**Approx 20kV arc are powering the laser**]</span>

**Before doing anything, remove all power cords and let the machine sit at least 30min before even thinking about touching something close to the power supply.**

[![laser CO2](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Laser_CO2.png/1500px-Laser_CO2.png)](https://fr.wikipedia.org/wiki/Laser_au_dioxyde_de_carbone)

## Customisation

- [K40/Chinese CO2 laser cutter/engraver buyer’s guide (Teaching Tech)](https://www.youtube.com/watch?v=Gc_1jDVRKEQ)

### Analog Control

Buttons are just a digital version of the potentiometer, so it works good. Easy to set the power.
But you need a mA-meter to keep a eye on power output. 100% on the panel is 140-150% on the tube – and you will kill it quick.

- [keep your power at safe levels](https://k40.se/k40-laser-electronics/install-ma-meter/) - Adding a mA-meter to your machine is one of the most important modifications you can do on this machine.
- [Convert to Analog](https://k40.se/k40-laser-upgrades/analog-power-setting/)

[![schema](https://k40.se/wp-content/uploads/2017/09/k40-ma-meter-installed.png)](https://k40.se/k40-laser-electronics/install-ma-meter/)

- [Current limiting on the laser is done by pulsing (PWM) the power supply,](https://www.reddit.com/r/ChineseLaserCutters/comments/cyribj/replacing_digital_controls_with_analog/) 

[![new panel](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFKrQ_Be0ai73mCwh3Xvz4xVE36pA8jTMV_Lmn-I0TCRJAf8jdOJt4uXxZDc_PE130VtKHTmNF2dEo_6dlcYuh000HqSLzxEybPl3HNdPwWS8AmQqrLWfl1Y3y_agxnl1sLTdfCEaYY5-5/s1600/Pic+7.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFKrQ_Be0ai73mCwh3Xvz4xVE36pA8jTMV_Lmn-I0TCRJAf8jdOJt4uXxZDc_PE130VtKHTmNF2dEo_6dlcYuh000HqSLzxEybPl3HNdPwWS8AmQqrLWfl1Y3y_agxnl1sLTdfCEaYY5-5/s1600/Pic+7.JPG)


see also
- [Everything You Need to Know About the K40 Chinese Laser Cutter](https://www.youtube.com/watch?v=09NCmW545GQ)
- [K40 12x24 Bed Build - Laser tear down and putting the parts together](https://www.youtube.com/watch?v=j20ZhxNnL-Q)



## Cooling
**The k40's laser tube is liquid-cooled. Never operate the laser, even for an instant, without active liquid cooling.**

The water will gradually warm up as the laser is operated. When it starts to get warm, either stop using it for a while, or cycle in cooler water.

[How much cooling is enough?](https://forum.makerforums.info/t/cooling-the-k40-laser-tube/79916)
- Enough cooling to keep your cooling water bucket under 20°C and enough pumping to keep about one liter of water per minute flowing through your laser tube.
- Avoid frozen water => Doing this flirts with causing thermal expansion/contraction cracks in the glass.
- The K40 has to get rid of 160W to 200W of waste heat
- **Move about liter of water per minute through the K40 tube, and cool it to between 18°C and 20°C in the cooling tank.**
- Always make sure your return hose end goes under the water level in the coolant bucket. This creates a siphon effect which makes your pump work much better.
- Keep in mind that you have to cool the water in your bucket, too, as well as running the water through the laser. Use the largest practical cooling water tank. Most people seem to use 18 to 20 litters and that works well.


Make sure that the outlet of the water cooling tube (the circled bit) is pointing up to let the air escape (raise the machine):

[![air escape](https://forum.makerforums.info/uploads/default/original/3X/3/b/3b45d7b7800ad26f17a38972747ff748f8e1d6d5.png)](https://forum.makerforums.info/t/cooling-the-k40-laser-tube/79916/9)

- [Cooling Liquid in a K40 Laser / What i use](https://www.youtube.com/watch?v=ookvTMhISDU)
	- adding raditor coolant (Glycol 20%) ?
    
### Thermal Sensor

- [Connecting the temperature sensor to the M3 nano board?](https://forum.makerforums.info/t/connecting-the-temperature-sensor-to-the-m3-nano-board/89022)
	- The two button cells in the thermometer module which came with my K40 are in parallel. It turns on with just one cell. So, it’s 1.5V.
    - Anyhow, some quick googling suggests an LR44 cell has a capacity of 150 mAh. So, 300 mAh for two of them. One AAA cell got 1200 mAh (4x) and an AA cell about twice as much (8x). Either one would last for something like 8+ years.
    
## Tube

- [Durée de vie typique et facteurs d'influence des tubes laser CO2](https://www.accteklaser.com/fr/duree-de-vie-typique-et-facteurs-dinfluence-des-tubes-laser-co2/)
- [Identifying a Defective CO2 Laser Tube by Plasma Color](https://laser-crafting.com/en/defective-co2-laser-tube-how-to-recognize-when-you-need-a-new-laser-tube/) - CO2 laser tubes contain a gas mixture that depletes over time. When the tube is active, you’ll see a purple plasma beam inside. The stronger the color, the more powerful the tube. If the plasma shifts to a pale pink or even white, it’s a clear sign of a defective laser tube.

[![tube](https://www.accteklaser.com/wp-content/uploads/elementor/thumbs/Typical-service-life-and-influencing-factors-of-CO2-laser-tubes-qhqvfz78vtaw576m1t1zkmzmqe9aq9jviu6elxfkn4.jpg)](https://www.accteklaser.com/fr/duree-de-vie-typique-et-facteurs-dinfluence-des-tubes-laser-co2/)

# [Software](https://chatgpt.com/share/6905f46e-1180-800d-b3db-15984d8be03b)

## [MeerK40t](https://github.com/meerk40t/meerk40t?tab=readme-ov-file#welcome-to-meerk40t)

Distributed as AppImate / alive

## [OpenBuilds](https://software.openbuilds.com)

## [K40 Whisperer](https://www.scorchworks.com/K40whisperer/k40whisperer.html)

A free open source program alternative to the Laser Draw (LaserDRW) program that comes with the cheap Chinese laser cutters available on E-Bay and Amazon. K40 Whisperer reads SVG and DXF files, interprets the data and sends commands to the K40 controller to move the laser head and control the laser accordingly. K40 Whisperer does not require a USB key (dongle) to function. 


## [VisiCut](https://visicut.org/)

use [LibLaserCut](https://github.com/t-oster/LibLaserCut?tab=readme-ov-file#liblasercut), a platform independant library for Lasercutters.

### Tutos
- [La découpeuse laser K40 - Découverte (Barbatronic)](https://www.youtube.com/watch?v=HpSHowpEGVM&list=LL&index=3)
	- [Amélioration de la K40 - pointeur laser et Air Assist](https://www.youtube.com/watch?v=AwNY7BHcYXY)
    - [Comment j'utilise la machine laser 40 W et les logiciels](https://www.youtube.com/watch?v=7sGo2O-VHsU)


- [Acrylic condensation (RDWorks)](https://www.youtube.com/watch?v=n54uNRs8Ydk) - and can catch fire - wary of honeycomb support fume extractor

### Source

- [amazon](https://www.amazon.fr/Samger-Graveur-Gravure-Sculpture-Machine/dp/B07P5C662T/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=d%C3%A9coupeuse+K40&qid=1606726082&sr=8-10)
	- VEVOR deconseillé commme vendeur
    
### see also
- [Diode lasers vs. Co2 laser tubes. Advantages and disadvantages](https://endurancelasers.com/diode-lasers-vs-co2-laser-tubes/)
	- diodes: no single diode can create more than 10 watt optical power / Have a long lifespan (if the diode does not work anything really happens to it).
