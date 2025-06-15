---
title: XScreenSaver
published: true
tags: retro display blog-people
---
> XScreenSaver - [jwz.org](https://www.jwz.org/xscreensaver/) / [man](https://manpages.ubuntu.com/manpages/xenial/man1/xscreensaver.1.html)

_some distros, notably Debian, distribute a version of XScreenSaver that is years out of date. This is bad and they should feel bad._

- [Changelog](https://www.jwz.org/xscreensaver/changelog.html)
- [Installing the Epic XScreenSaver Collection on Linux Mint 21](https://thelinuxcode.com/install-xscreensaver-linux-mint/)
- [Flying Toasters](https://github.com/torunar/flying-toasters-xscreensaver?tab=readme-ov-file#flying-toasters)

### Building

{% highlight bash %}
# install dependencies
$ sudo apt install intltool libxi-dev

# configure
$ ./configure --prefix=/usr  # check the output of this command for missing dependancy

# compile
$ make -j 12                 # as much as you can
{% endhighlight %}

