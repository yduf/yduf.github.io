---
published: true
title: D-Bus
tags: linux-system dbus
---
> Messaging bus on linux, introduced by GNOME 20 years ago and is considered poorly implemented despite its useful concept. - [It's Time To Make A Major Change On Linux ](https://www.youtube.com/watch?v=upKM5mViQrY)

- D-Bus as no permission and is fully insecure
	- any app on the bus can read key all key in gnome-keyring if the store is open
    	- they are not protected from other application on the system.
- [hyprtavern](https://github.com/hyprwm/hyprtavern?tab=readme-ov-file#hyprtavern) - created as an [alternative to D-Bus bad design]](https://blog.vaxry.net/articles/2025-dbusSucks)
	