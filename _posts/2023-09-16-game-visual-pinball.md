---
published: true
title: Visual Pinball (VPinballX)
tags: pincab table games
---
> This project was started by Randy Davis, open sourced in 2010 and continued by the Visual Pinball development team. - [github](https://github.com/vpinball/vpinball) / [wikipedia](https://en.wikipedia.org/wiki/Visual_Pinball) / [doc](https://github.com/vpinball/vpinball/tree/master/docs) / [r/virtualpinball/](https://www.reddit.com/r/virtualpinball/)

[![caption](https://www.flylanddesigns.com/wp-content/uploads/Shop-Thumbnail-Pinball-845x321.jpg)](https://www.flylanddesigns.com/)

### [doc](https://github.com/vpinball/vpinball/tree/master/docs)
- [Visual Pinball Installation Guide ](https://www.vpforums.org/index.php?app=tutorials&article=1)
- [Live Editor](https://github.com/vpinball/vpinball/blob/master/docs/LiveUI.md)
- [View Setup](https://github.com/vpinball/vpinball/blob/master/docs/View%20Setup.md)	
	- [Window projection](https://github.com/vpinball/vpinball/blob/master/docs/View%20Setup.md) - for cabinet emulation
- [Visual Pinball Support](https://vpuniverse.com/forums/forum/17-visual-pinball-support/)

[**Keyboard Layout**]() - the default keys are
1 - start a new game / or when in live menu save pov change
2 - buy extra ball (if applicable)  
3,4,5,6 - add credit for given player  
lshift, rshift - left & right flipper button  
Enter - pull & release trigger  
Esc - pause game & show menu  


### see also
- [Visual Pinball X with BAM head tracking](https://www.youtube.com/watch?v=g-EpTp_3wKo)
	- [ 3D Virtual Pinball with Kinect 2 head tracking+Future Pinball/Bam Test ](https://www.youtube.com/watch?v=64e7TQ5uj8g)
	- [Original Kinect for head tracking?](https://www.reddit.com/r/virtualpinball/comments/gfxhiz/original_kinect_for_head_tracking/)


## [Native linux](https://github.com/vpinball/vpinball/tree/standalone/standalone)

[Standalone](https://github.com/vpinball/vpinball/blob/master/docs/Build%20Differences.md), is the player ported to other system. But it does not include the editor.
Only the [Live Editor](#live-editor) is available (if you press esc).

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
Display = 2     ; 0 primary, otherwise use Id (same as displayed by indentify command
Fullscreen = 0  ; 0/1 disable/enable

[Standalone]
WebServer = 1   ; enable webserver UI: default addr is 0.0.0.0:2112 - allow edit of ini+misc

{% endhighlight %}

## [Live Editor](https://github.com/vpinball/vpinball/blob/master/docs/LiveUI.md)

Can give access to ([demo](https://www.youtube.com/watch?v=KOo2rJOE_BI&t=272s))

### [View Setup](https://github.com/vpinball/vpinball/blob/master/docs/View%20Setup.md#view-setup)

It allow to switch Camera Mode from Camera (perpective) to Window (dedicated to cabinet).
Here the control are mean for cabinet adjustement and so use games key
- lctrl / rctl to choose menu entry
- lshift / rshift to change value
- return to validate

### [POV](https://www.vpforums.org/index.php?showtopic=47919)

**POV files** go in the table folder and need to have same exact name as the associated table file

Do not import the POV to the table, that is the entire point of having a POV, you can change the view with no actual changes made to the table itself.

To edit/create .pov file:
{% highlight bash %}
./build/VPinballX_GL -play ./res/exampleTable.vpx -povedit
{% endhighlight %}

Edit setting with [pinball controls](#doc), then press `1` to save and exit.

[**Autopov**](https://www.reddit.com/r/virtualpinball/comments/goo5v8/folder_for_the_pov_file/) - 
Export a POV that you like with the file name “Autopov.POV” and save it to your Tables folder. If you load a table that doesn’t have its own unique external POV file (with the same filename for POV as the VPX), it will use this Autopov file instead.
	- [pov switching](https://www.vpforums.org/index.php?showtopic=44812)
    - [How do you set up VPX for vertically oriented screen in OS (portrait) Or can you?](https://www.vpforums.org/index.php?showtopic=45119&page=1)

see also
- [How to change Virtual Pinball POV Views on each table - things to look for](https://www.youtube.com/watch?v=e2vQWhqGHcs)
- [POV on Vpin: our optimal settings](https://pinballmag.fr/en/pov-on-vpin-our-optimal-settings/)

### [VPinMAME]({% post_url 2023-09-24-pincab-vpinmame %})

If you want to play a PinMAME-enabled game, then you need to have the roms in the [proper place](https://github.com/vpinball/vpinball/blob/standalone/standalone/README.md#paths), see  [VPinMAME]({% post_url 2023-09-24-pincab-vpinmame %}). The pinmame emulator is included in the Standalone version.

To test VPinballX, first start with a recreation or original that doesn't need roms. For eg: res/exampleTable.vpx

### [B2S (Backglass server) ?]({% post_url 2023-09-24-pincab-b2bs %})

The B2S code is started to be intagrated in the Standalone build. But need to be enabled ( New feature appeared 09/2023), and have a non null window.

{% highlight ini %}
[Standalone]
B2S = 1
B2SBackglassX = 
B2SBackglassY = 
B2SBackglassWidth = 1000
B2SBackglassHeight = 1000
{% endhighlight %}

To work the B2s file and the table must have the same name: eg `table.vpx` and `table.directb2s` (necessary in the same folder ?).

see also
- MacOS, Linux, and Android builds support [ZeDMD](https://www.pincabpassion.net/t14796-zedmd-installation-english) displays.
- [Visual Pinball X on Linux](https://davidhouchin.com/posts/vpx-linux/)

### Physics
- [slow the ball ?](https://www.reddit.com/r/virtualpinball/comments/zjie45/vpinballx_slow_the_ball_down_on_some_tables/)

### [Pup Pack](https://chat.openai.com/c/a298701b-2209-4201-a4c8-9a0dd2881c1a)

"PupPack" est un terme utilisé dans le monde du virtual pinball pour désigner un type de package spécifique pour les tables de vpinball, qui sont des simulations de flippers sur ordinateur. Le terme "PupPack" est dérivé de "PinUP Player Pack" ou "PUP Pack".

Un PupPack est un ensemble de médias et d'effets visuels qui sont intégrés dans une table de vpinball. Ces packs comprennent généralement des vidéos, des images, des animations et des effets sonores qui sont synchronisés avec le gameplay de la table. Ces éléments visuels et sonores peuvent ajouter une nouvelle dimension à l'expérience de jeu en créant des cinématiques, des effets de lumière et des animations spéciales qui se déclenchent pendant le jeu.

### [Tables](https://archive.org/download/Visual_Pinball_2020-06-20/Visual%20Pinball%20%5BVPXx%5D%20Original%20Tables/)
- [AC/DC  Lucy](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3993) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=193)
	- [ACDC LUCI (Stern 2013) VPW Mod ](https://vpuniverse.com/files/file/12471-acdc-luci-stern-2013-vpw-mod/)
- [Arabian Night](https://youtu.be/u1y8MQQZZEE?feature=shared&t=2952) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=167) / [3](https://www.youtube.com/watch?v=pWyzwSjGecc)
	- [VPUniverse (4k)](https://vpuniverse.com/files/file/12652-tales-of-the-arabian-nights-4k-williams-1996/)
	- [Tales Of The Arabian Nights pin2dmd colorization v 2.0  ](https://vpuniverse.com/files/file/5532-tales-of-the-arabian-nights/)
- [Cactus canyon](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3270) / [2](https://youtu.be/giFi-qBU1F0?feature=shared&t=131)
- [Elvis 4.0.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=12983) / [roms](https://www.vpforums.org/index.php?app=downloads&module=display&section=categoryletters&cat=9&sort_order=ASC&sort_key=file_name&letter=E&num=10&st=40)
- [The Flintstones V1.25.8 ](https://www.vpforums.org/index.php?app=downloads&showfile=14473)  / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1286)
- ★★★★☆ [JP's Friday the 13th 4.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=16344)
- [Ghost Buster](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4206)
	- [JP's Ghostbusters Slimer 5.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=12488)
- [Gorgar](https://www.vpforums.org/index.php?app=downloads&showfile=8964)
	- [Gorgar (Williams 1979)_Bigus(MOD) 1.1](https://www.vpforums.org/index.php?app=downloads&showfile=16050) - [roms](https://www.vpforums.org/index.php?app=downloads&showfile=783)
- ★★★☆☆ [JAWS Balutito MOD ](https://www.youtube.com/watch?v=7QvoDWaeq44)
	- [JAWS Balutito MOD ](https://vpuniverse.com/files/file/10976-jaws-balutito-mod)
- [Scared Stuff](https://youtu.be/FUEuoelOSK4?feature=shared&t=409)
- [Tales from the crypt](https://youtu.be/giFi-qBU1F0?feature=shared&t=222)
- [Monster Bash](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3309)
- [The Simpsons](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3488) / [2](https://www.youtube.com/watch?v=IjZ0MaY3JMU)
- [Medieval Madness](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3107)
	- [Medieval Madness (Williams 1997)_Bigus(MOD) 2.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=15354) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1347) - script error
	- [Medieval Madness Tom Tower 3.0b final (dozer 1.7) 3.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=11742)
- [Megaman](https://vpuniverse.com/files/file/14877-megaman-original-2023/)
- [Metallica](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4052) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=133)
	- [Metallica Premium Monsters (Stern 2013) VPW Mod ](https://vpuniverse.com/files/file/6058-metallica-premium-monsters-stern-2013-vpw-mod/) / [roms](https://archive.org/details/mtl-180) / [PupPack](https://vpuniverse.com/files/file/6142-metallica-master-of-puppets-table-and-pup-pack-20/?tab=comments) / [stern roms](https://sternpinball.com/support/game-code/) - [roms renaming](https://www.vpforums.org/index.php?showtopic=43535) : MTL180LE.BIN  --> mtl180h.bin then zip it to  mtl_180h.zip
- [Munsters (Original 2020) 1.05.vpx](https://vpuniverse.com/files/file/10068-munsters-original-2020-105vpx/)
- [Walking dead](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4144)
- [Spider Man VE](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4237)
- [Vortex](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378)
- [Sorcerer](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378)
- [Houdini](https://youtu.be/O-jZJ9Cq-74?feature=shared&t=780)
- [circus Voltaire](https://vpuniverse.com/files/file/15989-cirqus-voltaire-bally-1997-vpw-mod/)
	- [Cirqus Voltaire Hanibals 4k Mod 3.6 ](https://www.vpforums.org/index.php?app=downloads&showfile=11841)
- [Master of the universe)](https://www.vpforums.org/index.php?showtopic=41193#entry485161)
	- ["Masters of the Universe (VPX) - PuP-Pack](https://www.youtube.com/watch?v=L7-L2aJjjrM)
- [Elvira House of horrors](https://vpuniverse.com/files/file/12296-elviras-party-house-of-horror/) / [2](https://www.youtube.com/watch?v=1eeBfJJXGwg)

see also
- [VPForum](https://www.vpforums.org/index.php?) - to download tables
	- [VPX Table Tutorials](https://vpinhub.com/vpxtables)
    - [Alphabetical Listing of VPM tables w/Links to Tutorials 1.7.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=5221)
- [VPUniverse](https://vpuniverse.com/files/) - some high def table
- [virtual-pinball-spreadsheet](https://virtual-pinball-spreadsheet.web.app/) - nice updated list of tables
- [Awesome Visual Pinball Recreations 2023 for your Virtual Pinball](https://www.youtube.com/watch?v=mM1GMs3ceLs)
- [Lutris](https://lutris.net/games/visual-pinball-x/) - should be possible to run Windows version through wine.
- [orbitalpin](https://docs.orbitalpin.com/) - a framework to make table in VpinballX
