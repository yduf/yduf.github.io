---
published: true
title: Chauffage electrique
tags: home
---
> You’re thinking of a relay cutting power to the radiator as a whole. That is indeed not a good idea and may damage it long term. - [Fil pilote](https://community.home-assistant.io/t/fil-pilote-easy-interface/106286/16) / [adomotique](https://www.adomotique.com/content/32-commande-distance-chauffage-fil-pilote)

There are 6 commands in total. Two of them require a microcontroller to generate, as they use precise signal timing. The other 4 can be generated using relays and diodes. Two basic commands can be generated without a diode.

**Without diode, only a relay needed:**  
0V : Mode confort  
230V: Mode eco  

**With a diode:**  
Negative half wave: Mode hors gel  
Positive half wave: Turns off the heater  

- [Utilisation des diodes ](http://www.radiateur-electrique.org/forum/thermostat-programmable-sur-radiateur-electrique-deja-equipe-t2280.html) - [diodes  IN4007 ](https://www.amazon.fr/s?k=diode+1n4007&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17GHELOMBFY3L&sprefix=diode+1n4007%2Caps%2C383&ref=nb_sb_noss_1)

![caption](http://www.radiateur-electrique.org/forum/img/thermostat/thermostat-ambiance-pilote.gif)