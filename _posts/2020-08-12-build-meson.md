---
published: true
title: The Meson build system
tags: build-system meson turing-complete  dlang c++ vscode
toc: true
---
> The main design point of Meson is that every moment a developer spends writing or debugging build definitions is a second wasted. So is every second spent waiting for the build system to actually start compiling code. - [Meson](https://mesonbuild.com/index.html)

<link rel="shortcut icon" href="https://mesonbuild.com/assets/images/favicon.png" type="image/png" />

**Prefer latest version >= 0.59 rather than prepackaged distrib version**

## [Compiling a Meson project](https://mesonbuild.com/Quick-guide.html#compiling-a-meson-project)

The only thing to note is that you need to create a separate build directory. Meson will not allow you to build source code inside your source tree. All build artifacts are stored in the build directory.

### [meson.build](https://mesonbuild.com/Tutorial.html) file
{% highlight bash %}
$ mkdir new_project && cd new_project
$ meson init               # for creating project from scratch 
$ meson build && cd build
$ meson compile
$ meson test
{% endhighlight %}

{% highlight ruby %}
project('tutorial', 'cpp')
gtkdep = dependency('gtk+-3.0')
executable('demo', 'main.cc', dependencies : gtkdep)
{% endhighlight %}

### [Optimized build](https://stackoverflow.com/questions/64794068/how-to-set-debug-and-optimization-flag-with-meson/69188608#69188608)

{% highlight bash %}
$ meson --reconfigure --buildtype=debugoptimized # or debug or release
{% endhighlight %}

### [Include directories](https://mesonbuild.com/Reference-manual_returned_inc.html)

{% highlight ruby %}
incdir = include_directories('include')
executable('someprog', 'someprog.c', include_directories : incdir)

{% endhighlight %}

## [Subprojects](https://mesonbuild.com/Subprojects.html)

Meson allows you to take any other Meson project and make it a part of your build without (in the best case) any changes to its Meson setup. It becomes a transparent part of the project. 

All subprojects must be inside _subprojects_ directory inside your _project_ folder.
{% highlight bash %}
$ mkdir subprojects
{% endhighlight %}


see also 
- [Subproject limitations](https://github.com/mesonbuild/meson/issues/422)
- [**How to force subproject vs system library**](https://chatgpt.com/share/6701a1f4-bbc8-800d-942e-4b78d8e1f676) in Meson.

[CMake based subprojects](https://mesonbuild.com/CMake-module.html#cmake-subprojects) are also supported but not guaranteed to work.

{% highlight ruby %}
# Configure the CMake project
cmake = import('cmake')

## folly CMake require https://github.com/fmtlib/fmt.git to be installed
libfolly = cmake.subproject('libfolly')
{% endhighlight %}

### [Wrap file](https://mesonbuild.com/Wrap-dependency-system-manual.html) 

Wrap file tells Meson how to download it for you. If you then use this subproject in your build, Meson will automatically download and extract it during build. This makes subproject embedding extremely easy.

They provide a very powerfull mechanism, that also allows to patch non-meson project to make them meson compatible, for eg see [Implot integration]({% post_url 2024-01-02-matplotlib %}#implot).

**see [Wrap DB](https://wrapdb.mesonbuild.com/)/[2](https://github.com/mesonbuild/wrapdb/tree/master)**, to automatically get them for known libs.
For eg:

{% highlight bash %}
# get already existing wrap for imgui (which include the required patch to make it work with meson build system)
$ meson wrap install imgui

# use wrap to retrieve the dependancy and launch build
$ meson build .
{% endhighlight %}

Otherwise, they can be written manually.
For eg: having in `./subprojects/libfolly.wrap`, will have meson automatically get folly from git repos at url with proper revision.

{% highlight ruby %}
[wrap-git]
url = https://github.com/facebook/folly.git
revision = v2021.06.14.00
{% endhighlight %}

[**.gitignore** Meson subprojects](https://www.scivision.dev/git-ignore-meson-subproject/) - For Meson subprojects, using the negate .gitignore syntax Git will ignore subdirectories but track the subprojects/*.wrap files, by including in the project top-level .gitignore:
{% highlight bash %}
/subprojects/*
!/subprojects/*.wrap
!/subprojects/packagefiles/
{% endhighlight %}

## Using [pkg-config](https://stackoverflow.com/a/68932575/51386)

Meson provides the dependency() abstraction for working with pkg-config, cmake, various *-config tools, and a few built in dependencies that Meson has to save everyone reimplementing them, you would simply write:

{% highlight bash %}
dep_gstreamer = dependency('gstreamer-1.0')
dep_gsreamer_video = dependency('gstreamer-video-1.0')
# note that each dependency call finds 1 dependency
{% endhighlight %}

then you'd pass them to your targets:

{% highlight bash %}
build_target(
  'name',
  sources,
  dependencies : [dep_gstreamer, dep_gstreamer_video]
)
{% endhighlight %}

### Generating [pkg-config](https://mesonbuild.com/Pkg-config-files.html)

Meson can also generate pkg info when compiling libs.

## [Native config files](https://mesonbuild.com/Release-notes-for-0-49-0.html#native-config-files)
Meson has separation between project build descriptions in meson.build, and compilation environment / toolchain descriptions in native/cross files.
- [How do I choose which compiler Meson will use](https://github.com/mesonbuild/meson/issues/1752)

Native files (--native-file) are the counterpart to cross files (--cross-file), and allow specifying information about the build machine, [both when cross compiling and when not](https://mesonbuild.com/Machine-files.html).

{% highlight ruby %}
# ~/.local/share/meson/cross/codingame
# meson builddir/ --native-file codingame
[binaries]               
cpp = 'g++-9'
{% endhighlight %}

## [Cross compilation](https://mesonbuild.com/Cross-compilation.html)
Meson requires you to write a [cross build definition file](https://mesonbuild.com/Cross-compilation.html#cross-file-locations). It defines various properties of the cross build environment. The cross file consists of different sections.

Let's suppose you are on a 64 bit OSX machine and you are cross compiling a binary that will run on a 32 bit ARM Linux board. In this case your build machine is 64 bit OSX, your host machine is 32 bit ARM Linux and your target machine is irrelevant (but defaults to the same value as the host machine).

### ARM Cross compilation
your `host_machine` is [ARM](https://mesonbuild.com/Reference-tables.html#cpu-families) Linux

{% highlight ruby %}
# ~/.local/share/meson/cross/remarkable
# meson builddir/ --cross-file remarkable
[host_machine]               
system = 'linux'             
cpu_family = 'arm'           
cpu = 'armv7l'            
endian = 'little'
{% endhighlight %}


## [Meson vs X](https://en.wikipedia.org/wiki/Meson_(software)#Language) / [SO](https://stackoverflow.com/questions/5837764/autotools-vs-cmake-for-both-windows-and-linux-compilation/24953691#24953691)

> Why I'd choose Meson+Doctest tech stack to create a new C++ project with a reusable and easy-to-run example - [Choosing a Modern C++ stack](https://carlosvin.github.io/posts/choosing-modern-cpp-stack/en/) / [The Rise of Meson](https://news.ycombinator.com/item?id=28372545)

- [Why we chose Meson as our build system](https://rizin.re/posts/why-meson/)
- [Getting started with Meson build system and C++](https://medium.com/@germandiagogomez/getting-started-with-meson-build-system-and-c-83270f444bee) / [2](https://medium.com/@germandiagogomez/getting-started-with-meson-in-c-part-2-58150354ff17) / [3](https://medium.com/@germandiagogomez/getting-started-with-meson-in-c-part-3-70b9bc419957) / [4](https://medium.com/@germandiagogomez/getting-started-with-meson-part-4-8bceec6149e1)
- [Do not use Meson](https://www.rojtberg.net/1481/do-not-use-meson/)

## Typical build
{% highlight bash %}
$ meson build .  (1)
$ cd build
$ ninja build    (2)
$ ninja test     (3)
{% endhighlight %}

1. First time you configure the project
2. Each time you build it
3. Each time you run tests

## [Install ⬇](https://mesonbuild.com/Quick-guide.html#installation-using-package-manager)

> Due to our frequent release cycle and development speed, distro packaged software may quickly become outdated.

### [Downloading Meson](https://mesonbuild.com/Getting-meson.html#downloading-meson)
Meson releases can be downloaded from the [GitHub release page](https://github.com/mesonbuild/meson/releases), and you can run ./meson.py from inside a release or the git repository itself without doing anything special.

### ??

- [ModuleNotFoundError: No module named 'mesonbuild](https://github.com/mesonbuild/meson/issues/7258)

To install with `sudo ninja install` you need to have meson & ninja available for _root_ user.
And you need _root_ meson in the same version as the one having build the project.

{% highlight bash %}
# sudo -i   # for root install
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python3 get-pip.py
$ python3 -m pip install meson
{% endhighlight %}

### VSCode
- [Meson & VSCode: Develop your project in a modern IDE](https://www.collabora.com/news-and-blog/blog/2023/04/18/meson-and-vscode-develop-your-project-modern-ide/)

## Features
- multiplatform support for Linux, macOS, Windows, GCC, Clang, Visual Studio and others
- supported languages include C, C++, D, Fortran, Java, Rust
- build definitions in a very readable and user friendly non-Turing complete DSL
- cross compilation for many operating systems as well as bare metal
optimized for extremely fast full and incremental builds without sacrificing correctness
- built-in multiplatform dependency provider that works together with distro packages

## FAQ
- Why is Meson's configuration language not Turing-complete? - [Against The Use Of Programming Languages in Configuration Files](https://taint.org/2011/02/18/001527a.html)
- [Making build systems not suck!](https://lca2015.linux.org.au/slides/140/meson-lca2015.pdf)
