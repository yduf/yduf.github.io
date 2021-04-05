---
title: Neural Network Ressources (NN)
published: true
tags: AI c++ NN lib
---
## [PlayGround](http://playground.tensorflow.org/)

# Toolkit

## [Dlib (C++)](https://github.com/davisking/dlib)

- [link to Example](http://dlib.net/dnn_introduction_ex.cpp.html)
- [API eample ](http://blog.dlib.net/2016/06/a-clean-c11-deep-learning-api.html)

![caption](/images/dlib-lenet5.png)

{% highlight cpp %}
using LeNet = loss_multiclass_log<
                fc<10,relu<
                fc<84,relu<
                fc<120,max_pool<2,2,2,2,relu<
                con<16,5,5,1,1,max_pool<2,2,2,2,relu<
                con<6,5,5,1,1,
                input<matrix<unsigned char>>
  				>>>>>>>>>>>>;
{% endhighlight %}

- [dlib function approximation](https://stackoverflow.com/questions/48661106/dlib-how-do-i-use-the-loss-mean-squared-multioutput-training-label-type)

### [Reinforcement learning](http://blog.dlib.net/2015/06/reinforcement-learning-control-and-3d.html)

- [keras2cpp](https://github.com/KongCang/keras2cpp)

## Codingame
- [CG Coder strike back](https://www.codingame.com/forum/t/neural-network-ressources/1667/12)
	- [Agade](https://forum.codingame.com/t/neural-network-ressources/1667/18?u=yduf)
