---
title: Homebrew (package)
published: true
tags: package
---
> [What is the benefit of using homebrew on debian?](https://chatgpt.com/share/69749ee5-1630-800d-a89c-a215cef61cc1)

Benefits
- Up-to-date versions of software
	- Large collection of developer tools
- **No root access required**
	- [**YET the installer want it**](https://docs.brew.sh/Installation#alternative-installs)
	- brew install into `~/.linuxbrew`
- Consistent tooling across macOS and Linux

Yet a similar setup can also be achieved by using [Nix]({% post_url 2026-01-24-package-nix %}).

**The 3 (apt,brew,nix) can coexist**

### Setup

{% highlight bash %}
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}
