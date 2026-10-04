---
title: "OpenFox 🦊"
tags: agentic-AI harness 
---
> Autonomous coding agent for local LLMs with contract-driven execution. - [github](https://github.com/co-l/openfox#openfox)

Works exclusively in the browser.

```bash
$ openfox   # start the server & open browser page
```

# Install 📥 

<div class="encart orange" markdown="1">
When doing local install npm fail to setup symlink properly, and you have to fix it manually.

`ln -s ~/.local/node_modules/.bin/openfox ~/.local/bin/openfox`
</div>

```bash
$ npm install --prefix ~/.local openfox

# Fix missing link
$ ln -s ~/.local/node_modules/.bin/openfox ~/.local/bin/openfox
```