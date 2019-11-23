---
published: true
title: Video Streaming
tags: video streaming raspberry
---
# stream into H.264 format

## [User space Video4Linux (UV4L)](http://www.linux-projects.org/uv4l/)
> UV4L was originally conceived as a modular collection of Video4Linux2-compliant, cross-platform, user space drivers for real or virtual video input and output devices (with absolutely no external difference from kernel drivers).

- [Installation for ARM (Raspberry Pi)](http://www.linux-projects.org/uv4l/installation/)
	- [raspian buster not yet available](https://blog.domski.pl/uv4l-on-raspberry-pi-running-debian-buster/)
    	- installed uv4l from stretch
- [v4l2rtspserver](https://github.com/mpromonet/v4l2rtspserver)

### Raspidisp driver
- turn a given Raspberry Pi HDMI output source into a virtual Video4Linux-compliant device (such as a camera) that can capture the images coming from that source
- when used with the Streaming Server, it allows your Raspberry Pi to be mirrored and controlled from the browser (plugin-free). [demo](https://www.youtube.com/watch?v=wthS8TPk2DE&feature=youtu.be)

## [How to simultaneously stream 3 streams from a raspberry pi camera](https://community.octoprint.org/t/how-to-simultaneously-stream-3-streams-from-a-raspberry-pi-camera/11330)
