---
title: "ProxyJump (ssh) 🐬"
tags: ssh network-security
---
> setup a [bastion](https://chatgpt.com/share/6a47b31e-b090-83eb-bd10-396520721f38) to access your network securely.

# Config

ProxyJump can be added to `~/.ssh/config`,
whith the benefits of allowing Nemo to use it.

{% highlight bash %}
Host bastion
    HostName bastion.example.com
    User alice

Host internal-server
    HostName 10.0.1.42
    User bob
    ProxyJump bastion
{% endhighlight %}