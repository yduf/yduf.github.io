---
title: Linux System 🐧
published: true
tags: linux-system package nix guideline
toc: true
---
> Guideline for system & apps setup

# System

For Base system like ubuntu / Linux Mint
- enable [Nix]({% post_url 2026-01-24-package-nix %}) to support user autonomy 

## APT
- Kernel
- systemD
- ZFS

## Docker / Podman

# User

<div class="encart green" markdown="1">
Let user self manage his application, for that leverage
- [Nix profile](#nix-profile-)
- appimage / flatpack

For managing config
- leverage [Chez moi]({% post_url 2026-02-01-config-chezmoi %})
</div>

## [Nix Profile ⮺]({% post_url 2026-01-24-package-nix %}) 

## Home manager

- [Chewmoi + Homemanager](https://chatgpt.com/share/6a5f857d-d758-83eb-8797-7ff1c61fc09a)

## AppImages
- Freecad

## Docker / Podman

# DEV / Project

## Nix Flakes
