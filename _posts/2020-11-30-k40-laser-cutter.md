---
published: true
title: K40 laser cutter
tags: cnc laser laser-cut
toc: true
---
> Your new laser cutter may attempt to kill you in a number of way... - [The k40 laser resource](https://k40lasercutter.com/) / [r/lasercutting](https://www.reddit.com/r/lasercutting/wiki/k40) / [K40laser.se](https://www.k40laser.se) / [Laser Gods](https://www.lasergods.com)

<link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/9252/9252648.png" type="image/x-icon" />

[![caption](https://qph.cf2.quoracdn.net/main-qimg-1482f39eeb7fe2a2abc3631275f95e42-c)](https://news.ycombinator.com/item?id=38865518)


1. Never fire the laser with the cover open.
1. Never operate the laser without the water pump functioning, and proper ventilation.
1. Never look at the laser directly. Reflections from the laser can permanently blind you. Even reflections off of a wall or material being cut can be incredibly dangerous.
1. Never leave the operating laser unattended.
1. Have a fire extinguisher on hand, and be able to kill power to the unit immediately in case of emergency.
	- Have a properly maintained CO2 fire extinguisher close at hand
	- Keep a spray bottle of water to hand to supress small flames that may char your material (and which might grow into a major fire)

During operation the tube also produces non-laser light in other frequencies including ultra-violet which can shine out from the tube in many directions and also reflect off the laser mirrors.

# [Hardware](https://www.reddit.com/r/lasercutting/wiki/k40/)

## Fred Gift

A 3020 model
- [M2Nano - Lihuiyu Studio Labs](https://www.raylasers.com/product/cloudray-lihuiyu-m2nano-laser-control-set/)
	- Firmware ver 2019.01.12
    - Model 6C6879-LASER-M2:9
- point laser
- lentille 12mm Ø

[![the beast](https://m.media-amazon.com/images/I/51U5dvHWGCL._AC_UL480_QL65_.jpg)](https://www.amazon.fr/am%C3%A9lior%C3%A9-graveur-affichage-num%C3%A9rique-imprimante/dp/B0FD9FDWS8)

## CO2 Laser

![high voltage](https://cdn-icons-png.flaticon.com/128/813/813835.png) - <span style="color:red">[**Approx 20kV arc are powering the laser**]</span>

**Before doing anything, remove all power cords and let the machine sit at least 30min before even thinking about touching something close to the power supply.**

[![laser CO2](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Laser_CO2.png/1500px-Laser_CO2.png)](https://fr.wikipedia.org/wiki/Laser_au_dioxyde_de_carbone)

# Customisation

- [K40/Chinese CO2 laser cutter/engraver buyer’s guide (Teaching Tech)](https://www.youtube.com/watch?v=Gc_1jDVRKEQ)
- [Découpe laser CO2 K40 - Améliorations / hacking de la machine](https://civade.com/post/2020/08/23/D%C3%A9coupe-laser-CO2-K40-Am%C3%A9liorations-/-hacking-de-la-machine) - propose plusieurs amélioration avec leur difficulté et leur pertinance

## Analog Control

Buttons are just a digital version of the potentiometer, so it works good. Easy to set the power.
But you need a mA-meter to keep a eye on power output. 100% on the panel is 140-150% on the tube – and you will kill it quick.

**With Amperemetre installed - 26% => 14mA**

In order not to shorten the life of your laser you need to keep the current [below c. 15mA](https://laserhints.com/co2-laser-tubes-everything-you-need-to-know/) (for A 30-35W tube).


[![analog meter](https://user-images.githubusercontent.com/3001893/120121608-47e23c80-c19c-11eb-87b9-186417b41e02.png)](https://github.com/meerk40t/meerk40t/wiki/Beginners:-2.-Preparing-your-K40-hardware)


### [Convert to Analog](https://k40.se/k40-laser-upgrades/analog-power-setting/)
	
<div style="
  border-left: 5px solid #e53935;
  background: #ffebee;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

![high voltage](https://cdn-icons-png.flaticon.com/128/813/813835.png) 
  
Beware of proper insulation:
 Caution! If this wires comes loose it may create sparks, arcing or even fire due to the increased resistance if the connector isnt properly fastened, so take care to make sure both are properly crimped and fastened!
</div>

[keep your power at safe levels](https://k40.se/k40-laser-electronics/install-ma-meter/) - Adding a mA-meter to your machine is one of the most important modifications you can do on this machine.
- should I change the buttons? No, keep it. If you like it it´s really no reason to change it.
- [K40 Laser Amp Meter Installation Miliampmeter](https://www.youtube.com/watch?v=uSuuLWbU2ds) - show full build
- [K40 laser Amp Meter Install](https://www.youtube.com/watch?v=h_xL43_aSbo) - focus on connection

[![schema](https://k40.se/wp-content/uploads/2017/09/k40-ma-meter-installed.png)](https://k40.se/k40-laser-electronics/install-ma-meter/)

[Current limiting on the laser is done by pulsing (PWM) the power supply,](https://www.reddit.com/r/ChineseLaserCutters/comments/cyribj/replacing_digital_controls_with_analog/) 
- Laser on and off is controlled by the control board, and it does this the L-pin furthest to the right on the power supply. PIN14 in the picture below.
There is more L-pins but these are connected to the test-buttons only.
Only jumper cable you should have is the one between P+ and gnd, if you dont have a flow sensor. (pin 5&6 in pic below)

[![connection](https://k40.se/wp-content/uploads/2019/05/oldpsulayout.png)](https://k40.se/k40-laser-upgrades/analog-power-setting/)



[![new panel](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFKrQ_Be0ai73mCwh3Xvz4xVE36pA8jTMV_Lmn-I0TCRJAf8jdOJt4uXxZDc_PE130VtKHTmNF2dEo_6dlcYuh000HqSLzxEybPl3HNdPwWS8AmQqrLWfl1Y3y_agxnl1sLTdfCEaYY5-5/s1600/Pic+7.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFKrQ_Be0ai73mCwh3Xvz4xVE36pA8jTMV_Lmn-I0TCRJAf8jdOJt4uXxZDc_PE130VtKHTmNF2dEo_6dlcYuh000HqSLzxEybPl3HNdPwWS8AmQqrLWfl1Y3y_agxnl1sLTdfCEaYY5-5/s1600/Pic+7.JPG)

## Air assist 🌬️💨

### [Usual misconception about air assist](https://k40.se/k40-laser-air-smoke-assist/air-assist/)

The picture below was one of few heads on the market. And it was really bad causing the head acting like a vacuum cleaner, pushing air out in the bottom and sucking smoke in at the top creating optic damages and a lot of cleaning.

[![bad model](https://k40.se/wp-content/uploads/2017/01/k40nozzle-300x300-1.png)](https://k40.se/k40-laser-air-smoke-assist/air-assist/)

Prefer blowing directly on the base.

[![printable model](https://media.printables.com/media/prints/182012/images/1699944_3ec170e7-7740-4cf8-98f1-ae3b54a012fd/thumbs/inside/1600x1200/jpg/large_display_2019-11-14_22_04_15-window_182012.webp)](https://www.printables.com/model/182012-k40-laser-cutter-air-assist-nozzle-for-6mm-hose)

## see also
- [Everything You Need to Know About the K40 Chinese Laser Cutter](https://www.youtube.com/watch?v=09NCmW545GQ)
- [K40 Laser control panel best upgrade under $10.](https://www.youtube.com/watch?v=D1-0TR8-br0)
- [2019 K40 laser upgrades, Manual Z axis build.](https://www.youtube.com/watch?v=bpImYOqbZK4)
- [K40 Laser Cutter & Engraver - What Do You Really Need To Get Started?](https://www.youtube.com/watch?v=t8csFQTgGMw)
- [K40 12x24 Bed Build - Laser tear down and putting the parts together](https://www.youtube.com/watch?v=j20ZhxNnL-Q)
- [OMTECH K40 Plus - Un bon investissement ?](https://www.youtube.com/watch?v=goP29IB8L-I)



# Cooling 💦

<div style="
  border-left: 5px solid #e53935;
  background: #ffebee;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

**The k40's laser tube is liquid-cooled. Never operate the laser, even for an instant, without active liquid cooling.**
</div>


It is important that you keep your laser tube below 25°C during use (generally recommended between 15°C and 20°C),

The water will gradually warm up as the laser is operated. When it starts to get warm, either stop using it for a while, or cycle in cooler water.

[How much cooling is enough?](https://forum.makerforums.info/t/cooling-the-k40-laser-tube/79916)
- Enough cooling to keep your cooling water bucket under 20°C and enough pumping to keep about one liter of water per minute flowing through your laser tube.
- Avoid frozen water => Doing this flirts with causing thermal expansion/contraction cracks in the glass.
- The K40 has to get rid of 160W to 200W of waste heat
- **Move about liter of water per minute through the K40 tube, and cool it to between 18°C and 20°C in the cooling tank.**
- Always make sure your return hose end goes under the water level in the coolant bucket. This creates a siphon effect which makes your pump work much better.
- Keep in mind that you have to cool the water in your bucket, too, as well as running the water through the laser. Use the largest practical cooling water tank. Most people seem to use 18 to 20 litters and that works well.

[![bucket](https://user-images.githubusercontent.com/3001893/127775469-04944050-076a-4864-a1d8-904f013b60e9.png)](https://github.com/meerk40t/meerk40t/wiki/Beginners:-2.-Preparing-your-K40-hardware)

**It is also essential that the water you use is non-conducting. The easiest way to achieve this is to use deionised water, (we get ours in 5 litre bottles from our local LIDL store at c. 0.70€ per bottle)**

<div style="
  border-left: 5px solid #e53935;
  background: #ffebee;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

**It is also essential that the water you use is non-conducting. The easiest way to achieve this is to use deionised water, (we get ours in 5 litre bottles from our local LIDL store at c. 0.70€ per bottle)**
 
- Anti-freeze is problematic. These can easily cause problems with conductivity.
- Algae growth is a problem, as it interferes with water flow directly, deposits on the glass, prevents heat transfer, and on and on.
	- Tetra AlgaeControl has been tested to not make your water more conductive.
	- Tetra’s AlguMin has been reported to work well. 
	- **Bleach (Chlore) is not recommended.**
</div>

Make sure that the outlet of the water cooling tube (the circled bit) is pointing up to let the air escape (raise the machine):

[![air escape](https://forum.makerforums.info/uploads/default/original/3X/3/b/3b45d7b7800ad26f17a38972747ff748f8e1d6d5.png)](https://forum.makerforums.info/t/cooling-the-k40-laser-tube/79916/9)

- [Cooling Liquid in a K40 Laser / What i use](https://www.youtube.com/watch?v=ookvTMhISDU)
	- adding raditor coolant (Glycol 20%) ?
    
## Thermal Sensor

- [Connecting the temperature sensor to the M3 nano board?](https://forum.makerforums.info/t/connecting-the-temperature-sensor-to-the-m3-nano-board/89022)
	- The two button cells in the thermometer module which came with my K40 are in parallel. It turns on with just one cell. So, it’s 1.5V.
    - Anyhow, some quick googling suggests an LR44 cell has a capacity of 150 mAh. So, 300 mAh for two of them. One AAA cell got 1200 mAh (4x) and an AA cell about twice as much (8x). Either one would last for something like 8+ years.
    
# Tube 🔴

- [Durée de vie typique et facteurs d'influence des tubes laser CO2](https://www.accteklaser.com/fr/duree-de-vie-typique-et-facteurs-dinfluence-des-tubes-laser-co2/)
- [Identifying a Defective CO2 Laser Tube by Plasma Color](https://laser-crafting.com/en/defective-co2-laser-tube-how-to-recognize-when-you-need-a-new-laser-tube/) - CO2 laser tubes contain a gas mixture that depletes over time. When the tube is active, you’ll see a purple plasma beam inside. The stronger the color, the more powerful the tube. If the plasma shifts to a pale pink or even white, it’s a clear sign of a defective laser tube.

[![tube](https://www.accteklaser.com/wp-content/uploads/elementor/thumbs/Typical-service-life-and-influencing-factors-of-CO2-laser-tubes-qhqvfz78vtaw576m1t1zkmzmqe9aq9jviu6elxfkn4.jpg)](https://www.accteklaser.com/fr/duree-de-vie-typique-et-facteurs-dinfluence-des-tubes-laser-co2/)

## Focus 🔍

- [Adjusting Laser Focus – 3 Simple Methods](https://laser-crafting.com/en/adjusting-laser-focus-3-simple-methods/)
- [Upgrading omtech 60W tube to 100W](https://www.youtube.com/watch?v=arrfoOsuL5E)
	- laser led to help alignment
    - measure laser power

[![schema](https://laser-crafting.com/wp-content/uploads/2024/06/Fokus_Materialmitte2.png)](https://forum.makerforums.info/t/k40-big-ghosting-issue/82588/5)

### [Cleaning](https://help.omtech.com/en/k40-series/maintenance/maintenance-and-cleaning)


### Mirror Alignment 

Using tape is a good solution => but don't burn it on mirror, the fume from the glue
are messing the mirror below. Glue it aside, cf [K40 beam alignment target](https://www.printables.com/model/1535554-k40-beam-alignment-target)

- [3 mirrors](https://www.youtube.com/watch?v=Jjaz7E1Xy5c)
- [Main Mirror Replacement](https://www.youtube.com/watch?v=mIn262PcTH4)

![aligment help](mirror-alignement.svg)


### [K40 Big Ghosting issue](https://forum.makerforums.info/t/k40-big-ghosting-issue/82588) 🛠️

Maybe
- [a combination of mirror missalignment](https://www.cnczone.com/forums/laser-engraving-cutting-machine-general-topics/311370-another-k40-newbie-needs-helps-beam-focus.html)
- make sure mirror are clean
- bent brackets
- lack of QC

[![beam alignment](https://forum.makerforums.info/uploads/default/optimized/3X/2/4/24a0b34b43e67d99caa45d927721e161da9b2c2c_2_1035x582.jpeg)](https://forum.makerforums.info/t/k40-big-ghosting-issue/82588/5)


## Grid Adjust

- [Laser K40 de CrazyChop... De mieux en mieux !](https://www.youtube.com/watch?v=PXovi8xZpZU)
	- [grille ajustable](https://www.thingiverse.com/thing:2299337)
    - ventilation
    
## Squareness

- [Laser K40 enfin couper droit....](https://www.youtube.com/watch?v=EeDF-mxMi6o)

## Rotary Axis
- [Rotary Axis For K40 Laser Engraver](https://www.youtube.com/watch?v=-BDObUnKLiY)

# [Software](https://chatgpt.com/share/6905f46e-1180-800d-b3db-15984d8be03b)

<div style="
  border-left: 4px solid #3498db;
  background: #eef7ff;            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >


With a K40, you can set the power of the laser from the front panel, but the controller board is only able to turn the laser on and off.
  
Fortunately the controller can turn the laser on and off very fast indeed. In fact it can do this 1,000x per inch (or c. 400 per cm) which is enough to turn it on and off several times in the width of the laser beam itself!!
  
</div>


## [MeerK40t](https://github.com/meerk40t/meerk40t?tab=readme-ov-file#welcome-to-meerk40t)

A replacement for both the software supplied with the K40 and the K40 Whisperer software. It is designed specifically to drive the popular K40 class of (chinese built) laser machines which have an Lhymicro controller board. In the meantime Meerk40 is able to drive other controller boards (e.g. Gerbil based boards, Fibre Lasers and others), and aspires to support even more in the future. - [wiki](https://github.com/meerk40t/meerk40t/wiki)

### [USB setup](https://chatgpt.com/share/694ac2ed-b464-800d-b29d-c4af3a7a1729)

{% highlight bash %}
$ lsusb
$ sudo nano /etc/udev/rules.d/99-k40.rules
SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="10c4", MODE="0666"

#
$ sudo udevadm control --reload-rules
$ sudo udevadm trigger
# Unplug and re-plug the USB cable
{% endhighlight %}

### Issue
- [second job get stuck fix](https://chatgpt.com/share/692b27b3-93a8-800d-8300-40d79d9ed53e)

### [Tutorials](https://www.youtube.com/watch?v=SZPMhxFWS_Q&list=PLRcH9ggJLNEieFAv81Qb2MmZYxqKXxj6N)


[![UI](https://user-images.githubusercontent.com/3001893/127753148-361eefa5-dad7-4d75-b9d7-05b9739c6062.png)](https://github.com/meerk40t/meerk40t/wiki/Beginners:-5.-Understanding-the-user-interface)

## [OpenBuilds](https://software.openbuilds.com)

## [K40 Whisperer](https://www.scorchworks.com/K40whisperer/k40whisperer.html)

A free open source program alternative to the Laser Draw (LaserDRW) program that comes with the cheap Chinese laser cutters available on E-Bay and Amazon. K40 Whisperer reads SVG and DXF files, interprets the data and sends commands to the K40 controller to move the laser head and control the laser accordingly. K40 Whisperer does not require a USB key (dongle) to function. 


## [VisiCut](https://visicut.org/)

use [LibLaserCut](https://github.com/t-oster/LibLaserCut?tab=readme-ov-file#liblasercut), a platform independant library for Lasercutters.

# Tutos
- [Formation débutant sur les découpeurs laser CO2 ! ](https://www.youtube.com/watch?v=r1ctsFsdDi0)
- [La découpeuse laser K40 - Découverte (Barbatronic)](https://www.youtube.com/watch?v=HpSHowpEGVM&list=LL&index=3)
	- [Amélioration de la K40 - pointeur laser et Air Assist](https://www.youtube.com/watch?v=AwNY7BHcYXY)
    - [Comment j'utilise la machine laser 40 W et les logiciels](https://www.youtube.com/watch?v=7sGo2O-VHsU)

- [Making an Edge Lit Sign with a K40 Laser Engraver](https://www.youtube.com/watch?v=g9_dl2OKkaQ)
- [Acrylic condensation (RDWorks)](https://www.youtube.com/watch?v=n54uNRs8Ydk) - and can catch fire - wary of honeycomb support fume extractor

## Other technics

- [Powder Coating With Lasers..Kinda](https://www.youtube.com/watch?v=xOuWrblwhRQ) - A New Way To Fill Your Engraving With Vibrant Color

# Source

- [amazon](https://www.amazon.fr/Samger-Graveur-Gravure-Sculpture-Machine/dp/B07P5C662T/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=d%C3%A9coupeuse+K40&qid=1606726082&sr=8-10)
	- VEVOR deconseillé commme vendeur


# see also
- [Diode lasers vs. Co2 laser tubes. Advantages and disadvantages](https://endurancelasers.com/diode-lasers-vs-co2-laser-tubes/)
	- diodes: no single diode can create more than 10 watt optical power / Have a long lifespan (if the diode does not work anything really happens to it).
- [Homemade CO2 Laser Tube](https://www.youtube.com/watch?v=5zpbXpHWSB0) / [Part2](https://www.youtube.com/watch?v=6gfdlH9kcvU)
- [EFR CO2 laser tube factory ,60W to 220W power](https://www.youtube.com/watch?v=tYDHQ_mH1Bc)
