---
published: true
title: lldb
tags: debug-c++ vscode
---
> integrated in VSCode - [CodeLLDB](https://github.com/vadimcn/vscode-lldb)

- [CodeLLDB User's Manual](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md) - how to use this extension.
	- [Attaching to a Running Process](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#attaching-to-a-running-process)
    - [Debugging Externally Launched Code](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#attaching-to-a-running-process)
    - [Stdio Redirection](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#stdio-redirection)
	- [Data visualization](https://github.com/vadimcn/vscode-lldb/wiki/Data-visualization)
    - [Time travel debugging](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#reverse-debugging)
- [Debugging in VS Code](https://code.visualstudio.com/docs/editor/debugging) - if you are new to VSCode debugging.

## [LLDB launch config](https://github.com/yduf/lldb-vscode-debug/blob/master/.vscode/launch.json)

- [Debug a C++ project in VS Code](https://www.youtube.com/watch?v=G9gnSGKYIg4) - launch syntax is different for each plugin.


{% highlight json %}
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "lldb",
            "request": "launch",
            "name": "Debug",
            "program": "build/cg",
            "preLaunchTask": "cg-build",		// build task to invoke before launching debugger, see below for definition
            //"program": "${fileDirname}/${fileBasenameNoExtension}",
            "args": [],
            "stdio": ["test_21.txt"],
            "cwd": "${workspaceFolder}",
            "stopOnEntry": false,

            "initCommands": [ // in debug script fonctionnality
                "command script import ${workspaceRoot}/debug/debugvis.py" // <<<<< This is the important bit
            ]
        }
    ]
}
{% endhighlight %}

**Example** of lldb plugin, invoking python script on conditional break, to have a custom visualisation of program state.

[![caption](https://github.com/vadimcn/vscode-lldb/raw/master/images/plotting.png)](https://github.com/vadimcn/vscode-lldb)

## [How run build task automatically before debugging in Visual Studio Code?](https://stackoverflow.com/questions/57891050/how-run-build-task-automatically-before-debugging-in-visual-studio-code)

{% highlight json %}
{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "cg-build",
        "command": "ninja",
        "args": [],
        "options": {
          "cwd": "${workspaceFolder}/"
        }
      }
    ]
}
{% endhighlight %}