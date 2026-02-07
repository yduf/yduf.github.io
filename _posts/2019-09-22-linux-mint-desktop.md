---
published: true
title: '# Linux Mint Desktop'
tags: linux-system ubuntu desktop application quote
toc: true
---
> one of the best alternatives to Microsoft Windows and Apple MacOS. - [Linux Mint](https://linuxmint.com/about.php) /  [Cool desktops don’t change](https://news.ycombinator.com/item?id=31769604) 

<link rel="shortcut icon" href="https://linuxmint.com/web/img/favicon.ico" type="image/x-icon" />

- [Linux Mint Releases](https://www.linuxmint.com/download_all.php) - and ubuntu correspondance
	- linux mint 22   (Wilma)    <-> Ubuntu Noble 24.04 LTS
	- linux mint 21.3 (virginia) <-> ubuntu Jammy 22.04 LTS
	- linux mint 21   (vanessa)  <-> ubuntu Jammy 22.04 LTS
- [Wayland](https://blog.linuxmint.com/) - wayland is coming

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.debugpoint.com%2Fwp-content%2Fuploads%2F2019%2F08%2FLinux-Mint-19.2-Cinnamon-Desktop.png&f=1&nofb=1&ipt=9fdd213c785d245226f9030ff499a2615feb7de3b24dd87a59836bcbd19677e1&ipo=images)

### Linux Mint 21
- display manager is lightdm

### [Launch at startup](https://chatgpt.com/share/69871a8d-822c-800d-b870-e39877746a69)

look for "Startup Application" Configuration

### [Add Application to Cinnamon Menu and Panel](https://www.scottcking.com/2020/07/13/linux-mint-20-cinnamon-manually-add-application-to-cinnamon-menu-panel/)

Add an entry in `/usr/share/applications` with the name of the [`<desired_name>.desktop`](https://wiki.archlinux.org/title/Desktop_entries) and
with content (see also [Recognized desktop entry keys](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html)):

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

**BUT** it will be erased when a package add the very same entry.
So for custumisation of an existing entry, it's better to first copy it locally to your user config:

{% highlight bash %}
cp /usr/share/applications/firefox.desktop ~/.local/share/applications/
{% endhighlight %}

Custimoze the launch command for eg, then run [`update-desktop-database ~/.local/share/applications/ `](https://askubuntu.com/questions/610474/can-local-share-applications-override-usr-share-applications/610527#610527) - it should now override the /usr/share one.

### Cinnamon Add shortcut to panel
This require to add the launcher app to panel (default panel, allows only unpin, not add)

### [Recent files](https://askubuntu.com/questions/540661/how-do-i-disable-the-recent-files-feature-in-the-cinnamon-desktop-environment) - pull up the menu, type 'privacy' 

### Worskpace seting

- open _Workspace_ configuration
- open _applets_ manager and add _workspace applet_

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

## [Fix Broken package](https://www.fosslinux.com/8782/fix-broken-linux-mint-updates-due-to-the-broken-packages.htm)

## Updating
- [How to upgrade to Linux Mint 22](https://linuxmint-user-guide.readthedocs.io/en/latest/upgrade-to-mint-22.html)
- [How to upgrade to Linux Mint 21](https://linuxmint-user-guide.readthedocs.io/en/latest/upgrade-to-mint-21.html#)
- [How to upgrade to Linux Mint 20](https://linuxmint-user-guide.readthedocs.io/en/latest/upgrade-to-mint-20.html)
- [How to upgrade to Linux Mint 19](https://community.linuxmint.com/tutorial/view/2416)
    - `sudo touch /etc/timeshift.json`
