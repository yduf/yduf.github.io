---
published: true
title: Linux on a Droid
tags: linux-system android
---
> Installing a regular Linux distribution on an Android device opens a whole new world of possibilities. You can turn your Android device into a full-blown Linux/Apache/MySQL/PHP server and run web-based applications on it, install and use your favorite Linux tools, and even run a graphical desktop environment. - [Linux Mag](https://www.linux-magazine.com/Online/Features/Convert-an-Android-Device-to-Linux)

- [How To Install a Linux OS On Your Android Phone](https://helpdeskgeek.com/linux-tips/how-to-install-a-linux-os-on-your-android-phone/)
- [What are the differences between Termux, PRoot, Userland, Linux Deploy, AnLinux and Alpine?](https://superuser.com/questions/1546024/what-are-the-differences-between-termux-proot-userland-linux-deploy-anlinux)

They all provide a container,what chroot mainly do is to pretend you root dir is under the rootfs's dir,It provides file-level isolation, however the process,etc,share the resource of your system which running currently.
- **Userland** is build on **termux**, **Linux deploy** is a app using it's own code

## On non rooted phone
### [Termux](https://www.youtube.com/watch?v=KxOGyuGq0Ts)
**Do not use Termux app from Google Play. It is deprecated** - [github](https://github.com/termux/termux-app/releases/tag/v0.118.1)

Opensource and maintained as of 2024

- [html doc](https://www.golinuxcloud.com/install-kali-linux-on-android/) / [Install (pdf)](https://www.dropbox.com/scl/fi/irpaebjwlu5v1c3mt4hzi/Android-Kali-NetHunter-Install-2.pdf?rlkey=65gpc275fy6sbkz0i19wlcj06&e=1&dl=0) / [Kali Nethunter](https://www.kali.org/docs/nethunter/) 
	- [NetHunter Rootless](https://www.kali.org/docs/nethunter/nethunter-rootless/) - special packaged for android

{% highlight bash %}
$ termux-setup-storage
$ pkg install wget
$ wget -O install-nethunter-termux https://offs.ec/2MceZWr
$ chmod +x install-nethunter-termux
$ ./install-nethunter-termux
{% endhighlight %}

- [DISABLE PHANTOM PROCESS KILLER In Android 12 & 13](https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/) - It’s a background process limiter that kills the app processes using excessive CPU or system resources. Google has submitted a patch that adds a toggle in developer options to disable the monitoring of phantom processes in android 13. It seems like many smartphone vendors aren’t updated the developer’s options by including this option. 

{% highlight bash %}
$ adb shell "/system/bin/device_config set_sync_disabled_for_tests persistent"
$ adb shell "/system/bin/device_config put activity_manager max_phantom_processes 2147483647"
$ adb shell settings put global settings_enable_monitor_phantom_procs false

## verify that they are taken into account
$ adb shell "/system/bin/dumpsys activity settings | grep max_phantom_processes"
$ adb shell "/system/bin/device_config get activity_manager max_phantom_processes"
{% endhighlight %}

### [Linux Deploy](https://github.com/meefik/linuxdeploy)
### [ UserLAnd](https://www.androidauthority.com/install-ubuntu-on-your-android-smartphone-765408/)

**UserLAnd seems to be a fork of an older version of Termux**

Userland is an app to help you set up a container and run applications in it quickly using proot,likes desktop environment Same with what Linux deploy (same with userland but using chroot not proot) did,but proot doesn't need your phone to be rooted because it doesn't need root authority.

Closed source / payed option.

- [Getting Started in UserLAnd](https://github.com/CypherpunkArmory/UserLAnd/wiki/Getting-Started-in-UserLAnd)


- [AndroNix](https://www.makeuseof.com/tag/how-to-linux-on-android/) 

## On rooted phone
### [Lindroid](https://hackaday.com/2024/06/18/lindroid-promises-true-linux-on-android/)
