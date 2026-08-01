---
title: ChezMoi ~ 🏡
published: true
tags: config shell linux-system nix package
toc: true
---
> [chezmoi](https://www.chezmoi.io/) helps you manage your personal configuration files (dotfiles, like `~/.gitconfig`) across multiple machines. - [my dotfiles](https://github.com/yduf/dotfiles/tree/master)

Mainly act as wrapper around _git_ and the management of a special repo dedicated to _.config_ files. All regular git command are available when steping inside the _chezmoi_ repo which is accessible with `chezmoi cd`.
- A dedicated dotfile manager with features for templating, encryption, multi-host config, and more.
- Designed specifically for managing personal config across machines.
- Maintains a source state (a repo you version control) and applies that safely to your home directory.

**see also**
- [chezmoi vs Stow](https://chatgpt.com/share/69f63076-e49c-83eb-b21d-62fec797628e)



# [Sync Files ⮺](https://chatgpt.com/share/6a6e0408-40bc-83ed-bbd7-0962f7330110)

<div class="encart green" markdown="1">
Don't forget to do [`chezmoi update`](#repo---local) so that edit done directly file in chezmoi repo are taken into account
</div>

## local -> repo

```bash
# all diff
$ chezmoi diff

# add one file
$ chezmoi add ~/.config/nvim/init.lua

# all files at once
$ chezmoi managed | xargs chezmoi add
```

## repo -> local

```bash
$ chezmoi update

# or
$ chez moi apply --dry-run
$ chez moi apply
```

# Install 📥

For bootstrapping use apt otherwise nix is available

{% highlight bash %}
$ apt-get install chezmoi
or
$ sh -c "$(curl -fsLS get.chezmoi.io)" -- -b $HOME/.local/bin

$ nix profile add nixpkgs#chezmoi
{% endhighlight %}

# [Quickstart](https://www.chezmoi.io/quick-start/)

{% highlight bash %}
$ chezmoi init
$ chezmoi add ~/.bashrc
$ chezmoi -v apply
{% endhighlight %}

# Git Sync

Leverage a git repo to synchronize everything
Create a [dotfile](https://github.com/yduf/dotfiles) repo on github and attach it to _chezmoi_

{% highlight bash %}
$ chezmoi cd
$ git remote add origin git@github.com:yduf/dotfiles.git
# and push
{% endhighlight %}

# Multi-Host

Use the Git repo to share and synchronize these config accross multiple computers.
Reference the repo when setting up the new computer.

{% highlight bash %}
$ chezmoi init git@github.com:yduf/dotfiles.git
$ chezmoi diff
$ chezmoi apply -v

$ chezmoi update
{% endhighlight %}

# see also
## GNU Stow 🔗
- A symlink farm manager (not dotfiles-specific).
- Manages sets of files by placing them in separate directories and symlinking them into a target directory.
- Great for organizing local configuration, packages, or any grouped files using symlinks.

[ How To ACTUALLY Manage Dotfiles with Stow  ](https://www.youtube.com/watch?v=TLFsee7DDSI) - Full Guide + Git Workflow
