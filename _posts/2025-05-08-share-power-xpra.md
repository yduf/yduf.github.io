---
title: "Xpra \U0001F6A7"
published: true
tags: remote display in-progress
---
> persistent remote display server and client for forwarding applications and desktop screens. - [Home](https://xpra.org/index.html) / [github](https://github.com/Xpra-org/xpra/?tab=readme-ov-file#about)

Xpra differs from standard X forwarding primarily in allowing disconnection and reconnection without disrupting the forwarded application. It also differs from VNC and similar remote display technologies in being rootless, so applications forwarded by Xpra appear on the local desktop as normal windows managed by the local window manager, rather than being all "trapped in a box together". - [wikipedia](https://en.wikipedia.org/wiki/Xpra)

### [Setup](https://chatgpt.com/share/681d9c22-d2b4-800d-9355-3e5b0dc5077a)

**Debian and Ubuntu also ships xpra packages, though their stable versions are completely out of date, broken and unsupported, they should not be used.** - [doc](https://github.com/Xpra-org/xpra/wiki/Distribution-Packages)

{% highlight bash %}
sudo apt update
sudo apt install xpra
{% endhighlight %}