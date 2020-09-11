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
docker run \
      -it \
      --network=host \
      --device=/dev/kfd \
      --device=/dev/dri \
      --ipc=host \
      --shm-size 16G \
      --group-add video \
      --cap-add=SYS_PTRACE \
      --security-opt seccomp=unconfined \
      --workdir=/tf_docker_share \
      -v $HOME/tf_docker_share:/tf_docker_share \
      rocm/tensorflow:latest bash
{% endhighlight %}

## Running Jupyter from docker
{% highlight bash %}
jupyter notebook --allow-root --port=8889
{% endhighlight %}

Then click on link dispalyed in terminal (terminator) to open it in a browser outside of docker image.

## Check Nb of GPU available

{% highlight bash %}
print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))
{% endhighlight %}
