---
published: true
title: Tensorflow
tags: AI NN tensorflow amd gpu
---
> The fastest and more reliable method to get ROCm + Tensorflow backend to work is to use the docker image provided by AMD developers. - [Train neural networks using AMD GPU and Keras](https://towardsdatascience.com/train-neural-networks-using-amd-gpus-and-keras-37189c453878)

## [Tensorflow](https://www.tensorflow.org/) Docker
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

Then click on link displayed in terminal (terminator) to open it in a browser outside of docker image.

## Using GPU
- configure Rocm for [TensorFlow](https://rocmdocs.amd.com/en/latest/Deep_learning/Deep-learning.html#tensorflow) 
	- [ROCm]({% post_url 2020-07-24-amd-gpu %})	
    
## Check Nb of GPU available
{% highlight bash %}
print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))
{% endhighlight %}

## [Tensorflow Benchmark](https://github.com/tensorflow/benchmarks)
- [GPU Benchmark]({% post_url 2020-08-29-gpu %})
- [Low performance on RX 580 with TF benchmarks](https://github.com/microsoft/DirectML/issues/21)

{% highlight bash %}
python3 tf_cnn_benchmarks.py --num_gpus=1 --batch_size=32 --model=resnet50
...
Done warm up
Step	Img/sec	total_loss
1	images/sec: 81.8 +/- 0.0 (jitter = 0.0)	7.750
10	images/sec: 82.3 +/- 0.1 (jitter = 0.2)	8.071
20	images/sec: 82.3 +/- 0.1 (jitter = 0.1)	7.801
30	images/sec: 82.3 +/- 0.0 (jitter = 0.3)	8.001
{% endhighlight %}
