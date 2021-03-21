---
published: true
title: Dev on reMarkable
tags: dev remarkable arm cross-compile
---
see also 
- [reMarkable Hardware]({% post_url 2021-02-05-remarkable-hardware %})
- [rM discord](https://discord.com/channels/385916768696139794/386181213699702786)

![caption](https://i.redd.it/imwxvv6c87l61.jpg)

# [Introduction](https://dragly.org/2017/12/01/developing-for-the-remarkable/)

[Frameworks in use around the rM1 community for building apps](https://github.com/ddvk/remarkable2-framebuffer/issues/14)

| framework | lang | apps |
| --- | --- | ---: |
| libremarkable | rust | retris, chessmarkable, plato, whiteboard |
| rmkit | cpp | harmony, mines, remux |
| qtsgepaper | cpp+qt 	 | calculator, draft, oxide, wikipedia, keywriter, chess2 |
| koreader base | cpp+lua 	 | koreader |



# [Development](https://remarkablewiki.com/devel/start)
## [Setup toolchain](https://remarkablewiki.com/devel/toolchain)
The official toolchain is no longer distributed by reMarkable.

### [Debian cross compilation tools]({% post_url 2021-02-27-arm-cross-compile %})
The GLIB version has to be fixed to 2.27 (How ?):
- [Multiple glibc libraries on a single host](https://stackoverflow.com/questions/847179/multiple-glibc-libraries-on-a-single-host/52454603#52454603)
- [Toltec crosstool-ng](https://github.com/toltec-dev/toolchain/tree/master/toolchain/crosstool-ng)

### [Toltec build toolchain](https://github.com/toltec-dev/toolchain/) - set of [docker images](https://github.com/orgs/toltec-dev/packages) used for cross-compiling binaries for the the reMarkable tablet.
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

### [Dockcross](https://github.com/dockcross/dockcross) / [Exploring the reMarkable via Shell](https://plasma.ninja/blog/devices/remarkable/2017/12/18/reMarkable-exporation.html)

## Dev / [Awesome reMarkable](https://awesomeopensource.com/project/reHackable/awesome-reMarkable)

### rM2 using [rm2fb](https://remarkablewiki.com/devel/qt_creator#toolchain) / [doc](https://github.com/ddvk/remarkable2-framebuffer/issues/11)

<span style="color:red">[**Warning**]</span> to work it requires to use libc*.so (the dynamic version), so avoid using [`-static` flags](https://stackoverflow.com/questions/49038088/does-gcc-links-to-libc-a-or-libc-so-by-default/49038236#49038236) when compiling.

{% highlight bash %}
# systemctl stop xochitl # not sure still needed ?
LD_PRELOAD=/opt/lib/librm2fb_client.so.1.0.0/librm2fb_client.so.1.0.0 <rmapp>
# or
/opt/bin/rm2fb-client <rmapp>
{% endhighlight %}

see also - [reMarkable Framebuffer]({% post_url 2021-03-12-remarkable-fb %})
  
### [libremarkable](https://github.com/canselcik/libremarkable) - A **low latency** Framework for Remarkable Tablet
- [using with Qt](https://github.com/canselcik/libremarkable/issues/12)
Rust code
{% highlight bash %}
make examples-docker
make deploy-demo
{% endhighlight %}

`demo` can be launched on rM2, using remux if place d inside [`/home/root/apps`](https://github.com/rmkit-dev/rmkit/issues/94#issuecomment-778794274)

- [C CPP Build Instructions](https://github.com/canselcik/libremarkable/wiki/C-CPP-Build-Instructions)
	- Install **debian cross compilation tools** cross compilation tool.
	- change to HOST=arm-linux
    
{% highlight bash %}
dpkg --add-architecture armhf
sudo apt-get update
sudo dpkg --add-architecture armhf

git submodule init && git submodule update
make freetype
make libremarkable			# comment # include $(CONFIG)
make poc
{% endhighlight %}

### [rmkit](https://github.com/rmkit-dev/rmkit/blob/master/docs/BUILDING.md) / [Home](https://rmkit.dev/)

- Allows testing on linux x86 with simulator (resim)
{% highlight bash %}
resim ./src/build/harmony
{% endhighlight %}

- Allows testing on linux x86 with frame buffer (go to console Ctrl+Alt+1) => [this is going to disappear](https://github.com/rmkit-dev/rmkit/issues/84)

Requires:
- [okp](https://github.com/raisjn/okp) - a python script that processes .cpy files and generates C++ code.
- [resim](https://github.com/evidlo/remarkable_sim) - remarkable-simulator
	- it require tkinter `sudo apt-get install python3-tk`

**Issue**
- use strace to diagnore crash
	- harmony tried to read [`src/vendor/NotoSansMono-Regular.ttf`](https://www.ffonts.net/Noto-Sans-Mono-Regular.font.download) which is missing and crash
- mouse not read on native ? 
	- change `USE_RESIM := true` to `false` to use native mouse and keyboard

## LDD (tracking dependancies on remarkable)
  
I installed `ldd` using opkg install ldd  (it is found in [entware](http://pkg.entware.net/binaries/armv7/Packages.html)) 

but it didn't work:
{% highlight bash %}
$ ldd ./fb_test 
        not a dynamic executable

# because it is not thre right linker that is used
# update LDLIST to the right linker makes it work
LDLIST=/lib/ld-linux-armhf.so.3
{% endhighlight %}
  
## reMarkable Developper note
- [curtisf overview](https://discord.com/channels/385916768696139794/771436565757952070/813914877717381170)
  - [simple apps in C](https://github.com/CurtisFenner/remarkable-apps)
  - [framebuffer.c](https://github.com/CurtisFenner/remarkable-apps/blob/master/engine/framebuffer.c) - you can write pixel data to /dev/fb0, and call ioctl to flush rectangles to the screen
  - [input.c](https://discord.com/channels/385916768696139794/771436565757952070/813914877717381170) - You can read pen/touch input directly from /dev/input/event1
  
- [Developing for the reMarkable tablet](https://dragly.org/2017/12/01/developing-for-the-remarkable/)
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
