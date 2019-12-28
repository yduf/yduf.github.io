---
published: true
title: L298N Motor Driver (arduino)
tags: arduino motor driver robot
---
- **PWM** – For controlling speed
- **H-Bridge** – For controlling rotation direction

## [TB6612FNG H-Bridge Motor Controller](https://www.youtube.com/watch?v=JPPTRj0KWbg) - Better than L298N?
- use similar control signal
- MOSFETs better performance
	- better performance
    - lower voltage drop

## [Powering motors & logic](https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/#power-supply)
The module has an on-board 78M05 5V regulator from STMicroelectronics. It can be enabled or disabled through a jumper.

**When this jumper is in place**, the 5V regulator is enabled, supplying logic power supply(Vss) from the motor power supply(Vs). **In this case, 5V input terminal acts as an output pin and delivers 5V 0.5A. You can use it to power up the Arduino** or other circuitry that requires 5V power supply.

**When the jumper is removed**, the 5V regulator gets disabled and **we have to supply 5 Volts separately through 5 Volt input terminal.**


## [How to Use L298N Motor Driver](https://www.teachmemicro.com/use-l298n-motor-driver/)

- [Controlling DC Motors with the L298N H Bridge and Arduino (
DroneBot WS)](https://dronebotworkshop.com/dc-motors-l298n-h-bridge/)
[![caption](https://img.youtube.com/vi/dyjo_ggEtVU/0.jpg)](https://www.youtube.com/watch?v=dyjo_ggEtVU)

![caption](https://www.teachmemicro.com/wp-content/uploads/2018/03/L298N-H-Bridge-Motor-Controller-Annotated.jpg)

## [Motor PWM Speed Control](https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/)

![caption](https://lastminuteengineers.com/wp-content/uploads/2018/11/Wiring-L298N-Motor-Driver-Module-with-DC-TT-motors-and-Arduino-UNO.png)
