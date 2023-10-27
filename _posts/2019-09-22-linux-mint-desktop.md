---
published: true
title: Linux Mint Desktop
tags: linux-system desktop application quote
---
> one of the best alternatives to Microsoft Windows and Apple MacOS. - [Linux Mint](https://linuxmint.com/about.php) /  [Cool desktops don’t change](https://news.ycombinator.com/item?id=31769604) 

<link rel="shortcut icon" href="https://linuxmint.com/web/img/favicon.ico" type="image/x-icon" />

- [Linux Mint Releases](https://www.linuxmint.com/download_all.php) - and ubuntu correspondance
	- linux mint 21 (vanessa) <-> ubuntu Jammy 22.04 LTS
- [Wayland](https://blog.linuxmint.com/) - wayland is coming

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SrDJcVOmGRfl3ZWMHFnsIgAAAA%26pid%3DApi&f=1&ipt=6193fd3b6793de1e1e739c906933cbfbe5695857922e3bcac6331f350a9612e6&ipo=images)

### Linux Mint 21
- display manager is lightdm

### [Add Application to Cinnamon Menu and Panel](https://www.scottcking.com/2020/07/13/linux-mint-20-cinnamon-manually-add-application-to-cinnamon-menu-panel/)

Add an entry in `/usr/share/applications` with the name of the `<desired_name>.desktop` and
with content

{% highlight ini %}
[Desktop Entry]
Encoding=UTF-8
Version=2.9.9
Name=Newshosting
GenericName=Newshosting Launcher
Type=Application
Exec=/bin/sh -c "/home/scking/newshosting-2.9.9/newshosting.sh"
Icon=/home/scking/newshosting-2.9.9/64x64_newshosting.png
{% endhighlight %}

When complete, save this file and using chmod, give it 644 permissions:  
`sudo chmod 644 /usr/share/applications/newshosting.desktop`

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

## Post install fix
- [Failed to start casper-md5check Verify Live ISO checksums](https://askubuntu.com/questions/1421093/ubuntu-boot-systemd1-failed-to-start-casper-md5check-verify-live-iso-checksum)

## Updating
- [How to upgrade to Linux Mint 20](https://linuxmint-user-guide.readthedocs.io/en/latest/upgrade-to-mint-20.html)
- [How to upgrade to Linux Mint 19](https://community.linuxmint.com/tutorial/view/2416)
    - `sudo touch /etc/timeshift.json`
