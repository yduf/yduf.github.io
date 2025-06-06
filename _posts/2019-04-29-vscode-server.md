---
published: true
title: VSCode remote
tags: vscode remote linux editor ssh
---
>  [CodeServer](https://github.com/cdr/code-server) Run VS Code on any server over SSH. A precursor of [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)

- [VSCode's SSH agent is bananas](https://news.ycombinator.com/item?id=42979467) - Unlike Tramp, which lives off the land on the remote connection, VSCode mounts a full-scale invasion: it runs a Bash snippet stager that downloads an agent, including a binary installation of Node. 

- Github copilot extension - is [doing rigrep](https://stackoverflow.com/questions/65120743/many-rg-commands-started-by-vscode-that-consume-99-of-cpus) => this can saturate cpu when opening home folder in remote. => **disabling copilot extension solve it**

### [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
- work over ssh
- on container
- on WSL (windows)

**does not work with fish as default user shell** => will cause a Timeout on VSCode client (though ssh work perfectly).

## [code-server](https://github.com/cdr/code-server)
Run inside chrome and work over ssh.

If you have Chrome installed, it opens the browser in app mode. That means there's no keybind conflicts, address bar, or indication that you're coding within a browser. It feels just like native VS Code.

## [Run over ssh](https://github.com/cdr/sshcode)

By default, sshcode will rsync your local VS Code settings and extensions to the remote server every time you connect.

{% highlight bash %}
#You can specify a remote directory as the second argument
go/bin/sshcode kyle@dev.kwc.io ~/projects/sourcegraph
{% endhighlight %}

## Docker server

{% highlight bash %}
docker run -it -p 8443:8080 -v "${PWD}:/home/coder/project"  -u "$(id -u):$(id -g)" codercom/code-server --auth=none --disable-telemetry
{% endhighlight %}

### [Autocolor by Host](https://chatgpt.com/share/681c977c-d934-800d-9a5a-1dda473d08e2)

Using [Peacock](https://marketplace.visualstudio.com/items/?itemName=johnpapa.vscode-peacock) - it must be installed on both local and remote server (?). - [doc](https://www.peacockcode.dev/guide/#overview)

In your **global VS Code settings** (`settings.json`), you can set a Peacock color for a specific workspace name:

{% highlight json %}
"peacock.favoriteColors": {
    "prod-server": "#FF0000",
    "dev-server": "#00FF00"
},
"peacock.remoteColor": {
    "SSH: prod-server": "prod-server",
    "SSH: dev-server": "dev-server"
},
"peacock.applyColorOnRemoteConnection": true
{% endhighlight %}

It seems that remote color is store remotely in `settings.json`

{% highlight json %}
  "peacock.remoteColor": "#764FE3"
{% endhighlight %}
