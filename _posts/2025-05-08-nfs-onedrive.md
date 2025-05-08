---
title: Linux NFS Onedrive
published: true
tags: nfs nas
---
>  OneDrive-style experience, usinf FS-Cache - [chatGPT](https://chatgpt.com/share/681c8f76-b64c-800d-95e0-9f5f8a2605c5)

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

{% highlight bash %}
$ sudo mkdir /tronaut
$ sudo mount -t nfs4 -o fsc yourserver:/some/export /nfs/myfscached-nfs
{% endhighlight %}

