---
title: OpenCLIP (OpenAI)
published: true
tags: AI generative-AI word2vec pytorch
toc: true
---
> how totransforms Image Classification into a Text-Image similarity matching task. - [youtube](https://www.youtube.com/watch?v=u0HG77RNhPE) / [github](https://github.com/openai/CLIP)

# [C++](https://chatgpt.com/share/69aacf70-2464-800d-8dec-8bc7cb66c71c)

## [clip.cpp](https://github.com/monatis/clip.cpp?tab=readme-ov-file#clipcpp)

CLIP inference in plain C/C++ with no extra dependencies

**Features**
- Dependency-free and lightweight inference thanks to ggml.
- 4-bit, 5-bit and 8-bit quantization support.
- Support inference with text-only, vision-only and two-tower model variants. It might be relevant to use a single modality in certain cases, as in encoders for large multimodal models, or building and/or searching for semantic image search.
- Dependency free Python binding without relying any large third-party packages. No need for Numpy, TensorFlow, PyTorch, ONNX etc. In fact, nothing more than the standard Python library.

### [Image search](https://github.com/monatis/clip.cpp/blob/main/examples/image-search/README.md#image-search)

Use image-search-build to build the database of images and their embeddings beforehand. Currently it does not support updating.

Use image-search to search for indexed images by semantic similarity.

# PyTorch

## [Install](https://www.codegenes.net/blog/open_clip_pytorch_model/#2-installation)

{% highlight bash %}
$ pip install open_clip_torch
{% endhighlight %}

# OpenCV

- [example](https://github.com/hpc203/Chinese-CLIP-opencv-onnxrun/blob/main/cpp/src/main.cpp)

see also
- [CLIP: Connecting text and images](https://openai.com/index/clip/)
	- [Hugging Face](https://huggingface.co/docs/transformers/model_doc/clip)
