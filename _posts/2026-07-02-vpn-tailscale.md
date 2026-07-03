---
title: Tailscale
tags: vpn internet
toc: true
---
> Can be used as [Reverse tunnel / mesh VPN (recommended)](https://chatgpt.com/share/6a462f1c-3e80-83eb-937a-646a7cd66f30) - [Home](https://tailscale.com/)


# Free Tier

[Benefits](https://chatgpt.com/share/6a462f1c-3e80-83eb-937a-646a7cd66f30)
- No router configuration
- Works behind carrier NAT and many ISP restrictions
- Traffic is encrypted
- Far lower risk than exposing ports to the public internet

You can also expose services (web dashboard, Home Assistant, etc.) with Tailscale.

[Tradeoff](https://chatgpt.com/share/6a4632fa-1de8-83ed-b69e-0655e6af92e9)
- You are trusting Tailscale’s control infrastructure
- Your identity provider becomes critical
    - If someone compromises your GitHub account (SSO provider), they may be able to enroll devices into your network.

Log in to start using Tailscale by running:

{% highlight bash %}
$ sudo tailscale up

$ ssh pi@100.x.x.x  # tailscale address
{% endhighlight %}