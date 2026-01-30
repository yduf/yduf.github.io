---
title: ASUS TUF Gaming GeForce RTX 5070 Ti
published: true
tags: pc-hardware gpu
---
[ASUS TUF Gaming GeForce RTX 5070 Ti OC Edition](https://www.amazon.fr/dp/B0DVH1Y9VN)  / [Quelle RTX 5070 Ti choisir ?](https://www.youtube.com/watch?v=aGMZDeDlVE4&list=LL&index=76)- 980€ / 01/2026 - before price explosion
- 16GB GDDR7 OC Edition
- PCIe 5.0, HDMI, Display 2.1, 3.125 Slot, Ventilateurs axiaux, revêtement Protecteur PCB
- 329x140x62.5mm - takes 3 PC slots
- [3dmodels](https://grabcad.com/library/asus-tuf-gaming-geforce-rtx-5070-ti-1)

## Linux Setup
<div style="
            
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

The NVIDIA RTX 5070 is part of the 5000-series, which **requires the Open Kernel Modules and requires driver 580 or newer**.
  
All of the following WILL FAIL:

- Installing nvidia-driver-550
- Installing nvidia-driver-560
- Installing nvidia-driver-570-open
- Installing from the graphics-drivers PPA
- Installing the .run installer
- Installing mixed 570 + 580 components
- Booting with Secure Boot enabled

Symptoms include:

- Black screen with blinking _
- Stuck on Wayland with no Xorg option
- Only 1 monitor detected
- nvidia-smi says "no devices found"
- Kernel module fails to load
- Impossible dependency loops (570-open depends on 580-open)

</div>
