---
published: true
title: Wheel syncronisation
tags: robot arduino
---
> The trick is not to think of it as synchronizing the motors so much as it is setting them both to a commanded speed. That means each motor is its own separate unit, with its own PID loop. You then synchronize the motors by sending them the same command. This gives you the option to send them different commands, for things like steering or compensating for mismatched wheels. - [forum](https://forum.arduino.cc/index.php?topic=100522.0)

- [Controlled Mobile Robot Speed Synchronization](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.735.4167&rep=rep1&type=pdf)

- [How to sync motor speed](https://forum.arduino.cc/index.php?topic=100522.0)

> The right way to do this is to measure the speed of each wheel and use a PID library (http://arduino.cc/playground/Code/PIDLibrary) to set the PWM output to each motor in order to obtain a commanded motor speed. This is a nice way to do it because you can change the setpoints at will to change the speed or to steer (use different commands). - [forum](https://forum.arduino.cc/index.php?topic=100522.0)

