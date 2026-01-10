---
title: Power Supply
published: true
tags: power electronic
---
> [Every Component of a Switch Mode Power Supply Explained](https://www.youtube.com/watch?v=3FyXqNcqvRM)

see also
- [How A Switch Mode Power Supply Really Works? Inside an SMPS](https://www.youtube.com/watch?v=w6ftxjuawZ0)

- inductor (bobine)
	- act as a spring (load a certain amount of current (like a spring tension))
    - this load is released when cutting input current
    - the energy is store in the iron core
    - the primary coil (bobine) => store energy from input current
    - the secondary coil retrieve the energy from iron core (at a different peace)
    	- the smaller the inductor (core) the less energy stored
        - higher switching frequency in the charging/decharging process
- isolation
	- ?
- bridge of diod
	- pour redresser le courant alternatif
- capacitor
	- pour lisser le resultat du redressage
    - must be discharged before check
- MOSFET
	- control how much energy is put into the inductor
- Diod
	- to avoid output current comming back to the input 
- Output capacitor
	- smooth again the resulting DC

### Other details
- LED + resistor (to not blow the LED)
	- show that output current is flowing
    - does not means that there is no input current.
- resistor in // to outptu capacitor
	- to empty the output capacitor when powering down and avoid them being kept charged
- capacitor on the returning current (neutral side)
	- to avoid having frequeny noise commming back to the main
- fuse / input protection
	- to protect both main and psu
    
- NTC Thermistor
	- to limit the input current coming in
- MOX
	- voltage resistant thermistant / suppress high peak current

And other
- to make sure the Electro Magnetic compatibility (EMC) regulation is assured
	- in order to don't mess with other equipment
