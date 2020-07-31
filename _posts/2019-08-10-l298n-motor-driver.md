---
published: true
title: H-Bridge Motor Driver (arduino)
tags: arduino motor driver robot
---
- **PWM** – For controlling speed
- **H-Bridge** – For controlling rotation direction

# [TB6612FNG H-Bridge Motor Controller](https://dronebotworkshop.com/tb6612fng-h-bridge/)
[video](https://www.youtube.com/watch?v=JPPTRj0KWbg) -

## Better than L298N?
- use similar control signal
	- ordered [TB6612FNG Module](https://www.amazon.fr/gp/product/B07KVTXFWN/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1) - [spec](https://www.sparkfun.com/datasheets/Robotics/TB6612FNG.pdf) - max input **15V**
    - got a [DRV8833 Dual H-BridgeMotorDriver](https://www.ti.com/lit/ds/symlink/drv8833.pdf) - compatible, but board pin layout is different. - max input **11.8V**
    
- MOSFETs better performance
	- better performance
    - lower voltage drop
    
- [TB6612FNG Hookup Guide](https://learn.sparkfun.com/tutorials/tb6612fng-hookup-guide/all)
![caption](https://i1.wp.com/dronebotworkshop.com/wp-content/uploads/2019/12/TB6612FNG-Arduino-Hookup.jpeg?w=768&ssl=1)

# L298N Motor Driver

## [Powering motors & logic](https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/#power-supply)
The module has an on-board 78M05 5V regulator from STMicroelectronics. It can be enabled or disabled through a jumper.

**When this jumper is in place**, the 5V regulator is enabled, supplying logic power supply(Vss) from the motor power supply(Vs). **In this case, 5V input terminal acts as an output pin and delivers 5V 0.5A. You can use it to power up the Arduino** or other circuitry that requires 5V power supply.

**When the jumper is removed**, the 5V regulator gets disabled and **we have to supply 5 Volts separately through 5 Volt input terminal.**


## [How to Use L298N Motor Driver](https://www.teachmemicro.com/use-l298n-motor-driver/)

### [controle motor with a potentiometer](https://i0.wp.com/dronebotworkshop.com/wp-content/uploads/2017/02/L298-Motor-Control-Module-Arduino-Potentiometers-e1504972437694.jpg?w=768&ssl=1)

### [Controlling DC Motors with the L298N H Bridge and Arduino (DroneBot WS)](https://dronebotworkshop.com/dc-motors-l298n-h-bridge/)
[![caption](https://img.youtube.com/vi/dyjo_ggEtVU/0.jpg)](https://www.youtube.com/watch?v=dyjo_ggEtVU)

![caption](https://www.teachmemicro.com/wp-content/uploads/2018/03/L298N-H-Bridge-Motor-Controller-Annotated.jpg)

## [Motor PWM Speed Control](https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/)

![caption](https://lastminuteengineers.com/wp-content/uploads/2018/11/Wiring-L298N-Motor-Driver-Module-with-DC-TT-motors-and-Arduino-UNO.png)
