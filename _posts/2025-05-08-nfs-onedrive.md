---
title: Linux NFS Onedrive
published: true
tags: nfs nas
---
>  OneDrive-style experience, using FS-Cache - [chatGPT](https://chatgpt.com/share/681c8f76-b64c-800d-95e0-9f5f8a2605c5)

### Use fs-cache + cachefilesd with NFS

Needs [FS-Cache](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-fscache#ch-fscache) needs to be installed locally

{% highlight bash %}
$ sudo apt install cachefilesd
{% endhighlight %}

And it must be enabled `/etc/default/cachefilesd` -> `RUN=yes`
and then `sudo systemctl enable --now cachefilesd`

Now when mounting nfs, use `-o fsc` to enables FS-Cache support
`sudo mount -o fsc yourserver:/yourpath /mnt/nfs`

### Avoid? Autofs mount

- because if you do the content is unreliable, the mount point having been removed.
- **do not share** mount point between autofs and cachedfs (do not use `/nfs` if this is the autofs mount point)

### Example

Setup user specific folder on NAS

**On Server** [create ZFS dataset]({% post_url 2019-03-31-zfs-ubuntu %}#2---create-zfs-filesystem-or-dataset) / [NFS Share]()
{% highlight bash %}
$ zfs create -o mountpoint=/mnt/tronaut-yves storage_pool/tronaut-yves

$ sudo micro /etc/exports
# add it to NFS exports (/etc/exports)
# /mnt/tronaut-yves *(rw,sync,no_subtree_check,no_root_squash)

$ sudo systemctl restart nfs-kernel-server
$ 
{% endhighlight %}

**On Client**
{% highlight bash %}
$ mkdir yves ~/Tronaut

# manual mount
$ sudo mount -t nfs4 -o fsc tronaut:/mnt/tronaut-yves /home/yves/Tronaut
{% endhighlight %}

or create a [systemd mount unit](https://chatgpt.com/share/681ce740-8f10-800d-b2e3-ab9d8627159e)

**systemd .mount unit filenames must be the escaped version of the mount path.**

{% highlight bash %}
$ systemd-escape -p --suffix=mount /home/yves/Tronaut
=> home-yves-Tronaut.mount
{% endhighlight %}

in `/etc/systemd/system/home-yves-Tronaut.mount`
{% highlight init %}
# /etc/systemd/system/home-yves-Tronaut.mount
[Unit]
Description=Mount Tronaut NFS Share for yves
After=network-online.target
Wants=network-online.target

[Mount]
What=tronaut:/mnt/tronaut-yves
Where=/home/yves/Tronaut
Type=nfs4
Options=_netdev,fsc,auto,nofail,x-systemd.automount,x-systemd.device-timeout=10,timeo=14

[Install]
WantedBy=multi-user.target
{% endhighlight %}

{% highlight bash %}
$ sudo systemctl daemon-reexec
$ sudo systemctl enable home-tronaut-yves-mnt-share.mount
$ sudo systemctl start home-yves-Tronaut.mount
{% endhighlight %}


### [Config](https://computingforgeeks.com/how-to-cache-nfs-share-data-with-fs-cache-on-linux/)

`sudo xed /etc/cachefilesd.conf`

Default backend is in `/var/cache/fscache`

There are 6 control in `/etc/cachefilesd.conf` Configure Cache culling:
**brun N%** (percentage of blocks) & **frun N%** (percentage of files): this describes the amount of free space and the number of available files. If these values cache rise above the set percentage, then culling is turned off  
**bcull N%** (percentage of blocks) & **fcull N%** (percentage of files): describes the amount of available space or the number of files and if these values fall below the set limit, then cull is started.
**bstop N%** (percentage of blocks) & **fstop N%** (percentage of files): here if the amount of available space or the number of available files in the cache falls below either of these limits then the allocation of disk space stops until the limits are raised above the set percentage.

[![fscace design](https://computingforgeeks.com/wp-content/uploads/2022/07/Cache-NFS-Share-Data-with-FS-Cache-1.png?ezimgfmt=ng:webp/ngcb23)](https://computingforgeeks.com/how-to-cache-nfs-share-data-with-fs-cache-on-linux/)
