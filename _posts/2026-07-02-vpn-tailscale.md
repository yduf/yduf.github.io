---
title: Tailscale
tags: vpn internet
toc: true
---
> Can be used as [Reverse tunnel / mesh VPN (recommended)](https://chatgpt.com/share/6a462f1c-3e80-83eb-937a-646a7cd66f30) - [Home](https://tailscale.com/) / [📡](https://login.tailscale.com/admin/machines)

<div class="encart blue" markdown="1">
If both machines are on the same LAN, Tailscale will normally optimize this quite nicely.

The important distinction is that Tailscale does not normally route the traffic through the Tailscale/DERP servers just because you're using a Tailscale IP. - [ChatGPT](https://chatgpt.com/c/6a97bb7b-5288-83eb-929b-1e6712cd2ff7)
</div>

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