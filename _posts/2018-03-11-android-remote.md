---
title: Android Remote control
published: true
tags: android kvm keybard remote display opencv
---
> **SCReen CoPY** application provides display and control of Android devices connected on USB. It does not require any root access. It works on GNU/Linux, Windows and Mac OS.- [github](https://github.com/Genymobile/scrcpy?tab=readme-ov-file#scrcpy-v25) / [HN](https://news.ycombinator.com/item?id=35151298)

### see also
- [Vos appareils](https://myaccount.google.com/device-activity?pli=1)
- [Localiser mon appareil](https://www.google.com/android/find/)

[![caption](https://github.com/Genymobile/scrcpy/raw/master/assets/screenshot-debian-600.jpg)](https://github.com/Genymobile/scrcpy)

### Usage

- [How to Enable USB Debugging Mode on Android](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

{% highlight cpp %}
scrcpy  --turn-screen-off --stay-awake
{% endhighlight %}

- [AutoAdb](https://github.com/rom1v/autoadb) - This command-line tool allows to execute a command whenever a new device is connected to adb.

{% highlight cpp %}
autoadb scrcpy -s '{}' --turn-screen-off --stay-awake
{% endhighlight %}

### see also
- [scrcpy-opencv](https://github.com/robberth/scrcpy-opencv) -  a tool that streams your android screen to your computer, and allows you to send mouse or keyboard input back to the android device. This project modifies scrcpy to also send back automatically generated input by passing the frame on to the OpenCV computer vision library.
