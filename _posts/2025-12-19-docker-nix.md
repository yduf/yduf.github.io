---
title: Docker+Nix
published: true
tags: nix docker graph
---
> Nix is exceptionally good at making docker containers. - [HN](https://news.ycombinator.com/item?id=47290693)

- [Optimising Docker Layers for Better Caching with Nix ](https://grahamc.com/blog/nix-and-layered-docker-images/)
  - Efficient layering is hard because there are no rules
  - With restrictions, we can make better optimisations (Nix does have rules.)
  - Think graphs, not layers
  - Flattening Graphs to Layers

- [Docker images from Nix](https://chatgpt.com/c/6944f51d-6b08-8327-98bf-3bbed88ed8aa)
- [nix-snapshotter](https://github.com/pdtpartners/nix-snapshotter?tab=readme-ov-file#nix-snapshotter) - Instead of downloading image layers, software packages come directly from a Nix store.

