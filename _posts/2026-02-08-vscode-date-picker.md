---
title: Date picker (VSCode)
tags: vscode calendar vscode-snippet
---
> Insert today’s date when typing // in CHANGELOG.md - [ChatGPT](https://chatgpt.com/share/698868ff-066c-800d-b765-718d66d041fa)

## [By Adding Snippet](https://chatgpt.com/share/698868ff-066c-800d-b765-718d66d041fa)

<div style="
  border-left: 4px solid #3498db; /* blue */
  background: #eef7ff;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

[VS Code snippets cannot directly invoke commands.](https://chatgpt.com/share/6989b137-0860-800d-b2a8-18408a7234ed)
Alternative is to either
- generate text for a command and wait user validation
- use keybinding instead (which can run a command)

</div>

`Ctrl+Shift+P` → Preferences: Configure Snippets
Choose markdown

{% highlight json %}
{
  "Insert current date": {
    "prefix": "//",
    "body": ["${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}"],
    "description": "Insert current date"
  }
}
{% endhighlight %}

Then typing // then Tab in CHANGELOG.md inserts: current date.

