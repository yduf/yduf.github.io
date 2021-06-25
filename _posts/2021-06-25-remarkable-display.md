---
published: true
title: reMarkable Display
tags: epaper remarkable display
---
> rM2 using [rm2fb](https://remarkablewiki.com/devel/qt_creator#toolchain) / [doc](https://github.com/ddvk/remarkable2-framebuffer/issues/11)

<span style="color:red">[**Warning**]</span> to work it requires to use libc*.so (the dynamic version), so avoid using [`-static` flags](https://stackoverflow.com/questions/49038088/does-gcc-links-to-libc-a-or-libc-so-by-default/49038236#49038236) when compiling.

## [Display](https://discord.com/channels/385916768696139794/386181213699702786/857681792474546177)
display contains the server part of remarkable2-framebuffer, rm2fb-client contains the shim library that can be loaded into apps developed for the rM1 to make them work with the remarkable2-framebuffer server.

{% highlight bash %}
opkg install display # formerly rm2fb
{% endhighlight %}

Then using it

{% highlight bash %}
# systemctl stop xochitl # not sure still needed ?
LD_PRELOAD=/opt/lib/librm2fb_client.so.1.0.0/librm2fb_client.so.1.0.0 <rmapp>
# or
/opt/bin/rm2fb-client <rmapp>
{% endhighlight %}

see also - [reMarkable Framebuffer]({% post_url 2021-03-12-remarkable-fb %})

## reMarkable version supported
- display - 
- rm2fb - 1.x