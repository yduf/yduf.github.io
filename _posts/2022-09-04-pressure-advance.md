---
published: true
title: Pressure Advance
tags: 3dprinter klipper
---
> 

### [Pressure Advance Tool – Klipper](https://www.advanced3dprinting.com/linear-advance-tool-klipper/)

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
