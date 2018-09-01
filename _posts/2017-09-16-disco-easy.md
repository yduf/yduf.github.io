---
title: Discoeasy 200 (3d printer)
published: true
tags: 3dprint
---
## [discoeasy 200](https://dagoma.fr/tutoriels/tutoriels-discovery200.html)
A cool 3D printer
kit is ok, but configuration has some undocumented issue (but forums has answer).

[3d printer tips from hackaday](https://hackaday.com/2016/07/06/build-a-3d-printer-workhorse/)

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

- [carte "MKS Base v1.5"](https://www.iot-experiments.com/dagoma-discoeasy200/)
 similaire [à un Arduino Mega 2560](https://github.com/MarlinFirmware/Marlin/wiki/Supported-Hardware#mks_base-40) - 16MHz et [carte RAMPS](https://reprap.org/wiki/Arduino_Mega_Pololu_Shield). - [spec](https://www.tomtop.com/p-e3250.html)
- [detail pin](https://reprap.org/wiki/MKS_BASE_1.0)
- [pins](https://reprap.org/mediawiki/images/b/b7/MKS_BASE_PINS.pdf)
- sensor: ATC Semitec 104GT-2

## [tips for Dagoma DiscoEasy200](https://www.iot-experiments.com/dagoma-discoeasy200/)

## firmware
- [stefdev/Marlin](https://github.com/stefdev49/Marlin)
