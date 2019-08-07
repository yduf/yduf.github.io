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

### Multiple pin change interrupt

### More than 2 pin interrupts

