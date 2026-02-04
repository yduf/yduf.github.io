---
title: Xpra
published: true
tags: remote display opengl gpu
toc: true
---
> persistent remote display server and client for forwarding applications and desktop screens. - [Home](https://xpra.org/index.html) / [github](https://github.com/Xpra-org/xpra/?tab=readme-ov-file#about) / [man](https://manpages.org/xpra)

Xpra differs from standard X forwarding primarily in allowing disconnection and reconnection without disrupting the forwarded application. It also differs from VNC and similar remote display technologies in being rootless, so applications forwarded by Xpra appear on the local desktop as normal windows managed by the local window manager, rather than being all "trapped in a box together". - [wikipedia](https://en.wikipedia.org/wiki/Xpra)

Xpra has some support for Wayland.

**see also**
- [Install Xpra](https://richrose.dev/posts/linux/xpra/xpra-setup/) - suggest to run vscode with xpra to make remote available in a browser
- [Gaming over Xpra](https://superuser.com/questions/1490121/gaming-over-xpra/1771193#1771193) - some people recommend to use [sunshine](#alternatives) instead

### [Setup](https://bytexd.com/xpra/)

**Debian and Ubuntu also ships xpra packages, though their stable versions are completely out of date, broken and unsupported, they should not be used.** - [doc](https://github.com/Xpra-org/xpra/wiki/Distribution-Packages)

{% highlight bash %}
$ sudo micro /etc/apt/sources.list
# add
deb https://xpra.org/ noble main

$ wget -q https://xpra.org/gpg.asc -O- | sudo apt-key add -
$ sudo apt update
$ sudo apt install xpra
$ xpra --version
xpra v6.3-r0
{% endhighlight %}

### [Using it](https://bytexd.com/xpra/)

see [youtube](https://www.youtube.com/watch?v=2iBMsyfbC28&t=609s) for a demo

**on host**

{% highlight bash %}
$ xpra start :100		# start an empty desktop
$ DISPLAY=:100 freecad  # launch an application

# or make it available for a web browser
# host session must have been launched with --html=on + a bind address
$ xpra start --bind-tcp=0.0.0.0:9876 --html=on --start=freecad
# then connect to host:9876

$ xpra stop :100        # close session
{% endhighlight %}

**on client**
{% highlight bash %}
$ xpra attach ssh:yves-lab:100		# connect to it

$ xpra detach ssh:yves-lab:100	# appication is still there
{% endhighlight %}

### Troubleshooting

Start in direct mode (no-daemon)
{% highlight bash %}
$ xpra start :100 --daemon=no
{% endhighlight %}

# [Host GPU Acceleration](https://github.com/Xpra-org/xpra/blob/master/docs/Usage/OpenGL.md#gpu-acceleration) 

By default, OpenGL applications are supported, but they are executed in a virtual framebuffer context which uses a software renderer, and therefore without any GPU acceleration.

this has nothing to do with the client's opengl acceleration.

## [Virtual GL](https://www.virtualgl.org/)

[Virtual GL](https://virtualgl.org/About/Background) does API intercept and delegates OpenGL acceleration to a real GPU to do server side rendering.

{% highlight bash %}
$ xpra start --exec-wrapper="vglrun" --start="glxgears"
or

$ xpra start :100 --start="vglrun glxgears"

--- if encountering this => see setup
2025-05-12 12:05:18,306 No OpenGL_accelerate module loaded: No module named 'OpenGL_accelerate'
2025-05-12 12:05:18,434 Warning: OpenGL support check failed:
2025-05-12 12:05:18,434  unknown error
2025-05-12 12:05:18,434 started command `/usr/bin/vglrun glxgears` with pid 3792
2025-05-12 12:05:18,435  wrote pid 3792 to '/run/user/1000/xpra/100/glxgears.pid'
2025-05-12 12:05:18,436 started command `/usr/bin/vglrun ibus-daemon --xim --verbose --replace --panel=disable --desktop=xpra --daemonize` with pid 3794
2025-05-12 12:05:18,436  wrote pid 3794 to '/run/user/1000/xpra/100/ibus-daemon.pid'
Invalid MIT-MAGIC-COOKIE-1 key
[VGL] ERROR: Could not open display :0.
{% endhighlight %}

Virtual GL has to be set independantly of xpra.

### Setup

Package are available on [project release page](https://github.com/VirtualGL/virtualgl/releases).

{% highlight bash %}
$ sudo dpkg -i ./Downloads/virtualgl_3.1.3_amd64.deb 
$ sudo /opt/VirtualGL/bin/vglserver_config
# 1) Configure server for use with VirtualGL (GLX + EGL back ends)
# Restrict 3D X server access to vglusers group?: yes
# Restrict framebuffer device access to vglusers group?: yes
# Disable XTEST extension?: yes
... Creating vglusers group ...
... Creating /etc/opt/VirtualGL/ ...
... Granting read permission to /etc/opt/VirtualGL/ for vglusers group ...
... Creating /etc/modprobe.d/virtualgl.conf to set requested permissions for
    /dev/nvidia* ...
... Granting write permission to /dev/dri/card1 for vglusers group ...
... Granting write permission to /dev/dri/renderD128 for vglusers group ...
... Modifying /etc/X11/xorg.conf.d/99-virtualgl-dri.conf to enable DRI
    permissions for vglusers group ...
... Creating /etc/lightdm/lightdm.conf.d/99-virtualgl.conf ...
... Creating /usr/share/gdm/greeter/autostart/virtualgl.desktop ...

Done. You must restart the display manager for the changes to take effect.
# Exit

#
$ sudo systemctl start lightdm   # or gdm3, lightdm, etc.	# restart
$ sudo usermod -a -G vglusers $USER   # add yourself to groups
# need to unlog/relog user for groups to take effect

# test
$ xpra start :100 --exec-wrapper="vglrun" --start="glxgears" --daemon=no
--- this is ok
2025-05-12 12:21:14,515 No OpenGL_accelerate module loaded: No module named 'OpenGL_accelerate'
2025-05-12 12:21:15,110 OpenGL is supported on display ':100'
2025-05-12 12:21:15,110  using 'AMD Radeon Graphics (radeonsi, renoir, LLVM 19.1.1, DRM 3.57, 6.8.0-59-generic)' renderer
2025-05-12 12:21:15,111 started command `/usr/bin/vglrun glxgears` with pid 5789
2025-05-12 12:21:15,111  wrote pid 5789 to '/run/user/1000/xpra/100/glxgears.pid'
2025-05-12 12:21:15,112 started command `/usr/bin/vglrun ibus-daemon --xim --verbose --replace --panel=disable --desktop=xpra --daemonize` with pid 5792
2025-05-12 12:21:15,112  wrote pid 5792 to '/run/user/1000/xpra/100/ibus-daemon.pid'

# in parallel run nvtop to see GPU activity on host
$ nvtop # should display application use and gpuconsumption / otherwise it's mesa software that is run for opengl in pure cpu
{% endhighlight %}

### [Client OpenGL](https://github.com/Xpra-org/xpra/blob/master/docs/Usage/Client-OpenGL.md)

The native client can use OpenGL for better window rendering performance.
The window's pixels are kept in GPU buffers and so re-painting the window can be done quickly and efficiently.

This is in no way related to the OpenGL capabilities of the server.

Look for info on client (it's on by default)

## Automating Launch

Example launching freecad `bin/freecad-remote.sh`:
{% highlight bash %}
#!/bin/bash

# ======= Configuration =======
SERVER_USER="yves"
SERVER_HOST="yves-lab"
DISPLAY_NUM="100"  # Change if you want a different xpra display
APP_COMMAND="app/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage"
XPRA_DISPLAY=":${DISPLAY_NUM}"
# =============================

# Step 1: Start FreeCAD on the server in background via xpra
# will exit when freecad is closed
echo "[*] Launching FreeCAD on server via xpra..."
ssh ${SERVER_HOST} "xpra start ${XPRA_DISPLAY} --exec-wrapper='vglrun' --start-child='${APP_COMMAND}' --exit-with-children=yes"

# Optional: Wait a bit to ensure xpra starts properly
#sleep 2

# Step 2: Connect to the remote xpra session
echo "[*] Connecting to remote xpra session from client..."
xpra attach ssh:${SERVER_HOST}${XPRA_DISPLAY}

{% endhighlight %}

## Alternatives

- [self hosted game stremaing](https://chatgpt.com/share/68dedaa7-bc84-800d-8e96-e4f13d65c678) / [HN](https://news.ycombinator.com/item?id=45434046) - sunshine + moonlight
- [Sunshine](https://docs.lizardbyte.dev/projects/sunshine/latest/index.html)


[Xpra vs Sunshine](https://chatgpt.com/share/6982fa0e-42c8-800d-938d-f3770085e8a6)

| Feature              | **Xpra**                                           | **Sunshine (with Moonlight)**                            |
| -------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| **Primary Use Case** | Remote desktop/app streaming on Linux/Unix systems | High-performance game streaming                          |
| **Latency Focus**    | Moderate latency; good for general desktop use     | Ultra-low latency; designed for gaming                   |
| **Platform Support** | Linux, Windows, macOS                              | Host: Windows & Linux; Client: Moonlight (all platforms) |
| **Network Use**      | LAN and WAN (supports compression and encryption)  | Best over LAN; WAN with port forwarding or VPN           |
