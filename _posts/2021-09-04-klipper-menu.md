---
published: true
title: Menu Config (Klipper)
tags: 3dprinter klipper
---
> You can override anything in the menu structure from your printer.cfg. - [menu](https://www.klipper3d.org/Config_Reference.html#menu) / [default menu.cfg](https://github.com/KevinOConnor/klipper/blob/master/klippy/extras/display/menu.cfg)

[Template expantion](https://github.com/KevinOConnor/klipper/blob/master/docs/Command_Templates.md): config section is evaluated using the Jinja2 template languate.

### main
- Tune - visible only when printing
- Octoprint
- SD Card -> _disabled_
- Control
- Temperature
- Filament
- Setup


## [Macro & template](https://www.klipper3d.org/Command_Templates.html)

When creating a G-Code macro it is a good idea to always explicitly set the G-Code parsing state (relative or global), and to save and restore state before and after. That the purpose of the `SAVE_GCODE_STATE` macro.

- [ boardthatpowder/macro](https://github.com/boardthatpowder/klipper-firmware/blob/master/printer.cfg)
- [KevinOConnor](https://github.com/KevinOConnor/klipper/blob/master/config/sample-macros.cfg)
	- [Hywel Martin](https://github.com/KevinOConnor/klipper/issues/1354) / [reddit](https://www.reddit.com/r/ender5plus/comments/kb5oe9/klipper_m600_filament_change/)
- [Desuuuu/klipper-macros](https://github.com/Desuuuu/klipper-macros/tree/master/macros)

see also [gcode]({% post_url 2018-09-08-gcode %})


## Octoprint integration

Octopklippper can defined accessible macro in Octoprint

## [Klipper M600 filament change](https://www.reddit.com/r/ender5plus/comments/kb5oe9/klipper_m600_filament_change/)

Octoprint and firmware do not always talk well together and they can interrupt each other. So, just use the Klipper command buttons that can be added in the OctoKlipper plugin. **Do not use the OctoPrint pause button**.
