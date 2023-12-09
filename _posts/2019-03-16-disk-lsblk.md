---
published: true
title: Disk diagnostic
tags: cli disk linux fstab
---
> [How do I find the UUID of a filesystem](https://serverfault.com/questions/3132/how-do-i-find-the-uuid-of-a-filesystem)

### lsblk
{% highlight bash %}
$ lsblk

NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0   477G  0 disk 
├─sda1   8:1    0   260M  0 part /boot/efi
├─sda2   8:2    0    16M  0 part 
├─sda3   8:3    0  45,9G  0 part 
├─sda4   8:4    0   499M  0 part 
├─sda5   8:5    0  44,5G  0 part /
├─sda6   8:6    0 286,2G  0 part /home
└─sda7   8:7    0  99,6G  0 part /archive
{% endhighlight %}

### blkid /dev/sda7
{% highlight bash %}
$ blkid /dev/sda7
/dev/sda7: UUID="dffbe19f-eb0f-4027-8912-db9299ac26eb" TYPE="ext4" PARTLABEL="archive" PARTUUID="c4359d67-57b3-4595-8bad-175876fd71bb" 
{% endhighlight %}

### Indentify HDD by SATA port number
{% highlight bash %}
$ lscscsi
{% endhighlight %}

### [Remove a SATA disk from a running system](https://unix.stackexchange.com/questions/43413/how-can-i-safely-remove-a-sata-disk-from-a-running-system)

- [ disconnect hot-swap SATA hard drive](https://askubuntu.com/questions/989410/whats-the-proper-way-to-disconnect-hot-swap-sata-hard-drive/989466#989466)

{% highlight bash %}
$ device=sde; sudo sh -c "echo 1 > /sys/block/${device}/device/delete"
{% endhighlight %}
