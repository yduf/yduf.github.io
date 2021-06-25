---
published: true
title: reMarkable Display
tags: epaper remarkable display
---
> rM2 using [rm2fb](https://remarkablewiki.com/devel/qt_creator#toolchain) / [doc](https://github.com/ddvk/remarkable2-framebuffer/issues/11)

<span style="color:red">[**Warning**]</span> to work it requires to use libc*.so (the dynamic version), so avoid using [`-static` flags](https://stackoverflow.com/questions/49038088/does-gcc-links-to-libc-a-or-libc-so-by-default/49038236#49038236) when compiling.

{% highlight bash %}
# systemctl stop xochitl # not sure still needed ?
LD_PRELOAD=/opt/lib/librm2fb_client.so.1.0.0/librm2fb_client.so.1.0.0 <rmapp>
# or
/opt/bin/rm2fb-client <rmapp>
{% endhighlight %}

see also - [reMarkable Framebuffer]({% post_url 2021-03-12-remarkable-fb %})
