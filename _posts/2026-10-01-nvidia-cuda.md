---
title: CUDA
tags: nvidia cuda gpu
toc: true
---
> (Compute Unified Device Architecture) is NVIDIA’s platform for using GPUs to perform general-purpose computations, not just graphics.

<div class="encart blue" markdown="1">

CUDA works as long as nvidia-smi sees the GPU and the driver is installed. OpenGL or graphics output isn’t required for CUDA compute tasks.

You can compile CUDA code without a nvidia cards, but you won't be able to execute it withtout the proper driver.
  
</div>

# [Testing CUDA ⮺](https://chatgpt.com/share/697d05e8-3964-800d-b147-3c4606eacf1f)

**Check that CUDA toolkit is installed**

{% highlight bash %}
$ nvcc --version

# if above is missing
$ sudo apt install nvidia-cuda-toolkit
{% endhighlight %}

Install [CUDA Samples](https://github.com/NVIDIA/cuda-samples?tab=readme-ov-file#cuda-samples)

{% highlight bash %}
$ git clone https://github.com/NVIDIA/cuda-samples.git
$ mkdir build && cd build
$ cmake ..
$ make deviceQuery

# test
$ ./Sample/1_Utilities/deviceQuery/deviceQuery
# If this require sudo (to fix nodevice found) there is a permission issue
{% endhighlight %}

see
- [ Installing NVIDIA RTX 5070 / 5070 Ti Drivers and CUDA 12.8 on Debian/Ubuntu 24.04 with Secure Boot Enabled ](https://gist.github.com/devatnull/8e63126e7f2a737c1b05a42822f69eda)