---
title: VSCode internals
published: true
tags: vscode-internal code-review blog-code
---
- [VSCode - From Vision to Architecture](https://2021.desosa.nl/projects/vscode/posts/essay2/)
- [Visual Studio Code](https://delftswa.gitbooks.io/desosa-2017/content/vscode/chapter.html)
- [Source Code Organization](https://github.com/microsoft/vscode/wiki/Source-Code-Organization)
- [VSCode Architecture And Overview](https://www.c-sharpcorner.com/article/vscode-architecture-and-overview/)

<link rel="shortcut icon" href="https://code.visualstudio.com/favicon.ico" type="image/x-icon" />

### [Layers](https://github.com/microsoft/vscode/wiki/Source-Code-Organization#layers)

The **core** is partitioned into the following layers:

- **base**: Provides general utilities and user interface building blocks that can be used in any other layer.
- **platform**: Defines service injection support and the base services for VS Code that are shared across layers such as workbench and code. Should not include editor or workbench specific services or code.
- **editor**: The "Monaco" editor is available as a separate downloadable component.
- **workbench**: Hosts the "Monaco" editor, notebooks and custom editors and provides the framework for panels like the Explorer, Status Bar, or Menu Bar, leveraging Electron to implement the VS Code desktop application and browser APIs to provide VS Code for the Web.
- **code**: The entry point to the desktop app that stitches everything together, this includes the Electron main file, shared process, and the CLI for example.
- **server**: The entry point to our server app for remote development.


[ ![caption](https://2021.desosa.nl/projects/vscode/images/component_view_hua67b0b50be334bcb88cc99ee0bfff921_312138_1000x0_resize_q75_box_3.png) ](https://2021.desosa.nl/projects/vscode/posts/essay2/)