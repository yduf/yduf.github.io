---
title: "Sharing $HOME folder  \U0001F6A7"
published: true
tags: network nfs home in-progress
toc: true
---
<link rel="shortcut icon" href="https://cdn.iconscout.com/icon/premium/png-512-thumb/network-folder-10-794131.png?f=webp&w=512" type="image/x-icon" />

# [Sharing Home folder](https://chatgpt.com/share/68206e70-c3ac-800d-83aa-1e488dabacf2)

First idea was to share the full ~/ folder through nfs.
- it won't allow login if the nfs server is unreachable
- they are some _race conditions_ (not so sure) when connecting from ssh that made that solution unstable.
  
And there was also some other drawbacks ⚠️
- **ssh keys will be shared ash well**
	- to be able to connect to other system [own key need to be added to ~/.ssh/authorized_keys](https://yduf.github.io/ssh/#copy-ssh-keys-to-another-machine---askubuntu)
- firefox will refuse to start thinking it's already started

It is advise to enable different config between the two system (missing application / different version)
-  consider using a dotfile manager (like [chezmoi](https://www.chezmoi.io/) or yadm) to manage user-specific configs smartly

Now moving to an alternative approach.
There are 2 Scenarios to consider

| ~/      | Login on Host | Login from SSH |
|---------|---------------|----------------|
| [.config](#.config) | _chezmoi_     | same |
| [Files](#files)     | _chezmoi_     | same |
| [Folder](#folder)   | _autofs_      | same |

Using _chezmoi_ synchronisation is not automatic, but is still easy.

## .config
        
- [chezmoi](https://www.chezmoi.io/) - helps you manage your personal configuration files (dotfiles, like `~/.gitconfig`) across multiple machines.
	- install .dotfile from a git repo on a new empty machine
    - easy update
    - choose which file are managed by chezmoi 

**see also**  
One other possibility (dismissed)
- [kyrat](https://github.com/fsquillace/kyrat/?tab=readme-ov-file#kyrat) - A simple ssh wrapper script that brings your dotfiles always with you on Linux. kyrat can transfer to the remote host and source the following dotfiles
	- bashrc
- [Volatile Dotfiles over SSH](https://news.ycombinator.com/item?id=46344381) - discussion about various tools that can be helpfull [(lnk)](https://github.com/yarlson/lnk?tab=readme-ov-file#alternatives) / [stow](https://systemcrafters.net/managing-your-dotfiles/using-gnu-stow/)

## Files

This can be covered by 
- _chezmoi_ but with  no automatic synchronisation.
- rsync if prefered

Which file needs to be syncrhonized anyway?
One easy restriction is that
- `~/` root is private to each host,
- don't write any shared files there and keep writing to autofs folder for sync

## Folder 

Any `~/folder` can be covered by autofs.

# Fixing IP

To make the /home folder available reachable,
ip of the server must be fixed, cf:

- [add a 2nd ip]({% post_url 2025-05-10-network-second-ip %}) for a laptop
	- this is dependant of the interface: changing a usb dongle will hide it.
- [setup a static ip]({% post_url 2017-07-16-network %}) for a server

# see also
- [Is it possible to store user's home directories remotely?](https://askubuntu.com/questions/553981/is-it-possible-to-store-users-home-directories-remotely)
- [how to deal with shared home directory on linux?](https://superuser.com/questions/211792/how-to-deal-with-shared-home-directory-on-linux)
