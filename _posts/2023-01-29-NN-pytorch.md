---
published: true
title: Pytorch
tags: NN amd
---
>  Facebook open-source and free framework based on the Torch library. - [Home](https://pytorch.org/)

see also
- [PyTorch 2.0](https://pytorch.org/get-started/pytorch-2.0/) - Get Started

## Install

with [ROCm]({% post_url 2020-07-24-amd-gpu %}) as prerequesite.

{% highlight bash %}
# 1.3GB Download
$ pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/rocm5.2
...
Successfully installed torch-1.13.1+rocm5.2 torchaudio-0.13.1+rocm5.2 torchvision-0.14.1+rocm5.2 typing-extensions-4.4.0
{% endhighlight %}


### Docker images

{% highlight bash %}
$ podman run --gpus all --rm -ti --ipc=host -v /home/yves/DEV/:/workspace pytorch/pytorch:latest
{% endhighlight %}

### [Verify installation](https://pytorch.org/get-started/locally/#linux-verification)

Using python repl: run `python3`, and copy past code below.

{% highlight python %}
import torch
x = torch.rand(5, 3)
print(x)
{% endhighlight %}

=> should output a tensor

- [How do I check if PyTorch is using the GPU?](https://stackoverflow.com/questions/48152674/how-do-i-check-if-pytorch-is-using-the-gpu)

Additionally, to check if your GPU driver and CUDA/ROCm is enabled and accessible by PyTorch, run the following commands to return whether or not the GPU driver is enabled (the ROCm build of PyTorch uses the same semantics at the python API level)

{% highlight python %}
torch.cuda.is_available()		# Does PyTorch see any GPUs?
torch.cuda.device_count()
torch.cuda.current_device()
torch.cuda.get_device_name(0)
#
torch.rand(10).device			# Are tensors stored on GPU by default?
torch.set_default_tensor_type(torch.cuda.FloatTensor) # Set default tensor type to CUDA

{% endhighlight %}

=> should be True / 1 / 0 / 'AMD Radeon RX 580 Series'

If crashing with "hipErrorNoBinaryForGpu: Unable to find code object for all current devices!" then [`export HSA_OVERRIDE_GFX_VERSION=10.3.0`](https://stackoverflow.com/questions/73575955/pytorch-hiperrornobinaryforgpu-unable-to-find-code-object-for-all-current-devi)

### [Benchmarking](https://github.com/LukasHedegaard/pytorch-benchmark)

Monitoring on one console with `watch -n 1 rocm-smi` and `htop` in an other

{% highlight python %}
import torch
from torchvision.models import efficientnet_b0
from pytorch_benchmark import benchmark

torch.set_default_tensor_type(torch.cuda.FloatTensor) # enable GPU **this crash the GPU**

model = efficientnet_b0()
sample = torch.randn(8, 3, 224, 224)  # (B, C, H, W)
results = benchmark(model, sample, num_runs=100)
{% endhighlight %}
