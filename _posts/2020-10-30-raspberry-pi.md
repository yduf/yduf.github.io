---
published: true
title: Raspberry Pi
tags: raspberry-pi hardware arm
---
> The Raspberry Pi is a tiny and affordable computer that you can use to learn programming through fun, practical projects. - [raspberrypi.org](https://www.raspberrypi.org)

{::nomarkdown}
<link rel="shortcut icon" href="https://www.raspberrypi.org/app/themes/mind-control/images/favicon.png" type="image/png" />
{:/}

## USB
### [Finding Serial ports](https://www.klipper3d.org/FAQ.html#wheres-my-serial-port)
- `ls /dev/serial/by-id/*` -> **this is stable**
- `lsusb` -> USB-Serial adapter
- `dmesg | grep -i serial` -> 3f201000.serial: ttyAMA0
- [What is the difference between ttys0, ttyUSB0 and ttyAMA0?](https://unix.stackexchange.com/questions/307390/what-is-the-difference-between-ttys0-ttyusb0-and-ttyama0-in-linux)
	- **ttyAMA0** is the device for the first serial port on ARM architecture. ttyAMA0 can be the Tx, Rx pins for the Raspberry. But for the [*Raspberry Pi 3b*](ttyAMA0 can be the Tx, Rx pins for the Raspberry. But for the Raspberry Pi 3b it was used for the Bluetooth.) it was used for the **Bluetooth**.
    - **ttyUSB0** is the device for the first USB serial convertor.

### [turn off USB ports power](https://forums.raspberrypi.com/viewtopic.php?p=813383#p813383)

`hub-ctrl.c/hub-ctrl -h 0 -P 2 -p 0 ` turn off the power to the all the usb ports

### [Temperature Monitoring](https://www.raspberrypi-spy.co.uk/2020/11/raspberry-pi-temperature-monitoring/) - `vcgencmd measure_temp`

### [Wifi]({% post_url 2021-04-18-wifi %})
- [Disable WiFi (wlan0) on Pi](https://raspberrypi.stackexchange.com/questions/43720/disable-wifi-wlan0-on-pi-3)

### [Boot](({% post_url 2020-09-20-uast-drive %}))

## Fleet
[Checking Model version](https://www.raspberrypi-spy.co.uk/2012/09/checking-your-raspberry-pi-board-version/) `cat /proc/device-tree/model` 
or `pinout` in new raspbian version
- Raspberry Pi 3 Model B Rev 1.2 (octopi)- armv7l - 1Go


## [r/raspberry_pi](https://www.reddit.com/r/raspberry_pi/)
- [Act as a usb device for another computer.](https://www.reddit.com/r/raspberry_pi/comments/jir0u8/i_just_realized_the_raspberry_pi_4_can_do/)
- [How to Install Vulkan on Raspberry Pi](https://www.reddit.com/r/raspberry_pi/comments/ji9a47/how_to_install_vulkan_on_raspberry_pi/)
- [automated ioquake3 compiler script for raspbian](https://www.reddit.com/r/raspberry_pi/comments/ji20ns/automated_ioquake3_compiler_script_for_raspbian/)
    
- [r/cyberDeck/](https://www.reddit.com/r/cyberDeck/)
	- [x86 recovery kit.](https://www.reddit.com/r/cyberDeck/comments/jciwh2/work_in_progress_my_x86_recovery_kit_i_call_it/)
    - [My take on the pi quick kit](https://www.reddit.com/r/cyberDeck/comments/jihgz1/my_take_on_the_pi_quick_kit/)
    - [H.U.E.V.01.](https://www.reddit.com/r/cyberDeck/comments/je103e/based_off_back7co_design_i_present_huev01/)
    - [The Division](https://www.reddit.com/r/cyberDeck/comments/ivsw32/the_division_shd_cyberdeck_part_3_component/)
