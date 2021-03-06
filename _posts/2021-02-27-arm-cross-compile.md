---
published: true
title: ARM Cross compiler
tags: arm cross-compile
---
> Why is cross-compiling so difficult? Because the libraries aren?t there! - [Cross Compile](https://carboncopycat.wordpress.com/2011/12/21/cross-compile-a-beagleboard-arm-opencv-application-2/)

## [ARM architecture](https://monicagranbois.com/blog/raspberrypi/error-package-architecture-arm-does-not-match-system-armhf/)
Do I need to add foreign architecture for cross-compiling?
**No**, it is possible to install g++-arm-linux-gnueabihf without adding armhf architecture.

- **arm** is the original Debian ABI for the ARM architecture. It is now considered obsolete and newer ports such as armel and armhf have replaced it. 
- **armel** is the default Debain port for the ARM architecture
- **armhf** is a port that uses the “hard” Floating Point Unit. 

{% highlight bash %}
$ dpkg --print-architecture           # list native architecture
$ dpkg --print-foreign-architectures  # list foreign architecture
{% endhighlight %}

## [Debian cross compilation tools](https://plasma.ninja/blog/devices/remarkable/2017/12/18/reMarkable-exporation.html)

This may conflict with `g++-multilib` that is needed by ([aptitude](https://askubuntu.com/questions/563178/the-following-packages-have-unmet-dependencies/1056378#1056378) resolution)
{% highlight bash %}
3)     libc6-dev-i386 recommends gcc-multilib      
...
{% endhighlight %} 

{% highlight bash %}
# install C/C++ compiler and standard libs
$ apt-get install g++-arm-linux-gnueabihf gcc-arm-linux-gnueabihf

# compile something
$ arm-linux-gnueabihf-g++ main.cpp
{% endhighlight %}

## Setup cross library
TBC
### [pkg-config](https://stackoverflow.com/questions/48690290/meson-cross-compiling-dependencies#)
This tool searches, so called, package config files (`.pc`) using [PKG_CONFIG_LIBDIR](https://github.com/raspberrypi/tools/blob/master/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian/bin/arm-linux-gnueabihf-pkg-config) environment variable. 

{% highlight bash %}
$ sudo apt-get install -y pkg-config-arm-linux-gnueabi
{% endhighlight %}

- [Cross Compile a Beagleboard ARM OpenCV Application](https://carboncopycat.wordpress.com/2011/12/21/cross-compile-a-beagleboard-arm-opencv-application-2/)
- [Cross compiling dlib for ARM on Ubuntu](https://www.jofre.de/?p=1494)


## [Meson arm cross compilation]({% post_url 2020-08-12-build-meson %})

## [Running ARM programs under linux](https://gist.github.com/luk6xff/9f8d2520530a823944355e59343eadc1#running-arm-programs-under-linux-without-starting-qemu-vm)
First, cross-compile user programs with GCC-ARM toolchain. Then install qemu-arm-static so that you can run ARM executables directly on linux

{% highlight bash %}
# armel packages also exist
$ sudo apt-get install gcc-arm-linux-gnueabihf libc6-dev-armhf-cross qemu-user-static
{% endhighlight %} 

Usage
{% highlight bash %}
$ cat > hello.c << EOF

#include <stdio.h>
int main(void) { return printf("Hello ARM!\n"); }
EOF

$ arm-linux-gnueabihf-gcc -static  -ohello hello.c

$ file hello
hello: ELF 32-bit LSB executable, ARM, version 1 (SYSV), statically linked,

$ ./hello
Hello ARM!
{% endhighlight %} 