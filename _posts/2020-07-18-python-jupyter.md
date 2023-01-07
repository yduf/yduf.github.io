---
published: true
title: Jupyter
tags: repl python notebook jupyter vscode
---
> Open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text - [Jupyter](https://jupyter.org/index.html)

## [Install](https://jupyter.org/install.html)

### [Jupyter Notebook or Lab or VS Code?](https://towardsdatascience.com/jupyter-notebook-or-lab-or-vs-code-b772f8388911)
There are 3 possibilities
- [vscode](https://towardsdatascience.com/jupyter-is-taking-a-big-overhaul-in-visual-studio-code-d9dc621e5f11) - Visual Studio Code supports working with Jupyter Notebooks natively
- [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) - the next-generation web-based user interface for Project Jupyter
- Jupyter Notebook
{% highlight bash %}
sudo pip3 install notebook
jupyter notebook
{% endhighlight %}

### [Using Matplot](https://stackoverflow.com/questions/19410042/how-to-make-ipython-notebook-matplotlib-plot-inline)

{% highlight python %}
import matplotlib
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

x = np.linspace(0, 3*np.pi, 500)
plt.plot(x, np.sin(x**2))
plt.title('A simple chirp')
plt.show()
{% endhighlight %}

### [Using Graphviz](https://h1ros.github.io/posts/introduction-to-graphviz-in-jupyter-notebook/)

{% highlight python %}
from graphviz import Digraph
# Create Digraph object
dot = Digraph()

# Add nodes 1 and 2
dot.node('1')
dot.node('2')

# Add edge between 1 and 2
dot.edges(['12'])

dot
{% endhighlight %}
