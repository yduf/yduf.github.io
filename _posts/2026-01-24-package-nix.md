---
title: Nix (Package)
published: true
tags: nix package
---
> A package manager that installs software in /nix/store that you can use alongside your linux distribution - [ChatGPT](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

## [Pick your pills _--daemon/--no-daemon_ ](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

Whatever the choice
- The installer require to create [`/nix` at root by privileged user](https://chatgpt.com/share/6974a5e4-f018-800d-90e0-624f401b835a)
    - it makes tools host dependant (vs [One $HOME to rule them all)]({% post_url 2025-11-24-network-share-home-folder %})

The difference is that multi-user mode, there is a daemon running that take
care of managing the `/nix` folder, whereas there is no daemon in single user.

In both case, there is no requirement for calling `nix` with sudo afterward. 

At this point, there is not much difference between [_Hombrew_]({% post_url 2026-01-24-package-homebrew %}) requirement and _Nix_, except that:
- [homebrew is thought mono-user first](https://chatgpt.com/share/6974bbbf-bae4-800d-8442-514488c80704) - and you need share your one user repos with others
- Nix + daemon fills like a less messy approach

{% highlight bash %}
$ sh <(curl -L https://nixos.org/nix/install) --no-daemon
{% endhighlight %}

### Root Access

`--no-daemon` - is quite straighforward in operation (see below).  
`--daemon` - is more involved, since it has to setup the daemon. 

<details markdown="1">
<summary>Root Access Details</summary>
{% highlight bash %}
$ sh <(curl -L https://nixos.org/nix/install) --no-daemon
Note: a multi-user installation is possible. See https://nix.dev/manual/nix/stable/installation/installing-binary.html#multi-user-installation
performing a single-user installation of Nix...
directory /nix does not exist; creating it by running 'mkdir -m 0755 /nix && chown yves /nix' using sudo
[sudo] password for yves:        
copying Nix to /nix/store................................................................
installing 'nix-2.33.1'
building '/nix/store/v3qb5sdzsj351fsia196zrsfjpz8ksd3-user-environment.drv'...
unpacking 1 channels...
modifying /home/yves/.profile...
placing /home/yves/.config/fish/conf.d/nix.fish...

Installation finished!  To ensure that the necessary environment
variables are set, either log in again, or type

  . /home/yves/.nix-profile/etc/profile.d/nix.fish

in your shell.
{% endhighlight %}
</details>
