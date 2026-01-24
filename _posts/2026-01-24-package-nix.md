---
title: Nix (Package)
published: true
tags: nix package
---
> A package manager that installs software in /nix/store that you can use alongside your linux distribution - [ChatGPT](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

## [Pick your pills _--daemon/--no-daemon__](https://chatgpt.com/share/6974a2a5-5b6c-800d-8fe3-f1fb83ed44a8)

For starter, I choose **single user mode** with **--no-daemon**
- closer to homebrew tools
- "non invasive"
	- it still require to create [`/nix` at root by privileged user](https://chatgpt.com/share/6974a5e4-f018-800d-90e0-624f401b835a)

{% highlight bash %}
$ sh <(curl -L https://nixos.org/nix/install) --no-daemon
{% endhighlight %}
