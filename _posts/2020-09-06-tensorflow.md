---
published: true
title: Tensorflow
tags: AI NN tensorflow
---
> The fastest and more reliable method to get ROCm + Tensorflow backend to work is to use the docker image provided by AMD developers. - [Train neural networks using AMD GPU and Keras](https://towardsdatascience.com/train-neural-networks-using-amd-gpus-and-keras-37189c453878)

# [Tensorflow](https://www.tensorflow.org/)

## Tensorflow Docker

- [install docker]({% post_url 2019-08-16-docker %})
- [Train neural networks using AMD GPU and Keras](https://towardsdatascience.com/train-neural-networks-using-amd-gpus-and-keras-37189c453878)
	- install [Tensorflow ROCm port](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
	- [tutorial](https://github.com/RadeonOpenCompute/ROCm-docker/blob/master/quick-start.md)
    
    
### Create a persistent space

It is useful to create a persistent space in the physical drive for storing files and Jupyter notebooks. 

{% highlight bash %}
mkdir /home/$LOGNAME/tf_docker_share
{% endhighlight %}


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
