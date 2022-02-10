---
published: true
title: Syncthing
tags: rsync
---
> Syncthing est un logiciel open source. Il permet de synchroniser les répertoires de plusieurs machines à travers Internet au moyen d'une connexion P2P sécurisée. Ils fonctionnent sur diverses plateformes en plus de Linux, dont Windows, OS-X, Android… Ce qui permet de créer son propre cloud sans passer par des serveurs hébergés par des tiers ! - [ubuntu](https://doc.ubuntu-fr.org/syncthing) / [**Home**](https://syncthing.net/)

- [Syncthing: Syncing All the Things](https://news.ycombinator.com/item?id=27929194)

# <span style="color:red">[**Warning**]</span> => it's quite easy to delete content - [(syncthing deleted my files again)](https://forum.syncthing.net/t/syncthing-deleted-my-files-again/15384/5)
- [have a backup](https://www.gkayaalp.com/blog/20190102_syncthing.html)
- [set a version policy](https://docs.syncthing.net/users/versioning.html#simple-file-versioning)

# [**local** GUI](http://localhost:8384/) / [**Resilio**](http://localhost:8888/gui/)

- [Community Contributions](https://docs.syncthing.net/users/contrib.html#contributions)
- [Starting Syncthing Automatically](https://docs.syncthing.net/users/autostart.html#linux)
	- [using systemd / system service](https://docs.syncthing.net/users/autostart.html#how-to-set-up-a-system-service)
    	- check that `locate syncthing@.service` exist
        - start a sync instance for a given user
        
{% highlight bash %}
systemctl enable syncthing@myuser.service
systemctl start syncthing@myuser.service
{% endhighlight %}

- [Syncthing Tray](https://github.com/Martchus/syncthingtray)

## Android
- [Syncthing Community](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid&hl=en_US)
