---
published: true
title: VSCode Server
tags: vscode remote linux editor ssh
---
## [Run VS Code on any server over SSH](https://github.com/cdr/code-server)

If you have Chrome installed, it opens the browser in app mode. That means there's no keybind conflicts, address bar, or indication that you're coding within a browser. It feels just like native VS Code.

## [Run over ssh](https://github.com/cdr/sshcode)

By default, sshcode will rsync your local VS Code settings and extensions to the remote server every time you connect.

{% highlight bash %}
#You can specify a remote directory as the second argument
go/bin/sshcode kyle@dev.kwc.io ~/projects/sourcegraph
{% endhighlight %}

## Docker

{% highlight bash %}
docker run -it -p 8443:8080 -v "${PWD}:/home/coder/project"  -u "$(id -u):$(id -g)" codercom/code-server --auth=none --disable-telemetry
{% endhighlight %}
