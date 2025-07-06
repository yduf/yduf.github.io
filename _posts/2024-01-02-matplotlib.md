---
published: true
title: Matplot
tags: math imgui lib python visualizer meson
---
> Various lib for plotting from c++, ruby or python - [Matplotlib](https://matplotlib.org/) / [github](https://github.com/matplotlib/matplotlib) / [wikipedia](https://en.wikipedia.org/wiki/Matplotlib)

### Ruby
- [Matplotlib](https://github.com/mrkn/matplotlib.rb#matplotlib) - enables to directly call matplotlib from Ruby language. This is built on top of pycall.

## ImGui / C++

### [ImPlot](https://github.com/epezent/implot?tab=readme-ov-file#implot)
> A 2D immediate mode, GPU accelerated plotting library.

Using as [meson **wrap-git**]({% post_url 2020-08-12-build-meson %}#subprojects) with [GLFW + ImGui (+ SKIA)]({% post_url 2024-10-05-glfw %})

<pre>
your_project/
├── subprojects/
│   ├── implot.wrap
│   └── packagefiles/
│       └── implot/               <-- must match directory = implot
│           └── meson.build       <-- must be here
</pre>

add _subprojects/implot.wrap_
{% highlight ini %}
[wrap-git]
directory = implot
url = https://github.com/epezent/implot.git
 
# Or pin a specific commit
revision = master
depth = 1

patch_directory = implot_patch
{% endhighlight %}

add _subprojects/packagefiles/implot/meson.build_
{% highlight meson %}
# https://github.com/epezent/implot?tab=readme-ov-file#integration
project('implot', 'cpp')

implot_sources = files(
  'implot.cpp',
  'implot_items.cpp',
)

implot_lib = static_library(
  'implot',
  implot_sources,
  include_directories: include_directories('.'),
  dependencies: [dependency('imgui', fallback: ['imgui', 'imgui_dep'])],
)

implot_dep = declare_dependency(
  link_with: implot_lib,
  include_directories: include_directories('.'),
)

meson.override_dependency('implot', implot_dep)
{% endhighlight %}

update your project _meson.build_
{% highlight meson %}
implot_dep = dependency('implot', fallback: ['implot', 'implot_dep'])

**Notes**
- Meson **merge together git clone+patch once** when issuing `$ meson setup build .`
- afterwhat modifying subprojects/packagefiles/implot/meson.build won't be taken into account
- you need to delete `subprojects/implot` and do the setup again to make it happen.
- or run (?) `meson subprojects update`

# Example executable
executable('my_app',
  sources,
  dependencies: [implot_dep],
)
{% endhighlight %}

[![demo](https://raw.githubusercontent.com/wiki/epezent/implot/screenshots3/example.PNG)](https://github.com/epezent/implot?tab=readme-ov-file#usage)

- [implot3d](https://github.com/brenocq/implot3d?tab=readme-ov-file#implot3d) / [HN](https://news.ycombinator.com/item?id=42448913) - easy-to-use, high-performance 3D plotting functionality. 

