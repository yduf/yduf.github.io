---
published: true
title: Build Image (docker)
tags: docker build
---
## Using [Debien Buster](https://www.server-world.info/en/note?os=Debian_10&p=docker&f=1)

{% highlight cpp %}
# download the image
docker pull debian

# interactive sesssion
docker run -it debian /bin/bash
# Ctrl+p, Ctrl+q => exit from the Container session with keeping container's process
{% endhighlight %}


