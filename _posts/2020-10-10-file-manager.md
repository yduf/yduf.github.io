---
published: true
title: File Manager
tags: file-manager ubuntu tags
---
> Nemo - File Manager for Cinnamon - [(github)](https://github.com/linuxmint/nemo)

- [metadata](https://github.com/linuxmint/nemo/blob/7fe83632eca5801a55992dc08c52767b6d8685cb/libnemo-private/nemo-metadata.h)

### Emblems
metadata is stored by GVFS in `~/.local/share/gvfs-metadata/`, use [GIO API](https://stackoverflow.com/questions/10874702/gnome-where-does-nautilus-store-emblem-data-and-how) to have access to those attributes in your own program.

- [Backup emblems](https://forums.linuxmint.com/viewtopic.php?t=281724) - ` emblems are stored in ~/.local/share/gvfs-metadata`


{% highlight bash %}
$ gio info /path/to/folder | grep emblems # get embles
$ gio set # set emblems
{% endhighlight %}

- [additional emblems](https://forums.linuxmint.com/viewtopic.php?t=354871)
Create a folder `~/.icons`  
Put your own icons in there, named as `emblem-somename.png`  
Restart nemo with `nemo --quit`  

- [Can I safely delete Files in .local/share/gvfs-metadata](https://superuser.com/questions/100545/files-in-local-share-gvfs-metadata-in-ubuntu)

## [CLI](https://www.tecmint.com/linux-terminal-file-managers/)
- [Midnight Commander](http://www.linuxcommand.org/lc3_adv_mc.php)
{% highlight bash %}
sudo apt install mc
{% endhighlight %}

see also
- [TagSpaces](https://www.tagspaces.org/) / [github](https://github.com/tagspaces/tagspaces) - a file manager with tagging and note-taking capabilities
	- tags are saved in filename or in sidecar .json
