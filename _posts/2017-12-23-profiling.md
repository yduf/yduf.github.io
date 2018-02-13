---
title: Profiling
published: true
tags: profiling linux c++
---
- [Valgrind](http://valgrind.org/)
- [CacheGrind](http://valgrind.org/docs/manual/cl-manual.html)
- [KCacheGrind](https://kcachegrind.github.io/html/Home.html)

Notes: valgrind-3.13.0

[Usage](https://kcachegrind.github.io/html/Usage.html)

```bash
valgrind --tool=callgrind -v --dump-every-bb=10000000  ./a.out < data/game_1/01.dat 
```

- [Callgrind details](https://kcachegrind.github.io/html/Usage.html)
- [Tips & Tricks](https://web.stanford.edu/class/archive/cs/cs107/cs107.1174/guide_callgrind.html)
