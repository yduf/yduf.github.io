---
title: Custom File Attribute (xattr)
published: true
tags: filesystem file ext4 zfs
---
> The ext4 filesystem supports extended attributes, which are name-value pairs that can be associated with a file.  - [chatGPT](https://chatgpt.com/share/67821a2a-0090-800d-b3aa-d284792fb558)

If you need to move files with xattr between filesystems (e.g., from ZFS to ext4), you may encounter compatibility issues. Use tools like tar or rsync with --xattrs to preserve attributes.

### Lang support
- Ruby - [ffi-xattr](https://github.com/jarib/ffi-xattr?tab=readme-ov-file#ffi-xattr)
