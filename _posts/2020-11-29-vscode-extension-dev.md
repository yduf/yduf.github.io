---
published: true
title: VSCode Extension DEV
tags: vscode
---
> We'll teach you the fundamental concepts for building extensions.- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) / [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-visual-studio-code-extension) / [youtube](https://www.youtube.com/watch?v=srwsnNhiqv8)

# Install
## Prerequesite
- [Node.js]({% post_url 2020-11-29-node-js %}) and Git

{% highlight bash %}
$ sudo npm install -g yo generator-code
{% endhighlight %}

## Issue
### Everything goes well, but extension does not show.
[**Resolved**](https://www.reddit.com/r/vscode/comments/a6ox7w/writing_a_hello_world_extension_doesnt_appear_to/): It turned out that yo code was generating an extension with minimum version number too high for my vscode to run. Unfortunately it didn't throw an error telling me this was the case.

## [VS Code API](https://code.visualstudio.com/api/references/vscode-api)
- [Text decorators](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) / [SO](https://stackoverflow.com/a/44965967/51386) - To display an image using decorators, try contentIconPath on ThemableDecorationAttachmentRenderOptions - see also [WallabyJS](https://stackoverflow.com/questions/64085323/vscode-extension-api-for-adding-line-markings)
- [Code inset feature](https://github.com/microsoft/vscode/pull/66418) - How to use it ?
	- [createWebviewTextEditorInset](https://github.com/microsoft/vscode/issues/75931)

- [Extending Workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench)
- [Custom Editor API](https://code.visualstudio.com/api/extension-guides/custom-editors)
- [Notebook API](https://code.visualstudio.com/api/extension-guides/notebook) 

### [Extension samples](https://github.com/Microsoft/vscode-extension-samples)

