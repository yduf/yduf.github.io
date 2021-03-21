---
published: true
title: Krita Code
tags: krita c++ code quote stroke stylus avx
---
> In my 20+ year experience managing projects I learned that tools or systems don’t manage anything, people do, and if people need tools they’ll get them or make them - Ton Roosendaal, on #blendercoders / [Krita code wiki](https://docs.krita.org/en/untranslatable_pages.html) / [github](https://github.com/KDE/krita) / [KDE](https://invent.kde.org/graphics/krita)

- [Strokes queue](https://docs.krita.org/en/untranslatable_pages/strokes_documentation.html#strokes-queue) - a stroke represents a complete action performed by a user. 
- [Vector instructions](https://docs.krita.org/en/untranslatable_pages/optimizing_tips_for_krita.html#vector-instructions) - Krita takes heavy advantage of the [Vc library](https://github.com/VcDevel/Vc) to speed up its brush strokes with CPU vector instructions.
- [Modern C++ usage guidelines for the Krita codebase](https://docs.krita.org/en/untranslatable_pages/modern_cpp_in_krita.html)
- [Optmizing CPP](https://www.agner.org/optimize/optimizing_cpp.pdf) - extensive manual on writing optimized code.