---
published: true
title: Custom behavior with Setting-Cycler (VSCode)
tags: vscode
---
> Sometimes VS Code ships a new feature without a toggle command (editor.minimap.enabled, explorer.autoReveal). Sometimes you want to easily toggle between a light and dark themes. Maybe you want to do something even more complex and toggle multiple settings at once. - [Settings Cycler](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler)

<link rel="shortcut icon" href="https://code.visualstudio.com/favicon.ico" type="image/x-icon" />

# Customization
## [Switch focus between editor and integrated terminal](https://stackoverflow.com/a/43012779/51386)

Open the keybindings.json from the editor: CMD-SHIFT-P -> Preferences: Open Keyboard Shortcuts File. Also a nice resource: [code.visualstudio.com/docs](https://code.visualstudio.com/docs/getstarted/keybindings)

{% highlight json %}
// Toggle between terminal and editor focus
{ "key": "ctrl+[Backquote]", "command": "workbench.action.terminal.focus"},
{ "key": "ctrl+[Backquote]", "command": "workbench.action.focusActiveEditorGroup", "when": "terminalFocus"}
{% endhighlight %}

## [Settings Cycler](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler)

Add a configuration for the setting, see below.
This is can be at the workspace or user level.
It's will be located in the Extension setting: `~/.config/Code/User/settings.json`

{% highlight json %}
{
    "settings.cycle": [
{% endhighlight %}

### Cycling theme

{% highlight json %}
        {
            "id": "colorTheme", // must be unique
            "overrideWorkspaceSettings": false,
            "values": [
                { "workbench.colorTheme": "Monokai" },
                { "workbench.colorTheme": "Monokai Classic" },
                // { "workbench.colorTheme": "Sublime Material Theme - Dark" },
                { "workbench.colorTheme": "Red" },
                { "workbench.colorTheme": "Default Light+" }
            ]
        }
{% endhighlight %}

### [Cycling sort order in Explorer](https://stackoverflow.com/questions/51543871/sorting-files-in-vs-code-explorer)

{% highlight json %}
        {
            "id": "fileSortOrder",
            "overrideWorkspaceSettings": false,
            "values": [
                { "explorer.sortOrder": "default" },
                { "explorer.sortOrder": "mixed" },
                { "explorer.sortOrder": "fileFirst" },
                { "explorer.sortOrder": "type" },
                { "explorer.sortOrder": "modified" }
            ]
        }
{% endhighlight %}

`End Cycling configuration`

{% highlight json %}
    ]
}
{% endhighlight %}

## [Configure a keyboard shortcut](https://code.visualstudio.com/docs/getstarted/keybindings)
File > Preferences > Keyboard Shortcuts

This will be located in `~/.config/Code/User/keybindings.json`
{% highlight json %}
{
    "key": "ctrl+shift+t",
    "command": "settings.cycle.colorTheme"
},

    {
        "key": "ctrl+alt+o",
        "command": "settings.cycle.fileSortOrder",
    }
{% endhighlight %}
