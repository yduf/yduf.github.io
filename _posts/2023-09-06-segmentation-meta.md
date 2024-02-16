---
published: true
title: Meta's Segment Anything (SAMIST)
tags: segmentation AI project
---
> Segment Anything Model (SAM) produces high quality object masks from input prompts such as points or boxes, and it can be used to generate masks for all objects in an image. - [SAM.cpp](https://github.com/YavorGIvanov/sam.cpp?tab=readme-ov-file#samcpp) / [HN](https://news.ycombinator.com/item?id=37398891) 

### [SAM.cpp](https://github.com/YavorGIvanov/sam.cpp?tab=readme-ov-file#samcpp)

Needs [pytorch](https://github.com/pytorch/pytorch?tab=readme-ov-file#docker-image) for model conversion

{% highlight bash %}
$ podman run --gpus all --rm -ti --ipc=host pytorch/pytorch:latest
{% endhighlight %}

### [SAMIST](https://github.com/dibrale/samist?tab=readme-ov-file#samist) 

list different models with different size.


[![caption](https://github.com/facebookresearch/segment-anything/raw/main/assets/masks2.jpg?raw=true)](https://github.com/facebookresearch/segment-anything/?tab=readme-ov-file#segment-anything)
