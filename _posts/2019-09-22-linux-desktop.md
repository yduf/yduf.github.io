---
published: true
title: Linux Mint Desktop
tags: linux-system desktop application quote
---
> one of the best alternatives to Microsoft Windows and Apple MacOS. - [Linux Mint](https://linuxmint.com/about.php) /  [Cool desktops don’t change](https://news.ycombinator.com/item?id=31769604) 

- [Linux Mint Releases](https://www.linuxmint.com/download_all.php) - and ubuntu correspondance
	- mint 21 <-> ubuntu Jammy 22.04 LTS
- [Wayland?](https://forums.linuxmint.com/viewtopic.php?t=361316)

### Cinnamon Add shortcut to panel
This require to add the launcher app to panel (default panel, allows only unpin, not add)


### [Recent files](https://askubuntu.com/questions/540661/how-do-i-disable-the-recent-files-feature-in-the-cinnamon-desktop-environment) - pull up the menu, type 'privacy' 

## File Explorer [Nemo](https://doc.ubuntu-fr.org/nemo)
- [ThumbnailFactory](https://unix.stackexchange.com/questions/249182/nemo-how-can-i-fix-a-problem-has-been-detected-with-your-thumbnail-cache/249211#249211)
- One can add custom thumbnail generators by adding configuration files in share/thumbnailers. Typically: /usr/share/thumbnailers/ or ~/.local/share/thumbnailers
	- Custom thumbnail generators
    	- [bwrap hardening](http://www.bernaerts-nicolas.fr/linux/74-ubuntu/360-ubuntu-nautilus-external-thumbnailer-failure)
    	- [Thumbnailer for APK files](http://www.bernaerts-nicolas.fr/linux/76-gnome/284-gnome-shell-generate-apk-thumbnail-nautilus)
        - [STL Thumbnailer](https://github.com/Spiritdude/Nautilus_Thumbnailer_STL)
        - [openscad/stl](https://github.com/yorikvanhavre/openscad-thumbnailers)
- [disabling thumbnail cache](https://forums.linuxmint.com/viewtopic.php?t=203366)


## Updating
- [How to upgrade to Linux Mint 20](https://linuxmint-user-guide.readthedocs.io/en/latest/upgrade-to-mint-20.html)
- [How to upgrade to Linux Mint 19](https://community.linuxmint.com/tutorial/view/2416)
    - `sudo touch /etc/timeshift.json`
