---
published: true
title: Docker-compose / swarm
tags: docker
---
> a tool for defining parameters to running multi-container Docker application. - [Docker Compose](https://docs.docker.com/compose/)

[In short](https://news.ycombinator.com/item?id=34566379):
- if you need to deploy containers on a single node ad-hoc, then you want Docker or a similar runtime (e.g. Podman)
- if you need to deploy containers on a single node with a deployment descriptor, then Docker Compose is a good option, due to its simplicity
- if you need to deploy containers across multiple nodes with a deployment descriptor, then you want some sort of an orchestrator

Going from Docker Compose to Docker Swarm is the first logical step, because it's included in a Docker install and also uses the same Compose format.

Another reasonably lightweight alternative would be Hashicorp Nomad, because it's free, simple to deploy and their HCL format isn't too bad either.

Lastly, there is Kubernetes. It's complicated, even more so when you get into solutions like Istio, typically eats up lots of resources, can be difficult to manage and debug, but does pretty much anything that you might need, as long as you have either enough people to administer it.

## [`docker-compose.yml`](https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file)

{% highlight yaml %}
version: "3.9"
services:
  web:
    build: .
    environment:
      - FLASK_ENV: development
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    devices:
   	  - /dev/video0:/dev/video0

  redis:
    image: "redis:alpine"
    command: /bin/sh -c "while sleep 1000; do :; done"

{% endhighlight %}

Launching services

{% highlight bash %}
docker-compose up .
{% endhighlight %}



## [Install](https://dev.to/elalemanyo/how-to-install-docker-and-docker-compose-on-raspberry-pi-1mo)
Docker-Compose usually gets installed using pip3

{% highlight bash %}
sudo apt-get install libffi-dev libssl-dev
sudo apt install python3-dev
sudo apt-get install -y python3 python3-pip

sudo pip3 install docker-compose
{% endhighlight %}
