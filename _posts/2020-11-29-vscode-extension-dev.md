---
published: true
title: VSCode Extension DEV
tags: vscode-internal
---
> We'll teach you the fundamental concepts for building extensions.- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) / [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-visual-studio-code-extension) / [youtube](https://www.youtube.com/watch?v=srwsnNhiqv8)

see also [Typescript](2020-12-07-typescript)

# Install
## Prerequesite
- [Node.js]({% post_url 2020-11-29-node-js %}) and Git

{% highlight bash %}
$ sudo npm install -g yo generator-code
{% endhighlight %}

## Issue
### Everything goes well, but extension does not show.
[**Resolved**](https://www.reddit.com/r/vscode/comments/a6ox7w/writing_a_hello_world_extension_doesnt_appear_to/): It turned out that yo code was generating an extension with minimum version number too high for my vscode to run. Unfortunately it didn't throw an error telling me this was the case.

## [VS Code API](https://code.visualstudio.com/api/references/vscode-api) / [Extension samples](https://github.com/Microsoft/vscode-extension-samples)
- [Extending Workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench)
	- [Tree View](https://code.visualstudio.com/api/extension-guides/tree-view#view-container) / [TreeItem](https://code.visualstudio.com/api/references/vscode-api#TreeItem)
    	- [TreeDataProvider example](https://stackoverflow.com/questions/56534723/simple-example-to-implement-vs-code-treedataprovider-with-json-data)
        - [How to refresh treeview on underlying data change](https://stackoverflow.com/questions/52421724/how-to-refresh-treeview-on-underlying-data-change)
        - [Fund watch from scratch](https://developpaper.com/implementation-of-vs-code-fund-plug-in-from-scratch/)
        - [VSCode extension TreeView set selected](https://stackoverflow.com/questions/47775269/vscode-extension-treeview-set-selected)

- [webview](https://code.visualstudio.com/api/extension-guides/webview)
	- [external html and css](https://stackoverflow.com/questions/56182144/vscode-extension-webview-external-html-and-css)
    - [vscode-page](https://dev.to/foxgem/simplifying-vs-code-webview-development-with-vscode-page-13c3)
	- [What I've learned so far while bringing VS Code's Webviews to the web](https://blog.mattbierner.com/vscode-webview-web-learnings/)
    - [extending a VS Code extension with Webviews and React](https://ciaanh.github.io/2019/10/reactception/) / [github](https://github.com/Ciaanh/reactception)
    	- [VSCode Webview React](https://github.com/leer0911/vscode-webview-react)

- [Custom Editor](https://code.visualstudio.com/api/extension-guides/custom-editors)

- [Text decorators](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) / [SO](https://stackoverflow.com/a/44965967/51386) - To display an image using decorators, try contentIconPath on ThemableDecorationAttachmentRenderOptions - see also [WallabyJS](https://stackoverflow.com/questions/64085323/vscode-extension-api-for-adding-line-markings)
- [Code inset feature](https://github.com/microsoft/vscode/pull/66418) - How to use it ?
	- [createWebviewTextEditorInset](https://github.com/microsoft/vscode/issues/75931) / present in [insider version](https://github.com/microsoft/vscode/blob/627ad0b4ee553d233b80336ebb241f911e4bff07/src/vs/vscode.proposed.d.ts)
    - would be nice to develop something like [Memeful Comments](https://github.com/mariusbancila/memefulcomments)


- [Custom Editor API](https://code.visualstudio.com/api/extension-guides/custom-editors)
- [Notebook API](https://code.visualstudio.com/api/extension-guides/notebook)
- [FS API](https://stackoverflow.com/questions/53559240/how-should-i-access-the-file-system-of-the-vscodes-user)
	- [Extension ressource access](https://stackoverflow.com/questions/49962461/accessing-resources-in-vscode-previewhtml-with-file-scheme)

## [VSCode layout](https://stackoverflow.com/questions/41874426/moving-panel-in-visual-studio-code-to-right-side)

![caption](https://i.stack.imgur.com/QPSw4.png)

![caption](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)
