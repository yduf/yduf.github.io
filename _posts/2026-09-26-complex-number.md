---
title: "Complex Number (ℂ)"
tags: math complex-number
excerpt_separator: ""
use_math: true
toc: true
---


# Derivabilité de ℂ

Est définie par le passage à la limite quand h -> 0.
Probleme dans le plan complexe, on peut arriver depuis differentes directions, et toutes les fonctions dérivable sur ℝ ne sont pas dérivables sur ℂ,
car elles ne converge pas vers la meme limites, suivant la direction par laquelle on arrive (eg -1 vs 1)

## Fonction holomorphe
La fonction est dérivable et converge vers la même limite dans toutes les directions

- [ La meilleure explication des équations de Cauchy-Riemann ](https://www.youtube.com/watch?v=H6ylxJH52fw)
  - introduction des dérivées partiels vs x / y
  - critere de Cauchy-Riemann => si derivable en x et y et verifie la condition => alors la fonction est holomorphe

| Formule | Expression |
|---|---|
| $ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y},
\qquad
\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $
| $u_x = v_y,
\qquad
u_y = -v_x.$ |