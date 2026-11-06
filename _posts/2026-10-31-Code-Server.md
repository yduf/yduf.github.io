---
title: "# Code Server"
tags: vscode security remote editor ssh telemetry
toc: true
---
> Run VS Code on any machine anywhere and access it in the browser. - [ChatGPT](https://chatgpt.com/share/6ae5c75d-115c-83ed-9aff-93fdb0a4be56)

<div class="encart orange" markdown="1">
**Telemetry**

**code-server** explicitly offers its own telemetry collection, which can be disabled (`code-server --disable-telemetry`)
</div>

# [OpenVSCode Server  ⮺](https://github.com/gitpod-io/openvscode-server?utm_source=chatgpt.com#openvscode-server)

<div class="encart blue" markdown="1">
OpenVSCode Server is based on Microsoft's VS Code OSS codebase, rather than VSCodium's distribution. 

So it provides a very similar browser-based development experience, but isn't literally VSCodium running remotely.
</div>


# [Code-Server ⮺](https://github.com/coder/code-server?tab=readme-ov-file#code-server)

<div class="encart orange" markdown="1">
**Note**: this is not the same thing as [Visual Studio Code Server](https://code.visualstudio.com/docs/remote/vscode-server), which has some licensing restriction like ["hosting it as a service is not allowed"](https://code.visualstudio.com/docs/remote/vscode-server#_things-to-try)

Some restriction apply:
- note alls extension are working
  - Cline does not work => use the cli instead.
</div>

## Nix/apt

This allows seamless integration with host: it share direct filesystem and tools in terminal like ninja/gcc,
no need to customize the docker image.

{% highlight bash %}
$ nix profile add nixpkgs#code-server  # Maybe old

# pick latest on github https://github.com/coder/code-server/releases
$ wget https://github.com/coder/code-server/releases/download/vX.X.X/code-server_X.X.X_amd64.deb
$ sudo apt install ./code-server_X.X.X_amd64.deb

$ code-server \ # default to 127.0.0.1:8080
  --extensions-dir /home/yves/.vscode/extensions
{% endhighlight %}

<details markdown="1"><summary>Running it as a systemd service</summary>
{% highlight bash %}
# /etc/systemd/system/code-server.service
[Unit]
Description=code-server
After=network.target

[Service]
Type=simple
User=yves
ExecStart=/usr/bin/code-server \ # default to 127.0.0.1:8080
  --extensions-dir /home/yves/.vscode/extensions 
  
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
{% endhighlight %}

To activate
{% highlight bash %}
$ sudo systemctl enable code-server
$ sudo systemctl start code-server

# 
$ journalctl -u code-server -f
{% endhighlight %}
</details>


## Podman

Usuall pod restrictions apply...

{% highlight bash %}
$ podman pull ghcr.io/coder/code-server:latest

# start server with local socket only
$ podman run -d \
  --replace \
  --name code-server \
  -v ~/DEV:/home/coder/project \
  -p 127.0.0.1:8080:8080 \
  -e PASSWORD="yourpassword" \
  ghcr.io/coder/code-server:latest 
{% endhighlight %}

## [SSH tunnel ⮺]({% post_url 2021-02-07-ssh-tunnels %})
This is the simplest way to securize access (auth+encryption)

{% highlight bash %}
# create ssh tunnel client <-> codeserver
$ ssh -N -L 8080:127.0.0.1:8080 yves-lab

# open browser on client at http://localhost:8080
{% endhighlight %}

**see also**
- [Expose code-server](https://github.com/coder/code-server/blob/main/docs/guide.md#expose-code-server)