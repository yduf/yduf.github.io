---
published: true
title: Opto-interrupter (arduino)
tags: arduino
---
## [Sensor](https://dronebotworkshop.com/robot-car-with-speed-sensors/#Optical_Interrupter_Sensor)

You could just purchase a couple of H206 opto interrupters and wire them up to your microcontroller, however you’d probably wouldn’t be satisfied with the results.  That’s because in the real world the output pulses directly from the phototransistor are poorly formed and as a result your code would end up giving a lot of errors.

### [Add an LM393 Comparator](https://dronebotworkshop.com/robot-car-with-speed-sensors/#Add_an_LM393_Comparator)

in the real world the output pulses directly from the phototransistor are poorly formed and as a result your code would end up giving a lot of errors.

What is needed is a way to clean up the output a bit and generate some nice clean 5-volt pulses suitable for using with an Arduino or other microcontroller.  And the perfect component to do that is a “comparator”.

=> These sensors are often called “LM393 Speed Sensors”

### [Wheel sensor & interrupt](https://dronebotworkshop.com/robot-car-with-speed-sensors/#Interrupts)

- [digital interrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/)

## [Digital Sensor Model](https://wiki.eprolabs.com/index.php?title=Opto_Interrupter_MOC7811)

## [Analog Sensor Model](https://www.amazon.fr/gp/product/B07CQWPLWB/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&psc=1)

![caption](https://images-na.ssl-images-amazon.com/images/I/61GuGYqliqL._SL1500_.jpg)

- G -> GND
- S -> analog signal
- V -> 3.3 or 5V ?

<4 min opening


