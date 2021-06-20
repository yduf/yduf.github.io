---
published: true
title: Build Image (docker)
tags: docker build-system
---
## Using [Debian Buster](https://www.server-world.info/en/note?os=Debian_10&p=docker&f=1)

### [Install](https://www.server-world.info/en/note?os=Debian_10&p=docker&f=1)

{% highlight cpp %}
# download the image
docker pull debian

# interactive session
docker run -it debian /bin/bash
# Ctrl+p, Ctrl+q => exit from the Container session with keeping container's process
{% endhighlight %}

### [Add images container](https://www.server-world.info/en/note?os=Debian_10&p=docker&f=2)

{% highlight cpp %}
# start a Container and install apache2
docker run debian /bin/bash -c "apt-get update; apt-get -y install apache2" 

$ docker ps -a | head -2
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                       PORTS               NAMES
f273ecfea032        debian              "/bin/bash -c 'apt-g…"   36 seconds ago      Exited (0) 7 seconds ago                         loving_cocks

# add the image
$ docker commit f273ecfea032 srv.world/debian_apache2
sha256:4295df3e5c82c024da75f82181b00004e2a3e4c5fcbe120dc8e3a2a74705f545

$ docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
srv.world/debian_apache2   latest              4295df3e5c82        13 seconds ago      243MB
debian                     latest              00bf7fdd8baf        2 weeks ago         114MB

# Generate a Container from the new image and execute [which] to make sure httpd exists
$ docker run srv.world/debian_apache2 /usr/bin/which apache2
/usr/sbin/apache2 
{% endhighlight %}
