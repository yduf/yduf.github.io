---
published: true
title: '# Podman - Containers vs. Pods'
tags: docker k8
---
> People associate running **pods** with _Kubernetes_. And when they run containers in their development runtimes, they do not even think about the role pods could play—even in a localized runtime.  Most people coming from the _Docker_ world of running **single containers** do not envision the concept of running **pods**. - [Podman: Managing pods and containers in a local container runtime](https://developers.redhat.com/blog/2019/01/15/podman-managing-containers-pods#)

### [Ultimate Docker to Podman Migration Guide: It’s NOT difficult](https://www.smarthomebeginner.com/docker-to-podman-migration-guide/)
- Fortunately for us, Podman is described as a "drop-in replacement" for Docker. And it's true.
- One huge difference, however, is that we are running in a rootless environment: we don't need to add our user to a Podman group, or use sudo when running Podman commands.
- **Podman on Ubuntu, for some odd reason, has no default registries included at all! An annoyance, but an easy fix.**
- Enable Containers to Run After Logout:  The root user is allowed to continue running processes in the background even when not logged-in. As we will be running in a rootless environment, we don't have the same privilege by default.
- Restart Containers and Start on Boot: Systemd Unit files

## [Podman Kube Play Support](https://docs.podman.io/en/latest/markdown/podman-kube-play.1.html#podman-kube-play-support)

- [Moving from docker-compose to Podman pods](https://www.redhat.com/sysadmin/compose-podman-pods)

### [PODs](https://kubernetes.io/docs/concepts/workloads/pods/)

✅ [initContainers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)    
✅ [containers](https://kubernetes.io/docs/concepts/workloads/pods/)  
✅ [volumes](https://kubernetes.io/docs/concepts/storage/volumes/)    
✅ hostname  
✅ hostNetwork


- [`podman pod ps` or `podman ps --pod`](https://www.redhat.com/sysadmin/container-information-podman)
- [`podman pod inspect paperless `](https://docs.podman.io/en/latest/markdown/podman-pod-inspect.1.html)

- [`podman generate kube my-pod >> my-pod.yaml`](https://www.redhat.com/sysadmin/compose-podman-pods#generate-the-yaml-for-our-pod) - Generate the YAML for our pod
- [`podman play kube ./my-pod.yaml`](https://www.redhat.com/sysadmin/compose-podman-pods) - Bring up a pod from the YAML

### Management tools
- [Cockpit]({% post_url 2022-11-04-linux-cockpit %}) a web-based GUI for your server, [ has a nice plugin for us to manage Podman ](https://www.smarthomebeginner.com/docker-to-podman-migration-guide/#Cockpit)

### [Install](https://podman.io/docs/installation)

{% highlight bash %}
$ sudo apt-get -y install podman
{% endhighlight %}

podman command are closed to docker

Test that docker works
{% highlight bash %}
podman run hello-world
{% endhighlight %}

see also
- [Podman Tutorial For Beginners: Step by Step Guides](https://devopscube.com/podman-tutorial-beginners/)
- [Using Podman pods Instead of docker-compose](https://www.mavjs.org/post/podman-pods-instead-of-docker-compose/)
	- alternatively [Podman Compose or Docker Compose: Which should you use in Podman?](https://www.redhat.com/sysadmin/podman-compose-docker-compose)

### see also
- [Containers vs. Pods - Taking a Deeper Look](https://iximiuz.com/en/posts/containers-vs-pods/)
- [How to run pods as systemd services with Podman](https://www.redhat.com/sysadmin/podman-run-pods-systemd-services)
- [Dockerless, part 3: Moving development environment to containers with Podman ](https://mkdev.me/posts/dockerless-part-3-moving-development-environment-to-containers-with-podman)
