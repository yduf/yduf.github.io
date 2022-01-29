---
published: true
title: Stream MJPG Video (µStreamer)
tags: video streaming raspberry-pi webcam
---
> [µStreamer](https://github.com/pikvm/ustreamer) is a lightweight and very quick server to broadcast MJPG video from any V4L2 device to the net. All new browsers have native support of this video format, as well as most video players such as mplayer, VLC etc. µStreamer is a part of the Pi-KVM project designed to stream VGA and HDMI screencast hardware data with the highest resolution and FPS possible.

µStreamer is very similar to mjpg-streamer with input_uvc.so and output_http.so plugins, however, there are some major differences. **TL;DR**

If you're going to live-stream from your backyard webcam and need to control it, use mjpg-streamer. If you need a high-quality image with high FPS - µStreamer for the win.

{% highlight bash %}
./ustreamer --device=/dev/video0 --host=0.0.0.0 --port=8080 --encoder=omx --workers=3
{% endhighlight %}


see also:
- use octoprint [Multi-cam Plugin](https://plugins.octoprint.org/plugins/multicam/) to connect µStreamer 
- [Raspberry Pi Hardware Accelerated RTSP Camera](https://codecalamity.com/raspberry-pi-hardware-accelerated-h264-webcam-security-camera/) - use hardware accelerated ffmpeg library h264_omx to encode the webcam stream.

### [SystemD service]({% post_url 2019-05-30-systemd %}#service)
{% highlight ini %}
[Unit]
Description=ustreamer video (running in port 8080)
 
[Service]
Type=simple
ExecStart=/home/pi/app-src/ustreamer/ustreamer --device=/dev/video0 --host=0.0.0.0 --port=8080 --encoder=omx --workers=3
Restart=always

[Install]
WantedBy=multi-user.target
{% endhighlight %}
