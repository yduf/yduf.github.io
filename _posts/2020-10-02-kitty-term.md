---
published: true
title: Kitty & Ghostty - modern terms
tags: cli gpu retro CRT term image viewer quake zig
toc: true
---
> the fast, featureful, GPU based terminal emulator - [kitty](https://sw.kovidgoyal.net/kitty/#quickstart) / [HN](https://news.ycombinator.com/item?id=24643008)

<link rel="shortcut icon" href="https://github.com/DinkDonk/kitty-icon/raw/main/kitty-light.png" type="image/x-icon" />

## Kitty
[How to Install, Configure, and Use It](https://linuxiac.com/kitty-terminal-emulator/)
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

## [ghostty](https://ghostty.org/) 

By the creator of Hashicorp - [HN](https://news.ycombinator.com/item?id=45347117)
- [Talk: Introducing Ghostty and Some Useful Zig Patterns](https://mitchellh.com/writing/ghostty-and-useful-zig-patterns) - Why Zig? Why Not \<Language\> I don't care for this question and I don't care to answer it. I chose Zig, I like Zig, let's move on.
	- [Can use shader](https://news.ycombinator.com/item?id=46039176) to achieve various effect like **retro-terminal**



## see also:
- [foot](https://github.com/DanteAlighierin/foot#-foot) - The fast, lightweight and minimalistic Wayland terminal emulator.
- [alacritty ](https://github.com/alacritty/alacritty) - the fastest terminal emulator in existence.
- [Terminal image viewer]({% post_url 2017-11-16-TerminalImageViewer %})
- [Casey Muratori’s refterm]({% post_url 2021-11-02-term-anatomy %})

- [changing the icon](https://sw.kovidgoyal.net/kitty/faq/#i-do-not-like-the-kitty-icon) on [ubuntu](https://askubuntu.com/questions/1417373/how-can-i-change-the-name-or-icon-of-an-installed-application)

[![caption](https://github.com/DinkDonk/kitty-icon/raw/main/kitty-dark.png)](https://sw.kovidgoyal.net/kitty/faq/#i-do-not-like-the-kitty-icon)
