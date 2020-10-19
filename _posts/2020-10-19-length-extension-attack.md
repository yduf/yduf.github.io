---
published: true
title: Length Extension Attacks
tags: hash crypto security
---
> An application is susceptible to a hash length extension attack if it prepends a secret value to a string, hashes it with a vulnerable algorithm, and entrusts the attacker with both the string and the hash, but not the secret. Then, the server relies on the secret to decide whether or not the data returned later is the same as the original data. - [Dead Ends in Cryptanalysis #1](https://soatok.blog/2020/10/06/dead-ends-in-cryptanalysis-1-length-extension-attacks/) / [SkullSecurity](https://blog.skullsecurity.org/2012/everything-you-need-to-know-about-hash-length-extension-attacks) 