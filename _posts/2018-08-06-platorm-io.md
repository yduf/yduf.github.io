---
title: Platorm.io (IDE)
published: true
tags: arduino esp32 vscode ide serial
---
> Professional collaborative platform for embedded development - [platformio.org/](https://platformio.org/)

see also
- [PlatformIO drama](https://news.ycombinator.com/item?id=40648035) - PlatformIO built up a dominant position by supporting all these platforms and accepting community contributions to do so, then tried extracting value from the manufacturers directly after the fact, blocking further community PRs that would add new board revisions or fix bugs.

## Install
Install as VSCode extension

## Troubleshooting
- [How to set default baud rate of serial monitor](https://stackoverflow.com/questions/47240396/how-to-change-default-baud-rate-of-serial-monitor-in-vscode-with-platformio/48047676#48047676)

add the option monitor_baud = 115200 for your target in platformio.ini

- [permissions on serial port](https://askubuntu.com/questions/58119/changing-permissions-on-serial-port)

Permissions for /dev/ttyACM0 can be permanantly solved by adding yourself to the dialout group. 
{% highlight cpp %}
sudo usermod -a -G dialout $USER
{% endhighlight %}
