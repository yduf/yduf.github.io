---
title: MacOS
published: true
tags: macos-system accessibility vscode chrome
---
> I'm pretty sure I'm not alone in wanting to customize the hell out of OSX. - [r/MacOS](https://www.reddit.com/r/MacOS/comments/74k4h6/comment/kbngmqr/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

Some things never change. 
The desire to customize Macos, as well as the incessant bullshit drum beat of "nope, you can't do it"  

Other wrong answers include:
- Embrace change
- It's better this way
- Once you get use to it, you'll like it.

### Howto
- [MacBook Pro detects external monitor but shows black screen](https://apple.stackexchange.com/questions/25003/macbook-pro-detects-external-monitor-but-shows-black-screen) - unplug HDMI from hub & reconnect
- [How to Make Mac Keyboards, Mice, and Trackpads Work Like on Windows](https://www.howtogeek.com/how-to-make-mac-keyboards-mice-and-trackpads-work-like-on-windows/#:~:text=Set%20Up%20Your%20Mac%20Keyboard%20Like%20Windows%201,System%20Shortcuts%20...%208%20Enable%20Mouse%20Keys%20)

### [Keyboard](https://medium.com/@Pawel.Sierszen/is-switching-to-mac-worth-it-an-experience-of-a-lifelong-linux-user-fa3300db5325#keyboard-and-shortcuts)

- [How to remap modifier keys in macOS ](https://www.theverge.com/23591533/mac-remap-keyboard-how-to)

- [Going From Windows/Linux to MacOS: My Experience + My Essential Tweaks](https://www.reddit.com/r/MacOS/comments/t5k6no/going_from_windowslinux_to_macos_my_experience_my/)

- [How to turn your macOS into a Linux-like Desktop](https://blog.codeminer42.com/how-to-turn-your-macos-into-a-linux-like-desktop/)

- [AltTab](https://alt-tab-macos.netlify.app/) -  brings the power of Windows’s “alt-tab” window switcher to macOS.

### Mouse/Trackpad

- [How to separate "mouse" and "trackpad" settings?](https://apple.stackexchange.com/questions/116617/how-to-separate-mouse-and-trackpad-settings)
	- [UnnaturalScrollWheels](https://github.com/ther0n/UnnaturalScrollWheels) - Invert scroll direction for physical scroll wheels while maintaining "Natural" scrolling for trackpads on MacOS.
    
- Zoom with Wheel
	- [Quick Zoom extension](https://www.reddit.com/r/MacOS/comments/u3naol/mac_equivalent_of_ctrlmouse_scroll_to_zoom_in_a/) - Chrome/Edge extension to solve it
    - VSCode [set `editor.mouseWheelZoom": true`](https://stackoverflow.com/a/38360205/51386)

### [Homebrew](https://brew.sh/)
The Missing [Package](https://formulae.brew.sh/formula/) Manager for macOS (or Linux)

- [	Our audit of Homebrew](https://news.ycombinator.com/item?id=41114839)

see also
- [Brightness Control](({% post_url 2021-08-17-brightness-control %}#macos))

### [VSCode](https://code.visualstudio.com/docs/setup/mac)

VSCode [set `editor.mouseWheelZoom": true`](https://stackoverflow.com/a/38360205/51386)

add VS Code to your path, to do so run the following commands:

{% highlight bash %}
$ cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
{% endhighlight %}

### [Linux](https://news.ycombinator.com/item?id=40316704)

> I do laud the effort here, but personally I will not buy apple again, even with linux. The software is not the only problem with apple's closed system - the hardware is all but irreparable, locked to approved parts and so on.