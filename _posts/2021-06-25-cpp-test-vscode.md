---
published: true
title: C++ TestMate (VSCode)
tags: vscode test c++
---
>  run your Catch2, Google Test and DOCtest tests using the Test Explorer for Visual Studio Code. It also have basic support for Google Benchmark. - [Home](https://github.com/matepek/vscode-catch2-test-adapter)

Just add the list of test executables, to `.vscode/settings.json`:
{% highlight json %}
{
    "testMate.cpp.test.advancedExecutables": [
        "MCTS4/build/Test"
        ],
}
{% endhighlight %}