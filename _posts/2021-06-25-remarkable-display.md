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
- display - 2.6..2.8.0.98
- rm2fb - 2.3..2.5
  
## [reMarkable 2 Framebuffer](https://remarkablewiki.com/tech/rm2_framebuffer)
> The rm2 does not use the embedded epdc of the imx7. Instead the e-Ink display is connected directly to the LCD controller. This means all stuff that the epdc would normally do is now done in software (SWTCON).
> 
> The current workaround to get rm1 apps working on the rm2 is using the [remarkable2-framebuffer](https://github.com/ddvk/remarkable2-framebuffer) project. rm2fb is available as a package in [toltec](https://github.com/toltec-dev/toltec) which sets up the server and client parts for you.
  
{% highlight bash %}
opkg install rm2fb
{% endhighlight %}

### [How to port apps from rM1](https://github.com/ddvk/remarkable2-framebuffer/issues/13)
For an [rM1 app](https://github.com/ddvk/remarkable2-framebuffer/issues/14) to work on the rM2, they need to do the following:
- install rm2fb server and client libraries
- run rm2fb server (see README.md)
- run the rm1 app with `LD_PRELOAD=/path/to/client.so <app>`
  
