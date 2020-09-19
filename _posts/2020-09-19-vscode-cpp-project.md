---
published: true
title: Setup VSCode for C++ Projects
tags: c++ vscode
---
> show how to set up C++ Compiler with Visual Studio Code. - [Setup Visual Studio Code for Multi-File C++ Projects](https://dev.to/talhabalaj/setup-visual-studio-code-for-multi-file-c-projects-1jpi)

## Setting up 
we can map VSCode's build keyboard shortcut to task by making it of type `build`. The easiest way to set up tasks is to press `ctrl+shift+b`.

### Build task
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

### Debug Task
`launch.json`
{% highlight json %}
"preLaunchTask": "build"
{% endhighlight %}
