---
published: true
title: VSCode Server
tags: vscode remote linux editor ssh
---
[cdr/code-server](https://github.com/cdr/code-server) -  is VS Code running on a remote server, accessible through the browser.

If you have Chrome installed, it opens the browser in app mode. That means there's no keybind conflicts, address bar, or indication that you're coding within a browser. It feels just like native VS Code.

## [Run over ssh](https://github.com/cdr/sshcode)

By default, sshcode will rsync your local VS Code settings and extensions to the remote server every time you connect.

{% highlight bash %}
# You can specify a remote directory as the second argument
go/bin/sshcode kyle@dev.kwc.io ~/projects/sourcegraph
{% endhighlight %}

## Docker

{% highlight bash %}
docker run -it -p 127.0.0.1:8443:8443 -v "${PWD}:/home/coder/project" codercom/code-server --allow-http --no-auth
{% endhighlight %}
