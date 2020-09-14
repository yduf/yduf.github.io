---
published: true
title: How to build your own AlphaZero
tags: AI jupyter tensorflow
---
> With this, AlphaZero was born — the general algorithm for getting good at something, quickly, without any prior knowledge of human expert strategy. - [Applied Data Science](https://medium.com/applied-data-science/how-to-build-your-own-alphazero-ai-using-python-and-keras-7f664945c188)

![caption](https://miro.medium.com/max/902/1*ROq9V2D5eR_dDFFFfjA5zw.png)

## Learning Algorithm summary

- Mentally play through possible future scenarios, giving priority to promising paths, whilst also considering how others are most likely to react to your actions and continuing to explore the unknown.

- After reaching a state that is unfamiliar, evaluate how favourable you believe the position to be and cascade the score back through previous positions in the mental pathway that led to this point.

- After you’ve finished thinking about future possibilities, take the action that you’ve explored the most.

- At the end of the game, go back and evaluate where you misjudged the value of the future positions and update your understanding accordingly.

## Code
see also [AlphaGo Zero cheat sheet](https://medium.com/applied-data-science/how-to-build-your-own-alphazero-ai-using-python-and-keras-7f664945c188)

- [Jupyter]({% post_url 2020-07-18-python-jupyter %}) notebook for [DeepReinforcementLearning (github)](https://github.com/yduf/DeepReinforcementLearning)

## Requirement
- Keras / matplotlib

{% highlight bash %}
pip3 install keras matplotlib pydot
apt-get update
apt-get install graphviz
{% endhighlight %}

## Launch first 2 paragraph

{% highlight bash %}
ITERATION NUMBER 1
BEST PLAYER VERSION 0
SELF PLAYING 25 EPISODES...
1 2 3 4 5 6 7 => to 25 # defined in config.py/EPISODES
{% endhighlight %}

{% highlight bash %}
ITERATION NUMBER 1
BEST PLAYER VERSION 0
SELF PLAYING 25 EPISODES...
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 
{% endhighlight %}

### Issues
- [AttributeError: 'dict' object has no attribute 'name'](https://github.com/tensorflow/tensorflow/issues/38988) - tensorflow issue

{% highlight python %}
# workaround below
current_NN.model._layers = [layer for layer in current_NN.model._layers if not isinstance(layer, dict)]
plot_model(current_NN.model, to_file=run_folder + 'models/model.png', show_shapes = True)
{% endhighlight %}

- [The Conv2D op currently only supports the NHWC tensor format on the CPU](https://github.com/onnx/onnx-tensorflow/issues/535) - Solved by conda install (tensofflow > 2.x)

### Dependencies

{% highlight bash %}
conda install jupyter
conda install keras
conda install matplotlib
conda install pydot
sudo apt-get install graphviz
{% endhighlight %}

## Dependencies to add to docker images

{% highlight bash %}
pip3 install matplotlib
pip3 install pydot pydot-ng
pip3 install graphviz

apt-get update && apt-get install graphviz
{% endhighlight %}
