---
published: true
title: Flakes (Nix)
tags: nix package build-system
---
> In spirits [it's very similar](https://chatgpt.com/share/6974f17f-e5d4-800d-9ba5-cda36b628efc) to tool like _bundler, maven, meson or uv_ in that it ensure a reproducible set of dependancies and their version, but on a more general scope including the tools ecosystem itself.

Flakes are now the standard way to use Nix.

**see also**
- [Custom Cross Compiler with Nix ](https://www.hobson.space/posts/nixcross/)


| Aspect      | Nix flakes                     | uv (as example)                                 |
| ----------- | ------------------------------ | ------------------------------------- |
| Locking     | `flake.lock` (pins all inputs) | `uv.lock` (pins Python deps)          |
| Determinism | Full system-level determinism  | Python dependency determinism         |
| Solver      | Nix evaluator + fetchers       | Custom Rust resolver (pip-compatible) |

# [Using Flakes (Recommended)](https://chatgpt.com/share/6974dc8b-4770-800d-b838-05e4323d7085)

<div style="
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >
Flakes need to be enabled
  
{% highlight bash %}
$ mkdir -p ~/.config/nix
$ echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
# Restart your shell again
{% endhighlight %}
</div>

It provide a more advanced [Workflow for Using Flakes](https://chatgpt.com/share/6974e1d8-0350-800d-825e-9bb1d6a02ec6), targeting more specifically developer and project build repetability. _see below_


### Create a new project directory

This directory will contain:
- your Zig code
- your `flake.nix`

{% highlight bash %}
$ mkdir zig-dev
$ cd zig-dev
{% endhighlight %}

### Create the `flake.nix` file

A flake is defined entirely by this file.

{% highlight bash %}
$ touch flake.nix
{% endhighlight %}

***Define the flake skeleton***

{% highlight bash %}
{
  description = "Zig development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, nixpkgs }:
  {
  };
}
{% endhighlight %}

### Enter the Zig development environment

This create an isolated shell, taking into account the flake definition.

{% highlight bash %}
$ nix develop
{% endhighlight %}
