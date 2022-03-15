---
published: true
title: Create a GUI (vs lib)
tags: gui software lib c++
---
> There isn't a known optimum, but I've tried making GUI from scratch many times and am gradually getting better at it. This is a good opportunity for me to let out my thoughts all at once  - [r/gamedev](https://www.reddit.com/r/gamedev/comments/6kk306/sfml_ui_libs/)

see also:
- [C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/)

Anyway, if I were doing a new game GUI again, I would start with a "debug" gui like Dear IMGUi that perhaps doesn't have skinning but has easy placeholders. Good layouts take a few iterations, and trying to skin early is wasteful.


- Basic functionality for text, sprites, and layout. **Word-wrapped proportionate text is quite a large time sink.**
- Ability to keep state for lists and scrolling list views.
	- if you want a fully-fledged and optimized list view that supports arbitrary sizes of inner elements
- Ability to safely compose drawing commands
	- used a single stack with default behaviors for transforms, scaling, etc and then extended it by adding an XML domain-specific syntax that let me safely describe widget parameters and stack levels, and do some basic goto-style flow control.
- Ability to distinguish between layout, collision and rendering stages, when it's relevant.
	- n imgui this can be accomplished more directly by running the children first, only getting bounds from them, and then running them again later.
- Ability to describe elements with appropriate units and relative positions.
