---
title: Processes sandboxing (Bubblewrap)
published: true
tags: process cgroup sandbox c++
toc: true
---
> Foolproof Boundaries vs Unbounded Foolishness 

- [HN](https://news.ycombinator.com/item?id=45429787) - For lightweight sandboxing on Linux you can use [bubblewrap](https://github.com/containers/bubblewrap?tab=readme-ov-file#bubblewrap) or [firejail]({% post_url 2023-11-07-firejail-sandbox %}) instead of Docker. 

## [bubblewrap](https://github.com/containers/bubblewrap?tab=readme-ov-file#bubblewrap)

bubblewrap works by creating a new, completely empty, mount namespace where the root is on a tmpfs that is invisible from the host, and will be automatically cleaned up when the last process exits. You can then use commandline options to construct the root filesystem and process environment and command to run in the namespace.

The level of protection between the sandboxed processes and the host system is entirely determined by the arguments passed to bubblewrap. Some aspects that require special care are [noted here](https://github.com/containers/bubblewrap?tab=readme-ov-file#limitations).

[Example (packaging bubblewrap)](https://news.ycombinator.com/item?id=46692550):

{% highlight bash %}
$ sandbox-run npx @anthropic-ai/claude-code
{% endhighlight %}

[sandbox-run](https://github.com/sandbox-utils/sandbox-run) runs npx (...) transparently inside a Bubblewrap sandbox, exposing only the $PWD. Contrary to many other solutions, it is a few lines of pure POSIX shell.

## see also
- [	TinyKVM: Fast sandbox that runs on top of Varnish](https://news.ycombinator.com/item?id=43358980)
- [	Protecting your code from other people's bugs](https://spawn-queue.acm.org/doi/pdf/10.1145/3733699) / [HN](https://news.ycombinator.com/item?id=44241209)
