---
title: Discoeasy 200 (3d printer)
published: true
tags: 3dprinter
---
> First printer in 2017. Kit is ok, but configuration has some undocumented issue (but forums has answer). - [discoeasy 200](https://dagoma.fr/tutoriels/tutoriels-discovery200.html)

- [3d printer tips from hackaday](https://hackaday.com/2016/07/06/build-a-3d-printer-workhorse/)

### Ecran Rep rap

- [ajouter un écran RepRap FullGraphic](https://www.dagomaniack.fr/2017/04/30/tutoriel-ecran-reprap-fullgraphic-controler-de200/)

enlever les detrompeurs des nappes coté ecrans et les brancher a l'envers en gardant la correspondance exp1 / exp2. (les nappes dagoma ont juste les detrompeurs dans l'autre sens)

- boitier alternatif sur [thingberse](https://www.thingiverse.com/thing:2445739)

- upload du firwmare supportant l'ecran cd [dagoma](https://dagoma.fr/montage-de-l-ecran.html)

- Flash a partir des [sources marlin](https://www.lesimprimantes3d.fr/forum/topic/8452-comment-flasher-un-marlin-modifi%C3%A9/?tab=comments#comment-97478)

  - recuperer [l'arduino IDE](https://www.arduino.cc/en/main/software#)
  - ouvrir le fichier marlin.ino
  - choisir type de carte "Arduino Mega or Mega 2560"
  - idem pour CPU type
  
- l'ecran a besoin d'une librairie additionnelle [ U8glib ](http://www.printer3d.one/fr/tutoriel-installer-firmware-marlin-1-1-limprimante-3d-wanhao-duplicator-6/)
  - ajouter la lib depuis l'ide Sketch/include libraries/manage libraries puis search U8glib et install
  
    - compile + upload

## [Cura](https://github.com/Ultimaker/Cura/tree/3.0)

- [Cura v2.7](http://kerneldesign.fr/cura-2-7-supporte-la-dagoma-discoeasy200/)
- [Configuring Cura v2.6](http://kerneldesign.fr/dagoma-discoeasy200-et-cura-2-6/)

## Troubleshooting printing

- [A visual Ultimaker troubleshooting guide - 3DVerkstan Knowledge Base](http://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide#stringing)
- [RepRap printDoctor — Wiki LOGre](https://www.logre.eu/wiki/RepRap_printDoctor)

## Hardware

### [head E3D V6](https://dagoma.fr/boutique/produit/imprimantes-3d/discoeasy200-en-kit.html)
- [V6 Assembly](https://e3d-online.dozuki.com/Guide/V6+Assembly/6#s89)
	- [heatbreak](https://www.lesimprimantes3d.fr/forum/topic/16644-dagoma-discoeasy-200-gros-probleme/?do=findComment&comment=213216)
    ![caption](https://www.lesimprimantes3d.fr/forum/uploads/monthly_2018_08/heatbreak.jpg.b0884dbc365a2c0d2beeedc423e73db0.jpg)
- [Changer la cartouche de chauffe](https://support.dagoma.fr/support/solutions/articles/36000068077-discoeasy200-changer-la-cartouche-de-chauffe)

### [carte "MKS Base v1.5"](https://www.iot-experiments.com/dagoma-discoeasy200/)
 similaire [à un Arduino Mega 2560](https://github.com/MarlinFirmware/Marlin/wiki/Supported-Hardware#mks_base-40) - 16MHz + [carte RAMPS](https://reprap.org/wiki/Arduino_Mega_Pololu_Shield). - [spec](https://www.tomtop.com/p-e3250.html)
- [detail pin](https://reprap.org/wiki/MKS_BASE_1.0)
- [pins](https://reprap.org/mediawiki/images/b/b7/MKS_BASE_PINS.pdf)
- [schematic](https://reprap.org/wiki/File:RAMPS1.4schematic.png)

- [AT Mega pins name](https://cdn.thingiverse.com/assets/3b/87/be/00/40/ATMega_Pins.png)

- thermistor: [ATC Semitec 104GT-2](https://github.com/stefdev49/Marlin/commit/112e526055b005915dd3b87fb8a445405874d42c#diff-208fc9ab75ffd757bceef9d68e6fecfcR104)


## [tips for Dagoma DiscoEasy200](https://www.iot-experiments.com/dagoma-discoeasy200/)

## firmware
- [stefdev/Marlin](https://github.com/stefdev49/Marlin)
