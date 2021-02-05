---
published: true
title: 'VSCode: Developing inside a Container'
tags: vscode docker
---
## [Gettin started](https://code.visualstudio.com/docs/remote/containers)

### [create .devcontainer/devcontainer.json](https://code.visualstudio.com/docs/remote/create-dev-container)
{% highlight json %}
{
    "image": "ydu/remarkable-toolchain"
}
{% endhighlight %}

or refering to Dockerfile

{% highlight json %}
{
    "dockerFile": "Dockerfile",
    "remoteUser": "yves"
}
{% endhighlight %}

Then => *Remote-Containers: Reopen in Container*

### [Adding a non-root user to your dev container](https://code.visualstudio.com/docs/remote/containers-advanced#_adding-a-nonroot-user-to-your-dev-container)

Dockerfile can be used to add user definition
{% highlight Dockerfile %}
FROM ydu/remarkable-toolchain

ARG USERNAME=yves
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME
{% endhighlight %}
