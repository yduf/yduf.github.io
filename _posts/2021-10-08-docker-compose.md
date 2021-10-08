---
published: true
title: Docker-compose
tags: docker
---
> a tool for defining parameters to running multi-container Docker application. - [Docker Compose](https://docs.docker.com/compose/)

## [`docker-compose.yml`](https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file)

{% highlight yaml %}
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    environment:
      FLASK_ENV: development

  redis:
    image: "redis:alpine"
{% endhighlight %}

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