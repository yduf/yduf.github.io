---
published: true
title: Webcam
tags: webcam hardware video
---
- [Finding a low-latency webcam](https://makehardware.com/2016/03/29/finding-a-low-latency-webcam/)

## [Listing devices](https://askubuntu.com/questions/348838/how-to-check-available-webcams-from-the-command-line)
{% highlight bash %}
# list all video devices picked up by the kernel 
ls -ltrh /dev/video*

# or
v4l2-ctl --list-devices

# To list all devices attached to USB / PCI
lsusb / lspci
# or
hwinfo --usb

{% endhighlight %}

### Device Metadata / [video mode](https://superuser.com/questions/639738/how-can-i-list-the-available-video-modes-for-a-usb-webcam-in-linux)
{% highlight cpp %}
v4l2-ctl --device=/dev/video0 --all
v4l2-ctl --list-formats
v4l2-ctl --list-formats-ext
{% endhighlight %}

see also
- [Pi Cam]({% post_url 2021-10-03-pi-cam %})
- [Stream MJPG Video]({% post_url 2020-07-23-ustreamer %})
