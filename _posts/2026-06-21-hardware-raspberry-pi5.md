---
title: Raspberry pi5 💭
tags: raspberry-pi arm-hardware project 
toc: true
---
> inherited [Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) + [Pironman 5](https://docs.sunfounder.com/projects/pironman5/fr/latest/pironman5/intro_pironman5.html#intro-pironman5)

<link rel="shortcut icon" href="https://www.raspberrypi.org/app/themes/mind-control/images/favicon.png" type="image/png" />

[![boSunFounder Pironman 5 - Raspberry Pi casex](https://media.ldlc.com/r705/ld/products/00/06/23/84/LD0006238443.jpg)](https://www.ldlc.com/en/product/PB00677828.html)

# project 💭

Use it to host a Hermes Agent accessible from anywhere

- [ ] - give it a static ip (secondary?) 🚧
  - [ ] it boots on nvme drive - so secondary may be helpfull as fallback
- [ ] - setup ssh key access

# Notes

Appears as pi3 on nmap scan

{% highlight bash %}
MAC Address: 7E:AB:F1:0E:85:C3 (Unknown)
Nmap scan report for raspberrypi3.home (192.168.0.30)
{% endhighlight %}


# OS

<div class="encart blue" markdown="1">

Raspberry Pi OS (64-bit), Bookworm-based, on Raspberry Pi 5  
`$ systemctl get-default` => **graphical.target**

{% highlight bash %}
$ hostnamectl 
 Static hostname: raspberrypi
       Icon name: computer
      Machine ID: be0ce139b3e64d9d9c122eb460a1d040
         Boot ID: 7862ae885aac4468adfbf3d75c611f96
Operating System: Debian GNU/Linux 12 (bookworm)  
          Kernel: Linux 6.6.62+rpt-rpi-2712
    Architecture: arm64
{% endhighlight %}
</div>


# [Pironman 5 ⮺](https://docs.sunfounder.com/projects/pironman5/fr/latest/pironman5/intro_pironman5.html#intro-pironman5)

- [ Complete Assembly and Boot Guide: Pironman 5 with NVMe SSD ](https://www.youtube.com/watch?v=tCKTgAeWIjc)
- [ Assembly (pdf)](https://raw.githubusercontent.com/sunfounder/sf-pdf/master/assembly_file/Z0312V20-A0001127-Pironman5.pdf)

[![kit](https://media.ldlc.com/r1600/ld/products/00/06/23/84/LD0006238447.jpg)](https://www.ldlc.com/en/product/PB00677828.html)

## [Software ⮺](https://github.com/sunfounder/pironman5#pironman-5)

- [Setting Up on Raspberry Pi OS/Ubuntu/Kali Linux/Homebridge](https://docs.sunfounder.com/projects/pironman5/en/latest/pironman5/set_up/set_up_rpi_os.html#setting-up-on-raspberry-pi-os-ubuntu-kali-linux-homebridge)


## [OLED ⮺](https://chatgpt.com/share/6a37bc5e-6944-83ed-87f8-cb39238bfe2c) 🚧 ⛑ 

<div class="encart blue" markdown="1">
Ecran OLED 1.3"  
nappe 30 pin - visible coté écran  
pin 1 en haut avec ecrant visible coté droit.  
SH1106 / GME12864-44

eg [![model amazon](https://m.media-amazon.com/images/I/31vbztes-kL._SX342_SY445_QL70_ML2_.jpg)](https://www.amazon.fr/%C3%89cran-OLED-SH1106-CH1116G-Driver/dp/B0C7GTLTV)
</div>

- [Troubleshooting OLED display](https://chatgpt.com/share/6a37ba8f-a84c-83ed-b3b0-4de09bf28b00)

{% highlight bash %}
$ sudo i2cdetect -y 1
should output 3c somewhere (it does not)

$ ls /dev/i2c*
should list device => it does

$ sudo dmesg | grep -i i2c
[    0.987774] brcmstb-i2c 107d508200.i2c:  @97500hz registered in interrupt mode
[    1.013905] brcmstb-i2c 107d508280.i2c:  @97500hz registered in interrupt mode
[    2.869550] i2c_dev: i2c /dev entries driver
[   21.694662] i2c_designware 1f00074000.i2c: i2c_dw_handle_tx_abort: lost arbitration
[   21.705781] i2c_designware 1f00074000.i2c: i2c_dw_handle_tx_abort: SDA stuck at low
{% endhighlight %}

SDA stuck at low signifie que la ligne de données I²C est maintenue en permanence à l’état bas

**Déconnection uniquement la nappe OLED du Pironman.**

{% highlight bash %}
$ dmesg | grep -i i2c
[    0.970193] brcmstb-i2c 107d508200.i2c:  @97500hz registered in interrupt mode
[    0.970296] brcmstb-i2c 107d508280.i2c:  @97500hz registered in interrupt mode
[    3.076795] i2c_dev: i2c /dev entries driver
{% endhighlight %}



## Power Button 🚧

As no effect

## [Power Consumption ⮺](https://chatgpt.com/share/6a37af6c-85d4-83eb-9fc7-4391cfe1fe47)

| Scenario                                                   | Estimated total system power |
| ---------------------------------------------------------- | ---------------------------: |
| Idle, headless (SSH/server only)                           |                       ~4–6 W |
| Idle with desktop + HDMI                                   |                       ~5–7 W |
| Moderate workload (Home Assistant, Docker, light services) |                       ~6–9 W |
| Heavy CPU load + active NVMe activity                      |                     ~10–14 W |
| Stress case (CPU max + SSD writes + peripherals)           |                     ~14–18 W |

## [GPU  ⮺](https://chatgpt.com/share/6a38d395-e5b0-83eb-81d4-07f42f3dcec4)

- pi 5 has unified memory
- yet GPU was designed for graphics and video not for matrix operation.
- you can expect 2–10 tokens/sec depending on model size and quantization if running LLM locally

