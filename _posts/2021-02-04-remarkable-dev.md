---
published: true
title: Dev on reMarkable
tags: dev remarkable
---
# [Introduction](https://dragly.org/2017/12/01/developing-for-the-remarkable/)

# [Development](https://remarkablewiki.com/devel/start)
## [Setup toolchain](https://remarkablewiki.com/devel/toolchain)
- The official toolchain is no longer distributed by reMarkable.
- [Toltec build toolchain](https://github.com/toltec-dev/toolchain/) - set of [docker images](https://github.com/orgs/toltec-dev/packages) used for cross-compiling binaries for the the reMarkable tablet.
    - [use VSCode remote container]({% post_url 2017-11-27-CG-meanmax %}) with .devcontainer.json *Remote-Containers: Reopen in Container*
{% highlight json %}
{
    "image": "ghcr.io/toltec-dev/qt:v1.3.2s"
}
{% endhighlight %}

- [ex compiling tarnish](https://github.com/Eeems/oxide/issues/96)
{% highlight bash %}
docker container run -it --rm ghcr.io/toltec-dev/qt:v1.1
{% endhighlight %}

## Dev / [Awesome reMarkable](https://awesomeopensource.com/project/reHackable/awesome-reMarkable)

### [libremarkable](https://github.com/canselcik/libremarkable) - A **low latency** Framework for Remarkable Tablet
- [using with Qt](https://github.com/canselcik/libremarkable/issues/12)
- [Developing for the reMarkable tablet](https://dragly.org/2017/12/01/developing-for-the-remarkable/)

- [C CPP Build Instructions](https://github.com/canselcik/libremarkable/wiki/C-CPP-Build-Instructions)

### [rmkit](https://github.com/rmkit-dev/rmkit/blob/master/docs/BUILDING.md) / [Home](https://rmkit.dev/)
Allows testing on linux x86 with frame buffer (go to console Ctrl+Alt+1)

Requires:
- [okp](https://pypi.org/project/okp/) - a python script that processes .cpy files and generates C++ code.
- [resim](https://resim.readthedocs.io/en/latest/index.html) - for visualisation on PC without framebuffer. - How to use it ?

**Issue**
- use strace to diagnore crash
	- harmony tried to read `src/vendor/NotoSansMono-Regular.ttf` which is missing and crash

- mouse not read ?

## reMarkable Developper note


- [Developing for the reMarkable tablet]
- [canselcik/libremarkable](https://github.com/canselcik/libremarkable)

- [reMarkable 2 sources are published](https://www.reddit.com/r/RemarkableTablet/comments/jp9gq9/remarkable_2_sources_are_published/)
	- [rM2 3rd party apps progress](https://www.reddit.com/r/RemarkableTablet/comments/jp2h4s/rm2_3rd_party_apps_progress/)

- [Setting up QT Creator](https://remarkablewiki.com/devel/qt_creator)
- [reMarkable/linux](https://github.com/reMarkable/linux) - linux kernel source for reMarkable

## [Filesystem / Document format](https://remarkablewiki.com/tech/filesystem)
> You will also notice that there are no human readable filenames and that each “document” has a number of associated files with it, depending on the document type. Human readable information is stored within the .metadata files (described further below). 

- [reMarkable .lines File Format](https://plasma.ninja/blog/devices/remarkable/binary/format/2017/12/26/reMarkable-lines-file-format.html)
	- [Lines Are Beautiful](https://github.com/ax3l/lines-are-beautiful)
    - [remarkable-layers](https://github.com/bsdz/remarkable-layers/) - Python module for reading and writing Remarkable Lines files (*.rm).


## Resources
- [HN](https://news.ycombinator.com/item?id=22604597) 
	- [HN](https://news.ycombinator.com/item?id=21040343)
- [remarkable.engineering](https://remarkable.engineering/)
- [remarkablewiki](https://remarkablewiki.com/start)
	- [tips](https://remarkablewiki.com/tips/start)
	- [tech](https://remarkablewiki.com/tech/start)
- [reMarkable](https://duckpond.ch/nix/bash/2020/01/08/reMarkable.html)
