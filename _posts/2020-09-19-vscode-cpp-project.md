---
published: true
title: Setup VSCode build/debug for Project
tags: c++ vscode debug gdb
---
> show how to set up C++ Compiler with Visual Studio Code. - [Setup Visual Studio Code for Multi-File C++ Projects](https://dev.to/talhabalaj/setup-visual-studio-code-for-multi-file-c-projects-1jpi)

## Setting up 
we can map VSCode's build keyboard shortcut to task by making it of type `build`. The easiest way to set up tasks is to press `ctrl+shift+b`.

### [Build task](https://code.visualstudio.com/Docs/editor/tasks)
`tasks.json` 
{% highlight json %}
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "shell",
            "command": "make",
            "group": {
                "kind": "build",
                "isDefault": true,
            },
            
            "problemMatcher": "$gcc"
        }
    ]
}
{% endhighlight %}

### [Debug Task](https://code.visualstudio.com/docs/editor/debugging)
- `Ctrl+F5` => Run
- `F5` => Debug

`launch.json`
{% highlight json %}
"preLaunchTask": "build"
{% endhighlight %}

- [codeLLDB](https://github.com/vadimcn/vscode-lldb)

- [gdb setup](https://github.com/Microsoft/vscode-cpptools/issues/106)
- [gdb with input redirection](https://stackoverflow.com/questions/4758175/how-to-use-gdb-with-input-redirection)
- [gdb - debugging with pipe](https://stackoverflow.com/questions/1456253/gdb-debugging-with-pipe)

### [C/C++ configurations](https://code.visualstudio.com/docs/cpp/config-msvc#_cc-configurations)
- [c_cpp_properties.json reference](https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference)
