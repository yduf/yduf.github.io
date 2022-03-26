---
published: true
title: Ninja (build tool)
tags: build-system
---
> Where other build systems are high-level languages, Ninja aims to be an assembler. - [The Ninja build system](https://ninja-build.org/manual.html) / [Comparison to Make](https://ninja-build.org/manual.html#_comparison_to_make)

# [Ninja](https://github.com/ninja-build/ninja)
Some explicit non-goals:
- convenient syntax for writing build files by hand. You should generate your ninja files using another program. This is how we can sidestep many policy decisions.
- built-in rules. Out of the box, Ninja has no rules for e.g. compiling C code.
- build-time customization of the build. Options belong in the program that generates the ninja files.
- build-time decision-making ability such as conditionals or search paths. Making decisions is slow.

## [Tutorial](https://jvns.ca/blog/2020/10/26/ninja--a-simple-way-to-do-builds/) / [Doc](https://ninja-build.org/manual.html)

[Conceptually](https://ninja-build.org/manual.html#_writing_your_own_ninja_files), _build_ statements describe the dependency graph of your project, while _rule_ statements describe how to generate the files along a given edge of the graph.

**A _rule_** has a _command_ and _description_ (the description is just for humans to read so you can tell what it’s doing when it’s building your code)

{% highlight ninja %}
rule svg2pdf
  command = inkscape $in --export-text-to-path --export-pdf=$out
  description = svg2pdf $in $out
{% endhighlight %}

**Syntax for _build_** is `build output_file: rule_name input_files`. 

The _output_ goes in `$out` in the rule and the _input_ goes in `$in`.  
Here’s one using the `svg2pdf` rule. 

{% highlight ninja %}
build pdfs/variables.pdf: svg2pdf variables.svg
{% endhighlight %}

That’s it! If you put those two things in a file called `build.ninja` and then run `ninja`, ninja will run:
{% highlight ninja %}
inkscape variables.svg --export-text-to-path --export-pdf=pdfs/variables.pdf
{% endhighlight %}

And then if you run it again, it won’t run anything (because it can tell that you’ve already built `pdfs/variables.pdf` and you’re up to date).

## [History](http://neugierig.org/software/chromium/notes/2011/02/ninja.html)

> When we first started porting Chrome away from just Windows, we intended to use Scons to build Chrome on all our platforms. But early on in development I discovered that Scons, despite its admirable goals of correctness and ease of use, was quite slow — it could take 40 seconds from starting Scons before it decided to build some source...  
>  
> I eventually ported our Linux build to plain Makefiles...  
>   
> Build performance is a combination of many factors: the build system needs to compute what needs to be done, the compiler takes time to compile files, the linker takes time to link. Each of these can be improved;...  
>  
> Makefiles got our incremental builds down to a handful (10-20) of seconds... 
>   
> I thought I'd try making a very simple build system; conceptually very similar to Make, but without hardly any features. And with just some preliminary profiling I got the Chrome build startup to under one second. - [Ninja, a new build system](http://neugierig.org/software/chromium/notes/2011/02/ninja.html)
