---
title: Digikam internals
published: true
tags: code-review
toc: true
---
> [gitlab](https://invent.kde.org/graphics/digikam) / [github (mirror)](https://github.com/KDE/digikam)

- [ How digiKam Recognizes Face](https://chatgpt.com/share/67f92071-b428-800d-bb1c-aaeddbbcef28)
	- [core/utilities/facemanagement](https://github.com/KDE/digikam/tree/master/core/utilities/facemanagement)

# [Internal](https://www.digikam.org/documentation/)
- [digiKam API reference page](https://www.digikam.org/api/index.html) - digiKam is split into a number of components, each ones located to a dedicated directory.
- internally use [FNV-1a](https://github.com/KDE/digikam/blob/33d0457e20adda97c003f3dee652a1749406ff9f/core/dplugins/generic/tools/mediaserver/upnpsdk/Neptune/Source/Core/NptHash.cpp) / [Fowler–Noll–Vo hash function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function)

## [Compile](https://www.digikam.org/download/git/)

[Guide thay explains how to compile and install digiKam directly from the Git master repository](https://www.digikam.org/download/git/), including the powerful 3rd-party GMicQt plugin. 

**see also**
- [Contribute](https://www.digikam.org/contribute/)
- [Compile and install Digikam on Ubuntu 20.04 Focal (21.10 too)](https://www.blackrosetech.com/gessel/2021/03/26/compile-and-install-digikam-on-ubuntu-20-04-focal)

### [Extension Mechanisms](https://chatgpt.com/share/687d1a6a-61f8-800d-a118-c7ae884d03c4)

