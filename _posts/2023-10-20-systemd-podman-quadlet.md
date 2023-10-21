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

[Unit]
Requires=quadlet-demo-mysql.service
After=quadlet-demo-mysql.service

[Kube]
# Point to the yaml file in the same directory
Yaml=quadlet-demo.yml
# Use the quadlet-demo network
Network=quadlet-demo.network
# Publish the envoy proxy data port
PublishPort=8000:8080
# Publish the envoy proxy admin port
PublishPort=9000:9901
# Use the envoy proxy config map in the same directory
ConfigMap=envoy-proxy-configmap.yml
{% endhighlight %}



see also
- [1](https://www.redhat.com/sysadmin/quadlet-podman)
