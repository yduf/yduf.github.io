---
published: true
title: Overlay Filesystem
tags: filesystem content docker cgroups
---
> Content-Addressable Overlay Filesystem for Linux - [ComposeFS](https://github.com/containers/composefs) / [HN](https://news.ycombinator.com/item?id=34524651)

- [Using Composefs in OSTree](https://blogs.gnome.org/alexl/2022/06/02/using-composefs-in-ostree/) - The idea is that instead of checking out a hardlinked directory and passing that on the kernel commandline we build a composefs image, enable fs-verity on it and put its filename and digest on the kernel command line instead.

[![caption](https://linuxconfig.org/wp-content/uploads/2022/09/01-introduction-to-the-overlayfs.png)](https://linuxconfig.org/introduction-to-the-overlayfs)

### [Mount overlayfs within unprivileged user namespace ](https://chat.openai.com/share/6b698675-65ec-4fb6-b70c-a22ce067d5ec)

{% highlight bash %}
$ unshare --mount -r			# create a new mount namespace. (with --map-root-user)
mkdir upperdir lowerdir mergeddir
mount -t overlay -o lowerdir=/path/to/lowerdir,upperdir=/path/to/upperdir,workdir=/path/to/workdir overlay /path/to/mergeddir
{% endhighlight %}

### see also
- [Introduction to the OverlayFS](https://linuxconfig.org/introduction-to-the-overlayfs)
	- [Overlay Filesystem](https://www.kernel.org/doc/html/latest/filesystems/overlayfs.html)
- [Podman is gaining rootless overlay support](https://www.redhat.com/sysadmin/podman-rootless-overlay) - Podman can use native overlay file system with the Linux kernel versions 5.13. Up until now, we have been using fuse-overlayfs.
- [composefs](https://github.com/containers/composefs#composefs) - The composefs project combines several underlying Linux features to provide a very flexible mechanism to support read-only mountable filesystem trees, stacking on top of an underlying "lower" Linux filesystem.
- [ unionfs-fuse ](https://manpages.ubuntu.com/manpages/trusty/man8/unionfs-fuse.8.html) - A userspace unionfs implementation
