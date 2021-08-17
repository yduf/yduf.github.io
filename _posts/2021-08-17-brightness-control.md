---
published: true
title: Brightness Control
tags: screen display brightness
---
> supports an arbitrary number of displays!

[**Brightness Controller**](https://github.com/lordamit/Brightness) changes [gamma]({% post_url 2020-06-29-redshift %}) and not hardware setting and as such is equivalent to `xrandr`.

## [Display Data Channel](https://en.wikipedia.org/wiki/Display_Data_Channel)
Enable the display to communicate its supported display modes to the adapter and that enable the computer host to adjust monitor parameters, such as brightness and contrast.

**Need to be member of i2c group to be usefull (or sudo)**

[**ddcutil**](https://github.com/rockowitz/ddcutil/tree/1.2.0-rc1) / [Doc](https://www.ddcutil.com/tech_support/)- a Linux program for querying and changing monitor settings, such as brightness and color levels.
	- [Display Brightness Slider for Gnome Shell](https://github.com/daitj/gnome-display-brightness-ddcutil) - Brightness slider for all the monitors detected by ddcutil

[**DDCcontrol**](http://ddccontrol.sourceforge.net/)

[**DC/CI kernel module**](https://unix.stackexchange.com/questions/189675/is-there-a-way-to-adjusts-the-brightness-of-the-monitor/546329#546329) allows any tool which can use the kernel’s backlight system  (`/sys/class/backlight`) to drive the backlight on a DDC/CI monitor

see also
- [ACPI]({% post_url 2021-07-25-acpi %})