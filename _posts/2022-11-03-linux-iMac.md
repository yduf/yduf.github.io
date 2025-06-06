---
published: true
title: "iMac (2012) \U0001F5A5️"
tags: linux-system pc-hardware
---
> Late 2012 - 16GB / quad-core Intel Core i5 processor - [iMac 12 2](https://support.apple.com/kb/SP667?locale=en_US) / [cockpit](https://sophie-imac:9090/system/services)

![caption](https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP667/sp667_imac_27inch_late2012_display.jpg)

### [How to Use iMac as Second Monitor for Windows PC](https://www.anyrec.io/use-imac-as-monitor-for-pc/)
- Thunderbolt vs USB-C (they are somewhat similar)

- [How To Convert An iMac Into An External Monitor](https://www.ifixit.com/Guide/How+To+Convert+An+iMac+Into+An+External+Monitor/40567)
	- [using chinese controller](https://www.youtube.com/watch?v=Vx5IoiPjPC8) - [alixepress](https://fr.aliexpress.com/item/1005003965302404.html?spm=a2g0o.productlist.main.13.df284302xFUI55&algo_pvid=b6d02171-5085-42cc-9671-66df692f9290&algo_exp_id=b6d02171-5085-42cc-9671-66df692f9290-6&pdp_ext_f=%7B%22sku_id%22%3A%2212000027587288558%22%7D&pdp_npi=2%40dis%21GBP%2138.27%2138.27%21%21%21%21%21%402100b1a616739040950534050d06f8%2112000027587288558%21sea&curPageLogUid=RVUrNu2wAJM3&gatewayAdapt=glo2fra) - LM270WQ1 A2 C2 E3 B1 v1.screen
	- [conversion](https://www.youtube.com/watch?v=bW3nKIyeZps) - custom board

## [Mac startup key combinations](https://support.apple.com/en-us/HT201255)

Key combinations for an Intel-based Mac

[When using a Windows keyboard on a Mac](https://edu.gcfglobal.org/en/macosbasics/using-a-windows-keyboard-with-a-mac/1/), the Windows key is used instead of the Command key, and the Alt key is used in place of the Option key.


**Command (⌘)-R**: Start up from the built-in macOS Recovery system. Or use Option-Command-R or Shift-Option-Command-R to start up from macOS Recovery over the internet. macOS Recovery installs different versions of macOS, depending on the key combination you use. 

**Option (⌥) or Alt**: Start up to Startup Manager, which allows you to choose other available startup disks or volumes. 

**Option-Command-P-R**: Reset NVRAM or PRAM.

**Shift (⇧)**:  Start up in safe mode. 

**D**: Start up to the Apple Diagnostics utility. Or use Option-D to start up to this utility over the internet.

**N**: Start up from a NetBoot server, if your Mac supports network startup volumes. To use the default boot image on the server, press and hold Option-N instead. 

**Command-S**: Start up in single-user mode. Disabled in macOS Mojave or later.

**T**: Start up in target disk mode.

**Command-V**: Start up in verbose mode. 

**Eject (⏏) or F12 or mouse button or trackpad button**: Eject removable media, such as an optical disc.


## [Install Linux](https://apple.stackexchange.com/questions/53512/how-do-i-install-linux-on-an-intel-imac-with-no-os-nor-cd-drive/53514#53514)

- [Guide to Installing Linux on a Mac](https://linuxhint.com/install_linux_on_mac/)

## Mac specific

### [mbpfan](https://github.com/linux-on-mac/mbpfan) - A simple daemon to control fan speed

### [Brightness](https://iridakos.com/programming/2018/06/24/debian-imac-backlight-keyboard)

Some twiking is needed from the default setup to make it work on that particular model.

{% highlight bash %}
# edit /etc/default/grub
# add acpi_backlight=vendor to GRUB_CMDLINE_LINUX_DEFAULT
GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_backlight=vendor"
{% endhighlight %}

{% highlight bash %}
$ sudo update-grub	# and then reboot
{% endhighlight %}


## Hardware modification

- [accessing hard drive](https://player.vimeo.com/video/139363128)
