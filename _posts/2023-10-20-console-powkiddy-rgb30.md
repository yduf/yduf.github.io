---
published: true
title: Powkiddy RGB30
tags: arcade-hardware gameboy pico8 retro
---
> [Powkiddy](https://powkiddy.com/en-fr/products/pre-sale-powkiddy-rgb30-rk3566-handheld-game-console-built-in-wifi) RGB30 - [In-Depth Review](https://www.youtube.com/watch?v=XgIlD4rNe8k)

- support bluetooth joystick / and HDMI output

- [pico8](https://www.youtube.com/watch?v=KTb6ik1Eb40&t=2012s)
	- [Pico-8 on RGB30](https://www.reddit.com/r/pico8/comments/17ebtq0/pico8_on_rgb30_help_needed/)
	- can be programmed directly on the device

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.n1ZfSor20nrbr8o_S4CbiAHaEK%26pid%3DApi&f=1&ipt=0c888f97e66313041f302f62badb6b3275070124924c51e9d8b45643321d5fd5&ipo=images)

## [System](https://www.reddit.com/r/RG353V/comments/ya2twg/as_of_now_should_i_go_with_arkos_or_jelos/)

They both use [Emulation Station](https://www.emulationstation.org/) they both use [Retroarch](https://www.retroarch.com/), they both use [thememaster](https://johnirvine1433.github.io/ThemeMaster/).


### [JELOS](https://jelos.org/devices/powkiddy/rgb30/) v20231029 - Just Enough Linux Operating System - [Entware](https://github.com/Entware/Entware/wiki) base
- Bluetooth audio and controller support.
- Support for HDMI audio and video out, and USB audio.
- Device to device and device to cloud sync with Syncthing and rclone.
- Integrated cross-device local and remote network play. support [Moonlight ?](https://moonlight-stream.org/)

Update crash the system / (or is it rom sdcard ?).

- [Adding Games](https://jelos.org/play/add-games/)
	- add files to rom folder
    - press `START` then `Game Settings` then select `Update Gamelists` under the Tools header.



### [ArkOS](https://github.com/christianhaitian/arkos/wiki#welcome-to-the-arkos-wiki-) - Ubuntu base

ArkOS does not obfuscate the line between Emulationstation and Retroarch. You're trying to set a Retroarch option, so you're going to have to do it in Retroarch, not Emulationstation. - [ArkOS set Shader](https://www.reddit.com/r/SBCGaming/comments/yc7w5x/arkos_set_shader/)

- [Installing ArkOS](https://www.youtube.com/watch?v=CzsOyqgJtcI&t=1s) / [download link](https://github.com/christianhaitian/arkos/wiki#download-links) 

- [setup](https://www.youtube.com/watch?v=CzsOyqgJtcI)
	- [Pico-8](https://www.youtube.com/watch?v=CzsOyqgJtcI&t=474s)
    - [PICOwesome v1.4 (oct-31-2022)](https://www.reddit.com/r/Roms/comments/yj2irf/picowesome_v14_oct312022/) - full set of cart
    - [Tiny Best Set: GO!](https://archive.org/details/tiny-best-set-go)
    
{% highlight cpp %}
ark@rgb30:~$ inxi -SMA
System:    Host: rgb30 Kernel: 4.19.172 aarch64 bits: 64 Console: tty 0 Distro: Ubuntu 19.10 (Eoan Ermine) 
Machine:   Type: ARM Device System: Powkiddy RGB30 aka wonderfully weird unit serial: 1e5e013d694a1d57 
Audio:     Device-1: rk3568-dw-hdmi driver: dwhdmi_rockchip 
           Device-2: simple-audio-card driver: asoc_simple_card 
           Device-3: simple-audio-card driver: asoc_simple_card 
           Sound Server: ALSA v: k4.19.172 
{% endhighlight %}

## Customisation

### Shader
- [Combine overlays with LCD shaders](https://retrogamecorps.com/2021/01/28/guide-handheld-screen-settings-for-rg351-devices/)
    
### Hardware

- [Rockchip RK3566 (ARM)](https://www.notebookcheck.net/Rockchip-RK3566-Processor-Benchmarks-and-Specs.741611.0.html)
	- integrates four ARM Cortex-A55 cores with up to 2 GHz
	- As a GPU it integrates a ARM Mali-G52 MP2 (2 cores).
    - a video decoder with H.264 and H.265 support is integrated, among other things.

- [Tear down](https://www.youtube.com/watch?v=Pp9wfW5fU6Y&t=952s)

### Customisation

- [Add and enable a rumble (vibration) motor.](https://github.com/christianhaitian/arkos/wiki/Frequently-Asked-Questions---RGB30#q-how-do-i-add-and-enable-a-rumble-vibration-motor-to-my-unit)

see also
- [Retro
Handhelds](https://retrohandhelds.gg/) - retro gaming community
