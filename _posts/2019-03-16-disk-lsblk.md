---
published: true
title: Disk Tool & Diagnostic
tags: disk partition linux-system
---
> [How do I find the UUID of a filesystem](https://serverfault.com/questions/3132/how-do-i-find-the-uuid-of-a-filesystem)

## [Configure `fstab`](https://chatgpt.com/share/693c4ff0-db8c-800d-bd64-56cec214cd09)

Note the UUID of the partition (recommended over device names like /dev/sda1, because device names can change).

### lsblk
{% highlight bash %}
$ lsblk -f

NAME        FSTYPE FSVER LABEL   UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme0n1                                                                              
├─nvme0n1p1 vfat   FAT32 SYSTEM  B8E5-9E00                              51,6M    46% /boot/efi
├─nvme0n1p2                                                                          
├─nvme0n1p3 ntfs         Windows DAB0E6A2B0E6847B                                    
├─nvme0n1p4 vfat   FAT32 WINPE   F2E7-04CB                                           
├─nvme0n1p5 ntfs         Onekey  D4CEE938CEE91390                                    
├─nvme0n1p6 ntfs         WinRE   3474EB5574EB187E                                    
├─nvme0n1p7 ext4   1.0           14208604-a5ef-44f2-82e6-8d7e0db71919    8,8G    85% /
└─nvme0n1p8 ext4   1.0           4afbee46-d169-4e8b-aabd-45686c7d6cb6  437,1G    37% /home
{% endhighlight %}

### blkid /dev/sda7
{% highlight bash %}
$ blkid
/dev/sda7: UUID="dffbe19f-eb0f-4027-8912-db9299ac26eb" TYPE="ext4" PARTLABEL="archive" PARTUUID="c4359d67-57b3-4595-8bad-175876fd71bb" 
{% endhighlight %}

### Identify HDD by SATA port number
{% highlight bash %}
$ lscscsi
{% endhighlight %}

### `fstab`

{% highlight bash %}
# Create the mount point
$ sudo mkdir -p /mnt/data

# edit /etc/fstab
$ sudo micro /etc/fstab

# Add an entry in the format:
UUID=<your-uuid>  <mountpoint>  <filesystem>  <options>  <dump>  <pass>
## ex ext4 parttion
UUID=a1b2c3d4-e5f6-7890-1234-abcdef123456  /mnt/data  ext4  defaults  0  2
## Windows NTFS partition:
UUID=XXXX-XXXX  /mnt/windows  ntfs-3g  defaults,uid=1000,gid=1000  0  0
## FAT32 partition:
UUID=XXXX-XXXX  /mnt/usb  vfat  defaults,uid=1000,gid=1000  0  0
  
# Test the configuration (without rebooting)
$ sudo mount -a
{% endhighlight %}


## [Remove a SATA disk from a running system](https://unix.stackexchange.com/questions/43413/how-can-i-safely-remove-a-sata-disk-from-a-running-system)

- [ disconnect hot-swap SATA hard drive](https://askubuntu.com/questions/989410/whats-the-proper-way-to-disconnect-hot-swap-sata-hard-drive/989466#989466)

{% highlight bash %}
$ device=sde; sudo sh -c "echo 1 > /sys/block/${device}/device/delete"
{% endhighlight %}
