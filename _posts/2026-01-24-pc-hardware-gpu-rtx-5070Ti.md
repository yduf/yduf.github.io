---
title: "ASUS TUF Gaming GeForce RTX 5070 Ti \U0001F4DF"
published: true
tags: pc-hardware gpu
toc: true
---
[ASUS TUF Gaming GeForce RTX 5070 Ti OC Edition](https://www.amazon.fr/dp/B0DVH1Y9VN)  / [Quelle RTX 5070 Ti choisir ?](https://www.youtube.com/watch?v=aGMZDeDlVE4&list=LL&index=76)- 980€ / 01/2026 - before price explosion
- 16GB GDDR7 OC Edition
- PCIe 5.0, HDMI, Display 2.1, 3.125 Slot, Ventilateurs axiaux, revêtement Protecteur PCB
- 329x140x62.5mm - takes 3 PC slots
- [3dmodels](https://grabcad.com/library/asus-tuf-gaming-geforce-rtx-5070-ti-1)


# [Motherboard A520I]({% post_url 2026-01-24-pc-hardware-motherboard %})

## Settings

IO Ports/
[**PCIe-3.0**](https://chatgpt.com/share/697cbab4-31e4-800d-8c9e-bdf639a90c2d)
- Above 4G Decoding: Enabled
- Re-Size BAR Support: Auto 

**MultiGpu**
AMD CBS/NBIO Common Options/GFS Configuration
-iGPU Configuration: Auto
-GPU Host Translation Cache: Auto

IO Ports/
Initial Display Output: IGD Video 
Integrated Graphic: Auto

Testing that it works
{% highlight bash %}
$ lspci | grep -E "VGA|3D"
01:00.0 VGA compatible controller: NVIDIA Corporation Device 2c05 (rev a1)
07:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Cezanne [Radeon Vega Series / Radeon Vega Mobile Series] (rev c8)
{% endhighlight %}

- Both GPU are seen
- you can plug the hdmi cable in whateber socket => it will boot on it
- opengl works on iGPU (motherboard HDMI)
- does not work on RTX (cinnamon wm failing)

# Linux Setup
<div style="
            
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

The NVIDIA RTX 5070 is part of the 5000-series, which **requires the Open Kernel Modules and requires driver 580 or newer**. - [Working 580-open Driver Guide](https://github.com/adamn1225/FIXED-NVIDIA-RTX-5070-on-Ubuntu-24.04---Working-580-open-Driver-Guide?tab=readme-ov-file#fixed-nvidia-rtx-5070-on-ubuntu-2404--2410--working-580-open-driver-guide)
</div>

- linuxmint 22.3 / ubuntu 24.04 LTS
- kernel: 6.14.0-37-generic
- nvidia driver
	- 570.211.01 - smi working


<div style="
  border-left: 4px solid #3498db; /* blue */
  background: #eef7ff;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

Removing previous driver:  
{% highlight bash %}
$ sudo apt-get remove --purge '^nvidia-.*'
$ sudo apt autoremove
$ sudo reboot
{% endhighlight %}
</div>


## Cuda

see
- [ Installing NVIDIA RTX 5070 / 5070 Ti Drivers and CUDA 12.8 on Debian/Ubuntu 24.04 with Secure Boot Enabled ](https://gist.github.com/devatnull/8e63126e7f2a737c1b05a42822f69eda)

## Pytorch

## OpenGL
