---
published: true
title: Extension DEV (VSCode)
tags: vscode-internal
toc: true
---
> We'll teach you the fundamental concepts for building extensions.- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) / [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-visual-studio-code-extension) / [youtube](https://www.youtube.com/watch?v=srwsnNhiqv8)

<link rel="shortcut icon" href="https://code.visualstudio.com/favicon.ico" type="image/x-icon" />

see also [Typescript](2020-12-07-typescript)

![caption](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)


# Prerequesite

## Node.js
For developing and building VS Code extensions, the community and tooling generally recommend using a current [Node.js LTS version](https://chatgpt.com/share/6988b2e2-d4f0-800d-af0c-f727391e63b9)
- [Node.js]({% post_url 2020-11-29-node-js %}) and Git

`flake.nix`
{% highlight json %}
{
  description = "Node.js + npm dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux"; # or aarch64-darwin, etc.
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.nodejs_22            # includes npm
          pkgs.nodePackages.yo      # yo
			  ];

			# vsce for packaging .vsix file
			# only provided by npm
      shellHook = ''
        export PATH="$PWD/node_modules/.bin:$PATH"

        if [ ! -x node_modules/.bin/vsce ]; then
          echo "Installing vsce locally (npm)..."
          npm install --no-save @vscode/vsce
        fi
      '';
      };
    };
}
{% endhighlight %}

## Yo
{% highlight bash %}
$ sudo npm install -g yo generator-code

# if using nix
$ nix develop
$ npm init -y
$ npm install --save-dev generator-code
{% endhighlight %}

# [Start New](https://chatgpt.com/share/6988bf49-f460-800d-bf1b-654cbe566c6b)

## Scaffold a New Extension

{% highlight bash %}
$ yo code
{% endhighlight %}

- **What type of extension?** → New Extension (TypeScript)
- **Extension name** → my-first-extension
- **Identifier** → press Enter
- **Description** → optional
- **Initialize git repo?** → your choice
- **Package manager** → npm

{% highlight bash %}
my-first-extension/
├── src/
│   └── extension.ts      ← main logic
├── package.json          ← extension manifest
├── tsconfig.json
└── README.md
{% endhighlight %}


### Version Issue

<div style="

            
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

Everything goes well, but extension does not show.

[**Resolved**](https://www.reddit.com/r/vscode/comments/a6ox7w/writing_a_hello_world_extension_doesnt_appear_to/):  

It turned out that yo code was generating an extension with minimum version number too high for my vscode to run. Unfortunately 
it didn't throw an error telling me this was the case.

Lower vscode version required in  `package.json`
{% highlight json %}
  "engines": {
    "vscode": "^1.108.0"
  },
{% endhighlight %}

so that it matches $`code --version`
</div>

## Run the Extension (Development Mode)

- Open the project in VS Code
- Press F5

This launches a new VS Code window called the Extension Development Host.

### [Ext Configuration](https://chatgpt.com/share/6989cba5-1c30-800d-9a80-2e3b7376f539)

exposed configuration in [package.json](https://chatgpt.com/share/6989cba5-1c30-800d-9a80-2e3b7376f539)

### [Custom Icon](https://chatgpt.com/share/6989d3f9-796c-800d-8ac7-1a0262613b1e)

Prepare the icon file:
- Format: PNG
- Recommended size: 128×128 px (square)
- Background: Transparent or solid (both fine)

{% highlight bash %}
my-extension/
├── package.json
├── icon.png
└── src/

# package.json
{
  "name": "my-extension",
  "displayName": "My Extension",
  "description": "Does something cool",
  "version": "0.0.1",
  "publisher": "your-publisher-name",
  "icon": "icon.png",
  "engines": {
    "vscode": "^1.85.0"
  }
}
{% endhighlight %}

You’ll see the icon:
- In the Extensions sidebar
- In the extension details page
- In the Marketplace (after publishing)

### [Documentation](https://chatgpt.com/share/698a4803-0794-800d-944b-8065f1a12e3a)

## [Debug](https://chatgpt.com/share/6989faea-b6c8-800d-b0e3-6382c7b5c7f1)

## [Sharing Extension](https://chatgpt.com/share/6989f5ce-e4d8-800d-b49f-89a6f63120cf)

You can share a VS Code extension without publishing it on the Microsoft Marketplace. The key is to distribute the extension as a .vsix file, which is the packaged format for VS Code extensions

{% highlight bash %}
$ vsce package
{% endhighlight %}


## Publishing

### [Market Place](https://chatgpt.com/share/6989d3a9-6c30-800d-b88e-c62b07846352)

<div style="
  border-left: 4px solid #3498db; /* blue */
  background: #eef7ff;

            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

[UsefullCode](https://marketplace.visualstudio.com/manage/publishers/UsefullCode)

</div>

Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/manage) and log in.
- Click “Create Publisher”.
- Give it a unique name (publisher ID).
- You’ll get a publisher ID, which you’ll use when packaging and publishing.

{% highlight bash %}
$ vsce login <publisher-name>
# paste Generated PTA
{% endhighlight %}

[It will ask for a Personal Access Token (PAT).](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

The key distinction (this causes the confusion)
There are three different things people often mix up:
- Microsoft personal account (@outlook.com, @hotmail.com, etc.)
- Azure subscription / Azure Portal account (portal.azure.com, resources, billing)
- **Azure DevOps organization** ← this is what PATs belong to
  - so you must sign in to Azure Devops to be able to sign in a vscode Extension

A Personal Access Token is NOT tied to Azure (portal) or subscriptions.
It is tied only to an Azure DevOps organization.


### [VS Codium](https://chatgpt.com/share/6989d448-7900-800d-9665-2df21f0829f4)

# [VS Code API](https://code.visualstudio.com/api/references/vscode-api) 

[Extension samples](https://github.com/Microsoft/vscode-extension-samples)
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

# [VSCode layout](https://stackoverflow.com/questions/41874426/moving-panel-in-visual-studio-code-to-right-side)

![caption](https://i.stack.imgur.com/QPSw4.png)

![caption](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)
