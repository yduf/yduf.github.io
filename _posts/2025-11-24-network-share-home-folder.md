---
title: "Sharing $HOME folder  \U0001F6A7"
published: true
tags: network nfs home config in-progress
toc: true
---
> seamlessly share a /home/user directory between two Linux computers -  [ChatGPT](https://chatgpt.com/share/68206e70-c3ac-800d-83aa-1e488dabacf2)

<link rel="shortcut icon" href="https://cdn.iconscout.com/icon/premium/png-512-thumb/network-folder-10-794131.png?f=webp&w=512" type="image/x-icon" />

First idea was to share the full `~/` folder through nfs.
- login will be completly stuck if the nfs server is unreachable
- they are some _race conditions_ (not so sure what) when connecting from ssh that made that solution unstable.
  
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
| [Files](#files)     | none     | same |
| [Folder](#folder)   | _autofs_      | same |
|---------|---------------|----------------|
| [Nix package]({% post_url 2026-01-24-package-nix %}) | | |
|---------|---------------|----------------|
| base system | | |


- Using _chezmoi_ synchronisation is not automatic, but is still easy.
- Folder autofs is cumbersome, but done very few time. It also provide a kind of sandboxing, exposing only what is required for processing on other computer

## .config
        
Using [dotfiles](https://github.com/yduf/dotfiles) and [chezmoi](https://www.chezmoi.io/) - helps you manage your personal configuration files (dotfiles, like `~/.gitconfig`) across multiple machines.
	- install .dotfile from a git repo on a new empty machine
    - easy update
    - choose which file are managed by chezmoi 
    
**example**
Adding `~/.config/nix

{% highlight bash %}
$ chezmoi add .config/nix/nix.conf
{% endhighlight %}`

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

**One easy restriction policy is that**
- `~/` root is private to each host,
- don't write any shared files there and keep writing to autofs folder for sync

## [Folder](https://chatgpt.com/share/697f5191-68d4-800d-b91f-9b743bab101c)

Any `~/folder` can be covered by [autofs]({% post_url 2019-05-10-nfs %}).
But you have to use [direct map Configuration](https://chatgpt.com/share/697f6678-fa7c-800d-9c45-0128173356e9)

### Working example

Modify _auto.master_ & _auto.yves

{% highlight bash %}
# auto.master
# direct map
/-    /etc/auto.yves	--ghost,--timeout=30
{% endhighlight %}

{% highlight bash %}
# /etc/auto.yves
/home/yves/Documents/  -fstype=nfs,rw,nosuid,nodev    yves-huv:/home/yves/Documents/
{% endhighlight %}

Check that it works
{% highlight bash %}
$ sudo systemctl restart autofs
$ ls ~/Documents
{% endhighlight %}

### Non working Example   

<div style="
  border-left: 5px solid #e53935; /* red */
  background: #ffebee;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

This setup will prevent tools like kitty ssh to work, because nothing can be written on ~/ directly, only mounted folder (~/Documents,~/Videos) are accessible.

</div>

If for simplifying configuration we let autofs handle the ~/, it will hide everything except the automounted folder.

Mouting 
- _~/Documents_ → /export/media/docs
- _~/Video_ → /export/media/videos 

Modify _auto.master_ & _auto.yves

{% highlight bash %}
# auto.master
/home/yves    /etc/auto.yves
{% endhighlight %}

{% highlight bash %}
# auto.yves
Documents  -fstype=nfs,rw,nosuid,nodev    yves-huv:/home/yves/Documents
Videos     -fstype=nfs,rw,nosuid,nodev    yves-huv:/home/yves/Videos
{% endhighlight %}

Check that it works
{% highlight bash %}
$ sudo systemctl restart autofs
$ ls ~/Documents
$ ls ~/Videos
{% endhighlight %}


# Fixing IP

To make the /home folder available reachable,
ip of the server must be fixed, cf:

- [add a 2nd ip]({% post_url 2025-05-10-network-second-ip %}) for a laptop
	- this is dependant of the interface: changing a usb dongle will hide it.
- [setup a static ip]({% post_url 2017-07-16-network %}) for a server

# see also
- [Is it possible to store user's home directories remotely?](https://askubuntu.com/questions/553981/is-it-possible-to-store-users-home-directories-remotely)
- [how to deal with shared home directory on linux?](https://superuser.com/questions/211792/how-to-deal-with-shared-home-directory-on-linux)
