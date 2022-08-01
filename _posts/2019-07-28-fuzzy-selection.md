---
published: true
title: Fuzzy down selection (fzf)
tags: fish cli fuzzy text search grep repl
---
> FZF is a fuzzy finder for your terminal, it is a command line application that filters each line from given input with a query that the user types. When the query changes, the results update in realtime. - [Article](https://sidneyliebrand.io/blog/how-fzf-and-ripgrep-improved-my-workflow?source=post_page---------------------------) / [HN](https://news.ycombinator.com/item?id=20360204)

- [Why you should be using fzf, the command line fuzzy finder](https://www.freecodecamp.org/news/fzf-a-command-line-fuzzy-finder-missing-demo-a7de312403ff/)
- [fzf live repl](https://paweldu.dev/posts/fzf-live-repl/) / [HN](https://news.ycombinator.com/item?id=23434018)
{% highlight bash %}
echo '' | fzf --print-query --preview "cat *.json | jq {q}"
{% endhighlight %}

- [fish integration](https://github.com/PatrickF1/fzf.fish) - see [fish key binding](https://fishshell.com/docs/current/cmds/bind.html) 
	- **Ctrl+Alt+F**  (F for file) - recursive listing of current directory's non-hidden files - [**clipit**](https://www.how2shout.com/how-to/clipit-ubuntu-linux-monitor-your-clipboard-paste-anything-cut-or-copied.html) is overidding this as well
    - **Ctrl+R** (R for reverse-i-search) - Fish's command history
    - **Ctrl+V** (V for variable) - all the variable names of the environment currently in scope
	- Git
		- **Ctrl+Alt+S** (S for status) - the current repository's git status
    
![caption](https://github.com/PatrickF1/fzf.fish/raw/assets/directory.gif)
