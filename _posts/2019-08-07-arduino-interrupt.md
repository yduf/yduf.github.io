---
published: true
title: Interrupt (arduino)
tags: arduino interrupt
---
## [We Interrupt This Broadcast...](https://www.allaboutcircuits.com/technical-articles/using-interrupts-on-arduino/)

[TL;DR (nice ref)](https://arduino.stackexchange.com/questions/30968/how-do-interrupts-work-on-the-arduino-uno-and-similar-boards/30969#30969)

### When writing an Interrupt Service Routine (ISR):
- Keep it short
- Don't use delay ()
- Don't do serial prints
- Make variables shared with the main code volatile
- Variables shared with main code may need to be protected by "critical sections" (see below)
- Don't try to turn interrupts off or on

### [INPUT or INPUT_PULLUP](https://forum.arduino.cc/index.php?topic=384675.0)

### [Analog Comparator Interrupt](https://forum.arduino.cc/index.php?topic=149840.0)

### [More than 2 pin interrupts](https://forum.arduino.cc/index.php?topic=13727.0)
- ["pin change" type interrupts.](https://arduino.stackexchange.com/questions/1784/how-many-interrupt-pins-can-an-uno-handle/12958#12958)
	- [interrupts on the Arduino Uno (Nick Gammon)](http://gammon.com.au/interrupts)

- [Multiple pin change interrupt](https://www.reddit.com/r/arduino/comments/2z095i/attaching_more_than_3_interrupts_to_an_arduino_uno/)
If you choose your interrupt pins carefully you can have up to 5 pins that each have their own interrupt handler. After that you then have to start sharing a handler and you have to add some extra code to figure out which pin caused the interrupt.

