---
published: true
title: N-Stop choice
tags: math algorithm
---
> Probleme: comment choisir D points d'arret sur un trajet, parmis N point intermediare donnés, vérifiant que ces points soient les plues éloignés les un des autres.

Idée faire varier le nombre D:
- D=1 => on cherche un point le plus proche de la distance totale/2

Idée générale: si on me donne la distance je peux vérifier qu'elle est le prochain arret vérifiant cette distance min entre les arrêts

Comment trouver la distance: brute force sur toutes les distances possibles entres les positions (avec une dichotomie).
