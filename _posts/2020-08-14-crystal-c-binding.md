---
published: true
title: Crystal  wrapper generator for C/C++ libraries
tags: crystal binding c++
---
Crystal allows you to bind to existing C libraries without writing a single line in C.

## [C bindings](https://crystal-lang.org/reference/syntax_and_semantics/c_bindings/)
- [libgen](https://github.com/olbat/libgen) - Libgen aims to ease the port of big C libraries and to provide a convinient way to define re-generable bindings, through [config files](https://github.com/olbat/libgen/blob/master/SPECS.md):
	- Lib generation is parametrized using a YAML or JSON configuration file (how to generate).
    - Bindings definitions are specified in YAML, JSON or Crystal files or in the generation config file directly (what to generate).
		- [crystal_lib](https://github.com/crystal-lang/crystal_lib)



- [Bindgen](https://github.com/Papierkorb/bindgen) -  Standalone C, C++, and/or Qt binding and wrapper generator.

- [bind your own c library](https://medium.com/@cfsamson/how-to-bind-your-own-c-library-to-crystal-fec9686598b7)
	- [C binding](https://www.reddit.com/r/crystal_programming/comments/68ga9z/binding_to_c_libraries/)

- [crystal lang discussion](https://github.com/crystal-lang/crystal/issues/3916)
