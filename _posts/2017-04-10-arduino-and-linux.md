---
published: true
tags: arduino linux
---
## Arduino IDE on Linux

There are many IDE available.

I choosed to use [Platform.io](http://platformio.org/get-started).
Which look more modern than others. Setup and installation was straightforward.

A lot of tutorials are available on [Adafruit](https://learn.adafruit.com/category/learn-arduino) and [www.arduino.cc](https://www.arduino.cc/en/Tutorial/HomePage). For eg:
- [reading analog input](https://www.arduino.cc/en/Tutorial/AnalogInput),
- [using LCD Displays](https://learn.adafruit.com/adafruit-arduino-lesson-11-lcd-displays-1),
- [show the temperature](https://learn.adafruit.com/adafruit-arduino-lesson-11-lcd-displays-1),
- [eyes](https://www.adafruit.com/product/3356)


Tools:
- [Resistor color code calculator](http://www.hobby-hour.com/electronics/resistorcalculator.php)

Note:

Issue with the permissions for /dev/ttyACM0 can be permanantly solved by adding yourself to the dialout group: sudo usermod -a -G dialout <user>

![raspberry_pi_eyes-800x800.jpg]({{ site.baseurl }}/_posts/raspberry_pi_eyes-800x800.jpg)
