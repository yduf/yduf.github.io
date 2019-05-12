---
published: true
title: Mount drive outside of Synology Box
tags: disk synology nas linux filesystem
---
## [How?](https://superuser.com/questions/550064/how-mount-find-recover-data-in-hdd-outside-of-synology-box)

Synology individual drive use mdadm (raid array) filesystem, wich can be recognised to the md127 partition:
{% highlight cpp %}
$ lsblk
sde                               8:64   0  3.7T  0 disk  
├─sde1                            8:65   0  2.4G  0 part  
├─sde2                            8:66   0    2G  0 part  
└─sde3                            8:67   0  3.6T  0 part  
  └─md127                         9:127  0  3.6T  0 raid1 
    ├─vg1-syno_vg_reserved_area 253:0    0   12M  0 lvm   
    ├─vg1-volume_1              253:1    0    2T  0 lvm   
    └─vg1-volume_2              253:2    0  1.7T  0 lvm   
{% endhighlight %}

# [mdadm](https://linux.die.net/man/8/mdadm)

{% highlight cpp %}
$ mdadm --examine /dev/sde
/dev/sde:
   MBR Magic : aa55
Partition[0] :   4294967295 sectors at            1 (type ee)

$ mdadm --examine /dev/sde3
/dev/sde3:
          Magic : a92b4efc
        Version : 1.2
    Feature Map : 0x0
     Array UUID : 02cf718c:1bb557a2:cfcc71a1:ee97f545
           Name : babar:2
  Creation Time : Fri Nov 27 21:18:31 2015
     Raid Level : raid1
   Raid Devices : 1

 Avail Dev Size : 7804393120 (3721.42 GiB 3995.85 GB)
     Array Size : 3902196544 (3721.42 GiB 3995.85 GB)
  Used Dev Size : 7804393088 (3721.42 GiB 3995.85 GB)
    Data Offset : 2048 sectors
   Super Offset : 8 sectors
   Unused Space : before=1968 sectors, after=32 sectors
          State : clean
    Device UUID : 1320f2ec:990226f5:67a6347b:371d869a

    Update Time : Thu May  9 11:40:06 2019
       Checksum : 6d8aca60 - correct
         Events : 56


   Device Role : Active device 0
   Array State : A ('A' == active, '.' == missing, 'R' == replacing)

{% endhighlight %}

## Mounting

Assuming volume registered itself automatically, we can get further information
{% highlight cpp %}
$ pvscan
  PV /dev/md127   VG vg1             lvm2 [3.63 TiB / 0    free]
  Total: 1 [3.63 TiB] / in use: 1 [3.63 TiB] / in no VG: 0 [0   ]

$ lvdisplay vg1
{% endhighlight %}

Then we can mount vg1 volume
{% highlight cpp %}
$ mkdir /media/syno-vg1
$ mount /dev/vg1/lv -o ro /media/syno-vg1
{% endhighlight %}


