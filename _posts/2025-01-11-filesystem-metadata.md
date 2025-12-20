---
title: Custom File Attribute (xattr)
published: true
tags: filesystem file metadata ext4 zfs
---
> The ext4 filesystem supports extended attributes, which are name-value pairs that can be associated with a file.  - [chatGPT](https://chatgpt.com/share/67821a2a-0090-800d-b3aa-d284792fb558)

If you need to move files with xattr between filesystems (e.g., from ZFS to ext4), you may encounter compatibility issues. Use tools like tar or rsync with --xattrs to preserve attributes.

### Notes
Custom attribute are of the form `user.tag` and the prefix `user` is not customizable, only the `tag` part is, eg trying to set:

{% highlight bash %}
$ xattr -w blake3.h 1234 src/blake3.rb     # [Errno 95] Operation not supported

$ xattr -w user.blake3 1234 src/blake3.rb  # works fine
{% endhighlight %}

{% highlight bash %}
# Alternatively
$ getfattr -d filename     # List extended attributes of a file or directory
$ getfattr -d -h symlink   # List attributes without following symlinks
{% endhighlight %}

### Lang support
- **Ruby** - [ffi-xattr](https://github.com/jarib/ffi-xattr?tab=readme-ov-file#ffi-xattr) - unmaintained
