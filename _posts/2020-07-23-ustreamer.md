---
published: true
title: Stream MJPG Video (µStreamer)
tags: video streaming raspberry-pi
---
> µStreamer is a lightweight and very quick server to broadcast MJPG video from any V4L2 device to the net. All new browsers have native support of this video format, as well as most video players such as mplayer, VLC etc. µStreamer is a part of the Pi-KVM project designed to stream VGA and HDMI screencast hardware data with the highest resolution and FPS possible. - [github](https://github.com/pikvm/ustreamer)

µStreamer is very similar to mjpg-streamer with input_uvc.so and output_http.so plugins, however, there are some major differences. **TL;DR**

If you're going to live-stream from your backyard webcam and need to control it, use mjpg-streamer. If you need a high-quality image with high FPS - µStreamer for the win.

see also:
- use octopring [Multi-cam Plugin](https://plugins.octoprint.org/plugins/multicam/) to connect µStreamer 
- [Raspberry Pi Hardware Accelerated RTSP Camera](https://codecalamity.com/raspberry-pi-hardware-accelerated-h264-webcam-security-camera/) - use hardware accelerated ffmpeg library h264_omx to encode the webcam stream.
