---
published: true
title: C++ Project - Debug & Build (VSCode) 🐛
tags: debug-c++ vscode gdb c++ build-system
toc: truetm
---
> How to set up C++ Compiler with Visual Studio Code. - [Setup Visual Studio Code for Multi-File C++ Projects](https://dev.to/talhabalaj/setup-visual-studio-code-for-multi-file-c-projects-1jpi)

<link rel="shortcut icon" href="https://code.visualstudio.com/favicon.ico" type="image/x-icon" />

see also
- [C++ in VS Code: A Quick Guide](https://www.youtube.com/watch?v=qeEcV6u1kV4&t=24s)
- [Godot Docs](https://docs.godotengine.org/en/latest/contributing/development/configuring_an_ide/visual_studio_code.html)

# Toolings
## [_clangd ⮺](https://open-vsx.org/extension/llvm-vs-code-extensions/vscode-clangd)
This is an opensource alternatives to microscoft extension which are not supported by VSCodium or Code-server.
Provides C/C++ language IDE features for VS Code
- code completion
- compile errors and warnings
- go-to-definition and cross references
- include management
- code formatting
- simple refactorings

Fill more snappy and less ressource hungry than microsoft native solution.

<div class="encart blue" markdown="1">
**Notes**  
cf [setup clangd](https://chatgpt.com/share/69c138a9-c084-800d-9125-13fcc2ba88ac)  
Additional [setup is needed for local header](https://chatgpt.com/share/69e49319-bdd8-83eb-9ad1-5c1d7d510445)
</div>

**For global includes** the best way to expose them is to have `.clangd` file:

{% highlight json %}
CompileFlags:
  Add: [
    "-I/home/yves/DEV/cpp/"
  ]
{% endhighlight %}

**For local includes** that are spread out in project workspace (my CodingGame style)...

Here [the workaround](https://chatgpt.com/share/69e4be31-0e78-83eb-b692-49f17b1954c4) is to have script to generate a `compile_flags.txt` (since there is no matching compilatino),
to expose them to clangd (it can be replayed anytime you need).

<details markdown="1"><summary>clangd_init.rb</summary>
{% highlight ruby %}
#!/usr/bin/env ruby
require 'set'
require 'pathname'

root = (ARGV[0] || Dir.pwd)
root_path = Pathname.new(root).realpath

header_dirs = Set.new

# Collect directories containing .hh files
Dir.glob(File.join(root_path, "**/*.hh")).each do |file|
  header_dirs << File.dirname(Pathname.new(file).realpath.to_s)
end

# Always include project root
header_dirs << root_path.to_s

flags = []
flags << "-std=c++20"
flags << "-x"
flags << "c++"

header_dirs.each do |dir|
  flags << "-I#{dir}"
end

File.write(File.join(root_path, "compile_flags.txt"), flags.join("\n") + "\n")

puts "Generated compile_flags.txt with #{header_dirs.size} include paths"
{% endhighlight %}

</details>

It would output something very concise like:
{% highlight ini %}
-std=c++20
-x
c++
-I/home/yves/DEV/Codingame/CG-Winter-Challenge-2026-SnakeByte
-I/home/yves/DEV/Codingame/CG-Winter-Challenge-2026-SnakeByte/smitsimax
{% endhighlight %}

## C/C++ Extension Pack

> Is the dark side stronger?
> No… no… no. Quicker, easier, more seductive. - [Yoda](https://scifi.stackexchange.com/questions/79178/is-the-dark-side-of-the-force-more-powerful)

This is the microsoft extension that work only with VSCode.
It is also quite ressources hungry.
This is the easy path - 

<div class="encart orange" markdown="1">
**Notes**  
In  `~/.cache/vscode-cpptools` you will find that [VSCode store](https://github.com/microsoft/vscode-cpptools/issues/12066) a huge amount of file info, that you can safely clean to regain some disk spaces.

</div>

## Others
- [C++ TestMate]({% post_url 2021-06-25-cpp-test-vscode %}) - run unit Test inside VSCode
- [Disassembly Explorer]({% post_url 2017-12-18-compiler-explorer %}) - an alternative to [Compiler explorer]({% post_url 2017-12-18-compiler-explorer %})

# Quick start

## [Code runner ⮺](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
Install [Code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension.

Customize it inside your project to have includes path, eg:
{% highlight json %}
// Edit Executor map
"code-runner.executorMap": {
        "cpp": "cd $dir && g++ -std=c++20 -I ~/DEV/cpp -g $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
{% endhighlight %}

For one file program, it's good enough => It will compile them with debug info, in an executable of same name (use )

## Debug w/MS
To debug this single files, use the [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) microsoft extension and invoke directly the gdb config (using current file as target).

<details markdown="1"><summary>.vscode/launch.json</summary>
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
</details>



## [Build task ⮺](https://code.visualstudio.com/Docs/editor/tasks) - `ctrl+shift+b`

VSCode's build in keyboard shortcut to task by making it of type `build`. The easiest way to set up tasks is to press `ctrl+shift+b`.

<details markdown="1"><summary>.vscode/tasks.json</summary>
{% highlight json %}
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "shell",
            "command": "make",	// your shell command here
            "group": {
                "kind": "build",
                "isDefault": true,
            },
            
            "problemMatcher": "$gcc"
        }
    ]
}
{% endhighlight %}
</details>


## [Debug Task ⮺](https://code.visualstudio.com/docs/editor/debugging) / [LLDB]({% post_url 2022-09-26-debug-vscode-lldb %}) / [GDB]({% post_url 2023-02-03-debug-gdb %})
`Ctrl+F5` => Run / `F5` => Debug

`launch.json`
{% highlight json %}
"preLaunchTask": "build"
{% endhighlight %}


## [C/C++ configurations ⮺](https://code.visualstudio.com/docs/cpp/config-msvc#_cc-configurations)
- [c_cpp_properties.json reference](https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference)
