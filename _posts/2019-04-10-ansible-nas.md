---
published: true
title: Ansible-NAS
tags: nas zfs
---
## Hardware

- [In Win IW-MS04](https://proclockers.com/reviews/computer-cases/in-win-iw-ms04-mini-server-case-review?nopaging=1)
	- fan was quite noisy, changed to [noctua NF-P12 redux-900](https://www.amazon.fr/gp/product/B07C5KZX85/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) wich was much quiter.
    
- [ASRock J3455-ITX](https://www.ldlc.com/fiche/PB00217669.html) - Quad-Core Intel Celeron J3455 - Goldmont (2016) [> Nehalem (2008)](https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures)

## Software (ansible-nas)
- [Ubuntu server]()
- [zfs](https://www.maketecheasier.com/use-zfs-filesystem-ubuntu-linux/) - [ref](https://wiki.ubuntu.com/Kernel/Reference/ZFS) [\[1\]](https://www.jamescoyle.net/how-to/478-create-a-zfs-volume-on-ubuntu)
	- RAID5 / Z1
    
{% highlight bash %}
sudo zpool create storage_pool raidz1 /dev/sda /dev/sdb /dev/sdc
sudo zpool status
cd /storage_pool
df -h .
{% endhighlight %}

- [docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
{% highlight bash %}
sudo systemctl status docker
sudo usermod -aG docker ${USER}
sudo systemctl status
{% endhighlight %}

## Docker Images
- [portainer.io](https://www.portainer.io/installation/)
- [glances](https://github.com/nicolargo/glances)

