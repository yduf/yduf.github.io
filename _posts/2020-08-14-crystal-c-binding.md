---
published: true
title: Crystal  wrapper generator for C/C++ libraries
tags: crystal binding c++
---
Crystal allows you to bind to existing C libraries without writing a single line in C.

{::nomarkdown}
<link rel="shortcut icon" href="https://crystal-lang.org/favicon.ico" type="image/x-icon" />
{:/}

<span style="color:red">[**Warning**]</span> => struct bitfields ard not supported
- [crystal-lang#3898](https://github.com/crystal-lang/crystal/issues/3898)
- [crystal-lib#70](https://github.com/crystal-lang/crystal_lib/issues/70)

<span style="color:red">[**Warning**]</span> => Thread are not supported (yet) ?
- [MT Safe Array & Hash (open)](https://github.com/crystal-lang/crystal/issues/9548)
- [Threading? #1967 (closed)](https://github.com/crystal-lang/crystal/issues/1967)
=> this may be a challenge for using libfuse for eg (which is multithread by default)


## [C bindings](https://crystal-lang.org/reference/syntax_and_semantics/c_bindings/)
- [pointer casts](https://crystal-lang.org/reference/syntax_and_semantics/as.html)

{% highlight crystal %}
ptr = Pointer(Int32).malloc(1)
ptr.as(Int8*) # :: Pointer(Int8)
{% endhighlight %}

- [Passing data to callback](https://crystal-lang.org/reference/syntax_and_semantics/c_bindings/callbacks.html)
	- [Box](https://crystal-lang.org/api/0.35.1/Box.html) allows turning any object to a Void* and back.
    
> Note that a reference has to be kept on the object on crystal side. The reason is that if we don't do it, and our code doesn't reference it anymore, the GC will collect it. The C library will of course store the callback, but Crystal's GC has no way of knowing that.


- [libgen](https://github.com/olbat/libgen) - Libgen aims to ease the port of big C libraries and to provide a convinient way to define re-generable bindings, through [config files](https://github.com/olbat/libgen/blob/master/SPECS.md):
	- Lib generation is parametrized using a YAML or JSON configuration file (_how to generate_).
    - Bindings definitions are specified in YAML, JSON or Crystal files or in the generation config file directly (_what to generate_).
		- [crystal_lib](https://github.com/crystal-lang/crystal_lib)



- [Bindgen](https://github.com/Papierkorb/bindgen) -  Standalone C, C++, and/or Qt binding and wrapper generator.

- [bind your own c library](https://medium.com/@cfsamson/how-to-bind-your-own-c-library-to-crystal-fec9686598b7)
	- [C binding](https://www.reddit.com/r/crystal_programming/comments/68ga9z/binding_to_c_libraries/)

- [crystal lang discussion](https://github.com/crystal-lang/crystal/issues/3916)
