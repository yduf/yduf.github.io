---
published: true
title: Bluetooth
tags: bluetooth
---
> [bluetoothctl](https://www.makeuseof.com/manage-bluetooth-linux-with-bluetoothctl/) is a [command line tool](https://www.linux-magazine.com/Issues/2017/197/Command-Line-bluetoothctl)  which is [shipped with BlueZ](https://github.com/bluez/bluez/search?q=bluetoothctl) – Bluetooth protocol stack for Linux.

**Scanning for Nearby Devices**
{% highlight bash %}
$ bluetoothctl scan on
{% endhighlight %}

## Troubleshooting

{% highlight bash %}
$ sudo systemctl status bluetooth # check service
$ dmesg | grep -i blue    # check module
$ hciconfig -a            # hardware details
{% endhighlight %}

Function implemented by Bluez can be tested through the interactive client `bluetoothctl`
 which serve as reference implementation.

{% highlight bash %}
$ bluetoothctl     # interactive mode
[bluetooth]# menu scan
[bluetooth]# clear
[bluetooth]# transport le
[bluetooth]# duplicate-data on
[bluetooth]# back
[bluetooth]# scan on
{% endhighlight %}

### [DebuggingBluetooth](https://wiki.ubuntu.com/DebuggingBluetooth)

**bluetoothd** - This is the Bluetooth daemon (i.e. the stack). It provides the core operations (search for devices, pair, etc.) and Bluetooth profiles such as A2DP (music streaming), HID (human interface devices), etc. and exposes a DBus API for the applications to talk to it.

bluetoothctl is only communicating with bluetoothd through DBUS.

see [DebuggingDBus](https://wiki.ubuntu.com/DebuggingDBus) - `sudo dbus-monitor --system`

## [linux Bluetooth **BlueZ**](https://github.com/bluez/bluez)

- [Bluetooth programming in C with BlueZ](http://people.csail.mit.edu/albert/bluez-intro/c404.html)
- [Bluez Programming](https://stackoverflow.com/questions/29767053/bluez-programming) - check [`client/main.c`](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/clientmenu ), the source code for the bluetoothctl tool.

{% highlight bash %}
sudo apt-get install bluetooth bluez libbluetooth-dev
{% endhighlight %}


see also
- [BlueZ](http://www.bluez.org/) - Official Linux Bluetooth protocol stack