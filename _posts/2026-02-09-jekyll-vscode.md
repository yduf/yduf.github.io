---
title: "Jekyll (vscode)"
tags: jekyll vscode vscode-snippet
---
> tools & tips for writing jekyll post


## Extension

-  [Jekyll Post Generator](https://marketplace.visualstudio.com/items?itemName=k-r-o-s.jekyll-post-generator&ssr=false#review-details) - Quickly create new Jekyll posts with front matter and proper filenames with date
  - `SHIFT+CTRL+P` - New Jekyll Post

## VSCode Snippet

{% highlight json %}
  "Jekyll code block (highlight)": {
    "prefix": "/code",
    "body": [
      "\{\% highlight ${1:language} \%\}",
      "$0",
      "\{\% endhighlight \%}"
    ],
    "description": "Jekyll Liquid highlight code block"
  }
{% endhighlight %}
