---
published: true
title: '# Ruby Debug (VSCode)'
tags: vscode ruby debug
---
> Ruby integration with VSCode - [Ruby LSP from Shopify](https://code.visualstudio.com/docs/languages/ruby)

Recommandation is to combine:
- [Ruby LSP from Shopify](https://code.visualstudio.com/docs/languages/ruby)
	- for easy navigation
    - [rubocop](https://github.com/rubocop/rubocop)
- [VSCode Ruby rdbg Debugger](https://github.com/ruby/vscode-rdbg?tab=readme-ov-file#vscode-ruby-rdbg-debugger) / [market](https://marketplace.visualstudio.com/items?itemName=KoichiSasada.vscode-rdbg) 
debug gem must be installed globally and rdbg should be in the path - to enable debugging
	- this create a launch task, that can be configured to debug current files (setup can take some times).
    	- you need to confirm the command to run (it can be ruby or bundler exec)
    - debug gem must be installed globally and rdbg should be in the path


### Deprecated
- [Ruby by Peng Lv](https://betterprogramming.pub/code-like-a-pro-tooling-to-supercharge-vs-code-for-ruby-bf2ae61df5e3?gi=9dbd1898926e) / [github](https://github.com/rubyide/vscode-ruby?tab=readme-ov-file#deprecated) - replaced by [Ruby LSP from Shopify](https://code.visualstudio.com/docs/languages/ruby)
	- unfortunately [it doesn't support debug the same way](https://forums.sketchup.com/t/vscode-ruby-extension-no-longer-mantained/250058)
    - The Ruby LSP extension supports debugging using the debug gem (Ruby's official debugger). 

- [Solargraph](https://solargraph.org/) + [Ruby Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph) - a language server that provides intellisense, code completion, and inline documentation for Ruby.
	- previous setup was depending on solargraph, Ruby LSP seems to be standalone now.

[![caption](https://solargraph.org/assets/vscode-solargraph-0.34.1-a63b2ca0626c295d31413d74577b6e56cbdec00f3bbd444d1fb3bea7d5d8885a.gif)](https://solargraph.org/)


### see also?
- [the Standard Ruby VS Code extension](https://blog.testdouble.com/posts/2023-02-16-its-official-the-standard-ruby-vscode-extension/)

### Troubleshooting
If using rbenv, make sure it is properly seen by VSCode (init shell)

see also
- [How to Debug & Fix Your Ruby Programs](https://www.rubyguides.com/2015/07/ruby-debugging/)
