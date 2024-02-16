---
published: true
title: Meta's Segment Anything (SAMIST)
tags: segmentation AI project
---
> Segment Anything Model (SAM) produces high quality object masks from input prompts such as points or boxes, and it can be used to generate masks for all objects in an image. - [SAM.cpp](https://github.com/YavorGIvanov/sam.cpp?tab=readme-ov-file#samcpp) / [HN](https://news.ycombinator.com/item?id=37398891) 

### [SAM.cpp](https://github.com/YavorGIvanov/sam.cpp?tab=readme-ov-file#samcpp)

Needs [pytorch](https://github.com/pytorch/pytorch?tab=readme-ov-file#docker-image) for model conversion

{% highlight bash %}
$ podman run --gpus all --rm -ti --ipc=host -v /home/yves/DEV/Segmentatio/sam.cpp/:/workspace pytorch/pytorch:latest
# Convert PTH model to ggml. Requires python3, torch and numpy
python convert-pth-to-ggml.py checkpoints/sam_vit_b_01ec64.pth . 1
{% endhighlight %}

{% highlight bash %}
# run inference
$ ./bin/sam -t 16 -m ../checkpoints/ggml-model-f16.bin -i ../img.jpg 
{% endhighlight %}
### [SAMIST](https://github.com/dibrale/samist?tab=readme-ov-file#samist) 

list different models with different size.


[![caption](https://github.com/facebookresearch/segment-anything/raw/main/assets/masks2.jpg?raw=true)](https://github.com/facebookresearch/segment-anything/?tab=readme-ov-file#segment-anything)
