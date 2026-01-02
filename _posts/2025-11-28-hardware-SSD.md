---
title: SSD
published: true
tags: pc-hardware disk storage
---
> [speed of a PCIe 4.0 NVMe SSD in a PCIe 3.0 Motherboard Slot?](https://www.techreviewer.com/tech-answers/pcie-40-ssd-in-pcie-30-m2-slot/) 

[![bysize](https://geekysoumya.com/wp-content/uploads/2022/11/Different-Sizes-Of-M.2-SSD-1536x864.jpg)](https://geekysoumya.com/m-2-pcie-nvme-sizes-explained-2280-2260-2242-etc/)

## [Clone SSD on Linux](https://chatgpt.com/share/6935d24c-db08-800d-ac4d-01b99c2e3a93)

**NOTE: both disk must be unmounted during the copy**  
Otherwise you may end up with error on partition (eg the /boot/efi)

{% highlight bash %}
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 931,5G  0 disk 
└─sda1        8:1    0 931,5G  0 part /media/yves/USB STICK
nvme0n1     259:0    0 476,9G  0 disk 
├─nvme0n1p1 259:1    0   100M  0 part /boot/efi
...
512110190592 bytes (512 GB, 477 GiB) copied, 1184,7 s, 432 MB/s
$ sudo dd if=/dev/nvme0n1 of=/dev/sda bs=64M status=progress
$ sync
{% endhighlight %}

### Extend partition

Then _gparted_ can be used to move & resize existing partition.

### [Convert MBR to GPT](https://chatgpt.com/share/693c28ef-16b8-800d-95b0-e440c6ab5458)

an MBR-partitioned (standard) drive cannot be > 2To. You need GPT.

Non destructrive process

{% highlight bash %}
$ sudo gdisk /dev/sdX
# then press w to write converted partition
w
{% endhighlight %}


## [M2 SSD Benchmark & tests de performance](https://ssd-tester.fr/m2_ssd_test.php)

[Top SSD](https://ssd-tester.fr/top_ssd.php)

**NVMe M.2 2280**
- [fanxiang SSD NVMe 4To S910 Pro - Pice 5.0X4 ](https://www.amazon.fr/dp/B0FH27XWKX) - 330€ / 2025 - in [Mac Classic]({% post_url 2023-06-14-mac-classic %}) 
- [Fikwot FN950 1To M.2 SSD](https://ssd-tester.fr/fikwot_fn950_2tb.html) - in [huawei matebook 14]({% post_url 2021-07-18-laptop-huawei-matebook-14 %})

**Spare**  
- [Lexar NM610 Pro - 1To](https://ssd-tester.fr/lexar_nm610_pro_1tb.html)
- WD SN730 512GB - from [huawei matebook 14]({% post_url 2021-07-18-laptop-huawei-matebook-14 %})
- [WD Green 240GB](https://www.amazon.fr/gp/product/B078WYS5K6) - 36€ / 2020 - from [lab 2020]({% post_url 2020-05-24-pc-2020 %})


### [SSD performance over USB](https://chatgpt.com/share/6935d530-dfd0-800d-923b-60061aba74c8)

**Notes** - [pcie gen 5.0 not recognized by a usb 3.1 nvme adapter?](https://chatgpt.com/share/6939797a-d654-800d-96da-5ab4848724c2) - this is expected...

| Interface              | Real-world speed     | Relative speed vs PCIe 3.0 |
| ---------------------- | -------------------- | -------------------------- |
| **PCIe 3.0 x4 NVMe**   | **3,000–3,500 MB/s** | **100%**                   |
| **USB 3.1 Gen 2 NVMe** | **700–1,050 MB/s**   | **20–30%**                 |
| **USB 3.1 Gen 1 NVMe** | **350–500 MB/s**     | **10–15%**                 |
| **USB 2.0 NVMe**       | **30–40 MB/s**       | **1%**                     |


### PCI-Express Speeds

| Version | x1 Bandwidth | x2 Bandwidth | x4 Bandwidth | x8 Bandwidth | x16 Bandwidth |
|---------|--------------|--------------|--------------|---------------|----------------|
| PCIe 1.0 | 250 MB/s | 500 MB/s | 750 MB/s | 2 GB/s | 4 GB/s |
| PCIe 2.0 | 500 MB/s | 1000 MB/s | 2 GB/s | 4 GB/s | 8 GB/s |
| PCIe 3.0 | 1 GB/s | 2 GB/s | 4 GB/s | 8 GB/s | 16 GB/s |
| PCIe 4.0 | 2 GB/s | 4 GB/s | 8 GB/s | 16 GB/s | 32 GB/s |
| PCIe 5.0 | 4 GB/s | 8 GB/s | 16 GB/s | 32 GB/s | 63 GB/s |
| PCIe 6.0 | 8 GB/s | 15 GB/s | 30 GB/s | 61 GB/s | 121 GB/s |
| PCIe 7.0 | 15 GB/s | 30 GB/s | 61 GB/s | 121 GB/s | 242 GB/s |

### SSD Sticker

- [some acts as heat spreader](https://www.youtube.com/shorts/7kiPV0emWrw)