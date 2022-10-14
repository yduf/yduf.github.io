---
published: true
title: lldb
tags: debug-c++ vscode
---
> [CodeLLDB](https://github.com/vadimcn/vscode-lldb)

- [CodeLLDB User's Manual](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md) - how to use this extension.
	- [Attaching to a Running Process](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#attaching-to-a-running-process)
    - [Debugging Externally Launched Code](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#attaching-to-a-running-process)
    - [Stdio Redirection](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#stdio-redirection)
	- [Data visualization](https://github.com/vadimcn/vscode-lldb/wiki/Data-visualization)
    - [Time travel debugging](https://github.com/vadimcn/vscode-lldb/blob/v1.7.4/MANUAL.md#reverse-debugging)
- [Debugging in VS Code](https://code.visualstudio.com/docs/editor/debugging) - if you are new to VSCode debugging.

## [LLDB launch config](https://github.com/yduf/lldb-vscode-debug/blob/master/.vscode/launch.json)

- [Debug a C++ project in VS Code](https://www.youtube.com/watch?v=G9gnSGKYIg4) - launch syntax is different for each plugin.

**Example** of lldb plugin, invoking python script on conditional break, to have a custom visualisation of program state.

[![caption](https://github.com/vadimcn/vscode-lldb/raw/master/images/plotting.png)](https://github.com/vadimcn/vscode-lldb)
