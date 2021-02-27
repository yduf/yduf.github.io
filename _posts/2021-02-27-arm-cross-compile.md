---
published: true
title: ARM Cross compiler
tags: arm cross-compile
---
## Do I need foreign architecture for cross-compiling?
[I don't know](https://monicagranbois.com/blog/raspberrypi/error-package-architecture-arm-does-not-match-system-armhf/)
- **arm** is the original Debian ABI for the ARM architecture. It is now considered obsolete and newer ports such as armel and armhf have replaced it. 
- **armel** is the default Debain port for the ARM architecture
- **armhf** is a port that uses the “hard” Floating Point Unit. 

{% highlight bash %}
dpkg --print-architecture			# list native architecture
dpkg --print-foreign-architectures  # list foreign architecture
{% endhighlight %}


