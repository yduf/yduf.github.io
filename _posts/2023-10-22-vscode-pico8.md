---
published: true
title: PICO-8 IDE (VSCode)
tags: pico8 vscode
toc: true
---
> PICO-8 Easier development with Visual Studio - [imogiagames](https://imogiagames.itch.io/anila/devlog/367600/pico-8-easier-development-with-visual-studio) /

<link rel="shortcut icon" href="https://static.wikia.nocookie.net/pico-8/images/4/4a/Site-favicon.ico/revision/latest?cb=20210713144653" type="image/x-icon" />

[![caption](https://cdn.blot.im/blog_06523a97b0ca417599aeca13c3a85d63/_image_cache/164efc20-40da-4002-8ded-8004962a8b96.png)](https://maxzsol.com/getting-started-with-local-development-for-pico-8-and-vs-code/)

## Extensions
- [PICO-8 Language Server](https://github.com/japhib/pico8-ls#pico-8-language-server)
	- Full language support for the PICO-8 dialect of Lua. - (goto definion, etc)
    - View docs on hover, then auto-complete 

- [pico8-simple-outline](https://marketplace.visualstudio.com/items?itemName=unremarkable.pico8-simple-outline) - for `*.p8` files: display a list of all the functions in your project, and acces their definition by clicking on them.

- [pico8-theme](https://marketplace.visualstudio.com/items?itemName=ianjsikes.pico8-theme) - color theme in the style of the PICO-8 fantasy console by lexaloffle - you can keep the regular fonts as is.

### Alternatives
- [pico8vscodeeditor](https://marketplace.visualstudio.com/items?itemName=Grumpydev.pico8vscodeeditor) - facilities for editing Pico-8 p8 files in VSCode.
	- Pico-8 API snippets - [(Ctrl+Space)](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

- [pico8-vscode](https://github.com/joho/pico8-vscode#pico8-vscode) - editing and running pico8 files.


see also
- [Using VS Code with PICO-8](https://erika.florist/wiki/computers/vscodepico8)
- [Getting Started with Local Development for Pico-8 and VS Code](https://maxzsol.com/getting-started-with-local-development-for-pico-8-and-vs-code/)
- [Pico-8 and external IDE ](https://www.reddit.com/r/pico8/comments/1i7dtqv/pico8_and_external_ide/)

# [Using VS Code with PICO-8](https://maxzsol.com/getting-started-with-local-development-for-pico-8-and-vs-code/) / [2](https://www.youtube.com/watch?v=srPKBhzgZhc)

As well as other [Using External Tools](https://www.youtube.com/watch?v=srPKBhzgZhc)

### [`# include`](https://www.lexaloffle.com/dl/docs/pico-8_manual.html#_INCLUDE)
_put all of your code in a separate file and using [#include](https://youtu.be/srPKBhzgZhc?feature=shared&t=305)_
you can use individual tabs from carts by going [`#include cartname.p8:2`](https://www.reddit.com/r/pico8/comments/17e8wke/include_file_in_different_directory/) which would include any code on the second tab inside the cart. 

- use _info_ to have token count

Alternative way of doing things:
- [Using VS Code with PICO-8](https://erika.florist/wiki/computers/vscodepico8/) - edit cart directly ?


### [Doc](https://www.lexaloffle.com/dl/docs/pico-8_manual.html)
- [Pico-8 API Cheatsheet](https://iiviigames.github.io/pico8-api/)
    
- [compiler](https://github.com/amirave/pico-compiler)
- [Picotool](https://github.com/dansanderson/picotool) - a suite of tools and a Python library for manipulating PICO-8 cartridges. 
- [decoding Pico-8 cartridges](https://robertovaccari.com/blog/2021_01_03_stegano_pico8/)
- [pico8-imgtools](https://github.com/gamax92/pico8-imgtools)
- [P8Coder (windows)](https://blog.thrill-project.com/p8coder-pico-8-programming-tool/) / [github](https://github.com/movAX13h/P8Coder) - pico-8 programming tool
