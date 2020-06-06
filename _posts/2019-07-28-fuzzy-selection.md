---
published: true
title: Fuzzy down selection (fzf)
tags: fuzzy text search cli grep repl
---
> FZF is a fuzzy finder for your terminal, it is a command line application that filters each line from given input with a query that the user types. When the query changes, the results update in realtime. - [Article](https://sidneyliebrand.io/blog/how-fzf-and-ripgrep-improved-my-workflow?source=post_page---------------------------) / [HN](https://news.ycombinator.com/item?id=20360204)

- [fzf live repl](https://paweldu.dev/posts/fzf-live-repl/) / [HN](https://news.ycombinator.com/item?id=23434018)
{% highlight bash %}
echo '' | fzf --print-query --preview "cat *.json | jq {q}"
{% endhighlight %}

![video](https://sidneyliebrand.io/media/posts/fzf-ls-example-7ab6059c8.webm)
