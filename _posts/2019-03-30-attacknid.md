---
published: true
title: Hacking the Attacknid
tags: robot reverse 2.4GHz
---
> The hexapod is the clever design work of Jaimie Mantzel, a somewhat eccentric Canadian inventor. In fact, the Attacknid is really a miniature version of [the Giant Robot Mantzel](https://www.youtube.com/watch?time_continue=698&v=YjTcReaOqQ0) recently finished building. What makes Mantzel’s design impressive is that despite its six legs, only two DC motors control its movement ­— compare that with the 12 servo motors minimum you’d find in any other six-legged walker. - [Arduino project: Hacking the Attacknid](https://web.archive.org/web/20140319044803/http://apcmag.com:80/arduino-project-hacking-attacknid.htm#null)

![caption](https://web.archive.org/web/20140320075928im_/http://media.apcmag.com/wp-content/uploads/sites/20/2014/03/attacknid.jpg)

## Arduino project: Hacking the Attacknid

- [webarchive/apcmag](https://web.archive.org/web/20140319044803/http://apcmag.com:80/arduino-project-hacking-attacknid.htm#null)

- [raspberrypi](https://www.raspberrypi.org/forums/viewtopic.php?t=23695)
The PCB actually has 10x empty spots next to the switch contacts that seem to have been purposely included for this very purpose/testing/development.

First things first though - I will drill some holes and mount 12 GPIO pins on the handset to break it out to connect via wires to the corresponding spots on the PCB.

8 will go to the 8 buttons.
2 will go to the 2 (apparently) ground lines that the 2 clusters of 4 buttons short to.
the other 2 will go to the +3v / gnd supply lines in the battery compartment.

The controller has something that resembles a NRF24L01 RF transceiver in it.

- [makezine](https://makezine.com/2015/05/08/hack-cool-off-shelf-toys-robots/)

- [webarchive/apcmag](https://web.archive.org/web/20140319044803/http://apcmag.com:80/arduino-project-hacking-attacknid.htm#null)

- [Ez Robot Attacknid](https://synthiam.com/Robot/Ez-Robot-Attacknid-6lr-137)


### see also
- [Reversing a 2.4GHz Remote Control ](https://news.ycombinator.com/item?id=31168052)