---
title: Roomba like Robots
published: true
tags: robot reverse security firmware roomba
---
> Valetudo is a cloud replacement for vacuum robots enabling local-only operation. - [Free your vacuum from the cloud](https://github.com/Hypfer/Valetudo) / [Home](https://valetudo.cloud/pages/companion_apps/valeronoi.html)

## [Roborock Qrevo S (2025 480€)](https://www.amazon.fr/dp/B0D4YK2CQW) / [ r/Roborock](https://www.reddit.com/r/Roborock/)

- Qrevo S unveiled on on [June 25, 2024](https://www.reddit.com/r/Roborock/comments/1c7kax7/comparison_of_models_2024/)
- S7 was released on March 2021

### Roborok (Xiaomi ?)

- [Why is my vacuum as powerful as my smartphone? (2017?)](https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking) -> [dontvacuum.me](https://www.dontvacuum.me/)
	- [Roborock Q Revo](https://robotinfo.dev/detail_roborock.vacuum.a75_0.html)
- [Robots with lasers and cameras (2021)](https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf) / [youtube](https://www.youtube.com/playlist?list=PL9PoaNtZCJRYiwGlHVpGZdVqPKQ2mo57k) - Liberating your vacuum from the cloud
	- With introduction of Roborock S6 (2019):
    	– Signed firmware and voice packages
        – Each model uses different encryption keys
        – Signed configuration files to enforce region locks
        – However: Hardware remains mostly the same
    - Keeping rooting methods secret
    	- Assumption: Roborock would lock them down in newer devices
    - Every time we publish a method, it gets blocked
    	– Local updates (2017): Blocked via firmware updates in 2018
        - Root password method (2019): Blocked for newly produced devices in 2019
        - U-Boot bypass (2020): Blocked for new models in 2020
    - Hardware gets weaker, despite devices getting more expensive
- [Vacuum robot security and privacy (2023?)](https://dontvacuum.me/talks/DEFCON31/DEFCON31-vacuum-robots-final.pdf)
	- Roborock Q Revo (a75) (06/2023)
- [Reverse engineering and hacking Ecovacs robots (2024)](https://dontvacuum.me/talks/DEFCON32/DEFCON32_reveng_hacking_ecovacs_robots.html)
	- [the bad and the really bad](https://dontvacuum.me/talks/HITCON2024/HITCON-CMT-2024_Ecovacs.pdf)
    - ecovacs only

    
- New Method: FEL rooting
	- Applies to all current NAND-based Roborock models
        
- [Roborock rooting and installation](https://valetudo.cloud/pages/installation/roborock.html)
	- [Roborock S6/T6 Technical information and rooting](https://www.youtube.com/watch?v=r_04K5SPEXI)
    - [Roborock S7 rooting](https://www.reddit.com/r/Roborock/comments/vlvep2/roborock_s7_rootingvaletudo_tutorial/)
    - [Unleash your smart-home devices: Vacuum Cleaning Robot Hacking ](https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking) - Why is my vacuum as powerful as my smartphone? 
- [The best robot vacuum for me is the one I hacked](https://www.theverge.com/23934731/valetudo-robot-vacuum-hacking)

- [What are the differences between Roborock Qrevo S and Qrevo?](https://support.roborock.com/hc/en-us/articles/33953752924697-What-are-the-differences-between-Roborock-Qrevo-S-and-Qrevo)

### Security issue

- [Roborock S5 Max hacked: being used as data mule?](https://www.reddit.com/r/Roborock/comments/kpvrj5/roborock_s5_max_hacked_being_used_as_data_mule/)
	- [Anyone here setup roborock securely on wifi?](https://www.reddit.com/r/Roborock/comments/q321g6/anyone_here_setup_roborock_securely_on_wifi_seems/)

[![caption](https://valetudo.cloud/pages/installation/img/s5e_mainboard_fel_root.jpg) ](https://valetudo.cloud/pages/installation/roborock.html)

### hardware
- [Q5 disassembly](https://www.reddit.com/r/Roborock/comments/1bzfmlo/q5_disassembly_to_access_parts_for_repair_images/)

see also
- [awesome-vacuum](https://github.com/awesome-vacuum/awesome-vacuum?tab=readme-ov-file#awesome-vacuum)
