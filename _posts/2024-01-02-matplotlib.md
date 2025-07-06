---
published: true
title: Matplot
tags: math imgui lib python visualizer
---
> Various lib for plotting from c++, ruby or python - [Matplotlib](https://matplotlib.org/) / [github](https://github.com/matplotlib/matplotlib) / [wikipedia](https://en.wikipedia.org/wiki/Matplotlib)

### Ruby
- [Matplotlib](https://github.com/mrkn/matplotlib.rb#matplotlib) - enables to directly call matplotlib from Ruby language. This is built on top of pycall.

## ImGui / C++

### [ImPlot](https://github.com/epezent/implot?tab=readme-ov-file#implot)
> A 2D immediate mode, GPU accelerated plotting library.

Using as [meson **wrap-git**]({% post_url 2020-08-12-build-meson %}#subprojects) with [GLFW + ImGui (+ SKIA)]({% post_url 2024-10-05-glfw %})

add _subprojects/implot.wrap_
{% highlight ini %}
[wrap-git]
directory = implot
url = https://github.com/epezent/implot.git
revision = master  # Or pin a specific commit
depth = 1
{% endhighlight %}

{% highlight ini %}
[wrap-git]
directory = implot
url = https://github.com/epezent/implot.git
revision = master  # Or pin a specific commit
depth = 1
{% endhighlight %}


update _meson.build_
{% highlight ini %}
[wrap-git]
directory = implot
url = https://github.com/epezent/implot.git
revision = master  # Or pin a specific commit
depth = 1
{% endhighlight %}

[![demo](https://raw.githubusercontent.com/wiki/epezent/implot/screenshots3/example.PNG)](https://github.com/epezent/implot?tab=readme-ov-file#usage)

- [implot3d](https://github.com/brenocq/implot3d?tab=readme-ov-file#implot3d) / [HN](https://news.ycombinator.com/item?id=42448913) - easy-to-use, high-performance 3D plotting functionality. 

