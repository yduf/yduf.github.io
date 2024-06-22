---
published: true
title: 'Kitty - a modern term '
tags: cli gpu term image viewer quake
---
> the fast, featureful, GPU based terminal emulator - [kitty](https://sw.kovidgoyal.net/kitty/#quickstart) / [HN](https://news.ycombinator.com/item?id=24643008)

### [Kitty Terminal Emulator: How to Install, Configure, and Use It](https://linuxiac.com/kitty-terminal-emulator/)
- [Fix terminal issues when ssh](https://wiki.archlinux.org/title/Kitty#Terminal_issues_with_SSH) - `$ kitty +kitten ssh user@host`
	- [Xterm-Kitty: Unknown Terminal Type?](https://hatchjs.com/xterm-kitty-unknown-terminal-type/) - `$ export TERM=xterm-256color`
- [Kitty conf (ctrl+shift+f2)](https://sw.kovidgoyal.net/kitty/conf/#opt-kitty.shell)
- [remote file](https://sw.kovidgoyal.net/kitty/kittens/remote_file/#remote-files) - Edit, Open or Download files from a computer into which you are SSHed
	 - `ls --hyperlink=auto` + Ctrl+Shift 
- [icat](https://sw.kovidgoyal.net/kitty/kittens/icat/#icat) - Display images in the terminal
	- `alias icat="kitty +kitten icat image-file-or-url-or-directory "` 

### [Integration with other tools](https://sw.kovidgoyal.net/kitty/integrations/)
kitty provides extremely powerful interfaces such as Control kitty from scripts and Custom kittens and icat that allow it to be integrated with other tools seamlessly. 

- [Kitti3](https://github.com/LandingEllipse/kitti3) turns Kitty into a drop-down, Quake-style floating terminal.

### see also:
- [foot](https://github.com/DanteAlighierin/foot#-foot) - The fast, lightweight and minimalistic Wayland terminal emulator.
- [alacritty ](https://github.com/alacritty/alacritty) - the fastest terminal emulator in existence.
- [Terminal image viewer]({% post_url 2017-11-16-TerminalImageViewer %})
- [Casey Muratori’s refterm]({% post_url 2021-11-02-term-anatomy %})

- [changing the icon](https://sw.kovidgoyal.net/kitty/faq/#i-do-not-like-the-kitty-icon) on [ubuntu](https://askubuntu.com/questions/1417373/how-can-i-change-the-name-or-icon-of-an-installed-application)

[![caption](https://github.com/DinkDonk/kitty-icon/raw/main/kitty-dark.png)](https://sw.kovidgoyal.net/kitty/faq/#i-do-not-like-the-kitty-icon)
