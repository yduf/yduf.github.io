---
published: true
title: Developing inside a Container (VSCode)
tags: vscode docker
---
> use a Docker container as a full-featured development environment. It allows you to open any folder inside (or mounted into) a container and take advantage of Visual Studio Code's full feature set. - [Getting started](https://code.visualstudio.com/docs/remote/containers)


- Remote-Containers: Open Folder in Container
- Reopen Folder localy (exit)

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
    "remoteUser": "yves",
    "mounts": [
        "source=/home/yves/DEV/reMarkable/cairo,target=/home/yves/DEV/reMarkable/cairo,type=bind,consistency=cached"
      ]
}
{% endhighlight %}

Then => *Remote-Containers: Reopen in Container*

Docker-compose can be use [as well](https://code.visualstudio.com/docs/remote/create-dev-container#_use-docker-compose).
- [Seamless Multi-Container Live Debugging in VSCode](https://medium.com/microsoftazure/seamless-multi-container-multi-root-workspaces-debugging-in-vscode-devcontainers-on-steroid-54d7cff4ff77)

### [Adding a non-root user to your dev container](https://code.visualstudio.com/docs/remote/containers-advanced#_adding-a-nonroot-user-to-your-dev-container)

`.devcontainer/Dockerfile` can be used to add user definition
{% highlight Dockerfile %}
FROM ydu/remarkable-toolchain

ARG USERNAME=yves
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME
{% endhighlight %}
