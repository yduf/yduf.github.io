---
published: true
title: Tensorflow
tags: AI NN tensorflow
---
[Home](https://www.tensorflow.org/)

## Installation
### As docker container
- [install docker]({% post_url 2019-08-16-docker %})
- install [Tensorflow ROCm port](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
	- [tutorial](https://github.com/RadeonOpenCompute/ROCm-docker/blob/master/quick-start.md)
    
{% highlight bash %}
alias drun='sudo docker run \
      -it \
      --network=host \
      --device=/dev/kfd \
      --device=/dev/dri \
      --ipc=host \
      --shm-size 16G \
      --group-add video \
      --cap-add=SYS_PTRACE \
      --security-opt seccomp=unconfined \
      -v $HOME/dockerx:/dockerx'

drun rocm/tensorflow:latest
{% endhighlight %}