---
title: Ampli Guitar Park
tags: guitar audio-hardware electronic
---
> Great sounding small guitar combo designed by Marshall and made in Korea in the 90s. This also has a real spring reverb tank! - [Park G10R](https://reverb.com/fr/item/82486025-park-g10) - avec reverb

[![photo](https://rvb-img.reverb.com/i/s--6dlOvtuh--/quality=medium-low,height=800,width=800,fit=contain/5392bb89-67d6-4727-a2b1-f68bb13692bb.jpeg)](https://reverb.com/fr/item/94260351-park-marshall-g10r-guitar-combo-90s?bk=)

[PARK G10R SCHEMATIC](https://elektrotanya.com/park_g10r_schematic.pdf/download.html#dl)

# Reparation March 2026

Dead on September 2025
- Fusible broken -> replaced
- Crashing potentiometer -> all changed
  - cleaned up previous resoldering (done by who?)
- a screw was missing for holding transfo


# [Fusible](https://elektrotanya.com/content/park-g10-guitar-combo-fuse-blow?utm_source=chatgpt.com)

Fusible temporisé (T) 5x20mmm - 250V - [T160L/250V](https://chatgpt.com/share/6998c45a-ea58-800d-81d4-a9b44e354e01) - [amazon](https://www.amazon.fr/gp/product/B09JZG7G62?smid=A1X6FK5RDHNB96&th=1)

**T** → Temporisé (ou fusible lent / retardé)
Cela signifie que le fusible supporte brièvement une surintensité (courant d’appel au démarrage d’un appareil, par exemple un moteur ou une alimentation) sans fondre immédiatement.
- A fast-blow (**F**) < 100 ms at ~2–3× In = 2.76 × rated current (for a 200 mA fuse, that’s ≈552 mA)
- A medium-delay (**M**) 100–500 ms
- A slow-blow (**T**) 0.5s – 10s at 2–3× In


**160** mA → Courant nominal
Le fusible est conçu pour laisser passer jusqu’à 160 milliampères en continu.
Au-delà de cette valeur, s’il y a une surintensité prolongée, il finit par fondre.

**L** → Pouvoir de coupure faible (Low breaking capacity)
Il est prévu pour des circuits à faible énergie de court-circuit, typiquement de l’électronique domestique.
(À l’inverse, H = fort pouvoir de coupure.)


**250 V** → Tension maximale
Le fusible peut être utilisé en toute sécurité jusqu’à 250 volts, en courant alternatif ou continu selon le modèle.

A tester en mode continuité avec un multimetre.

# [Potentiometre](https://sanchezworkshop.fr/blogs/atelier/comment-choisir-le-bon-potentiometre-pour-votre-guitare-electrique-le-guide-complet-2025)

| 1xB2.2K, 1xB10K, 3xB20K, 1xb200K | WH148 - 20mm shaft | 
| 1xA10K                           | alpha RK16         |

Axis diameter 0.24inch/6mm 
Axis length   0.7inch/20mm thread included
Axis length   0.4inch without thread

| Control  | Value |New Value (replacement)|
|----------|-------|------|
| Gain 1   | B10K  |B10K  |
| Gain 2   | B200K |B200K |
| Treble   | B20K  |B20K  |
| Middle   | B2.2K |**B2K** |
| Bass     | B20K  |B20K  |
| Reverb   | B20K  |B20K  |
| Master   | A10K  |A10K  |


## Courbe Audio (Logarithmique) vs Linéaire

Les potentiomètres existent en deux courbes principales : audio (logarithmique) et linéaire. Cette caractéristique détermine comment le son change quand vous tournez le bouton.

### Log / A
Courbe Audio (Logarithmique) - Type "A"

Usage : Volume sur quasiment toutes les guitares électriques.

Fonctionnement : La résistance change progressivement au début, puis rapidement vers la fin. Cela correspond à la perception logarithmique de notre oreille. Résultat : le volume diminue de façon perçue comme "linéaire" par notre cerveau.

Marquage : "A" ou "Audio" ou "Log" gravé sur le potentiomètre.

### Linaire / B
Courbe Linéaire (Linear) - Type "B"

Usage : Tonalité sur la plupart des guitares, ou volume pour certains modèles spécifiques.

Fonctionnement : La résistance change de façon mathématiquement linéaire. Pour la tonalité, cela offre un contrôle précis des fréquences coupées.

Marquage : "B" ou "Linear" ou "Lin" gravé sur le potard.

Règle générale : Volume = Audio (A) / Tonalité = Linéaire (B) ou Audio selon préférence.

# see also
- [ Dead Roland Boss Katana-100 Guitar Amplifier : The Internet Says These Are Impossible To Repair ](https://www.youtube.com/watch?v=FFKbDYCo9QA)
- [Pourquoi démonter un potentiomètre pour le nettoyer](https://www.astuces-pratiques.fr/electronique/nettoyer-et-reparer-un-potentiometre)
- [Potentiomètre guitare – faire le bon choix](https://www.cabler-sa-guitare.fr/potentiometre-guitare-faire-son-choix/)

- [FICHES AIDE POTENTIOMETRES](https://www.emma-music.com/fiches-aide-potentiometres-c102x3937409)