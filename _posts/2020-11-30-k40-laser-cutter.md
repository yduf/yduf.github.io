---
published: true
title: K40 laser cutter
tags: cnc laser
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
- M2 Nano Corel Draw ?


[![the beast](https://m.media-amazon.com/images/I/51U5dvHWGCL._AC_UL480_QL65_.jpg)](https://www.amazon.fr/am%C3%A9lior%C3%A9-graveur-affichage-num%C3%A9rique-imprimante/dp/B0FD9FDWS8)

![high voltage](https://cdn-icons-png.flaticon.com/128/813/813835.png)] - <span style="color:red">[**Approx 20kV are powering the laser**]</span>


[![laser CO2](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Laser_CO2.png/1500px-Laser_CO2.png)](https://fr.wikipedia.org/wiki/Laser_au_dioxyde_de_carbone)

    
- [K40/Chinese CO2 laser cutter/engraver buyer’s guide (Teaching Tech)](https://www.youtube.com/watch?v=Gc_1jDVRKEQ)

- [K40 12x24 Bed Build - Laser tear down and putting the parts together](https://www.youtube.com/watch?v=j20ZhxNnL-Q)

## Cooling
**The k40's laser tube is liquid-cooled. Never operate the laser, even for an instant, without active liquid cooling.**

The water will gradually warm up as the laser is operated. When it starts to get warm, either stop using it for a while, or cycle in cooler water.

[How much cooling is enough?](https://forum.makerforums.info/t/cooling-the-k40-laser-tube/79916)
- Enough cooling to keep your cooling water bucket under 20°C and enough pumping to keep about one liter of water per minute flowing through your laser tube.
- Avoid frozen water => Doing this flirts with causing thermal expansion/contraction cracks in the glass.
- The K40 has to get rid of 160W to 200W of waste heat
- **Move about liter of water per minute through the K40 tube, and cool it to between 18°C and 20°C in the cooling tank.**
- Always make sure your return hose end goes under the water level in the coolant bucket. Keep in mind that you have to cool the water in your bucket, too, as well as running the water through the laser. Use the largest practical cooling water tank. Most people seem to use 18 to 20 litters and that works well.


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
