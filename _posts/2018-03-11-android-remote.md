---
title: Android Remote control
published: true
tags: android remote
---
> Scrcpy application provides display and control of Android devices connected on USB. It does not require any root access. It works on GNU/Linux, Windows and Mac OS.- [Scrcpy](https://github.com/Genymobile/scrcpy/blob/master/README.md)

- [How to Enable USB Debugging Mode on Android](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

{% highlight cpp %}
scrcpy  --turn-screen-off --stay-awake
{% endhighlight %}

- [AutoAdb](https://github.com/rom1v/autoadb) - This command-line tool allows to execute a command whenever a new device is connected to adb.

{% highlight cpp %}
scrcpy -s '{}' --turn-screen-off --stay-awake
{% endhighlight %}