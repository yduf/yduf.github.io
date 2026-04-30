---
title: "Windows / linux Dual Boot"
tags: windows linux-system ubuntu
---
> How to not break your windows 11 laptop when installing Linux.

This has been tested with LinuxMint 22.3 / Windows 11 Pro (in a enterprise environment)

# Windows 11

How to boot linux along side Windows 11 + bitlocker

There is some challenge here, and the operaton have to be orchestrated properly
if you don't want to be put outside windows.

<div class="encart red" markdown="1">
Make sure you have your [bitlocker recovery key availabe](https://support.microsoft.com/en-us/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6) in case something goes wrong.

If it is backed in your microsoft account go to: [https://aka.ms/myrecoverykey]( https://aka.ms/myrecoverykey)
</div>

## Resize C:

From inside Windows As Admin
- suspend bitlocker (?)
- resize system partition to have freespace for linux

## Disable Secure boot

- suspend bitlocker (from Windows) (DO NOT decrypt / disable)
- restart quickly → otherwise bitlocker re-enable itself in 30 s
- disable secure boot in BIOS
- check that windows is still starting without complaining (and asking for recovery key)
  - if this happens => enable secure boot and make sure that bitlocker was really suspended and retry

**Notes** doing so, you are disabling TPM and fingerprint login won't work anymore on windows

## Install Linux

- suspend bitlocker again (from Windows) (safe but is required?)
- restart quickly
- boot linux installer (now that secure boot is disabled)

### [Dedicated EFI ⮺](https://www.youtube.com/watch?v=0gSr8YsJtd0)

<div class="encart orange" markdown="1">
To avoid interacting with Windows EFI:
- avoid windows erasing linux boot on windows update
- avoid bitlocker issue (because touching Windows EFI during linux install)
  - this will trigger bitlocker and require recovery key

It is recommended to create a separate EFI partition dedicated to booting linux.
</div>

- unflag boot flag from existing windows EFI (so that linux installer won't pick it up)

{% highlight bash %}
$ fdisk -l       # lookup for disk drive
$ parted /dev/xx
# remove boot, esp flag
set 1 boot off
q
{% endhighlight %}

Then proceed to install

- create new EFI partition of 512MB (EFI System Partition)
- create / 
- create /home

Choose the new EFI as "device for boot loader installation"


### [Encrypted setup LUKS ⮺](https://www.youtube.com/watch?v=ZmZYrBPVRVQ&t=167s)

Trick to set it up in the installer
- choose erase all
- set [LUKS]({% post_url 2026-04-29-security-luks %})
- change the install to something else

### Finalize


If you have removed the boot flags you have to set them back
- choose continue testing

{% highlight bash %}
$ fdisk -l       # lookup for disk drive
$ parted /dev/xx
# enable boot, esp flag
set 1 boot on
q
{% endhighlight %}

### Adding Grub

TBD / use bios for now

{% highlight bash %}

{% endhighlight %}

# Intune

## Install Edge

[mikemdm]( https://mikemdm.de/2024/12/22/intune-finally-supports-ubuntu-24-04-lts/)

## Install intune app

[Get the Microsoft Intune app for Linux](https://learn.microsoft.com/en-us/intune/user-help/company-portal/intune-app-linux)

A sample script to install the Microsoft Intune app and its dependencies on your device is available [on GitHub](https://github.com/microsoft/shell-intune-samples/tree/master/Linux/Intune%20Installer). Review the instructions carefully before installing.

### Ubuntu 24.04 LTS

**setup repo**

{% highlight bash %}
$ sudo apt install curl gpg

$ curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
$ sudo install -o root -g root -m 644 microsoft.gpg /usr/share/keyrings
$ sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/ubuntu/24.04/prod noble main" > /etc/apt/sources.list.d/microsoft-ubuntu-noble-prod.list'

$ sudo rm microsoft.gp
{% endhighlight %}

**install**

{% highlight bash %}
$ sudo apt update
$ sudo apt install intune-portal
{% endhighlight %}

Then launch the intune-app

### Password Check

Intune may complain that password constraint are not compliant

cf [Linux Intune Password Compliance](https://chatgpt.com/share/69f2ec73-ef64-83eb-a147-9387b1c7201f)

# [Microsof Teams ⮺](https://linuxcapable.com/how-to-install-microsoft-teams-on-ubuntu-linux/)

