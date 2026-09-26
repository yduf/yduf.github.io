---
title: Lutris
tags: games wine lutris nvidia gpu emulator
toc: true
---
> Play all your games on Linux - [Home](https://lutris.net/) / [r/linux_gaming](https://www.reddit.com/r/linux_gaming/comments/sbncmq/are_there_any_just_works_controllers_for/)

# Runners

- [Adding runner](https://github.com/lutris/lutris/discussions/3772) - menu / preferences

## [PPSSPP ⮺]({% post_url 2023-10-20-console-psp %}#ppsspp-)

# GE Proton

<div class="encart orange" markdown="1">
Wine (in the GE-Proton8-26 runner) uses its ALSA driver, which routes through ALSA's default device. On the host, that works because Ubuntu's ALSA config sends default to the pulseaudio plugin → PipeWire.

Inside the Flatpak sandbox, the same path broke at two levels:
1. The runtime's ALSA default routes to the pcm_pulse plugin, which tried to load libwrap.so.0 (a tcp_wrappers dependency of pulseaudio's libs) — and the freedesktop runtime doesn't ship libwrap:
      ALSA lib: Cannot open shared library libasound_module_pcm_pulse.so
   (libwrap.so.0: cannot open shared object file)
      → audio device open failed → silent game. (The launcher worked because the host has libwrap.so.0.)
2. Along the way I also found the wine prefix had no explicit audio driver selection; I set HKCU\Software\Wine\Drivers → "Audio"="pulse" in the prefix registry so the pulse path is used deterministically.

The fix (no root required)

- Copied the host's libwrap.so.0 (4 KB) into /home/yves/Games/gog/bleak-sword/lib/
- Added LD_LIBRARY_PATH=/home/yves/Games/gog/bleak-sword/lib to:
  - the Lutris game config env, and
  - launch-bleaksword.sh (appended to any existing value, harmless on the host)

Now ALSA's pcm_pulse plugin loads inside the sandbox, routes to the PipeWire socket (which the Flatpak already had access to), and the audio flows.
</div>

# [Gamescope  ⮺](https://wiki.archlinux.org/title/Gamescope)

Gamescope is a microcompositor from Valve that is used on the Steam Deck. Its goal is to provide an isolated compositor that is tailored towards gaming and supports many gaming-centric features such as:
- Spoofing resolutions.
- pscaling using AMD FidelityFX™ Super Resolution or NVIDIA Image Scaling.
- Limiting framerates.

# [What is DXVK?  ⮺](https://github.com/lutris/docs/blob/master/HowToDXVK.md)

<div class="encart orange" markdown="1">
Lutris runs inside the Flatpak sandbox, where the host's NVIDIA driver is invisible — Flatpak apps get it via a matching org.freedesktop.Platform.GL.nvidia-XXX extension. You had extensions for old driver versions (525/535/570) but not for 580.178.04 (the current host driver) — so inside the sandbox there was no NVIDIA Vulkan driver at all, and DXVK aborted instantly. That's also why Lutris logged "card0" is No GPU.
</div>

So if running multigpu, this has to be adjusted.

# [What is Esync?  ⮺](https://github.com/lutris/docs/blob/master/HowToEsync.md)

Esync removes wineserver overhead for synchronization objects. This increases performance for a lot of games, especially ones that rely heavily on multithreading.

Esync is enabled by default starting with Lutris 0.5.9 and all presently available Lutris Wine versions include Esync.

[![caption](https://lutris.net/static/images/screenshots/gog-screen.jpg)](https://lutris.net/about)
