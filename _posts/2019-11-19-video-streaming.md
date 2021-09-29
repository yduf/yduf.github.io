---
published: true
title: Video Streaming
tags: video streaming raspberry-pi
---
## [ Stream  MJPG video (µStreamer)]({% post_url 2020-07-23-ustreamer %})

# stream into H.264 format

## [User space Video4Linux (UV4L)](http://www.linux-projects.org/uv4l/)
> UV4L was originally conceived as a modular collection of Video4Linux2-compliant, cross-platform, user space drivers for real or virtual video input and output devices (with absolutely no external difference from kernel drivers).

- [Installation for ARM (Raspberry Pi)](http://www.linux-projects.org/uv4l/installation/)
    - installed uv4l using stretch version => raspicam works
	- [raspian buster not yet available](https://blog.domski.pl/uv4l-on-raspberry-pi-running-debian-buster/)
- [v4l2rtspserver](https://github.com/mpromonet/v4l2rtspserver)

### [uv4l-core](https://www.linux-projects.org/documentation/uv4l-core/)

### uv4l-raspicam (driver)
**uv4l_raspicam.service**

{% highlight bash %}
/usr/bin/uv4l -f -k --sched-fifo --mem-lock --config-file=/etc/uv4l/uv4l-raspicam.conf --driver raspicam --driver-config-file=/etc/uv4l/uv4l-raspicam.conf
{% endhighlight %}

### [uv4l-uvc (driver)](https://www.linux-projects.org/documentation/uv4l-uvc/)
Userspace Video4Linux driver module for devices based on the USB VIdeo Class specifications

{% highlight bash %}
lsusb
Bus 001 Device 004: ID 1908:2310 GEMBIRD 
{% endhighlight %}


### Raspidisp driver
- turn a given Raspberry Pi HDMI output source into a virtual Video4Linux-compliant device (such as a camera) that can capture the images coming from that source
- when used with the Streaming Server, it allows your Raspberry Pi to be mirrored and controlled from the browser (plugin-free). [demo](https://www.youtube.com/watch?v=wthS8TPk2DE&feature=youtu.be)

## [uv4l-server](https://www.linux-projects.org/documentation/uv4l-server/)
To run the ‘raspicam’ driver with the streaming server enabled
on port 9000 and a password for the admin user (in one line):

{% highlight bash %}
uv4l --auto-video_nr --driver raspicam --encoding mjpeg --server-option '--port=9000' --server-option '--admin-password=myp4ssw0rd!'
{% endhighlight %}

## [How to simultaneously stream 3 streams from a raspberry pi camera](https://community.octoprint.org/t/how-to-simultaneously-stream-3-streams-from-a-raspberry-pi-camera/11330)

## [How to live stream to YouTube](https://linuxforever.info/2017/05/06/how-to-live-stream-to-youtube-from-linux-mint-ubuntu/)

- require ffmpeg
- [stream_to_youtube.sh](https://gist.github.com/olasd/9841772)
- youtube config for getting the key.
