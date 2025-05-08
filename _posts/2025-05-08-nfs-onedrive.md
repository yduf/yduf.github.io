---
title: Linux NFS Onedrive
published: true
tags: nfs
---
>  OneDrive-style experience, usinf FS-Cache - [chatGPT](https://chatgpt.com/share/681c8f76-b64c-800d-95e0-9f5f8a2605c5)

### Use fs-cache + cachefilesd with NFS

Needs [FS-Cache]() needs to be installed locally

{% highlight bash %}
$ sudo apt install cachefilesd
{% endhighlight %}

And it must be enabled `/etc/default/cachefilesd` -> `RUN=yes`
and then `sudo systemctl enable --now cachefilesd`
