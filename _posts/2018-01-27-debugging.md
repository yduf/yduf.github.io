---
title: Linux Debugger
published: true
tags: debug linux debug-c++
---
> prefered  [VSCode with LLDB]({% post_url 2022-09-26-debug-vscode-lldb %})

## [CodeBlocks](http://www.codeblocks.org/) - [Require a project](https://stackoverflow.com/a/30779749/51386)
Create an empty project in target folder, point it to existing binary and add sources using recursive options.

### [Debugger advanced features](http://www.codeblocks.org/features):
- set next statement
- data breakpoint / conditions / counts
- Breakpoints could not work if the path/folder you've placed your project contains spaces - [Path with spaces](http://wiki.codeblocks.org/index.php/Debugging_with_Code::Blocks#Path_with_spaces)

### Install
{% highlight bash %}
$ sudo apt-get install codeblocks
{% endhighlight %}

## [KDevelop](https://www.kdevelop.org/) - Require a project 
Full IDE + debug can work with makefile project.

from menu Project / New from template
then Category=Standard / Project type = terminal => C++ with Make

choose folder (can be existing folder)
give project a name (this must create a new none existing folder)

move/copy cpp files into that folder
modify make to launch build

- build
- Debug Launch
	add new Executable => give path to executable

### Install
- [appImage](https://www.kdevelop.org/download)

## GNAT

## [Nemiver](https://wiki.gnome.org/Apps/Nemiver/Features)

## [kdbg](https://github.com/j6t/kdbg)
