---
title: Compiler explorer (c++)
published: true
tags: c++ dlang x86 asm compiler online
---
> Enter C -> get Assembly - [Godbolt](https://godbolt.org/g/syhzgm) . [Matt Godbolt](https://xania.org/MattGodbolt) 

- [How to generate godbolt like clean assembly locally?](https://stackoverflow.com/questions/63015986/how-to-generate-godbolt-like-clean-assembly-locally) 
- [How it works: Compiler Explorer](https://xania.org/201609/how-compiler-explorer-runs-on-amazon)
- [Dlang](https://d.godbolt.org/) / [HN](https://news.ycombinator.com/item?id=13182726)
- [Matt Godbolt: Why C++ Isn't Dead](https://www.youtube.com/watch?v=1uLTspBEtRE)
- [Disassembly Explorer (VSCode)](https://marketplace.visualstudio.com/items?itemName=dseight.disasexpl) / [github ](https://github.com/dseight/vscode-disasexpl)

### [Install](https://github.com/compiler-explorer/compiler-explorer) - [http://localhost:10240/](http://localhost:10240/)
- install [nodejs]({% post_url 2020-11-29-node-js %})

Compile and start
{% highlight bash %}
make EXTRA_ARGS='--language c++'
{% endhighlight %}

### see also
- [C++ Insights](https://news.ycombinator.com/item?id=39948404) / [github](https://github.com/andreasfertig/cppinsights?tab=readme-ov-file#c-insights---see-your-source-code-with-the-eyes-of-a-compiler) / [online](https://cppinsights.io/) - a Clang-based tool that does a source-to-source transformation. The goal of C++ Insights is to make things visible that normally and intentionally happen behind the scenes. It's about the magic the compiler does for us to make things work.

- [Happy 10th Birthday Compiler Explorer!](https://xania.org/202206/happy-birthday-ce)
