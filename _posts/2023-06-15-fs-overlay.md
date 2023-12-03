---
published: true
title: Overlay Filesystem
tags: filesystem content
---
> Content-Addressable Overlay Filesystem for Linux - [ComposeFS](https://github.com/containers/composefs) / [HN](https://news.ycombinator.com/item?id=34524651)

- [Using Composefs in OSTree](https://blogs.gnome.org/alexl/2022/06/02/using-composefs-in-ostree/) - The idea is that instead of checking out a hardlinked directory and passing that on the kernel commandline we build a composefs image, enable fs-verity on it and put its filename and digest on the kernel command line instead.

### see also
- [Podman is gaining rootless overlay support](https://www.redhat.com/sysadmin/podman-rootless-overlay) - Podman can use native overlay file system with the Linux kernel versions 5.13. Up until now, we have been using fuse-overlayfs.
- [ unionfs-fuse ](https://manpages.ubuntu.com/manpages/trusty/man8/unionfs-fuse.8.html) - A userspace unionfs implementation
