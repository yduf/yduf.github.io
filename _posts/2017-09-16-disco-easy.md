---
title: Discoeasy 200 (3d printer)
published: true
tags: 3dprinter klipper
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

## Klipper

**old disco easy note below**

- [enable display](https://github.com/KevinOConnor/klipper/blob/aac2fee9decea737f0a740e3519e84c33bf20d41/config/generic-ramps.cfg#L98)
 lcd  => ok
 push => ok
 up   => **KO**
 down => **KO**

choose entry
{% highlight ruby %}
# "RepRapDiscount 128x64 Full Graphic Smart Controller" type displays
{% endhighlight %}

- [Verify temperature](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-temperature)

 temperature reading seems ok (room temperature)

### [Heater Fan](https://github.com/KevinOConnor/klipper/blob/aac2fee9decea737f0a740e3519e84c33bf20d41/config/example-extras.cfg#L316)
 **Verify that fan are on when temp is above than 50c** => ok

Add any number of aditional fans for cooling stepsticks or the coldend by adding Sections to your config.cfg
Theyll switch on once your hotend is set to 50c and switch of once its cooled below 50c.

{% highlight ruby %}
[heater_fan cooling_fan]
pin: PH4
{% endhighlight %}

## Fan control
### [nose fan](https://github.com/KevinOConnor/klipper/blob/c8dc47b1624323c159a15de65474a766b3fa87ce/config/example-extras.cfg#L316)

{% highlight ruby %}
[heater_fan nose_fan]
pin: PH6
{% endhighlight %}

### [temperature fan](https://github.com/KevinOConnor/klipper/blob/c8dc47b1624323c159a15de65474a766b3fa87ce/config/example-extras.cfg#L348)


- [Verify M112](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-m112)

 M112 => cause disconnect

- [Verify heaters](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-heaters)

 extruder Temp control => heat / stabilized / off

### [Calibrate PID settings](Calibrate PID settings)

**Check first that fans are on at 50°**
{% highlight ruby %}
PID_CALIBRATE HEATER=extruder TARGET=170

Recv: // PID parameters: pid_Kp=40.060 pid_Ki=3.762 pid_Kd=106.660
{% endhighlight %}

### [Verify stepper motor enable pin](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-stepper-motor-enable-pin)

 enable_pin ok, X/Y/Z free move

 disable motors (**M84**)

- [Verify endstops](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-endstops)

Send: QUERY_ENDSTOPS (M119)
Recv: x:open y:TRIGGERED z:TRIGGERED

Discoeasy default build has [x- trigger on y axis](https://www.iot-experiments.com/dagoma-discoeasy200/)

As it is quite easy to rectify that => I have chanded it as shown here below.

**From now it is obligatory to remap or use alternative [marlin](https://github.com/IoT-Experiments/Marlin-DiscoEasy200)**

**After Remap**
![caption](https://www.iot-experiments.com/content/images/2018/01/IMG_20180114_103116.jpg)

 Check individual axis trigger (**M119**):
 - xAxis => ok (endstop_pin: ^ar3)
 - yAxis => ok (endstop_pin: ^ar15)
 - zAxis => ok (endstop_pin: ^!ar18)

- [Verify stepper motors](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-stepper-motors)

Check individual axis stepper motor:
- STEPPER_BUZZ STEPPER=stepper_x => ok
- STEPPER_BUZZ STEPPER=stepper_y => ok
- STEPPER_BUZZ STEPPER=stepper_z => ok
- STEPPER_BUZZ STEPPER=extruder ( **with no filament**) => ok

- [Homing](**G28**) **mind the power switch** 
  - G28 X0 => ok
  - G28 Y0 => ok
  - G28 Z0 => ok

- [Compute step_distance on each axis](https://reprap.org/wiki/Calibration#X_.26_Y_scaling_and_steps.2Fmm_calculations)
 - X step_distance: .0125
 - Y step_distance: .0125
 - Z step_distance: .0004

- [Verify extruder motor](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_checks.md#verify-extruder-motor)
 using octoprint control

 -[Calibrate extruder motor](https://www.instructables.com/id/How-to-calibrate-the-Extruder-on-your-3d-Printer/)
  apply ratio of <what you ask> / <what you get> and modify step_distance accordingly.

## [Configure Homing seq](https://github.com/KevinOConnor/klipper/blob/c8dc47b1624323c159a15de65474a766b3fa87ce/config/example-extras.cfg#L665) - (also [discussion](https://github.com/KevinOConnor/klipper/issues/111))

G28 (full homing) that mimic previous behavior

{% highlight ruby %}
[homing_override]
gcode:
 ; lift nozzle to clear bed hardware (safely)
 FORCE_MOVE STEPPER=stepper_z DISTANCE=10 VELOCITY=5 ; need to enable special move
 G28 X0
 G28 Y0
 G1  X100 Y100
 G28 Z0
{% endhighlight %}

## [Z-probe](https://github.com/KevinOConnor/klipper/blob/c8dc47b1624323c159a15de65474a766b3fa87ce/config/example-extras.cfg#L11)

## [Configure bed levelling](https://github.com/KevinOConnor/klipper/blob/master/config/example-extras.cfg) - (see also [#555](https://github.com/KevinOConnor/klipper/pull/555))


## Reconfigure G-Code generator
 - Octoprint before print
 - Cura before / after code

### Open Issue (dagome config)

- M112 - works, but hard to reconnect afterward
- cannot restart service from octoprint (need to issue sudo service klipper restart)
 by eg when ttyUSBx change