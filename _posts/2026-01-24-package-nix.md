---
title: "Nix (Package) \U0001F4E6"
published: true
tags: nix package config
toc: true
---
> A package manager that installs software in /nix/store that you can use alongside your linux distribution - [Home](https://nix.dev/manual/nix/2.28/command-ref/new-cli/nix.html) / [ChatGPT](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

<link rel="shortcut icon" href="https://nix.dev/_static/favicon.png" type="image/x-icon" />

# [Pick your pills _--daemon/--no-daemon_ ](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

Whatever the choice
- The installer require to create [`/nix` at root](https://chatgpt.com/share/6974a5e4-f018-800d-90e0-624f401b835a) by a **privileged user**
    - it makes tools host dependant (vs [One $HOME to rule them all]({% post_url 2025-11-24-network-share-home-folder %}) )

The difference is that multi-user mode, there is a daemon running that take
care of managing the `/nix` folder, whereas there is no daemon in single user.

In both case, there is no requirement for calling `nix` with sudo afterward. 

At this point, there is not much difference between [_Hombrew_]({% post_url 2026-01-24-package-homebrew %}) requirement and _Nix_, except that:
- [homebrew is thought mono-user first](https://chatgpt.com/share/6974bbbf-bae4-800d-8442-514488c80704) - and you have to share your one user repos with others
- Nix + daemon fills like a lot less messy approach
- Nix philosphy/power is now reachable: you can start using [profile](#using-profile) like _Homebrew_ packages and climb to [Flakes](#using-flakes-recommended) latter on.

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

# [Package Install](https://chatgpt.com/share/6974d688-4890-800d-b862-c5c8c0c596d7)

Taking zig as an example

The modern, recommended way:  
✔ Enable [Flakes](#using-flakes-recommended)  
✔ Use [nix profile](#using-profile) for packages  
✔ Use `nix develop` for projects ([Flakes](#using-flakes-recommended))  
✔ Use [Home Manager](#using-home-manager-optional) (optionally with NixOS)  
\- Avoid channels and [nix-env](#using-nix-env)  

## Using profile

<div style="
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >
profile need to be enabled
  
{% highlight bash %}
$ mkdir -p ~/.config/nix
$ echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
# Restart your shell again
{% endhighlight %}
</div>

This is similar to other package manager and can be thought as a replacement for brew/apt/etc... but for **user only**

{% highlight bash %}
# install package permanently to user profil
$ nix profile add nixpkgs#zig

# list installed package
$ nix profile list

# remove
$ nix profile remove zig

# upgrade
$ nix profile upgrade '.*'

# search
$ nix search nixpkgs firefox
{% endhighlight %}

## [Using Flakes (Recommended)](https://chatgpt.com/share/6974dc8b-4770-800d-b838-05e4323d7085)

Flakes are now the standard way to use Nix.

see [Nix Flakes]({% post_url 2021-02-05-build-system-nix %})

## Using nix-shell

**temporary environment**

This is useful if you just want to try Zig without permanently installing it
- This will drop you into a shell where zig is available.
- When you exit the shell, Zig is no longer available.

{% highlight bash %}
# create a temporary shell with tools
$ nix-shell -p zig

# or just run the tools 
$ nix run nixpkgs#zig
{% endhighlight %}



## Using home-manager (optional)

Nix Home Manager is a tool in the Nix ecosystem that lets you manage your user-specific environment declaratively using Nix—similar to how NixOS manages system configuration, but applied to a user’s home directory and personal setup. - [ChatGPT](https://chatgpt.com/share/6975e6a4-7990-800d-bdbd-6764ff1ae249)

## ~~Using nix-env~~ (depracated)

**permanent installation for your use**

This installs Zig in your user profile  
This will stick with your user account.

{% highlight bash %}
$ nix-env -iA nixpkgs.zig
{% endhighlight %}

## [Nix and sudo?](https://chatgpt.com/share/697f8013-6144-800d-8562-e2804fcc47d5)

Nix packages don’t mix with sudo the way system package managers do, and that’s usually by design.

Nix installs packages into user profiles (~/.nix-profile).
sudo resets PATH for security, so it doesn’t see user-installed Nix binaries.