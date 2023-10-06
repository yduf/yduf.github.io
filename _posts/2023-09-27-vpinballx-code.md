---
published: true
title: VPinballX (Standalone) Code (Draft)
tags: pincab code-review project draft
---
> VisualPinball Engine for MacOS / Android / linux - [github](https://github.com/vpinball/vpinball/tree/standalone/standalone) / [discord](https://discord.com/channels/652274650524418078/1076655472846831667)

### Code 
Use CMake

Dependancies
- [SDL2](https://www.libsdl.org/) + OpenGL
- [BASS audio library ](https://www.un4seen.com/) - commercial/free - up to 4 separate stereo outputs with a 7.1 soundcard 
	- [VPX Standalone does use BASS for playing WAV's](https://github.com/vpinball/vpinball/issues/572#issuecomment-1644635921)
- [Imgui]({% post_url 2020-11-04-imgui %}) - used by live editor 
- [Plog]({% post_url 2023-09-27-cpp-lib-plog %}) - Pretty powerful logging library in about 1000 lines of code. Cross-platform
- [tinyxml2](https://github.com/leethomason/tinyxml2) -  small, efficient, C++ XML parser - used for .pov files.
- [harfbuzz](https://github.com/harfbuzz/harfbuzz) - a text shaping engine.

##  Debug mode

{% highlight bash %}
### change build instruction from 
cmake -DCMAKE_BUILD_TYPE=Release -B build
## to 
cmake -DCMAKE_BUILD_TYPE=Debug -B build_debug # so you have debug information
{% endhighlight %}

Setup a custom .ini files, with [proper setting]({% post_url 2023-09-16-game-visual-pinball %}#configuration) ex: Fullsceen=false and display for picking screen.
You can copy & customize the one located in `~/.vpinball/VPinballX.ini`

The entries of the .ini files are read with `LoadValueWithDefault` call, and you can lookup where the value are used in the code (see below for eg).

a Webserver is created on [0.0.0.0:2112](http://0.0.0.0:2112)

### [Setup Display](https://github.com/vpinball/vpinball/blob/6f84b57c90903a7c91eb495e5790f43032c845ae/pin/player.cpp#L496C1-L496C46)

res/exampleTable.vpx is nice and small table for testing.

{% highlight cpp %}
void Player::PreCreate(CREATESTRUCT& cs) {
    m_fullScreen = LoadValueWithDefault(regKey[RegName::Player], "FullScreen"s, IsWindows10_1803orAbove());
    ...
}
{% endhighlight %}

{% highlight cpp %}
void Player::CreateWnd(HWND parent /* = 0 */) {
...
   const int display = g_pvp->m_primaryDisplay ? 0 : LoadValueWithDefault(regKey[RegName::Player], "Display"s, 0);
   
   if (m_fullScreen) 
   
         m_sdl_playfieldHwnd = SDL_CreateWindow(cs.lpszName, cs.x, cs.y, cs.cx, cs.cy, flags);
}
{% endhighlight %}


## Project

Make it work on linux to be able to build a [pincab]({% post_url 2023-09-17-project-pincab %}) not requiring windows.

### Next

- How to enable DMD inside B2S in standalone ? -  [see](https://discord.com/channels/652274650524418078/1076655472846831667/1154883166486659244)
	-  [patch](https://discord.com/channels/652274650524418078/1076655472846831667/1144343645739290695)

- loading [lucy? / anaglyph](https://discord.com/channels/652274650524418078/1076655472846831667/1156362516054691841)
