---
published: true
title: Quadlet (Podman on systemd)
tags: docker systemd
---
> hides the complexity of running containers under systemd to make it easier to maintain unit files written from scratch. - [Make systemd better for Podman with Quadlet ](https://www.redhat.com/sysadmin/quadlet-podman) / [github](https://github.com/containers/quadlet)

It is merged in podman 4, but only available on [ubuntu 22.04](https://devicetests.com/install-podman-4-ubuntu-22-04)

## Example of .kube deployement

from [Deploying a multi-container application using Podman and Quadlet](https://www.redhat.com/sysadmin/multi-container-application-podman-quadlet)

{% highlight bash %}
# The place where we will store the definition
$ mkdir -p $HOME/.config/containers/systemd/
{% endhighlight %}

**paperless.kube** stored in `$HOME/.config/containers/systemd/`
{% highlight ini %}
[Install]
WantedBy=default.target

[Kube]
# Point to the yaml file in the same directory
Yaml=/mnt/paperless/paperless.yaml
# Publish the envoy proxy data port => this has to match otherwise service won't start
PublishPort=8000:8000
{% endhighlight %}

{% highlight bash %}
# start pod
$ systemctl --user daemon-reload
$ systemctl --user start paperless.service
{% endhighlight %}


see also
- [Run Kubernetes workloads in systemd with Podman](https://www.redhat.com/sysadmin/kubernetes-workloads-podman-systemd)
- [1](https://www.redhat.com/sysadmin/quadlet-podman)
