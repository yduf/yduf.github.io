---
published: true
title: File Manager
tags: file-manager
---
> Nemo - [File Manager for Cinnamon](https://github.com/linuxmint/nemo)

## Nemo

### Emblems
metadata is stored by GVFS in `~/.local/share/gvfs-metadata/`, use [GIO API](https://docs.gtk.org/gio/) to have access to those attributes in your own program.

- [Backup emblems](https://forums.linuxmint.com/viewtopic.php?t=281724) - ` emblems are stored in ~/.local/share/gvfs-metadata`


{% highlight bash %}
$ gio info /path/to/folder | grep emblems # get embles
$ gio set # set emblems
{% endhighlight %}

- [additional emblems](https://forums.linuxmint.com/viewtopic.php?t=354871)
Create a folder `~/.icons`  
Put your own icons in there, named as `emblem-somename.png`  
Restart nemo with `nemo --quit`  

## [CLI](https://www.tecmint.com/linux-terminal-file-managers/)
- [Midnight Commander](http://www.linuxcommand.org/lc3_adv_mc.php)
{% highlight bash %}
sudo apt install mc
{% endhighlight %}
