---
title: Hardware security
published: true
tags: hardware-security security reverse
---
> Why, and for whom ?

### Use cases

Vendor want to restrict access from the user:
- Console vendor wanting to avoid access to their game.
- Vaccuum vendor want to force cloud usage for their product
- Phone vendor want to control which software you are running (android/iphone)

Not necessary for security alone, because once customer is unable to control what is runned,
- he cannot patch himself security issue
- he still subject to security attack (if vendor breached).

## Bypass

### AllWinner SOC 
FEL is a low-level subroutine contained in the BootROM on Allwinner devices. It is used for initial programming and recovery of devices using USB. 

[FEL](https://linux-sunxi.org/FEL)
- [FEL/USBBoot](https://linux-sunxi.org/FEL/USBBoot)
- [Allwinner Boot / FEL / FES / NAND Dump](https://xor.co.za/post/2018-12-01-fel-bootprocess/)
- [FEL Mode Drivers - Exdroid Tablet](https://github.com/Siragon/exdroid-driver-fel?tab=readme-ov-file#fel-mode-drivers---exdroid-tablet)

Device concerned
- [Roborok vaccuum]()

