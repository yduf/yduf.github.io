---
title: Oscilloscope
published: true
tags: electronic-hardware
toc: true
---
> How to ACTUALLY Use an Oscilloscope (Beginner-Friendly Guide!) - [youtube](https://www.youtube.com/watch?v=LaY47Qrfs0c)

<div style="            
  border-left: 5px solid #e53935; /* red */
  background: #ffebee;

  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

[How to ACTUALLY Use an Oscilloscope (Beginner-Friendly Guide!](https://www.youtube.com/watch?v=LaY47Qrfs0c)
- [**Oscilloscope Safety Tips (Grounding, short circuits, AC danger)**](https://www.youtube.com/watch?v=LaY47Qrfs0c&t=579s)
- [How NOT To Blow Up Your Oscilloscope!](https://www.youtube.com/watch?v=xaELqAo4kkQ)
	- there is no problem when you work on an 
		- [isolated circuit](https://youtu.be/xaELqAo4kkQ?t=471) (eg: battery powered)
		- same for [isolated power supply (tranformed with no ground)](https://youtu.be/xaELqAo4kkQ?t=551)
		- [if there is an earth](https://youtu.be/xaELqAo4kkQ?t=787) -> there may be an earth connection that shorten the negative line
			- **THIS WILL BLOW UP** -> connecting the probe earth will create a short circuit
			- [**USB Product when connected**](https://youtu.be/xaELqAo4kkQ?t=946) - will be connected to earth of the computer
				- they are usb isolator
		- to probe safely High Energy system
			- [**you need a high voltage energy probe**](https://youtu.be/xaELqAo4kkQ?t=1268)
			- recommanded if you work on powersupply
			- or use an isolated power supply to pair the device you are testing

</div>


# Digital Oscilloscope

## [Voltcraft DSO-2020 USB](https://www.manua.ls/voltcraft/dso-2020-usb/manual?p=1)
20 MHz / 2 canaux / 48 Méch/s 1 Mpts 8 bits mémoire numérique (DSO)


- [**OpenHantek6022**](https://github.com/OpenHantek/OpenHantek6022?tab=readme-ov-file#openhantek6022) is a more advanced, actively maintained branch specifically optimized for the Hantek 6022BE/BL (and similar), with advanced features, open firmware, and recent updates.
	- supported device: Hantek 6022BE and 6022BL as well as compatible scopes (e.g. Voltcraft DSO-2020).
    - fully support linux
    
- [**OpenHantek**](https://github.com/OpenHantek/openhantek?tab=readme-ov-file#openhantek---) -  a free software for Hantek and compatible (Voltcraft/Darkwire/Protek/Acetech) USB digital signal oscilloscopes.
	- OpenHantek is an open-source, cross-platform fork of HantekDSO with enhanced GUI and broader device support.

    
- [**HantekDSO**](https://github.com/Blokkendoos/HantekDSO?tab=readme-ov-file#hantekdso) - a USB-oscilloscope software for Hantek, Novatek, Voltcraft, Darkwire, Protek, Acetech, etc DSO2090, 2150, 2250, 5200A, etc. oscilloscopes. (fork from [SourceForge](https://sourceforge.net/projects/hantekdso/))
	- HantekDSO is the original software by Hantek.

[![screenshot](https://github.com/OpenHantek/OpenHantek6022/raw/main/docs/images/screenshot_mainwindow.png)](https://github.com/OpenHantek/OpenHantek6022?tab=readme-ov-file#openhantek6022)


## [Hantek DSO2D15](https://www.amazon.fr/Hantek-Num%C3%A9rique-Oscilloscope-Stockage-passante/dp/B08MKS53LH) - 150Mz 280€
Avec generateur de forme d'onde cv [Hantek DSO5102P vs DSO2D15](https://chatgpt.com/share/69998485-aeb4-800d-8621-25199c0fb253)

- [Review/Teardown of a Hantek DSO2D10 Oscilloscope ](https://www.youtube.com/watch?v=Mmx7eo9STXE)

[![photo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freballing.store%2F5125-large_default%2Fosciloscopio-hantek-dso2d10-100mhz.jpg&f=1&nofb=1&ipt=3f886dc321ae0d32602ba9636b363d9f818c34bdb9fb35e808458b84c314ae05)](https://duckduckgo.com/?t=lm&q=hantek+dso2d10&ia=images&iax=images&iai=https%3A%2F%2Freballing.store%2F5125-large_default%2Fosciloscopio-hantek-dso2d10-100mhz.jpg)

### Hacking

Hantek DSO2C10, DSO2C15, DSO2D10, DSO2D15 (DSO2000 series): firmware updates and best use practices  - [
EEVblog](https://www.eevblog.com/forum/testgear/hantek-dso2x1x-firmware-updates-and-best-use-practices/)

Note that all these models are based on exactly the same mainboard. The DSO2D1x models populate the mainboard with components for an Arbitrary Waveform Generator (a rather basic 12-bit function generator with limited functionality), the DSO2C1x models don't. And the DSO2x15 are good to 150MHz, while the DSO2x10 models are software limited to 100MHz.

- [Hantek DSO2000 Master Thread (DSO2C10 DSO2C15 DSO2D10 DSO2D15)](https://www.eevblog.com/forum/testgear/hantek-dso2x1x-models-master-thread/)
	- [Hantek DSO2D10 upgraded, overclocked and stable ](https://www.youtube.com/watch?v=bMFlXeKC0Zw) - I bought a Hantek DSO2D10 100MHz oscilloscope, modified it to 150MHz (DSO2D15) and overclocked it to CPU 720MHz and memory 408MHz.
		- [Bangood](https://www.banggood.com/fr/Hantek-DSO2D10-Digital-Oscilloscope-2CH+1CH-Digital-Storage-1GS-or-s-Sampling-Rate-100MHz-Bandwidth-Dual-Channel-Economical-Oscilloscope-with-Signal-Source(AWG)-p-2000813.html?cur_warehouse=CZ&rmmds=search) - 180€
- [Hacking the Hantek DSO2D15](https://arnowelzel.de/en/hacking-the-hantek-dso2d15) 
	- [Enable AWG (signal generator) on a Hantek DSO2C10](https://jameskyte.com/enable-awg-signal-generator-on-a-hantek-dso2c10) - Depending on the PCB revision, upgrading the DSO2C1x model of the oscilloscope to enable the function generator can be as simple running some software, or it can involve adding missing components to the board.
	- [Hacking the DSO2X1X](https://www.eevblog.com/forum/testgear/hacking-the-dso2x1x/)
		- [**FEL Mode**]({% post_url 2025-03-30-hardware-security %}#allwinner-soc)

**Overclocking CPU**
- cpu can be overclocked for better responsivness - [see overclock in mainthread FAQ](https://www.eevblog.com/forum/testgear/hantek-dso2x1x-models-master-thread/)

**UPK File**
- [Loading UPK File](https://www.eevblog.com/forum/testgear/new-hantek-dso2x1x-models/msg5185530/#msg5185530) => select file then update Firmware

**see also**
- [Hantek DSO5102P](https://www.youtube.com/watch?v=mIoHFwyeE44) - 100MHz Good Digital Oscilloscope for Beginners - [amazon](https://www.amazon.fr/DSO5102P-100MHz-Oscilloscope-Num%C3%A9rique-%C3%A9chantillon/dp/B00I5EWF1U) - 300€
	- show how to compensate a probe
		- [Hantek DSO2D10](https://www.amazon.fr/Hantek-Oscilloscope-m-C3-A9moire-num-C3-A9rique-DSO2D10-dp-B08Y7LC756/dp/B08Y7LC756) - 100MHz - cf [DSO2D10 vs DSO2D15](https://chatgpt.com/share/69998635-4f5c-800d-a85b-448cc4cdacf5)
	- [Rigol DS1202Z-E](https://www.amazon.fr/Rigol-Oscilloscope-Num%C3%A9rique-DS1102Z-d%C3%A9clenchement/dp/B089WHC4MK) - better one - 100MHz 240€ / 200MHz 350€
	- [Rigol DS1054Z]https://www.amazon.fr/dp/B01LNY8CL0) - 4 voies 50MHz / Frederic - 400 ~ 700€