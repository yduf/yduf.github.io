---
published: true
title: Update / Fix missing and broken packages (ubuntu)
tags: linux package system
excerpt_separator: ''
---
## broken packages
- [Use apt-get to fix missing and broken packages](https://linuxhint.com/apt_get_fix_missing_broken_packages/)

## “Packages can be updated”
- [How to update Ubuntu in terminal](https://devanswers.co/how-to-update-ubuntu/)

{% highlight bash %}
sudo apt-get update		# downloads the package lists from the repositories and updates them to get information on the newest versions of packages and their dependencies.
sudo apt-get upgrade	# upgrade installed packages to their latest available versions
{% endhighlight %}

{% highlight bash %}
nfs_exports:
sudo apt-get dist-upgrade	# perform upgrades involving the Linux kernel, changing dependencies, or adding and removing new packages as necessary.
{% endhighlight %}