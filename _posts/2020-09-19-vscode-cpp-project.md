---
published: true
title: Debug & Build C++ Project (VSCode)
tags: debug-c++ vscode gdb c++
---
> How to set up C++ Compiler with Visual Studio Code. - [Setup Visual Studio Code for Multi-File C++ Projects](https://dev.to/talhabalaj/setup-visual-studio-code-for-multi-file-c-projects-1jpi)

see also
- [C++ in VS Code: A Quick Guide](https://www.youtube.com/watch?v=qeEcV6u1kV4&t=24s)
- [Godot Docs](https://docs.godotengine.org/en/latest/contributing/development/configuring_an_ide/visual_studio_code.html)

### Notes
In  `~/.cache/vscode-cpptools` you will find that [VSCode store](https://github.com/microsoft/vscode-cpptools/issues/12066) a huge amount of file info, that you can safely clean to regain some disk spaces.


### Quick start
Install [Code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension.

Customize it inside your project to have includes path, eg:
{% highlight json %}
// Edit Executor map
"code-runner.executorMap": {
        "cpp": "cd $dir && g++ -std=c++20 -I ~/DEV/cpp -g $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
{% endhighlight %}

For one file program, it's good enough => It will compile them with debug info, in an executable of same name (use )

To debug this single files, use the [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) microsoft extension and invoke directly the gdb config (using current file as target).

{% highlight json %}
// in .vscode/launch.json
{
  "configurations": [
    {
      "name": "(gdb) Launch",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}/${fileBasenameNoExtension}",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${fileDirname}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        },
        {
          "description": "Set Disassembly Flavor to Intel",
          "text": "-gdb-set disassembly-flavor intel",
          "ignoreFailures": true
        }
      ]
    }
  ],
  "version": "2.0.0"
}
{% endhighlight %}


### [Build task](https://code.visualstudio.com/Docs/editor/tasks) - `ctrl+shift+b`

VSCode's build in keyboard shortcut to task by making it of type `build`. The easiest way to set up tasks is to press `ctrl+shift+b`.

In fiel `.vscode/tasks.json` 
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

### [Debug Task](https://code.visualstudio.com/docs/editor/debugging) / [LLDB]({% post_url 2022-09-26-debug-vscode-lldb %}) / [GDB]({% post_url 2023-02-03-debug-gdb %})
`Ctrl+F5` => Run / `F5` => Debug

`launch.json`
{% highlight json %}
"preLaunchTask": "build"
{% endhighlight %}


### [C/C++ configurations](https://code.visualstudio.com/docs/cpp/config-msvc#_cc-configurations)
- [c_cpp_properties.json reference](https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference)
