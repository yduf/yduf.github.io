---
published: true
title: Birthday paradox
tags: hash math paradox
---
> The birthday problem or birthday paradox concerns the probability that, in a set of n randomly chosen people, some pair of them will have the same birthday. - [wikipedia](https://en.wikipedia.org/wiki/Birthday_problem)

Une erreur fréquente dans la démonstration est de compter le nombre de paires, on omet alors le fait que les évènements ne sont pas disjoints et que trois personnes peuvent bien partager la même date de naissance: ces évènements ne sont pas disjoints. Le plus simple pour obtenir le résultat annoncé est de calculer la probabilité que chaque personne ait un jour anniversaire différent de celui des autres : le contraire de ce que l’on cherche.

Considérons m boîtes numérotées de 1 à m, m étant, pour l'instant, fixé. Supposons qu'on y alloue des boules, chaque boule étant placée dans une des m boîtes de manière équiprobable, indépendamment des allocations précédentes, et cela indéfiniment. Si m=365, ceci est la situation du problème des anniversaires pour un groupe de personnes qui s'agrandit régulièrement. Notons $ T m {\displaystyle T_{m}} T_{m}$ le rang de la première boule qui est allouée dans une boite contenant déjà une autre boule, ce qui correspondrait au rang de la première personne, arrivant dans le groupe, dont la date anniversaire est déjà celle d'un autre membre du groupe.

On s'attend probablement à ce que T m {\displaystyle T_{m}} T_{m} soit du même ordre de grandeur que m, alors que cette convergence en loi révèle que T m {\displaystyle T_{m}} T_{m} est du même ordre de grandeur que m . {\displaystyle {\sqrt {m}}.} {\sqrt {m}}.





