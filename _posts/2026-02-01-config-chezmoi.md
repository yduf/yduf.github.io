---
title: ChezMoi
published: true
tags: config nix package
---
> - [chezmoi](https://www.chezmoi.io/) helps you manage your personal configuration files (dotfiles, like `~/.gitconfig`) across multiple machines.

# [Quickstart](https://www.chezmoi.io/quick-start/)

{% highlight bash %}
$ chezmoi init
$ chezmoi add ~/.bashrc
$ chezmoi -v apply
{% endhighlight %}

## Git Sync

Leverage a git repo to syncronize everything



# Install

{% highlight bash %}
$ nix profile add nixpkgs#chezmoi
{% endhighlight %}


