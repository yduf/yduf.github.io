---
title: NixOS - What Is Nix ?
published: true
tags: nix package build-system docker linux-system
---
> On Debian, Fedora, etc, installing a package means letting it put files wherever it likes; which effectively gives the package author root on your system. Not a good base for sandboxing!
>
> Also, they make it difficult to try out 3rd-party software, or to test newer versions of just some packages.
> 
> In 2003 I created 0install to address these problems, and Nix has very similar goals. - [Home](https://nixos.org/) / [r/NixOS ](https://www.reddit.com/r/NixOS/) / [KVM & Wayland](https://roscidus.com/blog/blog/2021/03/07/qubes-lite-with-kvm-and-wayland/#nixos)

[**The case for Nix on the home server**](https://www.youtube.com/watch?v=h8oyoDMUM2I)
- [ NixOS Is The Power User Distro (Now With An Easy Installer!) ](https://www.youtube.com/watch?v=ck4J2Faa7Fc)

[**Nix**]({% post_url 2026-01-24-package-nix %}) is a package manager that can also be used in a build system, which is the outcome of an Academic Work => [The Purely Functional Software
Deployment Model (2006)](https://edolstra.github.io/pubs/phd-thesis.pdf)  
**NixOS** - a linux distribution base upon Nix
- [NixOS is a good server OS, except when it isn't ](https://news.ycombinator.com/item?id=41717050)

Nix is sometime proposed as an alternative to docker, because its reproducible system overcome using docker to package snapshot of libs that used to work together.

- [Nix explained from the ground up ](https://www.youtube.com/watch?v=5D3nUU1OVx8) - explain why & what is Nix
	- a DSL + Platform & a store to get reproducible within same platform
    - force specific file-system hierarchy
    - stage one / stage two generation for having clean binaries.
    	- does it survive [Evil compiler]({% post_url 2022-06-06-devil-compiler %}) ?


- [	Fast, Declarative, Reproduble and Composable Developer Environments Using Nix (devenv)](https://devenv.sh/) / [HN](https://news.ycombinator.com/item?id=40010991)
- [Our Roadmap for Nix](https://news.ycombinator.com/item?id=32374113)

**see also**
- [	Zero to Nix, an unofficial, opinionated, gentle introduction to Nix](https://news.ycombinator.com/item?id=34490376)
- [	Crafting container images without Dockerfiles](https://news.ycombinator.com/item?id=34678121) - I've been using Nix for this.
- [Using Nix on Linux Mint](https://leward.eu/using-nix-on-linux-mint/)
- [	Guix System First Impressions as a Nix User](https://news.ycombinator.com/item?id=46835612) - replace Nix langage by Scheme.

- [	Call by Hash](https://news.ycombinator.com/item?id=39699251) - What happens if we make URLs immutable?
