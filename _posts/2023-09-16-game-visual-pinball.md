---
published: true
title: Visual Pinball (VPinballX)
tags: pincab table games
---
> This project was started by Randy Davis, open sourced in 2010 and continued by the Visual Pinball development team. - [github](https://github.com/vpinball/vpinball) / [wikipedia](https://en.wikipedia.org/wiki/Visual_Pinball) / [doc](https://github.com/vpinball/vpinball/tree/master/docs)

[![caption](https://www.flylanddesigns.com/wp-content/uploads/Shop-Thumbnail-Pinball-845x321.jpg)](https://www.flylanddesigns.com/)

### [doc](https://github.com/vpinball/vpinball/tree/master/docs)
- [Visual Pinball Installation Guide ](https://www.vpforums.org/index.php?app=tutorials&article=1)
- [Live Editor](https://github.com/vpinball/vpinball/blob/master/docs/LiveUI.md)
- [View Setup](https://github.com/vpinball/vpinball/blob/master/docs/View%20Setup.md)	
	- [Window projection](https://github.com/vpinball/vpinball/blob/master/docs/View%20Setup.md) - for cabinet emulation

### see also
- [Visual Pinball X with BAM head tracking](https://www.youtube.com/watch?v=g-EpTp_3wKo)
	- [ 3D Virtual Pinball with Kinect 2 head tracking+Future Pinball/Bam Test ](https://www.youtube.com/watch?v=64e7TQ5uj8g)
	- [Original Kinect for head tracking?](https://www.reddit.com/r/virtualpinball/comments/gfxhiz/original_kinect_for_head_tracking/)


## [Native linux](https://github.com/vpinball/vpinball/tree/standalone/standalone)

[Standalone](https://github.com/vpinball/vpinball/blob/master/docs/Build%20Differences.md), is the player ported to other system. But it does not include the editor.
Only the [Live Editor](https://github.com/vpinball/vpinball/blob/master/docs/LiveUI.md) is available (if you press esc).

see also
- [VisualPinball.Engine ](https://github.com/freezy/VisualPinball.Engine) / [VPE Creator's guide](https://docs.visualpinball.org/creators-guide/introduction/overview.html) - a toolkit with the goal of making it easy to create pinball machines digitally. It uses Unity's High Definition Render Pipeline and comes with extensive editor tooling that aims to provide all the features needed for such a task. VPE can read Visual Pinball's file format and uses Visual Pinball's physics code for the simulation during gameplay.
- [VPinballX (Standalone) Code]({% post_url 2023-09-27-vpinballx-code %})

### [Configuration](https://forums.gameex.com/forums/topic/28932-guide-usingsetup-visual-pinball-108-with-different-settings/)

In previous versions all settings where set in the registry and using for example another system needs a launch script to change the value in the registry. Now all the settings are stored in an INI file.

You can copy & customize the one located in `~/.vpinball/VPinballX.ini`

{% highlight ini %}
; # Player settings
[Player]

; Video options
Display = 2	    ; 0 primary, otherwise use Id (same as displayed by indentify command
Fullscreen = 0	; 0/1 disable/enable

[Standalone]
WebServer = 1   ; enable webserver UI: default addr is 0.0.0.0:2112 - allow edit of ini+misc

{% endhighlight %}

### [VPinMAME]({% post_url 2023-09-24-pincab-vpinmame %})

If you want to play a PinMAME-enabled game, then you need to have the roms in the [proper place](https://github.com/vpinball/vpinball/blob/standalone/standalone/README.md#paths), see  [VPinMAME]({% post_url 2023-09-24-pincab-vpinmame %}). The pinmame emulator is included in the Standalone version.

To test VPinballX, first start with a recreation or original that doesn't need roms. For eg: res/exampleTable.vpx

### [B2S.Server ?]({% post_url 2023-09-24-pincab-b2bs %})

The B2S code seems to be integrated into Standalone build. But How to enable it ?

see also
- MacOS, Linux, and Android builds support [ZeDMD](https://www.pincabpassion.net/t14796-zedmd-installation-english) displays.
- [Visual Pinball X on Linux](https://davidhouchin.com/posts/vpx-linux/)

### [Tables](https://archive.org/download/Visual_Pinball_2020-06-20/Visual%20Pinball%20%5BVPXx%5D%20Original%20Tables/)
- [Arabian Night](https://youtu.be/u1y8MQQZZEE?feature=shared&t=2952)
	- [VPUniverse (4k)](https://vpuniverse.com/files/file/12652-tales-of-the-arabian-nights-4k-williams-1996/)
	- [Tales Of The Arabian Nights pin2dmd colorization v 2.0  ](https://vpuniverse.com/files/file/5532-tales-of-the-arabian-nights/)
- [Medieval Madness](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3107)
- [Cactus canyon](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3270)
- [Monster Bash](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3309)
- [The Simpsons](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3488)
- [AC/DC](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3993)
- [Metallica](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4052)
- [Walking dead](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4144)
- [Ghost Buster](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4206)
- [Spider Man VE](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4237)
- [Vortex](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378)
- [Sorcerer](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378)
- [Houdini](https://youtu.be/O-jZJ9Cq-74?feature=shared&t=780)

see also
- [VPForum](https://www.vpforums.org/index.php?) - to download tables
- [VPUniverse](https://vpuniverse.com/vpe/) - some high def table

- [Awesome Visual Pinball Recreations 2023 for your Virtual Pinball](https://www.youtube.com/watch?v=mM1GMs3ceLs)
- [Lutris](https://lutris.net/games/visual-pinball-x/) - should be possible to run Windows version through wine.
