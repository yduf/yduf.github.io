---
published: true
title: Syncthing
tags: rsync
---
> Syncthing est un logiciel open source. Il permet de synchroniser les répertoires de plusieurs machines à travers Internet au moyen d'une connexion P2P sécurisée. Ils fonctionnent sur diverses plateformes en plus de Linux, dont Windows, OS-X, Android… Ce qui permet de créer son propre cloud sans passer par des serveurs hébergés par des tiers ! - [ubuntu](https://doc.ubuntu-fr.org/syncthing) / [**Home**](https://syncthing.net/)

# [GUI][http://localhost:8384/)

- [Community Contributions](https://docs.syncthing.net/users/contrib.html#contributions)
- [Starting Syncthing Automatically](https://docs.syncthing.net/users/autostart.html#linux)
	- [using systemd / system service](https://docs.syncthing.net/users/autostart.html#how-to-set-up-a-system-service)
    	- check that `locate syncthing@.service` exist
        - start a sync instance for a given user
        
{% highlight bash %}
systemctl enable syncthing@myuser.service
systemctl start syncthing@myuser.service
{% endhighlight %}