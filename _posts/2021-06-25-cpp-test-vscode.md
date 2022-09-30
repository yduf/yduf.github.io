---
published: true
title: C++ TestMate (VSCode)
tags: vscode test c++
---
>  run your Catch2, Google Test and DOCtest tests using the Test Explorer for Visual Studio Code. It also have basic support for Google Benchmark. - [Home](https://github.com/matepek/vscode-catch2-test-adapter)

see also
- [Test Explorer Status Bar extension](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-test-explorer-status-bar)

## [Configuration](https://github.com/matepek/vscode-catch2-test-adapter#configuration)
Just add the list of test executables, to `.vscode/settings.json` (or globally in `~/.config/Code/User/settings.json`):
{% highlight json %}
{
    "testMate.cpp.test.executables": "**/Test*"
}
{% endhighlight %}

![caption](https://raw.githubusercontent.com/matepek/vscode-catch2-test-adapter/master/resources/Screenshot_2019-05-29.png)
