---
published: true
title: 'Jack Patchbay: Managing audio connection'
tags: audio DAW
---
> Catia is a JACK Patchbay, with some neat features like A2J bridge support and JACK Transport.
It's supposed to be as simple as possible so it can work nicely on non-Linux platforms. - [KXStudio](https://kx.studio/Applications)

- [Catia](https://kx.studio/Applications:Catia)
- [Jack Session](https://wiki.linuxaudio.org/wiki/session_management) - restore application and connection
	- [ladish](https://wiki.linuxaudio.org/apps/all/ladish) / Claudia

## [Catia Install](https://kx.studio/Repositories)
{% highlight bash %}
# Install required dependencies if needed
sudo apt-get install apt-transport-https gpgv

# Remove legacy repos
sudo dpkg --purge kxstudio-repos-gcc5

# Download package file
wget https://launchpad.net/~kxstudio-debian/+archive/kxstudio/+files/kxstudio-repos_10.0.3_all.deb

# Install it
sudo dpkg -i kxstudio-repos_10.0.3_all.deb
{% endhighlight %}

