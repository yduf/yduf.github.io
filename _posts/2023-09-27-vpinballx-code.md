---
published: true
title: VPinballX (Standalone) Code (Draft)
tags: pincab code-review project draft
---
> VisualPinball Engine for MacOS / Android / linux - [github](https://github.com/vpinball/vpinball/tree/standalone/standalone)

### Code 
Use CMake

Dependancies
- [SDL2](https://www.libsdl.org/) + OpenGL
- [Plog]({% post_url 2023-09-27-cpp-lib-plog %}) - Pretty powerful logging library in about 1000 lines of code. Cross-platform

{% highlight bash %}
##  Debug mode

### change build instruction to
cmake -DCMAKE_BUILD_TYPE=Debug -B build_debug # so you have debug information
{% endhighlight %}

Setup a custom .ini files, with [proper setting]({% post_url 2023-09-16-game-visual-pinball %}#configuration) ex: Fullsceen=false and display for picking screen.
You can copy & customize the one located in `~/.vpinball/VPinballX.ini`

### [Setup Display](https://github.com/vpinball/vpinball/blob/6f84b57c90903a7c91eb495e5790f43032c845ae/pin/player.cpp#L496C1-L496C46)

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
- How to enable B2S in standalone ?
