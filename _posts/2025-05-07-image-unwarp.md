---
title: "Deskewing / Dewarping & Stitching Images \U0001F4D0"
published: true
tags: image panorama book text warp skew photogrammetry freecad
toc: true
---
>  scanned or photo taken from hand that do not have ideal perspective - [tools to fix them](https://safjan.com/tools-for-doc-deskewing-and-dewarping/#page-dewarp-11k-stars) / [Hugin](https://hugin.sourceforge.io/tutorials/index.shtml)

# [Correct Perspective](https://chatgpt.com/share/681c79f3-9dec-800d-b268-ac7b4160f260)

## [Hugin](https://hugin.sourceforge.io/tutorials/index.shtml)

### Using

**Stitcher Tab** refered in tutorials is [in fact accessible in _View Menu_](https://www.dpreview.com/forums/thread/4170386)

A stitching panorama tool:
- can estimate lens distortion
- [correct perspective](https://hugin.sourceforge.io/tutorials/perspective/en.shtml) - with a good selection of both vertical and horizontal control points
- [stitching flat image](https://hugin.sourceforge.io/tutorials/scans/en.shtml) - recreate larger flat image from a set
- _panoramas_ ?

[![distorded image](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxbqRsALb67nwNkj1Yzfr2thw7MnP5sSxHd4rTq0xTC-oc6H8_jlycbmy8qp_N0DG7dN49af1uCg4ZB2gUuu3CGvoGEmbsrY2tClLAqjiazWLFMKISyGgF_OnUOJV-LmKpsb-ATy-2_vE/s640/samyang+7.5mm+f3.5+example+image+sergels+torg+f5.6.jpg)](https://m43photo.blogspot.com/2012/03/defishing-fisheye-images.html)

### Install
- from [PPA](https://ubuntuhandbook.org/index.php/2024/11/hugin-2024-0-1-released-ppa-updated/)

{% highlight cpp %}
$ sudo add-apt-repository ppa:ubuntuhandbook1/hugin
$ sudo apt update
$ sudo apt install hugin
{% endhighlight %}

### [Compiling](https://wiki.panotools.org/Hugin_Compiling_Ubuntu)
