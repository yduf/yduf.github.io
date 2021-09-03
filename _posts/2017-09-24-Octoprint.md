---
title: Octoprint
published: true
tags: 3dprinter
---
>  Web interface for your 3D printer - [server](http://192.168.0.123/) / [Home](https://octoprint.org/)

{::nomarkdown}
<link rel="shortcut icon" href="https://octoprint.org/assets/img/tentacle-20x20.png" type="image/x-icon" />
{:/}

Run as [docker Image](https://github.com/OctoPrint/octoprint-docker)
- [ octoprint-docker/docker-compose.yml ](https://github.com/OctoPrint/octoprint-docker/blob/master/docker-compose.yml)
	- [Finding Serial port]({% post_url 2020-10-30-raspberry-pi %}#finding-serial-ports)
    	- [Cannot access mounted pts device inside container
#77](https://github.com/docker/for-linux/issues/77#issuecomment-456665543) - workaround is to expose them as volume (eg for Klipper )


## [Plugins](http://plugins.octoprint.org/help/installation/) 
- [Mark list](https://www.youtube.com/watch?v=Zq1sFBgxy8o)
	- Extra distance buttons
    - Fan speed control

### [Dashboard](https://plugins.octoprint.org/plugins/dashboard/)
- [DisplayLayerProgress](https://plugins.octoprint.org/plugins/DisplayLayerProgress/)
- [PrintTimeGenius](https://plugins.octoprint.org/plugins/PrintTimeGenius/)
- [PlotlyTempGraph](https://plugins.octoprint.org/plugins/plotlytempgraph/) - Display temperature data in a plotly js graph. 

- [BLTouch](https://plugins.octoprint.org/plugins/BLTouch/) - add BLTouch controls to the Control tab

### [OctoDash]({% post_url 2020-11-22-pi-dashboard %})
onboard touchs-screen UI.

### [Cura Thumbnails](https://plugins.octoprint.org/plugins/UltimakerFormatPackage/)
This plugin adds support for Ultimaker Format Package (.ufp) files. Ultimaker Format Package files are based on Open Packaging Conventions (OPC) and contain compressed gcode and a preview thumbnail. This format will automatically be used by the OctoPrint Connection plugin in Cura (install via Marketplace) if this plugin is installed.

### [Webcam tab](https://plugins.octoprint.org/plugins/webcamtab/)

- [Multi-cam Plugin](https://plugins.octoprint.org/plugins/multicam/) - [Chris's Basement](https://www.youtube.com/watch?v=FzpBgEG_ksw)

### [Octolapse (timelapse)](https://formerlurker.github.io/Octolapse/)
Multiple cam / satbilisation:
- [plugin](https://plugins.octoprint.org/plugins/octolapse/)
- [Mark Guide](https://www.youtube.com/watch?v=CjOIxKxb3h8)
- [other](https://www.youtube.com/watch?v=mXv3rw1-058)
- [Chris's Basement](https://www.youtube.com/watch?v=BhiJua0q2Cs)

Cam tuning
- [Why can't I change contrast, zoom, focus, etc?](https://github.com/FormerLurker/Octolapse/wiki/Troubleshooting#why-cant-i-change-contrast-zoom-focus-etc)

with DSLR camera
- [Timelapse Effect](https://www.youtube.com/watch?v=Is10iN43UjI)

### [Bed Vizualizer](https://plugins.octoprint.org/plugins/bedlevelvisualizer/)

Klipper g_code: BED_MESH_OUTPUT

### [Exclude Region](https://discourse.octoprint.org/t/exclude-region-plugin-is-one-of-the-best-ever/2742)

## Alternatives
- [Fluidd](https://docs.fluidd.xyz/) / [fluidd vs octoprint](https://duckduckgo.com/?q=fluidd+vs+octoprint&t=lm&ia=web)
