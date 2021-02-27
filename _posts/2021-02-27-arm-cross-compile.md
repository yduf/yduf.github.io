---
published: true
title: ARM Cross compiler
tags: arm cross-compile
---
## [ARM architecture](https://monicagranbois.com/blog/raspberrypi/error-package-architecture-arm-does-not-match-system-armhf/)
Do I need foreign architecture for cross-compiling? => I don't know

- **arm** is the original Debian ABI for the ARM architecture. It is now considered obsolete and newer ports such as armel and armhf have replaced it. 
- **armel** is the default Debain port for the ARM architecture
- **armhf** is a port that uses the “hard” Floating Point Unit. 

{% highlight bash %}
dpkg --print-architecture			# list native architecture
dpkg --print-foreign-architectures  # list foreign architecture
{% endhighlight %}

## [Debian cross compilation tools](https://plasma.ninja/blog/devices/remarkable/2017/12/18/reMarkable-exporation.html)

This may conflict with `g++-multilib` that is needed by
{% highlight bash %}
3)     libc6-dev-i386 recommends gcc-multilib      
4)     libc6-dev-x32 recommends gcc-multilib       
5)     llvm-amdgpu recommends gcc-multilib         
6)     llvm-amdgpu recommends g++-multilib         
7)     openmp-extras recommends gcc-multilib       
8)     openmp-extras recommends g++-multilib 
{% endhighlight %} 

{% highlight bash %}
# add multi-arch for "armhf"
# https://wiki.debian.org/Multiarch/HOWTO
dpkg --add-architecture armhf
apt-get update

# install C/C++ compiler and standard libs
apt-get install g++-arm-linux-gnueabihf gcc-arm-linux-gnueabihf
apt-get install libstdc++6:armhf libelf-dev:armhf

# compile something
arm-linux-gnueabihf-g++ main.cpp
{% endhighlight %} 

