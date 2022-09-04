---
published: true
title: Pressure Advance
tags: 3dprinter klipper
---
> [Klipper Tuning Guide](https://www.advanced3dprinting.com/tuning-guide-part-1/)

- [Pressure Advance - How To - Chris's Basement](https://www.youtube.com/watch?v=LhYJruVdpxk)

### [Pressure Advance Tool – Klipper](https://www.advanced3dprinting.com/linear-advance-tool-klipper/)

Pick up the line, which is has most consistency, especially when transitioning from slow to fast and fast to slow.
The number on the right represents optimal Pressure Advance value (also called K factor) for the given filament.

** use z-offset=0.05 and layer-height=0.3 to prevend grinding your plate**

Direct extrusion with BIQU H2
{% highlight cpp %}
; Printer: Ender6
; Filament: PLA
; Created: Sun Sep 04 2022 19:28:55 GMT+0200 (Central European Summer Time)
;
; Settings Printer:
; Filament Diameter = 1.75 mm
; Nozzle Diameter = 0.6 mm
; Nozzle Temperature = 220 C
; Bed Temperature = 70 C
; Retraction Distance = 0.5 mm
; Retract Speed = 240 mm/min

; Starting Value Factor = 0
; Ending Value Factor = 0.1
; Factor Stepping = 0.01

; Layer Height = 0.3 mm
; Extruder = 0 
; Fan Speed = 0 %
; Z-axis Offset = 0.05 mm
{% endhighlight %}
