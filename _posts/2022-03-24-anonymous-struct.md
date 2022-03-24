---
published: true
title: Anonymous / unnamed struct
tags: structure c++
---

Anonymous:

    struct Foo {
      struct { int x, y; };
    };

    Foo foo; do_stuff_with(foo.x);

Unnamed:

    struct Foo {
      struct { int x, y; } child;
    };

    Foo foo; do_stuff_with(foo.child.x);

