---
published: true
title: Visual Pinball (VPinballX)
tags: pincab table games
---
> This project was started by Randy Davis, open sourced in 2010 and continued by the Visual Pinball development team. - [github](https://github.com/vpinball/vpinball) / [wikipedia](https://en.wikipedia.org/wiki/Visual_Pinball) / [doc](https://github.com/vpinball/vpinball/tree/master/docs) / [r/virtualpinball/](https://www.reddit.com/r/virtualpinball/) / [discord](https://discord.com/channels/652274650524418078/1076655472846831667)

[![caption](https://www.flylanddesigns.com/wp-content/uploads/Shop-Thumbnail-Pinball-845x321.jpg)](https://www.flylanddesigns.com/)

- [vpxtools](https://github.com/francisdb/vpxtool) - Cross-platform console based utility for the vpinball ecosystem
- [pinball-parts](https://github.com/vbousquet/pinball-parts) - Blender Pinball Parts library

### [Fixing & patching](https://github.com/vpinball/vpinball/tree/standalone/standalone#workarounds)

DMD & vbs script may need fixing to run on standalone or multiscreen.

VPX Standalone support a _path_ mechanism that allows to override table script with external definition. A number of fixes for major tables are already avalaible:
- [jsm174/vpx-standalone-scripts](https://github.com/jsm174/vpx-standalone-scripts/tree/master/Judge%20Dredd%20(Bally%201993)%20VPW%20v1.1)
- [sverrewl/vpxtable_scripts](https://github.com/sverrewl/vpxtable_scripts)

The mechanism is the following.
- if a _.vbs_ file exist alongside the corresponding table name, it will be loaded.
- if a Script folder exist nearby the executable, it will be looked up also for a .vbs file with the name of the table.


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
- [Ghostbusters VPX emulation](https://www.patreon.com/posts/update-february-17686171)

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

see also
- [FlexDMD](https://github.com/vbousquet/flexdmd) - a DMD renderer extension for Visual Pinball 

### [B2S (Backglass server)]({% post_url 2023-09-24-pincab-b2bs %})

The B2S code is integrated in the Standalone build, but still in implementation phase. It need to be enabled ( New feature appeared 09/2023), and have a non null window.

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
- [Backglass Software Setup](http://mjrnet.org/pinscape/BuildGuideV2/BuildGuide.php?sid=b2s) - mention 2-screen and 3-screen versions
	- [how to install VPX, part 2: Backglasses](https://cohost.org/arborelia/post/770765-how-to-install-vpx)
- MacOS, Linux, and Android builds support [ZeDMD](https://www.pincabpassion.net/t14796-zedmd-installation-english) displays.
- [Visual Pinball X on Linux](https://davidhouchin.com/posts/vpx-linux/)

### Physics
- [slow the ball ?](https://www.reddit.com/r/virtualpinball/comments/zjie45/vpinballx_slow_the_ball_down_on_some_tables/)

### [Pup Pack](https://chat.openai.com/c/a298701b-2209-4201-a4c8-9a0dd2881c1a)

"PupPack" est un terme utilisé dans le monde du virtual pinball pour désigner un type de package spécifique pour les tables de vpinball, qui sont des simulations de flippers sur ordinateur. Le terme "PupPack" est dérivé de "PinUP Player Pack" ou "PUP Pack".

Un PupPack est un ensemble de médias et d'effets visuels qui sont intégrés dans une table de vpinball. Ces packs comprennent généralement des vidéos, des images, des animations et des effets sonores qui sont synchronisés avec le gameplay de la table. Ces éléments visuels et sonores peuvent ajouter une nouvelle dimension à l'expérience de jeu en créant des cinématiques, des effets de lumière et des animations spéciales qui se déclenchent pendant le jeu.

### [Tables](https://archive.org/download/Visual_Pinball_2020-06-20/Visual%20Pinball%20%5BVPXx%5D%20Original%20Tables/)
- ★★★☆☆ [AC/DC](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3993) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=193)
	- [AC/DC](https://vpuniverse.com/files/file/5489-acdc/)
	- [ACDC LUCI (Stern 2013) VPW Mod ](https://vpuniverse.com/files/file/12471-acdc-luci-stern-2013-vpw-mod/) / [roms](https://sternpinball.com/support/game-code/) - Zip it up and name it  -- acd_170h.zip
	- ★★★☆☆ [AC/DC (LUCI Premium) 1.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=12897) / [b2s](https://vpuniverse.com/files/file/8663-ac-dc-luci-stern-2012-video-backglass-nude-mod-kit/)
- ★★★★☆ [Arabian Night](https://youtu.be/u1y8MQQZZEE?feature=shared&t=2952) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=167) / [3](https://www.youtube.com/watch?v=pWyzwSjGecc)
	- ★★★★☆ [Tales of the Arabian Nights 5.0.0 (JP's)](https://www.vpforums.org/index.php?app=downloads&showfile=11611)
	- [VPUniverse (4k)](https://vpuniverse.com/files/file/12652-tales-of-the-arabian-nights-4k-williams-1996/)
	- [Tales Of The Arabian Nights pin2dmd colorization v 2.0  ](https://vpuniverse.com/files/file/5532-tales-of-the-arabian-nights/)
- ★★★★☆ [Attack from Mars 5.0.0 (JP's)](https://www.vpforums.org/index.php?app=downloads&showfile=11603) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1340) / [b2s](https://www.vpforums.org/index.php?app=downloads&showfile=7454)
- ★★★☆☆ [Cactus canyon](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3270) / [2](https://youtu.be/giFi-qBU1F0?feature=shared&t=131)
	- [Cactus Canyon (Bally 1998)_Bigus(MOD) 1.0](https://www.vpforums.org/index.php?app=downloads&showfile=15897) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1257) / [b2s](https://vpuniverse.com/files/file/4191-cactus-canyon-continued-bally-1998/)
	- [Cactus Canyon (& Continued) (Bally 1998) VPW Mod](https://vpuniverse.com/files/file/6267-cactus-canyon-continued-bally-1998-vpw-mod/)
- [Check Mate (Taito do Brasil - 1977) 4.3.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=14074)
- [Cuphead Pro Pinball VPX](https://www.youtube.com/watch?v=ku_Pp4RAegg)
	- [Cuphead Pro, PuP Perdition Edition (D. Goblett & Co 2020)](https://vpuniverse.com/files/file/15901-cuphead-pro-pup-perdition-edition-d-goblett-co-2020/)
- ★★★★☆ [JP's Deadpool 5.1.2 ](https://www.vpforums.org/index.php?app=downloads&showfile=15967)
- [Elvira House of horrors](https://vpuniverse.com/files/file/12296-elviras-party-house-of-horror/) / [2](https://www.youtube.com/watch?v=1eeBfJJXGwg)
- [Elvira and the Party Monsters (Bally 1989)_Bigus(MOD) 2.1](https://www.vpforums.org/index.php?app=downloads&showfile=16086) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=959)
- ★★★☆☆ [Elvis 4.0.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=12983) / [roms](https://www.vpforums.org/index.php?app=downloads&module=display&section=categoryletters&cat=9&sort_order=ASC&sort_key=file_name&letter=E&num=10&st=40) / [b2s](https://vpuniverse.com/files/file/13971-elvis-stern-2004-b2s-with-full-dmd/)
- [Escape from monkey island 1.1](https://www.vpforums.org/index.php?app=downloads&showfile=16157)
- ★★★★☆ [Flashman (Sportmatic 1984) 4.0.2](https://www.vpforums.org/index.php?app=downloads&showfile=16517)
- [Flash Gordon (Bally 1981) Sound Mod v2.1 VPX7.2](https://www.vpforums.org/index.php?app=downloads&showfile=13111) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=668)
- [Flash, The (Original 2018) 1.0](https://www.vpforums.org/index.php?app=downloads&showfile=13687) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=758)
- [The Flintstones (Williams 1994) 1.2.6 - Pinball VPX](https://www.youtube.com/watch?v=SWgLiSW9koQ)
	- [The Flintstones V1.25.8 ](https://www.vpforums.org/index.php?app=downloads&showfile=14473)  / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1286)
- ★★★★★ [JP'd pinball tables](https://www.vpforums.org/index.php?app=core&module=search&do=user_activity&sid=40128d9b02d204ff0a868b9c159c7f81&mid=277&search_app=downloads&userMode=all&search_app_filters%5Bdownloads%5D%5BsearchInKey%5D=files&search_app_filters%5Bdownloads%5D%5Bfiles%5D%5BsortKey%5D=update&search_app_filters%5Bdownloads%5D%5Bfiles%5D%5BsortDir%5D=)
- ★★★★★ [JP's Friday the 13th 4.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=16344)
- ★★★★☆ [Ghost Buster](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4206) / [2](https://www.youtube.com/watch?v=rRKON3i66I4)
	-★★★★☆  [JP's Ghostbusters Slimer 5.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=12488) / [B2S](https://www.vpforums.org/index.php?app=downloads&showfile=12899) / [DMD](https://vpuniverse.com/files/file/6549-ghost-buster-fulldmd-add-on/)
- [Gorgar](https://www.vpforums.org/index.php?app=downloads&showfile=8964) / [B2S (2)](https://vpuniverse.com/files/file/5087-ghostbusters-le-stern-2016-b2s/)
	- [Gorgar (Williams 1979)_Bigus(MOD) 1.1](https://www.vpforums.org/index.php?app=downloads&showfile=16050) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=783) / [Gorgar [b2s] 1.2](https://www.vpforums.org/index.php?app=downloads&showfile=9935)
- [Houdini](https://youtu.be/O-jZJ9Cq-74?feature=shared&t=780)
- ★★★★☆ [JP's IT - Pinball Madness 1.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=16880)
- ★★★☆☆ [JAWS Balutito MOD ](https://www.youtube.com/watch?v=7QvoDWaeq44)
	- [JAWS Balutito MOD ](https://vpuniverse.com/files/file/10976-jaws-balutito-mod)
- [Mägo de Oz - the pinball 4.0.1 ](https://www.vpforums.org/index.php?app=downloads&showfile=15598)
- [Master of the universe)](https://www.vpforums.org/index.php?showtopic=41193#entry485161)
	- ["Masters of the Universe (VPX) - PuP-Pack](https://www.youtube.com/watch?v=L7-L2aJjjrM)

- [Medieval Madness](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3107)
	- [Medieval Madness (Williams 1997)_Bigus(MOD) 2.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=15354) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1347) - script error
	- [Medieval Madness Tom Tower 3.0b final (dozer 1.7) 3.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=11742)
- [Megaman](https://vpuniverse.com/files/file/14877-megaman-original-2023/)
- [Metallica](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4052) / [2](https://youtu.be/FUEuoelOSK4?feature=shared&t=133)
	- [Metallica Premium Monsters (Stern 2013) VPW Mod ](https://vpuniverse.com/files/file/6058-metallica-premium-monsters-stern-2013-vpw-mod/) / [roms](https://archive.org/details/mtl-180) / [PupPack](https://vpuniverse.com/files/file/6142-metallica-master-of-puppets-table-and-pup-pack-20/?tab=comments) / [stern roms](https://sternpinball.com/support/game-code/) - [roms renaming](https://www.vpforums.org/index.php?showtopic=43535) : MTL180LE.BIN  --> mtl180h.bin then zip it to  mtl_180h.zip
- [Monster Bash](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3309)
- [Munsters (Original 2020) 1.05.vpx](https://vpuniverse.com/files/file/10068-munsters-original-2020-105vpx/)
- [The Simpsons](https://youtu.be/u1y8MQQZZEE?feature=shared&t=3488) / [2](https://www.youtube.com/watch?v=IjZ0MaY3JMU)
- [Rollercoaster Tycoon (Stern 2002) 4.0.1 ](https://www.vpforums.org/index.php?app=downloads&showfile=13920) / [ROMS](https://www.vpforums.org/index.php?app=downloads&showfile=1125)
- Scared Stiff (Bally 1996)
	- [Scared Stiff (Bally 1996) 1.31](https://www.vpforums.org/index.php?app=downloads&showfile=12432) / [roms](https://www.vpforums.org/index.php?app=downloads&showfile=1207)
- [Scared Stuff](https://youtu.be/FUEuoelOSK4?feature=shared&t=409)
- [Scooby Doo, 2022 v1.0.1](https://www.vpforums.org/index.php?app=downloads&showfile=16631)
- ★★★☆☆ [Space Patrol (Taito do Brasil - 1978) 4.3.0 (JP's)](https://www.vpforums.org/index.php?app=downloads&showfile=14173)
- [Spider Man VE](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4237)
- [Sorcerer](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378)
- [Tales from the crypt](https://youtu.be/giFi-qBU1F0?feature=shared&t=222) / [2](https://www.youtube.com/watch?v=SPKYllm-0rs)
vpx - [Tom & Jerry (Williams 2018) (DOF) 1.2](https://www.vpforums.org/index.php?app=downloads&showfile=14023) / [roms](https://vpuniverse.com/files/file/5467-tom-jerry/)
- [circus Voltaire](https://vpuniverse.com/files/file/15989-cirqus-voltaire-bally-1997-vpw-mod/)
	- [Cirqus Voltaire Hanibals 4k Mod 3.6 ](https://www.vpforums.org/index.php?app=downloads&showfile=11841)

- [Vortex](https://youtu.be/u1y8MQQZZEE?feature=shared&t=378) 
	- [Vortex (Taito do Brasil - 1981) 4.0.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=13336) / [rom](https://www.vpforums.org/index.php?app=downloads&showfile=567)
- [JP's The Walking Dead (Stern 2014) 4.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=15696) / [rom (stern)](https://sternpinball.com/support/game-code/)
- [Walking dead](https://youtu.be/u1y8MQQZZEE?feature=shared&t=4144)
- ★★★☆☆ [JP's Wrath of Olympus 4.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=16457)
	- [Wrath of Olympus VP912 FS 1.0.0](https://www.vpforums.org/index.php?app=downloads&showfile=6855)

### see also
- [VPForum](https://www.vpforums.org/index.php?) - to download tables
	- [VPX Table Tutorials](https://vpinhub.com/vpxtables)
    - [Alphabetical Listing of VPM tables w/Links to Tutorials 1.7.0 ](https://www.vpforums.org/index.php?app=downloads&showfile=5221)
- [VPUniverse](https://vpuniverse.com/files/) - some high def table
- [virtual-pinball-spreadsheet](https://virtual-pinball-spreadsheet.web.app/) - nice updated list of tables
- [Awesome Visual Pinball Recreations 2023 for your Virtual Pinball](https://www.youtube.com/watch?v=mM1GMs3ceLs)
- [Lutris](https://lutris.net/games/visual-pinball-x/) - should be possible to run Windows version through wine.
- [orbitalpin](https://docs.orbitalpin.com/) - a framework to make table in VpinballX
